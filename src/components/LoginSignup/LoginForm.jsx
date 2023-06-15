import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components';

export default function LoginForm() {
  const navigate = useNavigate()
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    const {name, value} = e.target
    setUser((user) => ({...user, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()  
  }


  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor='userId'>아이디</label><br/>  
      <FormInput 
        type='text' 
        id='userId' 
        name='userId' 
        value={user.userId ?? ''}
        placeholder='아이디를 입력하세요' 
        onChange={handleChange}
        required/><br/>  

      <label htmlFor='userId'>비밀번호</label><br/>  
      <FormInput 
        type='password' 
        id='userPwd' 
        name='userPwd' 
        value={user.userPwd ?? ''}
        placeholder='비밀번호를 입력하세요' 
        onChange={handleChange}
        required/><br/>  
      <LoginButton>로그인</LoginButton>
    </form>

    </>
  )
}

// styled-components
const FormInput = styled.input`
  box-sizing: border-box;
  border-radius: 6px;
  width: 100%;
  height: 3rem;
  background-color: #F3F3F3;
  padding: 0.8rem 1rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`
const LoginButton = styled.button`
width: 100%;
border: none;
background-color: #FD835F;
color: white;
padding: 10px 0;
border-radius: 6px;
`