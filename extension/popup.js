document.addEventListener('DOMContentLoaded', function() {
    const speedSlider = document.getElementById('speedSlider');
    const speedValue = document.getElementById('speedValue');
    const resetBtn = document.getElementById('resetBtn');
    const status = document.getElementById('status');
    const presetBtns = document.querySelectorAll('.preset-btn');
    
    let currentSpeed = 1.0;
    
    // 현재 탭에서 동영상 배속 변경 함수
    async function changeVideoSpeed(speed) {
        try {
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            await chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: setVideoSpeed,
                args: [speed]
            });
            
            currentSpeed = speed;
            updateUI();
            status.textContent = `배속이 ${speed}x로 변경되었습니다`;
            
            // 2초 후 상태 메시지 초기화
            setTimeout(() => {
                status.textContent = '페이지의 모든 동영상에 적용됩니다';
            }, 2000);
            
        } catch (error) {
            console.error('배속 변경 중 오류:', error);
            status.textContent = '오류가 발생했습니다';
        }
    }
    
    // UI 업데이트 함수
    function updateUI() {
        speedSlider.value = currentSpeed;
        speedValue.textContent = `${currentSpeed}x`;
        
        // 프리셋 버튼 활성화 상태 업데이트
        presetBtns.forEach(btn => {
            btn.classList.remove('active');
            if (parseFloat(btn.dataset.speed) === currentSpeed) {
                btn.classList.add('active');
            }
        });
    }
    
    // 슬라이더 이벤트 리스너
    speedSlider.addEventListener('input', function() {
        const speed = parseFloat(this.value);
        speedValue.textContent = `${speed}x`;
    });
    
    speedSlider.addEventListener('change', function() {
        const speed = parseFloat(this.value);
        changeVideoSpeed(speed);
    });
    
    // 프리셋 버튼 이벤트 리스너
    presetBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const speed = parseFloat(this.dataset.speed);
            changeVideoSpeed(speed);
        });
    });
    
    // 초기화 버튼 이벤트 리스너
    resetBtn.addEventListener('click', function() {
        changeVideoSpeed(1.0);
    });
    
    // 초기 UI 설정
    updateUI();
});

// 콘텐츠 스크립트에서 실행될 함수
function setVideoSpeed(speed) {
    const videos = document.querySelectorAll('video');
    let changedCount = 0;
    
    videos.forEach(video => {
        try {
            video.playbackRate = speed;
            changedCount++;
        } catch (error) {
            console.error('동영상 배속 변경 실패:', error);
        }
    });
    
    // 오디오 요소도 처리 (일부 사이트에서 사용)
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
        try {
            audio.playbackRate = speed;
            changedCount++;
        } catch (error) {
            console.error('오디오 배속 변경 실패:', error);
        }
    });
    
    // 변경된 미디어 요소가 있으면 알림 표시
    if (changedCount > 0) {
        showNotification(`배속이 ${speed}x로 변경되었습니다 (${changedCount}개 미디어)`);
    }
    
    return changedCount;
}

// 알림 표시 함수
function showNotification(message) {
    // 기존 알림 제거
    const existingNotification = document.getElementById('video-speed-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // 새 알림 생성
    const notification = document.createElement('div');
    notification.id = 'video-speed-notification';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 14px;
        font-weight: 500;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        animation: slideIn 0.3s ease-out;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // 3초 후 자동 제거
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }, 3000);
}

// CSS 애니메이션 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style); 