import React from 'react'
import styled from 'styled-components'
import NextButton from './NextButton';
import { usePlay } from '../../contexts/Play'


export default function FuncModal({mainText, subText, icon, btn_color}) {

  return (
    <>
      <ContentWrapper>
        <TextContent>
          <img src={icon} />
          <h2>{mainText}</h2>
          <p>{subText}</p>
        </TextContent>
      </ContentWrapper>
    </>   
  )
}

const ContentWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 68rem;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(223deg, rgba(255, 255, 255, 0.51) 0%, rgba(255, 255, 255, 0.12) 100%);
  outline: solid 2px #ffffff;
  border-radius: 2.5rem;  
  margin-top: 4.5rem;
  backdrop-filter: blur(60px);
  padding: 2.5rem;

`


const TextContent = styled.div`
z-index: 999;

  color: white;
  text-align: left;

`