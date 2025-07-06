// 동영상 배속 조정 콘텐츠 스크립트
(function() {
    'use strict';
    
    let currentSpeed = 1.0;
    let isEnabled = true;
    
    // 동영상 배속 설정 함수
    function setVideoSpeed(speed) {
        if (!isEnabled) return;
        
        const videos = document.querySelectorAll('video');
        const audios = document.querySelectorAll('audio');
        let changedCount = 0;
        
        // 동영상 요소 처리
        videos.forEach(video => {
            try {
                if (video.playbackRate !== speed) {
                    video.playbackRate = speed;
                    changedCount++;
                }
            } catch (error) {
                console.error('동영상 배속 변경 실패:', error);
            }
        });
        
        // 오디오 요소 처리
        audios.forEach(audio => {
            try {
                if (audio.playbackRate !== speed) {
                    audio.playbackRate = speed;
                    changedCount++;
                }
            } catch (error) {
                console.error('오디오 배속 변경 실패:', error);
            }
        });
        
        currentSpeed = speed;
        
        if (changedCount > 0) {
            console.log(`동영상 배속 조정기: ${changedCount}개 미디어의 배속을 ${speed}x로 변경했습니다.`);
        }
        
        return changedCount;
    }
    
    // 새로 추가된 동영상 요소 감지 및 배속 설정
    function handleNewVideos() {
        const videos = document.querySelectorAll('video');
        const audios = document.querySelectorAll('audio');
        
        videos.forEach(video => {
            if (!video.dataset.speedAdjusted) {
                try {
                    video.playbackRate = currentSpeed;
                    video.dataset.speedAdjusted = 'true';
                    console.log('새 동영상에 배속 적용:', currentSpeed + 'x');
                } catch (error) {
                    console.error('새 동영상 배속 적용 실패:', error);
                }
            }
        });
        
        audios.forEach(audio => {
            if (!audio.dataset.speedAdjusted) {
                try {
                    audio.playbackRate = currentSpeed;
                    audio.dataset.speedAdjusted = 'true';
                    console.log('새 오디오에 배속 적용:', currentSpeed + 'x');
                } catch (error) {
                    console.error('새 오디오 배속 적용 실패:', error);
                }
            }
        });
    }
    
    // MutationObserver를 사용하여 DOM 변경 감지
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        // 새로 추가된 요소에 동영상이 있는지 확인
                        if (node.querySelector && (node.querySelector('video') || node.querySelector('audio'))) {
                            setTimeout(handleNewVideos, 100);
                        }
                        // 요소 자체가 동영상인 경우
                        if (node.tagName === 'VIDEO' || node.tagName === 'AUDIO') {
                            setTimeout(handleNewVideos, 100);
                        }
                    }
                });
            }
        });
    });
    
    // DOM 변경 감지 시작
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    // 페이지 로드 완료 후 초기 설정
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(handleNewVideos, 500);
        });
    } else {
        setTimeout(handleNewVideos, 500);
    }
    
    // 키보드 단축키 지원
    document.addEventListener('keydown', function(event) {
        // Ctrl + Shift + 방향키로 배속 조정
        if (event.ctrlKey && event.shiftKey) {
            let newSpeed = currentSpeed;
            
            switch (event.key) {
                case 'ArrowLeft':
                    newSpeed = Math.max(0.25, currentSpeed - 0.25);
                    break;
                case 'ArrowRight':
                    newSpeed = Math.min(4, currentSpeed + 0.25);
                    break;
                case 'ArrowUp':
                    newSpeed = Math.min(4, currentSpeed + 0.5);
                    break;
                case 'ArrowDown':
                    newSpeed = Math.max(0.25, currentSpeed - 0.5);
                    break;
                case 'Home':
                    newSpeed = 1.0;
                    break;
                default:
                    return;
            }
            
            if (newSpeed !== currentSpeed) {
                setVideoSpeed(newSpeed);
                showSpeedIndicator(newSpeed);
                event.preventDefault();
            }
        }
    });
    
    // 배속 표시기 함수
    function showSpeedIndicator(speed) {
        // 기존 표시기 제거
        const existingIndicator = document.getElementById('speed-indicator');
        if (existingIndicator) {
            existingIndicator.remove();
        }
        
        // 새 표시기 생성
        const indicator = document.createElement('div');
        indicator.id = 'speed-indicator';
        indicator.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 20px 30px;
            border-radius: 10px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 24px;
            font-weight: bold;
            z-index: 10000;
            pointer-events: none;
            animation: fadeInOut 1.5s ease-in-out;
        `;
        
        indicator.textContent = `${speed}x`;
        document.body.appendChild(indicator);
        
        // 1.5초 후 제거
        setTimeout(() => {
            if (indicator.parentNode) {
                indicator.remove();
            }
        }, 1500);
    }
    
    // CSS 애니메이션 추가
    if (!document.getElementById('speed-indicator-styles')) {
        const style = document.createElement('style');
        style.id = 'speed-indicator-styles';
        style.textContent = `
            @keyframes fadeInOut {
                0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                20% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
                80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            }
        `;
        document.head.appendChild(style);
    }
    
    // 메시지 리스너 (팝업에서 배속 변경 요청 처리)
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.action === 'setSpeed') {
            const changedCount = setVideoSpeed(request.speed);
            sendResponse({ success: true, changedCount: changedCount });
        } else if (request.action === 'getSpeed') {
            sendResponse({ speed: currentSpeed });
        } else if (request.action === 'toggle') {
            isEnabled = !isEnabled;
            sendResponse({ enabled: isEnabled });
        }
    });
    
    // 전역 함수로 노출 (팝업에서 호출 가능)
    window.setVideoSpeed = setVideoSpeed;
    window.getCurrentSpeed = () => currentSpeed;
    
    console.log('동영상 배속 조정기 콘텐츠 스크립트가 로드되었습니다.');
})(); 