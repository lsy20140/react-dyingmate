import React from 'react'
import styled from 'styled-components'
import TestProfile from '../../../assets/img/splashBg.png'

export default function OneRequestItem({userId, username}) {
  return (
    <ItemBox>
      <UserInfo>
        <Profile image={TestProfile} />
        <IdNameText>
          <p>@{userId}</p>
          <p>{username}</p>
        </IdNameText>
      </UserInfo>
      <ButtonWrapper>
        <button>수락</button>
        <button>취소</button>
      </ButtonWrapper>
    </ItemBox>
  )
}


const ItemBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`

const UserInfo = styled.div`
  display: flex;
  gap: 0.7rem;
  align-items: center;
`

const Profile = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  background-image: url(${props => props.image});
`

const IdNameText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p{
    &:first-child{
      font-weight: 600;
    }
  
    &:last-child {
      font-weight: 400;
      font-size: 0.875rem;
    }
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    height: 2.5rem;
    padding: 0.56rem 2.3rem;
    border-radius: 0.75rem;
    font-weight: 700;
    border: none;

    &:first-child {
      background-color: var(--main-color-2);
      color: white;
    }

    &:last-child{
      background-color: #FFF9F0;
      color: #7E8489;
    }
  }
`