import React from 'react'
import styled from 'styled-components'
import BoardSrc from '../../../assets/img/PlayerRoom/board.png'

export default function Board() {
  return (
    <Container>

    </Container>
  )
}

const Container = styled.div`
  background-image : url(${BoardSrc});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 2.5rem;  
  padding: 6.25rem;
  gap: 6rem;
  color: white;

`