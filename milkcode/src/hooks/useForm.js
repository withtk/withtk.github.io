import { useState } from 'react';

/**
 * 폼 상태와 유효성 검사를 관리하는 커스텀 훅
 * @param {Object} initialValues - 초기 폼 값
 * @param {Function} validate - 유효성 검사 함수 (선택 사항)
 * @returns {Object} - 폼 상태 및 핸들러
 */
const useForm = (initialValues = {}, validate = () => ({})) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    
    // 사용자가 이미 필드를 터치했다면 실시간으로 유효성 검사
    if (touched[name]) {
      const validationErrors = validate({ ...values, [name]: value });
      setErrors(validationErrors);
    }
  };

  // 필드 터치 핸들러
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });
    
    // 필드를 떠날 때 유효성 검사
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  // 폼 제출 핸들러
  const handleSubmit = (onSubmit) => (e) => {
    e.preventDefault();
    
    // 모든 필드를 터치 상태로 변경
    const touchedFields = Object.keys(values).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {}
    );
    setTouched(touchedFields);
    
    // 최종 유효성 검사
    const validationErrors = validate(values);
    setErrors(validationErrors);
    
    // 오류가 없으면 제출 함수 호출
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(values, e);
    }
  };

  // 폼 리셋 핸들러
  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  };
};

export default useForm;
