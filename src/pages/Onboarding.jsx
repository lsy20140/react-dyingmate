import React, { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as DialogNextIcon } from '../assets/icons/dialog_next_icon.svg'

export default function Onboarding() {

  const [curIdx, setCurIdx] = useState(0);

  const DiaglogArr = [
    { text: `바쁘고 치열한 현재의 삶이 너무 힘들어 스스로에 대해 깊게 생각해 볼 기회가 없던 당신은
            어느 숲속 마을에 웰다잉을 경험하게 도와주는 웰다잉 하숙집이 있다는 사실을 알게 됩니다.
            죽음에 대해 깊게 고민하고 현재의 삶을 더 가치있게 살아내고 싶었던 당신은
            하숙집에 들어가 웰다잉을 직접 경험해보기로 하는데...` 
    },
    {
      text: `하숙집에서 차를 보내 당신을 데리러 왔네요!
            차를 타고 하숙집으로 이동해볼까요? `
    },
    {
      text: `이동 중 기사님이 당신에게 이름을 물어봤어요!\n
            서비스 내에서 사용할 당신만의 이름을 저장해주세요.
            이름을 저장하면 웰다잉 하숙집에 도착합니다.`
    }
  ]
  
  const handleDiaglogBox = () => {
    if(curIdx === DiaglogArr.length-1){
      return;
    }
    setCurIdx(curIdx+1);

  }

  return (
    <>
      <Container>
        <video width="100%" autoPlay muted playsInline loop>
          <source src={process.env.PUBLIC_URL + '/videos/testOnboarding.mp4'} type="video/mp4" />
          {/* Your browser does not support the video tag. */}
        </video>
        <ContentBox>
          <p>{DiaglogArr[curIdx].text.toString()}</p>
          <span onClick={handleDiaglogBox}>
            <DialogNextIcon/>
          </span>
          

          

        </ContentBox>
      </Container>


    </>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

`

const ContentBox = styled.div`
  position: absolute;
  width: 45%;
  background-color: white;
  border-radius: 2rem;
  padding: 5rem 11rem;
  


  p{
    font-size: 1.25rem;
    text-align: center;
    white-space: pre-line
  }

  span{
    cursor: pointer;
    position: absolute;
    bottom: 1.75rem;
    right: 1.75rem;
  }

`

