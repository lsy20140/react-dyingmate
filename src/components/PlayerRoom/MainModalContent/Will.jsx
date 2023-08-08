import React from 'react'
import styled from 'styled-components'

export default function Will() {
  return (
    <>

      <Container>
        <TextArea>
          <h3>다음 질문을 통해,</h3>
          <p>나의 삶에 대해 신중히 고민해보고 유언장을 써내려가 보아요. </p>
          <p>나는 어떤 사람이었나요? 
            나의 삶에서 가장 행복한 기억이 있다면 
            무엇인가요?

            죽기 전, 가장 떠오르는 사람은 누구인가요? </p>
        </TextArea>
      </Container>
    </>   
  )
}


const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 72rem;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 2.5rem;  
  padding: 2.5rem;

`
const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`