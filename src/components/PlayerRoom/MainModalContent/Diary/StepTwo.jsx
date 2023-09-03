import React, { useState } from 'react'
import styled from 'styled-components'
import {ReactComponent as MainIcon} from '../../../../assets/icons/PlayerRoom/Diary/main_icon.svg'
import GraveStoneSrc from '../../../../assets/img/PlayerRoom/diary_gravestone.png'

export default function StepTwo() {

  const [stoneText, setStoneText] = useState('');
  const [isDone, setIsDone] = useState(false)

  const handleChange = (e) => {
    setStoneText(e.target.value);
  }

  const handleClick = (e) => {
    setIsDone(true);
    // 묘비명 저장, 수정 api 연동
    // 묘비 오브젝트에 묘비명 적용된 컴포넌트로 전환
  }

  return (
    <Content>
      <GraveStone><p>{isDone ? stoneText : ''}</p></GraveStone>
      <div>
        <TextArea>
          <MainIcon/>
          <Text>
            <p>묘비명</p>
            <p>나의 품격과 소중함을 남겨진 사람들에게 알리는 중요한 메세지 입니다. <br/>
              당신의 이야기를 간직하고 영원히 기억할 이 묘비를 아름답게 꾸며주세요. 
            </p>
          </Text>
        </TextArea>
        <InputBox>
          <FormInput 
            type='text' 
            id='stoneText' 
            name='stoneText' 
            value={stoneText ?? ''}
            placeholder='묘비명을 입력해주세요.' 
            onChange={handleChange}
            required/>
          <Button onClick={handleClick} isDone={isDone}>{isDone ? '수정하기' : '저장하기'}</Button>
        </InputBox>
      </div>

    </Content>
  )
}


const Content = styled.div`
  width: 60rem;
  height: 30rem;
  display: flex;
  flex-direction: row;
  gap: 3.75rem;
  margin: 0 4.25rem;
  align-items: center;

  & > div{
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 3rem;
  }
`

const GraveStone = styled.div`
  background-image: url(${GraveStoneSrc});
  width: 13rem;
  height: 20rem;
  background-repeat:no-repeat;
  align-items: center;
  justify-content: center;
  font-family: Perpetua Titling MT;  
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.33125rem;

  p {
    width: 9rem;
    word-break: break-all;
    text-align: center;
  }


`

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2.4rem;
 
`

const Text = styled.div`
  text-align: left;
  font-size: 1.125rem;
  p:nth-child(1){
    font-size: 1.25rem;
    margin-bottom: 0.4rem;
  }

`

const Button = styled.button`
  display: block;
  width: 11rem;
  height: 3.5rem;
  border: none;
  background-color: ${props => props.isDone ? '#F0EAE0' :`var(--main-color)`} ;
  color: ${props => props.isDone ? `var(--font-gray-3)` : 'white'};
  padding: 0.75rem 1.5rem;
  border-radius: 1.25rem;
  position: absolute;
  font-weight: 700;
  

`


const InputBox= styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

const FormInput = styled.input`
  position: relative;
  box-sizing: border-box;
  border-radius: 1.25rem;
  width: 100%;
  height: 3.5rem;
  color: var(--font-gray-1);
  background-color: #F3F3F3;
  padding: 0.75rem 1.25rem;
  &:focus {
    outline: 1px solid #999999;
  }
  &::placeholder {
    color: var(--font-gray-1);
  }
  
`