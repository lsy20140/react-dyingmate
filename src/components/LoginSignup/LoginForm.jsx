import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components';
import google_icon from '../../assets/icons/google_icon.png'
import kakao_icon from '../../assets/icons/kakao_icon.png'
import hide_icon from '../../assets/icons/hide_icon.png'
import axios from 'axios'  
import { useAuthContext } from '../../contexts/AuthContext';


export default function LoginForm() {
  const navigate = useNavigate()
  // const [user, setUser] = useState({});
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [showPwd, setShowPwd] = useState()
  const {token, setToken, login, setLogin} = useAuthContext()

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`
  const handleKakaoLogin = ()=>{
      window.location.href = kakaoURL;
      console.log(new URL(window.location.href))
  }



  // const handleChange = (e) => {
  //   const {name, value} = e.target
  //   setUser((user) => ({...user, [name]: value}))
  // }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePwd = (e) => {
    setPwd(e.target.value)
  }


  const handleSubmit = async (e) => {
    e.preventDefault()  
    // navigate('/main');  

    await axios.post(
      '/api/user/login',
      {
        email: email,
        pwd: pwd  
      },
      {withCredentials: true},
    )
    .then((response) => {
      console.log(response)
      localStorage.setItem('login-token', response.data.data.token);
      setToken(localStorage.setItem('login-token', response.data.data.token));
    })
    .then(() => {
      setLogin(true)
      console.log("login 됐나",login)
      console.log("토큰 저장?",token)
    })
    .catch(function (error) {
        // 오류발생시 실행
        console.log(error.message)
    })
  }

  const handlePwdHide = () => {
    setShowPwd(!showPwd)
  }
  

  return (
    <>
      <form>
        <FormInput 
          type='text' 
          id='userId' 
          name='userId' 
          value={email ?? ''}
          placeholder='아이디를 입력해주세요' 
          onChange={handleEmail}
          required/><br/>  

        <PasswordInput>
          <FormInput 
            type={showPwd ? "password" : "text"}
            id='userPwd' 
            name='userPwd' 
            value={pwd ?? ''}
            placeholder='비밀번호를 입력해주세요' 
            onChange={handlePwd}
            required
          />
          <img onClick={handlePwdHide} src={hide_icon} />
          
        </PasswordInput>

        <FindInfoText>아이디 / 비밀번호를 잊으셨나요?</FindInfoText>

        <LoginButton onClick={handleSubmit}>로그인</LoginButton>
        <SocialLogin>
          <p>간편하게 로그인하기</p>
          <SocialLoginIcons>
            <img src={google_icon} />
            <img onClick={handleKakaoLogin} src={kakao_icon} />
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
  img {
    height: 1rem;
    width: 1rem;
    transform: translateY(-8px);
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
  color: black;
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
    color: white;
    margin-bottom: 1.25rem;
    
  }

  p:before,
  p:after {
      content: "  ";
      flex: 1 1;
      border-bottom: 1px solid white;
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
  color: white;
  font-weight: 300;

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
