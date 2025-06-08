/**
 * 사용자 인증 관련 유틸리티 함수
 */

/**
 * 사용자 인증 상태 확인
 * @returns {boolean} 사용자 인증 상태
 * 참고: ProtectedRoute는 제거되었지만, 다른 컴포넌트에서 인증 상태 확인을 위해 유지
 */
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

/**
 * 로그인 처리
 * @param {string} token - 인증 토큰
 */
export const login = (token) => {
  localStorage.setItem('token', token);
};

/**
 * 로그아웃 처리
 */
export const logout = () => {
  localStorage.removeItem('token');
};
