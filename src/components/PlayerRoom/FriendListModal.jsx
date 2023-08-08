import React from 'react'
import styled from 'styled-components'
import { usePlay } from '../../contexts/Play'
import { ReactComponent as IconFriendList } from '../../assets/icons/PlayerRoom/friend_list.svg'

export default function FriendListModal() {
  const {setFriendList} = usePlay();
  
  const handleModal = () => {
    setFriendList(false)
  }


  return (
    <>
      <ModalWrapper>
        <Content>
          <button onClick={handleModal}>
            X
          </button>
          <Header>
            <IconFriendList/>
            <h2>친구 목록</h2>
          </Header>          
          
        </Content>
      </ModalWrapper>
    </>
  )
}

const ModalWrapper = styled.div`
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

  button {
    cursor: pointer;
    border: 0;
    background-color: transparent;
  }

`

const Content = styled.div`

`


const Header = styled.div`
  display: flex;
  text-align: center;
  h2{
    font-weight: 700;
    color: white;
  } 
`