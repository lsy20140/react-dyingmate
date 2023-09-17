import React from 'react'
import styled from 'styled-components'
import {ReactComponent as LockIcon } from '../../assets/icons/lock_icon.svg'
import {BiLock}  from 'react-icons/bi'

export default function MapItem({isOpened, stageTitle, stageImg}) {
  const handleOnClick = () => {
    // 클릭한 방으로 이동
  }
  
  
  return (
    <ItemBox isOpened={isOpened} onClick={handleOnClick}>
      <ContentBg isOpened={isOpened}/>
      <ContentBorder/>
      <Content>
        <ImageWrapper>
          {isOpened && 
            <LockCover>
              <BiLock fontSize='2.5rem' />
            </LockCover>
          }
          <StageImage image={stageImg} /> 
        </ImageWrapper>
        <StageTitle>{stageTitle}</StageTitle>
      </Content>

    </ItemBox>
  )
}

const ItemBox = styled.div`
  width: 100%;
  height: 100%;
  &, & *{
    border-radius: 1.875rem;
    width: 100%;
  }
  box-shadow: ${props => props.isOpened ? '10px 18px 216px 0px white' : ''};
  position: relative;
  background-color: white;
`

const ContentBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.3;
  background: ${props => props.isOpened ? 'linear-gradient(0deg, #9C4200 0%, #9C4200 100%), #960000' : 'var(--font-gray-1)'} ;
  box-sizing: border-box;

`

const ContentBorder = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.6;
  border: 6px solid #353F4A;
  mix-blend-mode: color-burn;
  box-sizing: border-box;
`

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.69rem;
  box-sizing: border-box;
  align-items: center;
  padding: 3rem 0;

`

const ImageWrapper = styled.div`
  width: 11rem;
  height: 13rem;
  border-radius: 1.88rem;
  position: relative;
`

const LockCover = styled.div`
  z-index: 999;
  height: 100%;
  position: absolute;
  background: rgba(16, 12, 12, 0.71);
  display: flex;
  align-items: center;
  svg {
    z-index: 999;
    color: white;
  }
`

const StageImage = styled.div`
  background-image: url(${props => props.image});
  width: 100%;
  height: 100%;
  position: absolute;
`

const StageTitle = styled.div`
  z-index:999;
  font-size: 1.25rem;
  p{
    color: var(--font-gray-3);
    font-weight: 500;
    flex-shrink: 0;
  }
`