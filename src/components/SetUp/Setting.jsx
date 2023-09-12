import React from 'react'
import styled from 'styled-components'
import {ReactComponent as MainIcon} from '../../assets/icons/SetUp/main_icon.svg'
import {IoIosClose} from 'react-icons/io'

export default function Setting() {
  return (
    <Overlay>
      <Container>
        <Header>
          <HeaderTitle>
            <MainIcon/>
            <p>환경설정</p>
          </HeaderTitle>
          <IoIosClose/>
        </Header>
      </Container>
    </Overlay>
  )
}

const Overlay = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Container = styled.div`
  width: 32rem;
  height: 44rem;
  background: linear-gradient(237deg, rgba(0, 0, 0, 0.51) -23.03%, rgba(0, 0, 0, 0.12) 119.63%);
  outline: 2px solid white;
  border-radius: 2.5rem;  
  backdrop-filter: blur(60px);

`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.25rem 2.25rem 0 5rem;  

  svg {
    color: white;
    font-size: 2.5rem;
  }

`

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1.3rem;

  p{
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
  }
`