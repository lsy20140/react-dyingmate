import React, { useState } from 'react'
import styled from 'styled-components'
import BoardSrc from '../../../assets/img/PlayerRoom/board.png'
import NewTextPost from './Board/NewTextPost'
import NewImagePost from './Board/NewImagePost'
import AddPostModal from './Board/AddPostModal'

export default function Board() {
  const [openModal, setOpenModal] = useState(false)
  const pos = useState({'posX': 10, 'posY': 10})


  const handleOnClick = () => {
    setOpenModal(true)
    console.log(openModal)
  }

  return (
    <>
      <Container>
        <BoardContainer>
          <NewPostWrapper>
            <NewTextPost handleOnClick={handleOnClick}/>
            <NewImagePost />
            <NewTextPost />
          </NewPostWrapper>
        </BoardContainer>
      </Container>
      <AddPostModal openModal={openModal} setOpenModal={setOpenModal} pos={pos} />
    </>

  )
}

const Container = styled.div`
  height: calc(100vh - 12rem); 
  padding: 2rem 6.25rem 0 6.25rem;
  box-sizing: border-box;
`

const BoardContainer = styled.div`
  position: relative;
  height: 100%;
  // background-image: url(${BoardSrc});
  background-repeat: no-repeat;
  background-color: #A97A47;
  border: 3px solid white;
  box-sizing: border-box;
  border-radius: 2.5rem;  
`
const NewPostWrapper = styled.div`
  position: absolute;
  width: 5rem;
  height: 24rem;
  right: -2.5rem;
  top: 50%;
  transform: translate(0, -50%);
  border-radius: 1.25rem;
  background-color: #BFC0C1;
  box-shadow: -7px 4px 14px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.8rem;
    
  & > * {
    filter: drop-shadow(0px 7px 32px rgba(0, 0, 0, 0.25));
    right: 1.5rem;

    &:hover{
      transform: scale(1.2) rotate(10deg);
      transition: transform 0.2s;
    }
  }
`