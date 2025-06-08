import { useModal } from './ModalContext'
import { useEffect, useState } from 'react'
import Test2 from './Test2.jsx'

export default function Test1() {
  const { openModal } = useModal()
  const [count, setCount] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    console.log('----  useEffect----')
    return (() => {
      console.log('----useEffect return----')
    })
  }, [])

  useEffect(() => {
    console.log('--count --useEffect----', open, count)
    if (open) console.log('--count --useEffect---isOpen-', open, count)
    else console.log('--count --useEffect---else-', open, count)

    return (() => {
      console.log('--count --useEffect return----', open, count)
    })
  }, [count])

  useEffect(() => {
    console.log('--open --useEffect----', open, count)
    return (() => {
      console.log('--open --useEffect return----', open, count)
    })
  }, [open])

  const handleOpenModal = () => {
    openModal({
      title: '알림',
      content: <Test2 />,
      width: 600,
      onOk: () => {
        console.log('OK clicked')
      },
    })
  }

  console.log('----base bottom----')

  return (
    <>
      <div>
        <p>count is {count}</p>
        <p>open : {open}</p>
        <hr />
        <button onClick={() => {
          setCount(pre => pre + 1)
          setOpen(pre => !pre)
        }}>+ 1
        </button>
      </div>

      <div style={{
        backgroundColor: '#f3f3',
        height: '10vh',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <button onClick={handleOpenModal}>모달 열기</button>
      </div>
    </>
  )
}
