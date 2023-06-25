import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components';
import google_icon from '../../assets/icons/google_icon.png'
import kakao_icon from '../../assets/icons/kakao_icon.png'
import hide_icon from '../../assets/icons/hide_icon.png'


export default function LoginForm() {
  const navigate = useNavigate()
  const [user, setUser] = useState({});
  const [showPwd, setShowPwd] = useState()

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
        <FormInput 
          type='text' 
          id='userId' 
          name='userId' 
          value={user.userId ?? ''}
          placeholder='아이디를 입력해주세요' 
          onChange={handleChange}
          required/><br/>  

        <PasswordInput>
          <FormInput 
            type={showPwd ? "password" : "text"}
            id='userPwd' 
            name='userPwd' 
            value={user.userPwd ?? ''}
            placeholder='비밀번호를 입력해주세요' 
            onChange={handleChange}
            required
          />
          <img onClick={handlePwdHide} src={hide_icon} />
          
        </PasswordInput>

        <FindInfoText>아이디 / 비밀번호를 잊으셨나요?</FindInfoText>

        <LoginButton>로그인</LoginButton>
        <SocialLogin>
          <p>간편하게 로그인하기</p>
          <SocialLoginIcons>
            <img src={google_icon} />
            <img src={kakao_icon} />
          </SocialLoginIcons>

        </SocialLogin>

      </form>

    </>
  )
}

// styled-components
const PasswordInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  verticle-align: middle;
  img {
    height: 1rem;
    width: 1rem;
    transform: translateY(-6px);
    padding: 0.5rem;
    position: absolute;
    right: 0.5rem;
  }

`

const FormInput = styled.input`
 
  box-sizing: border-box;
  border-radius: 20px;
  width: 100%;
  height: 3rem;
  color: var(--font-gray-1);
  background-color: #F3F3F3;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  &:focus {
    outline: 1px solid #999999;
  }
  &::placeholder {
    color: var(--font-gray-1);
  }
  
`

const SocialLogin = styled.div`
  p {
    display: flex;
    margin-top: 2rem;
    text-align: center;
    color: black;
    margin-bottom: 1.25rem;
  }

  p:before,
  p:after {
      content: "  ";
      flex: 1 1;
      border-bottom: 1px solid #CBCBCB;
      margin: auto;

  }
  p:before {
    margin-right: 1.25rem;
  }

  p:after {
    margin-left: 1.25rem;
  }

`


const SocialLoginIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`

const FindInfoText = styled.p`
  display: flex;
  justify-content: flex-end;
  font-size: 0.9rem;
  text-decoration:underline;
  color: #7E8489;
`


const LoginButton = styled.button`
  width: 100%;
  height: 3rem;
  border: none;
  background-color: var(--main-color);
  color: white;
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  border-radius: 20px;

`
