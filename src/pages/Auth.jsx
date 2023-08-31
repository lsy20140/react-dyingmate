import React, { useEffect } from 'react'
import axios from 'axios'

export default function Auth() {
  const code = new URL(window.location.href).searchParams.get("code");
  const grant_type = 'authorization_code';
  const client_id = `${process.env.REACT_APP_REST_API_KEY}`;
  const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_URI}`

  useEffect(() => {
    axios.post(`https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${REDIRECT_URI}&code=${code}`,
    {
      headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    }
    ).then((res) => {
      console.log(res)
      console.log(res.data.access_token)
    })
  },[])
  return (
    <div></div>
  )
}
