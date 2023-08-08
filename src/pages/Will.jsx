import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import willPaper from '../assets/img/willPaper.png'

export default function Will() {
  const [content, setContent] = useState('');

  const textarea = useRef();

  const handleChange = (e) => {
    setContent(e.target.value);

    textarea.current.style.height = 'auto'
    textarea.current.style.height = textarea.current.scrollHeight + 'px';
  }

  return (
    <>
      <WillContainer>
        <img src={willPaper} />
        <FormInput 
            ref={textarea}
            type={"text"}
            id='userCheckPwd' 
            name='userCheckPwd' 
            value={content ?? ''}
            onChange={handleChange}
            placeholder='내용을 입력해주세요.' 
            required
          />
      </WillContainer>
      
    </>
  )
}

const WillContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  text-align: center;
  background-color: rgba(0,0,0,0.3);
`
const FormInput = styled.textarea`
  position: absolute;
  top: 10rem;
  left:28rem;
  right: 0;
  bottom:0;
  box-sizing: border-box;
  width: 50%;
  font-family: 'UnPilgi';
  font-size: 1.5rem;
  
  border: none;
  &:focus {
    border: none;
    outline: none;
  }
  &::placeholder {
    color: var(--font-gray-1);
  }
  caret-color: transparent
`