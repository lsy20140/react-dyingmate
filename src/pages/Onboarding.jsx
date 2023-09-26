import React, { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as DialogNextIcon } from '../assets/icons/dialog_next_icon.svg'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'  
import { createUsername } from '../apis/api/user'

export default function Onboarding() {

  const navigate = useNavigate()
  const [curIdx, setCurIdx] = useState(0);
  const [userName, setUserName] = useState('')

  const DiaglogArr = [
    { text: `바쁘고 치열한 현재의 삶이 너무 힘들어 스스로에 대해 깊게 생각해 볼 기회가 없던 당신은
            어느 숲속 마을에 웰다잉을 경험하게 도와주는 웰다잉 하숙집이 있다는 사실을 알게 됩니다. \n
            죽음에 대해 깊게 고민하고 현재의 삶을 더 가치있게 살아내고 싶었던 당신은
            하숙집에 들어가 웰다잉을 직접 경험해보기로 하는데...` 
    },
    {
      text: `하숙집에서 차를 보내 당신을 데리러 왔네요!
            차를 타고 하숙집으로 이동해볼까요? `
    },
    {
      text: `이동 중 기사님이 당신에게 이름을 물어봤어요!\n
            서비스 내에서 사용할 당신만의 이름을 저장해주세요.
            이름을 저장하면 웰다잉 하숙집에 도착합니다.`
    },
  ]
  
  const handleDiaglogBox = () => {
    if(curIdx === DiaglogArr.length-1){
      navigate('/main')
      return;
    }
    setCurIdx(curIdx+1);
  }

  const handleChange = (e) => {
    setUserName(e.target.value);
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    await createUsername(userName);
  }

  return (
    <>
      <Container>
        <VideoWrapper>
          <video width="100%" height="100%" min-width="100%"  autoPlay muted playsInline loop>
            <source src={'/videos/testOnboarding.mp4'} type="video/mp4" />
          </video>
        </VideoWrapper>

        <ContentBox>
          <p>{DiaglogArr[curIdx].text.toString()}</p>
          {(curIdx === 0 || curIdx === 1) &&
            <span onClick={handleDiaglogBox}>
              <DialogNextIcon/>
            </span>
          }
          { curIdx === 2 && 
          <Footer>
            <InputBox>
              <FormInput 
                type='text' 
                id='userName' 
                name='userName' 
                value={userName ?? ''}
                placeholder='이름을 입력해주세요.' 
                onChange={handleChange}
                required/>
              <Button onClick={handleOnSubmit}>저장하기</Button>
            </InputBox>
          </Footer>
          }
        </ContentBox>
      </Container>
    </>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const VideoWrapper = styled.div`
  width: 100vw; 
  height: 100vh;

  video{
    object-fit: cover;
  }
`

const ContentBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 45%;
  padding: 4rem 11rem;
  background: linear-gradient(223deg, rgba(0, 0, 0, 0.51) 0%, rgba(0, 0, 0, 0.12) 100%);
  backdrop-filter: blur(60px);
  outline: solid 2px #ffffff;
  border-radius: 2.5rem;  
  text-align: center;
  justify-content: center;

  p{
    font-size: 1.25rem;
    color: white;
    white-space: pre-line
  }

  span{
    cursor: pointer;
    position: absolute;
    bottom: 1.5rem;
    right: 2.25rem;
  }

`

const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1.75rem;
`

const Button = styled.button`
  display: block;
  width: 11rem;
  height: 3rem;
  border: none;
  background-color: var(--main-color);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 1.25rem;
  position: absolute;
  font-weight: 700;

`


const InputBox= styled.div`
  display: flex;
  justify-content: flex-end;
`

const FormInput = styled.input`
  position: relative;
  box-sizing: border-box;
  border-radius: 1.25rem;
  width: 30rem;
  height: 3rem;
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