import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { usePlay } from '../../contexts/Play';

export default function StartModal(props) {
  const [isOpen, setIsOpen]= useState(true);
  const {focus, setFocus} = usePlay()
  const modalRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false)
        setFocus(false)
        props.setCamera()
      }
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  });

  return (
    <>
      {focus && 
        <Overlay ref={modalRef}>
          <ContentWrapper>
            <Content>다이어리 누르면 뜨는 overlay~~~~</Content>
          </ContentWrapper>
        </Overlay>
      }

    </>
  )
}

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50vh;
  overflow: scroll;
  text-align: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.3);
`

const ContentWrapper = styled.div`
  width: 100%;
  background-color: red;
`

const Content = styled.div`
  position: absolute;
  color: white;
  font-size: 3rem;

`