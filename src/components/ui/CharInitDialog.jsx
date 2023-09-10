import React from 'react'
import styled from 'styled-components'
import InitDialogSrc from '../../assets/img/CharRoom/InitDialogBg.png'
import DialogBox from './DialogBox'


export default function CharInitDialog() {
  const MessageArr = ["1111111111111111","2222222222222222","3333333333333333333"]
  return (
    <CharInitDialogBox>

      <DialogBox messageArr={MessageArr} />
      {/* <p>하숙집을 관리하는 주인 할머니의 방 입니다. <br/>
화살표를 눌러 할머니와의 대화를 이어나가보세요! </p> */}
    </CharInitDialogBox>
  )
}

const CharInitDialogBox = styled.div`
  position: absolute;
  top: 5rem;
  right: 21rem;
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