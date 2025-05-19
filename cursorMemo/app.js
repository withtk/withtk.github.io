class MemoApp {
  constructor() {
    this.tabs = [];
    this.currentTab = 0;
    this.autoSaveEnabled = true;
    this.autoSaveInterval = 10;
    this.countdownTimer = null;
    this.countdown = 0;
    this.isFirstEdit = true;
    this.firstEditTimeout = null;
    this.STORAGE_KEYS = {
      TABS: 'memo_app_tabs_list',
      CURRENT_TAB: 'memo_app_current_tab_index',
      CONTENT_PREFIX: 'memo_app_content_'
    };

    this.initializeElements();
    this.initializeEventListeners();
    this.loadTabs();
    
    this.autoSaveToggle.checked = true;
    this.startAutoSave();
  }

  initializeElements() {
    this.tabsContainer = document.querySelector('.tabs');
    this.addTabBtn = document.querySelector('.add-tab');
    this.memoEditor = document.querySelector('.memo-editor');
    this.saveBtn = document.getElementById('saveBtn');
    this.loadBtn = document.getElementById('loadBtn');
    this.clearBtn = document.getElementById('clearBtn');
    this.autoSaveToggle = document.getElementById('autoSaveToggle');
    this.autoSaveIntervalInput = document.getElementById('autoSaveInterval');
    this.countdownElement = document.getElementById('countdown');
    this.successMessage = document.getElementById('successMessage');
    this.toast = document.getElementById('toast');

    // 탭 컨테이너 스타일 설정
    if (this.tabsContainer) {
      this.tabsContainer.style.display = 'flex';
      this.tabsContainer.style.alignItems = 'center';
      this.tabsContainer.style.gap = '4px';
      this.tabsContainer.style.flexWrap = 'wrap';
      this.tabsContainer.style.padding = '8px';
      this.tabsContainer.style.marginRight = '16px';
      this.tabsContainer.style.minWidth = '0';
      this.tabsContainer.style.maxWidth = '100%';
      this.tabsContainer.style.overflow = 'visible';
    }

    // 메모 에디터에 변경 이벤트 리스너 추가
    this.memoEditor.addEventListener('input', () => {
      console.log('Memo content changed:', this.memoEditor.innerHTML);
      if (this.isFirstEdit) {
        // 최초 입력 시 1초 후 자동 저장
        if (this.firstEditTimeout) {
          clearTimeout(this.firstEditTimeout);
        }
        this.firstEditTimeout = setTimeout(() => {
          this.saveCurrentTab();
          this.showToast('메모가 저장되었습니다.');
          this.isFirstEdit = false;
        }, 1000);
      } else {
        if (this.autoSaveEnabled) {
          this.saveCurrentTab();
        }
      }
    });
  }

  initializeEventListeners() {
    this.addTabBtn.addEventListener('click', () => this.createNewTab());
    this.saveBtn.addEventListener('click', () => this.saveMemo());
    this.loadBtn.addEventListener('click', () => this.loadMemo());
    this.clearBtn.addEventListener('click', () => this.clearMemo());
    this.autoSaveToggle.addEventListener('change', (e) => this.toggleAutoSave(e.target.checked));
    this.autoSaveIntervalInput.addEventListener('change', (e) => {
      this.autoSaveInterval = parseInt(e.target.value);
      if (this.autoSaveEnabled) {
        this.startAutoSave();
      }
    });
  }

  loadTabs() {
    try {
      const savedTabs = localStorage.getItem(this.STORAGE_KEYS.TABS);
      console.log('Loading saved tabs:', savedTabs);
      
      if (savedTabs) {
        const tabs = JSON.parse(savedTabs);
        
        // 기존 탭들을 모두 제거
        this.tabsContainer.querySelectorAll('.tab').forEach(tab => {
          if (!tab.classList.contains('add-tab')) {
            tab.remove();
          }
        });
        this.tabs = [];
        
        // 저장된 탭들을 순서대로 생성
        tabs.forEach((tabName, index) => {
          this.createNewTab(tabName);
        });
        
        // 현재 탭 설정
        const savedCurrentTab = localStorage.getItem(this.STORAGE_KEYS.CURRENT_TAB);
        if (savedCurrentTab !== null) {
          this.switchTab(parseInt(savedCurrentTab));
        } else {
          this.switchTab(0);
        }
      } else {
        // 저장된 탭이 없는 경우 기본 탭 생성
        this.createNewTab('메모 1');
      }
    } catch (error) {
      console.error('Error loading tabs:', error);
      this.showToast('탭 로드 중 오류가 발생했습니다');
      // 오류 발생 시 기본 탭 생성
      this.createNewTab('메모 1');
    }
  }

  saveTabs() {
    try {
      const tabNames = Array.from(this.tabsContainer.querySelectorAll('.tab'))
        .filter(tab => !tab.classList.contains('add-tab'))
        .map(tab => {
          const tabContent = tab.querySelector('.tab-content');
          return tabContent ? tabContent.textContent : `메모 ${parseInt(tab.dataset.tabId) + 1}`;
        });
      
      console.log('Saving tabs:', tabNames);
      localStorage.setItem(this.STORAGE_KEYS.TABS, JSON.stringify(tabNames));
      localStorage.setItem(this.STORAGE_KEYS.CURRENT_TAB, this.currentTab.toString());
    } catch (error) {
      console.error('Error saving tabs:', error);
      this.showToast('탭 저장 중 오류가 발생했습니다');
    }
  }

  createNewTab(tabName = null) {
    const tabId = this.tabs.length;
    const tab = document.createElement('div');
    tab.className = 'tab';
    
    // 탭 컨테이너 생성
    const tabContent = document.createElement('div');
    tabContent.className = 'tab-content';
    tabContent.textContent = tabName || `메모 ${tabId + 1}`;
    
    // 삭제 버튼 생성
    const deleteBtn = document.createElement('span');
    deleteBtn.className = 'tab-delete';
    deleteBtn.innerHTML = '&times;';
    deleteBtn.style.marginLeft = '8px';
    deleteBtn.style.cursor = 'pointer';
    deleteBtn.style.opacity = '0.6';
    deleteBtn.style.transition = 'opacity 0.2s';
    deleteBtn.style.flexShrink = '0';
    deleteBtn.style.position = 'absolute';
    deleteBtn.style.right = '4px';
    deleteBtn.style.top = '50%';
    deleteBtn.style.transform = 'translateY(-50%)';
    
    // 삭제 버튼 호버 효과
    deleteBtn.addEventListener('mouseover', () => {
      deleteBtn.style.opacity = '1';
    });
    deleteBtn.addEventListener('mouseout', () => {
      deleteBtn.style.opacity = '0.6';
    });
    
    // 삭제 버튼 클릭 이벤트
    deleteBtn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const confirmed = await this.createConfirmPopup('이 탭을 삭제하시겠습니까?');
      if (confirmed) {
        this.deleteTab(tabId);
      }
    });
    
    // 탭에 컨텐츠와 삭제 버튼 추가
    tab.appendChild(tabContent);
    tab.appendChild(deleteBtn);
    tab.dataset.tabId = tabId;
    
    // 탭 스타일 설정
    tab.style.display = 'flex';
    tab.style.alignItems = 'center';
    tab.style.minWidth = '60px';
    tab.style.maxWidth = '200px';
    tab.style.padding = '4px 24px 4px 8px';
    tab.style.boxSizing = 'border-box';
    tab.style.position = 'relative';
    tab.style.margin = '2px';
    
    // 탭 컨텐츠 스타일 설정
    tabContent.style.whiteSpace = 'normal';
    tabContent.style.wordBreak = 'break-word';
    tabContent.style.overflow = 'hidden';
    tabContent.style.textOverflow = 'ellipsis';
    tabContent.style.display = '-webkit-box';
    tabContent.style.webkitLineClamp = '2';
    tabContent.style.webkitBoxOrient = 'vertical';
    tabContent.style.lineHeight = '1.2';
    tabContent.style.maxHeight = '2.4em';
    tabContent.style.flex = '1';
    tabContent.style.minWidth = '0';

    // 탭 더블클릭 이벤트 추가
    tabContent.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      this.editTabTitle(tabContent);
    });

    tab.addEventListener('click', () => this.switchTab(tabId));
    this.tabsContainer.insertBefore(tab, this.addTabBtn);
    this.tabs.push(tabId);

    if (tabId === 0) {
      tab.classList.add('active');
    }

    // 새 탭 생성 시 저장된 내용이 있으면 로드
    const savedContent = localStorage.getItem(`${this.STORAGE_KEYS.CONTENT_PREFIX}${tabId}`);
    console.log(`Loading content for tab ${tabId}:`, savedContent);
    if (savedContent) {
      this.memoEditor.innerHTML = savedContent;
    } else {
      this.initializeEmptyEditor();
    }
    
    this.saveTabs();

    // 새 탭 생성 시 해당 탭을 활성화하고 포커스
    this.switchTab(tabId);
    this.memoEditor.focus();
  }

  deleteTab(tabId) {
    // 마지막 탭은 삭제하지 않음
    if (this.tabs.length <= 1) {
      this.showToast('마지막 탭은 삭제할 수 없습니다');
      return;
    }

    try {
      // 삭제할 탭의 요소 찾기
      const tabToDelete = this.tabsContainer.querySelector(`.tab[data-tab-id="${tabId}"]`);
      if (!tabToDelete) return;

      // 현재 탭이 삭제되는 탭이면 이전 탭으로 전환
      if (this.currentTab === tabId) {
        const newTabId = tabId > 0 ? tabId - 1 : 1;
        this.switchTab(newTabId);
      }

      // 탭 삭제
      tabToDelete.remove();
      this.tabs = this.tabs.filter(id => id !== tabId);

      // 남은 탭들의 ID 재조정
      this.tabsContainer.querySelectorAll('.tab').forEach((tab, index) => {
        if (!tab.classList.contains('add-tab')) {
          const oldId = parseInt(tab.dataset.tabId);
          tab.dataset.tabId = index;
          
          // localStorage 데이터 재정렬
          const content = localStorage.getItem(`${this.STORAGE_KEYS.CONTENT_PREFIX}${oldId}`);
          if (content) {
            localStorage.setItem(`${this.STORAGE_KEYS.CONTENT_PREFIX}${index}`, content);
            localStorage.removeItem(`${this.STORAGE_KEYS.CONTENT_PREFIX}${oldId}`);
          }
        }
      });

      // tabs 배열 재조정
      this.tabs = this.tabs.map((_, index) => index);
      
      // 현재 탭 ID 재조정
      if (this.currentTab > tabId) {
        this.currentTab--;
      }

      this.saveTabs();
      this.showToast('탭이 삭제되었습니다');
    } catch (error) {
      console.error('Error deleting tab:', error);
      this.showToast('탭 삭제 중 오류가 발생했습니다');
    }
  }

  editTabTitle(tab) {
    const currentTitle = tab.textContent;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentTitle;
    input.className = 'tab-title-edit';
    
    // 입력 필드 스타일 설정
    input.style.width = '100%';
    input.style.padding = '0.25rem';
    input.style.border = '1px solid #228be6';
    input.style.borderRadius = '4px';
    input.style.outline = 'none';
    input.style.boxSizing = 'border-box';
    
    // 기존 텍스트를 입력 필드로 교체
    const tabContent = tab.parentElement.querySelector('.tab-content');
    if (tabContent) {
      tabContent.textContent = '';
      tabContent.appendChild(input);
      input.focus();
      input.select();
    }

    // 입력 필드 이벤트 처리
    const finishEditing = () => {
      const newTitle = input.value.trim() || `메모 ${parseInt(tab.parentElement.dataset.tabId) + 1}`;
      if (tabContent) {
        tabContent.textContent = newTitle;
        this.saveTabs();
      }
    };

    input.addEventListener('blur', finishEditing);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        finishEditing();
      } else if (e.key === 'Escape') {
        if (tabContent) {
          tabContent.textContent = currentTitle;
        }
      }
    });
  }

  switchTab(tabId) {
    try {
      console.log(`Switching from tab ${this.currentTab} to ${tabId}`);
      // 현재 탭의 내용 저장
      this.saveCurrentTab();
      
      this.currentTab = tabId;
      
      // 새 탭의 내용 로드
      const content = localStorage.getItem(`${this.STORAGE_KEYS.CONTENT_PREFIX}${tabId}`);
      console.log(`Loading content for tab ${tabId}:`, content);
      if (content) {
        this.memoEditor.innerHTML = content;
      } else {
        this.initializeEmptyEditor();
      }

      document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.tabId == tabId) {
          tab.classList.add('active');
        }
      });
      this.saveTabs();

      // 탭 전환 시 isFirstEdit 초기화
      this.isFirstEdit = true;
    } catch (error) {
      console.error('Error switching tabs:', error);
      this.showToast('탭 전환 중 오류가 발생했습니다');
    }
  }

  initializeEmptyEditor() {
    this.memoEditor.innerHTML = Array(20).fill('<br>').join('');
  }

  saveCurrentTab() {
    try {
      const content = this.memoEditor.innerHTML;
      const key = `${this.STORAGE_KEYS.CONTENT_PREFIX}${this.currentTab}`;
      console.log(`Saving content for tab ${this.currentTab}:`, content);
      localStorage.setItem(key, content);
    } catch (error) {
      console.error('Error saving memo:', error);
      this.showToast('저장 중 오류가 발생했습니다');
    }
  }

  saveMemo() {
    try {
      this.saveCurrentTab();
      this.showToast('저장되었습니다');
    } catch (error) {
      console.error('Error in saveMemo:', error);
      this.showToast('저장 중 오류가 발생했습니다');
    }
  }

  loadMemo() {
    try {
      const key = `${this.STORAGE_KEYS.CONTENT_PREFIX}${this.currentTab}`;
      const content = localStorage.getItem(key);
      console.log(`Loading memo ${this.currentTab}:`, content);
      
      if (content) {
        this.memoEditor.innerHTML = content;
      } else {
        this.initializeEmptyEditor();
      }
      this.showToast('로드되었습니다');
    } catch (error) {
      console.error('Error in loadMemo:', error);
      this.showToast('로드 중 오류가 발생했습니다');
    }
  }

  clearMemo() {
    try {
      this.createConfirmPopup('현재 탭의 메모를 초기화하시겠습니까? 이 작업은 되돌릴 수 없습니다.')
        .then(confirmed => {
          if (confirmed) {
            this.initializeEmptyEditor();
            const key = `${this.STORAGE_KEYS.CONTENT_PREFIX}${this.currentTab}`;
            localStorage.removeItem(key);
            console.log(`Cleared memo ${this.currentTab}`);
            this.showToast('지워졌습니다');
          }
        });
    } catch (error) {
      console.error('Error in clearMemo:', error);
      this.showToast('지우기 중 오류가 발생했습니다');
    }
  }

  toggleAutoSave(enabled) {
    this.autoSaveEnabled = enabled;
    if (enabled) {
      this.startAutoSave();
    } else {
      this.stopAutoSave();
    }
  }

  startAutoSave() {
    this.stopAutoSave();
    this.countdown = this.autoSaveInterval;
    this.updateCountdown();
    this.countdownTimer = setInterval(() => {
      this.countdown--;
      this.updateCountdown();
      if (this.countdown <= 0) {
        this.saveCurrentTab();
        this.showSuccessMessage();
        this.countdown = this.autoSaveInterval;
      }
    }, 1000);
  }

  stopAutoSave() {
    if (this.countdownTimer) {
      clearInterval(this.countdownTimer);
      this.countdownTimer = null;
    }
    this.countdownElement.textContent = '';
  }

  updateCountdown() {
    this.countdownElement.textContent = `${this.countdown}초`;
  }

  showSuccessMessage() {
    this.successMessage.style.opacity = '1';
    setTimeout(() => {
      this.successMessage.style.opacity = '0';
    }, 3000);
  }

  showToast(message) {
    this.toast.textContent = message;
    this.toast.classList.add('show');
    setTimeout(() => {
      this.toast.classList.remove('show');
    }, 3000);
  }

  createConfirmPopup(message) {
    return new Promise((resolve) => {
      const popup = document.createElement('div');
      popup.className = 'confirm-popup';
      popup.style.position = 'fixed';
      popup.style.top = '50%';
      popup.style.left = '50%';
      popup.style.transform = 'translate(-50%, -50%)';
      popup.style.backgroundColor = 'white';
      popup.style.padding = '20px';
      popup.style.borderRadius = '8px';
      popup.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      popup.style.zIndex = '1000';
      popup.style.minWidth = '300px';
      popup.style.textAlign = 'center';

      const messageEl = document.createElement('div');
      messageEl.textContent = message;
      messageEl.style.marginBottom = '20px';
      messageEl.style.fontSize = '16px';
      messageEl.style.color = '#333';

      const buttonContainer = document.createElement('div');
      buttonContainer.style.display = 'flex';
      buttonContainer.style.justifyContent = 'center';
      buttonContainer.style.gap = '10px';

      const confirmBtn = document.createElement('button');
      confirmBtn.textContent = '확인';
      confirmBtn.style.padding = '8px 20px';
      confirmBtn.style.border = 'none';
      confirmBtn.style.borderRadius = '4px';
      confirmBtn.style.backgroundColor = '#228be6';
      confirmBtn.style.color = 'white';
      confirmBtn.style.cursor = 'pointer';
      confirmBtn.style.transition = 'background-color 0.2s';

      const cancelBtn = document.createElement('button');
      cancelBtn.textContent = '취소';
      cancelBtn.style.padding = '8px 20px';
      cancelBtn.style.border = '1px solid #dee2e6';
      cancelBtn.style.borderRadius = '4px';
      cancelBtn.style.backgroundColor = 'white';
      cancelBtn.style.color = '#495057';
      cancelBtn.style.cursor = 'pointer';
      cancelBtn.style.transition = 'background-color 0.2s';

      // 버튼 호버 효과
      confirmBtn.addEventListener('mouseover', () => {
        confirmBtn.style.backgroundColor = '#1c7ed6';
      });
      confirmBtn.addEventListener('mouseout', () => {
        confirmBtn.style.backgroundColor = '#228be6';
      });

      cancelBtn.addEventListener('mouseover', () => {
        cancelBtn.style.backgroundColor = '#f8f9fa';
      });
      cancelBtn.addEventListener('mouseout', () => {
        cancelBtn.style.backgroundColor = 'white';
      });

      // 팝업과 오버레이 제거 함수
      const removePopup = () => {
        if (document.body.contains(popup)) {
          document.body.removeChild(popup);
        }
        if (document.body.contains(overlay)) {
          document.body.removeChild(overlay);
        }
        document.removeEventListener('keydown', handleKeyDown);
      };

      // 키보드 이벤트 핸들러
      const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          removePopup();
          resolve(true);
        } else if (e.key === 'Escape') {
          e.preventDefault();
          removePopup();
          resolve(false);
        }
      };

      // 버튼 클릭 이벤트
      confirmBtn.addEventListener('click', () => {
        removePopup();
        resolve(true);
      });

      cancelBtn.addEventListener('click', () => {
        removePopup();
        resolve(false);
      });

      // 배경 오버레이
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.right = '0';
      overlay.style.bottom = '0';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      overlay.style.zIndex = '999';

      buttonContainer.appendChild(confirmBtn);
      buttonContainer.appendChild(cancelBtn);
      popup.appendChild(messageEl);
      popup.appendChild(buttonContainer);
      document.body.appendChild(overlay);
      document.body.appendChild(popup);

      // 키보드 이벤트 리스너 추가
      document.addEventListener('keydown', handleKeyDown);
    });
  }
}

// 앱 초기화
const app = new MemoApp(); 