import React from 'react'
import '../styles/login.css'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // 임시 main페이지 이동
    navigate('/main')
  }

  return (
    <div className="container">
      <div className="header">Dying Mate</div>
      <div className='login_box'>
        <form onSubmit={handleSubmit}>
          <p>로그인</p>
          <input type="text" name="username" placeholder='아이디'/>
          <input type="password" name="password" placeholder='비밀번호'/>
          <button>로그인</button>
          <p>비밀번호를 잊으셨나요?</p>
        </form>
      </div>
    </div>
  )
}
