import React, { useEffect, useState } from 'react'
import background from '../assets/img/background.jpg'
import title from '../assets/img/title.png'
import styled from 'styled-components'
import LoginSignup from './LoginSignup'

export default function Splash() {

  return (
    <>
      <SplashContainer>
        <ContentBox>
          <Description>
            <img src={title} />
            <p>다잉메이트에 방문하신 걸 환영합니다!<br/>
              웰다잉하우스에서 다잉메이트들을 만나<br/>
              당신만의 특별한 웰다잉을 경험하고 설계해보세요.</p>
          </Description>
          <LoginSignup/>
        </ContentBox>


      </SplashContainer>

    </>
  )
}


// styled-components

const SplashContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  display: flex;
  justify-content: center;
`
const ContentBox = styled.div`  
  height: fit-content;
  display: flex;
  gap: 16rem;
  margin-top: 15rem;
`

const Description = styled.div`
  margin-top: 4rem;
  transform: translateX(75%);

  img{
    animation: fadeIn 2s, fadeInDown 1.5s 1s ease-in-out;
    animation-fill-mode: forwards;
  }
  p{
    transform: translateX(-50%);
    opacity: 0;
    color: white;
    font-size: 1.25rem;
    line-height: 2;
    animation: fadeIn 2s 1.5s; 
    animation-fill-mode: forwards;
  }
`
// const Background = styled.img`
//   width: 100%;
//   height: 100vh;
// `

// const Container = styled.div`
//   width: 100%;
//   position: absolute;
//   display: flex;
//   justify-content: center;
//   margin-top: 18rem;
// `

// const LeftContainer = styled.div`
//   img {
//     animation: fadeInDown 1.5s 1.5s ease-in-out, fadeIn 2s;
//     animation-fill-mode: forwards;
//   }
//   p{
//     transform: translateX(-40%);
//     color: white;
//     line-height: 2;
//     opacity: 0;
//     animation: fadeIn 1.5s 2.5s;
//     animation-fill-mode: forwards;
//   }

// `



