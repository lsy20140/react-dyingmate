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
    <>
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
    </>

  )
}

// styled-components
const FormBox = styled.div`
  width: 30rem;
  padding: 4rem 3.5rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 1.25rem;
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
  gap: 1rem;
  color: #CCCCCC;
  font-weight: bold;
  margin-bottom: 1.5rem;
  li {
    cursor: pointer;
    padding: 0px 6px;
  }

  li.selected{
    border-bottom: 2px solid red;
    padding-bottom: 6px;
    color: #535353;
  }
`;


