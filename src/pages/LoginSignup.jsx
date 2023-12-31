import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import LoginForm from '../components/LoginSignup/LoginForm'
import SignUpForm from '../components/LoginSignup/SignUpForm'
import styled from 'styled-components'

export default function LoginSignup() {
  const navigate = useNavigate()

  const [curIdx, setCurIdx] = useState(0)

  const tabArr = [
    { tabName: '로그인'},
    { tabName: '회원가입'},
  ]

  const handleSelectTab = (idx) => {
    setCurIdx(idx);
  }

  useEffect(() => {
    console.log(curIdx)
  })

  return (
    <Container>
      <FormBox>
        <TabWrapper>
          {tabArr.map((tab, idx) => (
            <li key={idx} className={`tabMenu ${idx === curIdx ? "selected" : ""}` }
              onClick={() => handleSelectTab(idx)}>{tab.tabName}</li>
          ))}
        </TabWrapper>
        {curIdx === 0 ? (
          <LoginForm />
        ) : <SignUpForm/>}
      </FormBox>

    </Container>

  )
}

// styled-components
const Container = styled.div`
  height: calc( 100% - 12rem);
  display: flex;
  margin-top: 12rem;
`

const FormBox = styled.div`
  width: 30rem;
  height: fit-content;
  padding: 4rem 3.5rem;
  background: linear-gradient(223deg, rgba(0, 0, 0, 0.51) 0%, rgba(0, 0, 0, 0.12) 100%);
  outline: solid 2px white;
  border-radius: 2.5rem;  
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  backdrop-filter: blur(60px);
  label{
    margin-left: 1rem;
  }
  opacity: 0;
  animation: fadeIn 1.5s 1.5s ease-in-out;
  animation-fill-mode: forwards;
`;

const TabWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
  li {
    cursor: pointer;
    padding: 0px 6px;
    color: #DEDEDE;
    font-size: 1.25rem;
  }

  li.selected{
    font-weight: 500;
    border-bottom: 2px solid var(--main-color);
    color: white;
  }
`;


