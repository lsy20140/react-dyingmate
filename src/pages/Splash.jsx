import React, { useEffect, useState } from 'react'
import splashBg from '../assets/img/splashBg.png'

splashBg
import title from '../assets/img/title.png'
import styled from 'styled-components'
import LoginSignup from './LoginSignup'
import { ReactComponent as IconSetting } from '../assets/icons/setting_icon.svg'
import Setting from '../components/SetUp/Setting'

export default function Splash() {
  const [showSetup, setShowSetup] = useState(false);

  return (
    <>
      <Header onClick={() => setShowSetup(!showSetup)}>
        <IconSetting/>
      </Header>
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

      {showSetup && <Setting />}
      

    </>
  )
}


const Header = styled.div`
  position: absolute;
  top: 3.75rem;
  right: 3rem;
`

const SplashContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${splashBg});
  background-size: cover;
  display: flex;
  justify-content: center;
`
const ContentBox = styled.div`  
  display: flex;
  gap: 18rem;
  margin: 0 auto;
`

const Description = styled.div`
  transform: translateX(75%);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;  

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



