import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { usePlay } from '../../contexts/Play';

import Will from '../PlayerRoom/MainModalContent/Will'
import Phone from '../PlayerRoom/MainModalContent/Phone'
import Diary from '../PlayerRoom/MainModalContent/Diary'
import Board from './MainModalContent/Board';

export default function ModalOverlay({curIdx, setCamera}) {

  const modalRef = useRef();
  const {setFocus} = usePlay()
  const [comp, setComp] = useState()

  const handleClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setFocus(false)
      setCamera()
    }
  };

  useEffect(() => {
    switch(curIdx) {
      case 1:
        setComp(<Will/>)
        break;
      case 2:
        setComp(<Board/>)
        break;
      case 3:
        setComp(<Phone/>)
        break;
      case 4:
        setComp(<Diary/>)
        break;
    }
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  },[]);
  

  return (
    <>
      <Overlay>
        <div ref={modalRef}>
          {comp}
        </div>
      </Overlay>
    </>
  )
}

const Overlay = styled.div`
  position: absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  text-align: center;
  justify-content: center;
  background-color: rgba(28, 23, 23, 0.40);
  height: 100vh;

  &{
    z-index: 999;
  }
`