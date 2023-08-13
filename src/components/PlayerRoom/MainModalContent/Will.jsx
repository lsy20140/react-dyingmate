import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import {ReactComponent as WillIcon} from '../../../assets/icons/PlayerRoom/ModalContent/will.svg'
import willPaper from '../../../assets/img/PlayerRoom/will_paper.png'
import StyledButton from '../../ui/StyledButton';

export default function Will() {
  const [content, setContent] = useState('');

  const textarea = useRef();

  const handleChange = (e) => {
    setContent(e.target.value);

    textarea.current.style.height = '42rem'
    // textarea.current.style.height = textarea.current.scrollHeight + 'px';
  }

  return (
    <>
      <Container>
        <TextArea>
          <WillIcon/>
          <div>다음 질문을 통해, </div>
          <p>나의 삶에 대해 신중히 고민해보고 <br/> 유언장을 써내려가 보아요. </p>
          <p>나는 어떤 사람이었나요? <br/>
              나의 삶에서 가장 행복한 기억이 있다면 
              무엇인가요?</p>
          <p>죽기 전, 가장 떠오르는 사람은 누구인가요? </p>
        </TextArea>
        <WillContainer>
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
            <StyledButton text={"완료하기"} btnColor={`var(--main-color)`} />
        </WillContainer>

      </Container>
    </>   
  )
}

const Container = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 2.5rem;  
  padding: 2.5rem;
  gap: 6rem;
  color: white;

`
const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  text-align: left;
  gap: 1.5rem;
  font-size: 1.125rem;
  
  div{
    font-size: 1.5rem;
  }
`

const WillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.25rem;
`

const FormInput = styled.textarea`
  width: 45rem;
  height: 42rem;
  padding: 3rem 8rem;
  box-sizing: border-box;
  font-family: 'UnPilgi';
  font-size: 1.2rem;
  background-image: url(${willPaper});
  border: none;
  border-radius: 1.25rem;
  color: var(--font-gray-3);
  &:focus {
    border: none;
    outline: none;
  }
  &::placeholder {
    color: var(--font-gray-1);
  }
  caret-color: transparent
`