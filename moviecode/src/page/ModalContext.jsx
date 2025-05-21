// src/contexts/ModalContext.jsx
import React, { createContext, useContext, useState } from 'react';
import { Modal } from 'antd';

// 모달 컨텍스트 생성
const ModalContext = createContext();

// 모달 프로바이더 컴포넌트
export const ModalProvider = ({ children }) => {
  const [modalConfig, setModalConfig] = useState({
    visible: false,
    content: null,
    title: '',
    width: 520,
    footer: null,
    maskClosable: true,
    afterClose: () => {},
    onOk: () => {},
    onCancel: () => {},
  });

  // 모달 열기 함수
  const openModal = (config) => {
    setModalConfig({
      ...modalConfig,
      visible: true,
      ...config,
    });
  };

  // 모달 닫기 함수
  const closeModal = () => {
    setModalConfig({
      ...modalConfig,
      visible: false,
    });
  };

  // 모달 핸들러
  const handleOk = () => {
    modalConfig.onOk();
    closeModal();
  };

  const handleCancel = () => {
    modalConfig.onCancel();
    closeModal();
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Modal
        title={modalConfig.title}
        open={modalConfig.visible}
        width={modalConfig.width}
        footer={modalConfig.footer}
        maskClosable={modalConfig.maskClosable}
        afterClose={modalConfig.afterClose}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {modalConfig.content}
      </Modal>
    </ModalContext.Provider>
  );
};

// 모달 컨텍스트 사용을 위한 훅
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};


// 예시 모달 컴포넌트
export const ExampleModalContent = () => {
  return (
    <div>
      <p>이것은 모달 컨텐츠입니다.</p>
      <p>여기에 원하는 내용을 넣으세요.</p>
    </div>
  );
};