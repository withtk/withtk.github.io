import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/**
 * StrictMode의 역할:
 * 1. 개발 단계에서만 작동하며 프로덕션 빌드에서는 영향이 없음
 * 2. 안전하지 않은 생명주기 메서드 사용 감지
 * 3. 레거시 문자열 ref API 사용 경고
 * 4. 권장되지 않는 findDOMNode 사용 경고
 * 5. 예상치 못한 부작용 감지 - 컴포넌트를 이중으로 호출하여 테스트
 *    (useEffect, useState 등이 두 번 실행됨)
 * 6. 레거시 context API 사용 감지
 * 7. 메모리 누수 감지를 위한 자동 정리(cleanup) 검사
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
