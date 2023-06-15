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

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/main')
  }

  useEffect(() => {
    console.log(curIdx)
  })

  return (
    <>
      <TabWrapper>
        {tabArr.map((tab, idx) => (
          <li key={idx} className={`tabMenu ${idx === curIdx ? "selected" : ""}` }
            onClick={() => handleSelectTab(idx)}>{tab.tabName}</li>
        ))}
      </TabWrapper>
      <FormBox>
          {curIdx === 0 ? (
            <LoginForm />
          ) : <SignUpForm/>}
      </FormBox>
    </>
  )
}

// styled-components
const TabWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1.25rem;
`;

const FormBox = styled.div`
  width: 22rem;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  label{
    margin-left: 1rem;
  }
`;
