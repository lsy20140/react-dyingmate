import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components';


export default function LoginForm() {
  const navigate = useNavigate()
  const [user, setUser] = useState({});
  const [showPwd, setShowPwd] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target
    setUser((user) => ({...user, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()  
    navigate('/main');  
  }

  const handlePwdHide = () => {
    setShowPwd(!showPwd)
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor='userId'>아이디</label><br/>   */}
        <FormInput 
          type='text' 
          id='userId' 
          name='userId' 
          value={user.userId ?? ''}
          placeholder='아이디를 입력하세요' 
          onChange={handleChange}
          required/><br/>  

        {/* <label htmlFor='userId'>비밀번호</label><br/>   */}
        <FormInput 
          type={showPwd ? "password" : "text"}
          id='userPwd' 
          name='userPwd' 
          value={user.userPwd ?? ''}
          placeholder='비밀번호를 입력하세요' 
          onChange={handleChange}
          required
          /><br/> 
          <FindInfoText>아이디 / 비밀번호를 잊으셨나요?</FindInfoText>

        <LoginButton>로그인</LoginButton>
      </form>

    </>
  )
}

// styled-components
const FormInput = styled.input`
  box-sizing: border-box;
  border-radius: 20px;
  width: 100%;
  height: 3rem;
  color: #9E9E9E;
  background-color: #F3F3F3;
  padding: 0.75rem 1.25rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  &:focus {
    outline: 1px solid #999999;
  }
  &::placeholder {
    color: #9E9E9E;
  }
  
`

const FindInfoText = styled.p`
  display: flex;
  justify-content: flex-end;
  font-size: 0.9rem;
  text-decoration:underline;
`


const LoginButton = styled.button`
width: 100%;
border: none;
background-color: #FD835F;
color: white;
font-weight: normal;
margin-top: 2rem;
padding: 12px 0;
border-radius: 20px;
`
