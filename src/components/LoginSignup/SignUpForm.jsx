import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components';
import google_icon from '../../assets/icons/google_icon.png'
import kakao_icon from '../../assets/icons/kakao_icon.png'
import hide_icon from '../../assets/icons/hide_icon.png'
import axios from 'axios'  
import {GoCheckCircleFill} from 'react-icons/go'
import {IoMdAlert} from 'react-icons/io'

export default function SignUpForm() {
  const navigate = useNavigate()
  // const [user, setUser] = useState({});
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [checkPwd, setCheckPwd] = useState()
  const [showPwd, setShowPwd] = useState([])
  const [isEmailValid, setIsEmailValid] = useState(null)

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

  const handleCheckPwd = (e) => {
    setCheckPwd(e.target.value)
  }

  const handleCheckEmail = () => {
    axios.get(`/api/user/email/exists/${email}`,{} )
    .then(function (response) {
      console.log('response.data', response.data)
      setIsEmailValid(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()  
    // navigate('/onboarding');  

    // 회원가입 post api 연결 필요
    axios.post(
      '/api/user/join',
      {
        email: email,
        pwd: pwd
      },
      {withCredentials: true},
    )
    .then((res) => {
      if(!res.data){
        return;
      }
      else{
        navigate('/onboarding',{state: {email: email, pwd: pwd}})
      }
        
    }).catch(function (error) {
        // 오류발생시 실행
        console.log(error)
    })
  }

  const handlePwdHide = (idx) => {
    showPwd[idx] = !showPwd[idx]
    setShowPwd([...showPwd])
  }




  return (
    <>
        <EmailInputWrapper>
          <FormInput 
            type='text' 
            id='email' 
            name='email' 
            value={email ?? ''}
            placeholder='아이디를 입력해주세요' 
            onChange={handleEmail}
            required/>
          <EmailCheckBtn onClick={handleCheckEmail}>중복확인</EmailCheckBtn>
        </EmailInputWrapper>
        <EmailCheckText>
          {
            isEmailValid ? <GoCheckCircleFill /> : <IoMdAlert/>
          }
          {
            isEmailValid ? <p>사용 가능한 아이디 입니다. </p> : <p>중복된 아이디 입니다! 다시 한번 입력해주세요.</p>
          }
        </EmailCheckText>


        <PasswordInput>
          <FormInput 
            type={showPwd[0] ? "password" : "text"}
            id='pwd' 
            name='pwd' 
            value={pwd ?? ''}
            placeholder='비밀번호를 입력해주세요' 
            onChange={handlePwd}
            required
          />
          <img onClick={() => handlePwdHide(0)} src={hide_icon} />

        </PasswordInput>

        <PasswordInput>
          <FormInput 
            type={showPwd[1] ? "password" : "text"}
            id='checkPwd' 
            name='checkPwd' 
            value={checkPwd ?? ''}
            placeholder='비밀번호를 재입력해주세요' 
            onChange={handleCheckPwd}
            required
          />
          <img onClick={() => handlePwdHide(1)} src={hide_icon} />

        </PasswordInput>
        <LoginButton onClick={handleSubmit}>회원가입</LoginButton>
        <SocialLogin>
          <p>간편하게 로그인하기</p>
          <SocialLoginIcons>
            <img src={google_icon} />
            <img src={kakao_icon} />
          </SocialLoginIcons>

        </SocialLogin>

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

const EmailInputWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  height: 3rem;
`

const EmailCheckBtn = styled.button`
  width: 6.8rem;
  padding: 0.5rem 1.5rem;
  background-color: var(--main-color);
  color: white;
  border: none;
  border-radius: 1rem;
  flex-shrink: 0;

`

const EmailCheckText = styled.div`
  display: flex;
  gap: 0.5rem;
  color: var(--main-color);
  margin: 0.5rem 0;
  align-items: center;
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

const LoginButton = styled.button`
width: 100%;
height: 3rem;
border: none;
background-color: var(--main-color);
color: white;
margin-top: 2rem;
padding: 12px 0;
border-radius: 20px;
`