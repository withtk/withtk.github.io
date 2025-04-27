/**
 * 유틸리티 함수 모음
 */

/**
 * 문자열의 첫 글자를 대문자로 변환합니다.
 * @param {string} str - 변환할 문자열
 * @returns {string} - 첫 글자가 대문자로 변환된 문자열
 */
export const capitalizeFirstLetter = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * 주어진 날짜를 포맷팅합니다.
 * @param {Date|string} date - 포맷팅할 날짜
 * @param {string} format - 날짜 형식 (기본값: YYYY-MM-DD)
 * @returns {string} - 포맷팅된 날짜 문자열
 */
export const formatDate = (date, format = 'YYYY-MM-DD') => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  
  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day);
};
