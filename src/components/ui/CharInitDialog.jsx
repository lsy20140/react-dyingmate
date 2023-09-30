import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import InitDialogSrc from '../../assets/img/CharRoom/InitDialogBg.png'
import DialogBox from './DialogBox'


export default function CharInitDialog() {
  const MessageArr = [`하숙집을 관리하는 주인 할머니의 방 입니다. \n화살표를 눌러 할머니와의 대화를 이어나가보세요!`]
  const dialogRef = useRef()

  useEffect(() => {
    console.log("dialogRef",dialogRef)
  },[])
  return (
    <CharInitDialogBox ref={dialogRef}>
      <DialogBox messageArr={MessageArr} />
    </CharInitDialogBox>
  )
}

const CharInitDialogBox = styled.div`
  position: absolute;
  top: 5rem;
  right: 23rem;
  width: 46rem;
  height: 16rem;
  background-image : url(${InitDialogSrc});
  align-items: center;
  justify-content: center;
  display: flex;
  p{
    font-size: 1.25rem;
    color: white;
    font-weight: 500;
    text-align: center;
  }
  

`