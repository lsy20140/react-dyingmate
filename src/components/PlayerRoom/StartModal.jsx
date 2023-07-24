import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { usePlay } from '../../contexts/Play';
import { ReactComponent as TitleLeft } from '../../assets/icons/PlayerRoom/left.svg'
import { ReactComponent as TitleRight } from '../../assets/icons/PlayerRoom/right.svg'
import pencil from '../../assets/icons/PlayerRoom/pencil.png'
import check from '../../assets/icons/PlayerRoom/check.png'
import bubble from '../../assets/icons/PlayerRoom/bubble.png'
import moon from '../../assets/icons/PlayerRoom/moon.png'
import NextButton from './NextButton';

import { ReactComponent as WillFunc } from '../../assets/icons/PlayerRoom/will_func.svg'


export default function StartModal({curIdx, setCamera}) {
  const [startFunc, setStartFunc]= useState(false);
  const {setFocus} = usePlay()
  const modalRef = useRef();

  const modalInfo = [
    { idx: 1,
      title: "나의 마지막 페이지",
      subTitle: "내일 당장 내가 죽게 된다면 어떻게 될까요?",
      text: `남겨질 주변 사람들에게 미처 하지 못하고 떠난 말이 있을 수도 있습니다. \n
            주변 사람들에게 하지 못한 이야기를 전해 당신의 삶을 천천히 되돌아보며
            나의 마지막 페이지와도 같은 유언장을 작성해보세요. `,
      icon: pencil,
      btn_color: `#FD835F`
    },
    { idx: 2,
      title: "죽기 전에 꼭 해봐야 할 목록",
      subTitle: "내가 꼭 해보고 싶었던 일들 ",
      text: `나의 버킷리스트, 후회되는 일 등 죽기 전 꼭 해봐야 할 목록들을 작성해보세요.
            나만의 보드를 직접 작성하고 꾸며 보면서 스스로의 인생을 돌아보아요. `,
      icon: check,
      btn_color: `#086197`
    },
    { idx: 3,
      title: "마지막 문자",
      subTitle: "장례를 치를 때",
      text: `주변 지인들에게 부고 소식을 알리고 조문을 오실 수 있도록
            보내는 안내 메세지의 역할을 하는 것이 부고 문자 입니다.
            나의 부고 문자에 들어갈 내용을 직접 작성해보세요. `,
      icon: bubble,
      btn_color: `#9880FF`
    },
    { idx: 4,
      title: "죽음을 준비하다",
      subTitle: "스스로의 죽음에 대해 깊게 생각해 본 경험 있나요?",
      text: `나에게 다가올 죽음을 구체적으로 생각하고 설계해서 
            죽음에 대해 진지하게 생각하는 스스로의 시간이 되길 바랄게요. `,
      icon: moon,
      btn_color: `#D9995D`
    },

  ]

  const handleClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setFocus(false)
      setCamera()
    }
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  });

  const handleNextModal = () => {
    setStartFunc(true)
  }


  return (
    <>
      {!startFunc ?
        <Overlay>
          <Title>
            <TitleRight />
            <h2>{modalInfo[curIdx-1].title}</h2>
            <TitleLeft/>
          </Title>
          <ContentWrapper ref={modalRef}>
            <Content>
              <div>{modalInfo[curIdx-1].subTitle}</div>
              <p>{modalInfo[curIdx-1].text}</p>
            </Content>
            <ContentImage>
              <img src={modalInfo[curIdx-1].icon} />
            </ContentImage>
            <Bottom onClick={handleNextModal}>
              <NextButton color={modalInfo[curIdx-1].btn_color} />
            </Bottom>
          </ContentWrapper>
        </Overlay>   
        :
        <Overlay>
          <ContentWrapper ref={modalRef}>
            <Content>
              <div>{modalInfo[curIdx-1].subTitle}</div>
              <p>{modalInfo[curIdx-1].text}</p>
            </Content>
          </ContentWrapper>
        </Overlay>
      }

    </>
  )
}

const Overlay = styled.div`
  position: absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  text-align: center;
  justify-content: center;
  background-color: rgba(28, 23, 23, 0.40);
  height: 100vh;
`

const Title = styled.div`
  display: flex;
  margin-top: 14.5rem;
  color: #FFF9F0;
  font-weight: 700;
  font-size: 2.25rem;
  align-items: center;
  text-align: center;
  gap: 8.5rem;
  justify-content: center;
`

const ContentWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 68rem;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(223deg, rgba(255, 255, 255, 0.51) 0%, rgba(255, 255, 255, 0.12) 100%);
  outline: solid 2px #ffffff;
  border-radius: 2.5rem;  
  margin-top: 4.5rem;
  backdrop-filter: blur(60px);
  padding: 2.5rem;

`

const Content = styled.div`
  color: white;
  text-align: left;
  white-space: pre-line;
  padding: 5rem;
  flex-shrink: 0;

  div{
    font-size: 1.5rem;
    font-weight: 700;
  }
  
  p{
    font-size: 1.125rem;
    margin-top: 1.8rem;
  }
`

const ContentImage =styled.div` 
  display: flex;
  width: 21rem;
  height: 21rem;
  background-color: #F6DCCD;
  border-radius: 1.875rem;
  justify-content: center;


  img {
    display: block;
    margin: auto;
  }
`

const Bottom = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  transform: translate(0, 50%);
`