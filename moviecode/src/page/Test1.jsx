import { useModal } from './ModalContext';
import Test2 from './Test2.jsx';

export default function Test1() {
  const { openModal } = useModal();

  const handleOpenModal = () => {
    openModal({
      title: '알림',
      content: <Test2 />,
      width: 600,
      onOk: () => {
        console.log('OK clicked');
      },
    });
  };

  return <button onClick={handleOpenModal}>모달 열기</button>;
}
