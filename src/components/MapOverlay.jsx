import React from 'react'
import styled from 'styled-components'
import { ReactComponent as CloseModal } from '../assets/icons/close_modal.svg'
import MapItem from './Map/MapItem'
import TestImage from '../assets/img/splashBg.png'

export default function MapOverlay({showMap, setShowMap}) {
  const StageInfo = [
    {id: 0, isOpened: true, stageTitle: '하숙집 주인 할머니', stageImg: TestImage},
    {id: 1,  isOpened: false, stageTitle: '메이트1: 어떤 소녀', stageImg: TestImage},
    {id: 2,  isOpened: false, stageTitle: '메이트2: 아저씨', stageImg: TestImage},
    {id: 3,  isOpened: false, stageTitle: '나의 방', stageImg: TestImage},
    {id: 4,  isOpened: true, stageTitle: '마지막 이야기', stageImg: TestImage},
  ]

  const handleOnClick = () => {
    setShowMap(!showMap)
  }

  return (
    <>
      {showMap && (
        <Overlay>
          <Header>
            <CloseModal onClick={handleOnClick}/>
          </Header>
          <Main>
            <MapItemWrapper>
              <Line/>
              {StageInfo.map(({id, isOpened, stageTitle, stageImg}) => (
                <MapItem key={id} isOpened={isOpened} stageTitle={stageTitle} stageImg={stageImg}/>
              ))}              
            </MapItemWrapper>
          </Main>

        </Overlay>
      )

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
  background-color: #1C1717B2;
  height: 100vh;

  &{
    z-index: 999;
  }

`

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 3.75rem 6.25rem;

`
const Main = styled.div`
  width: 100vw;
  height: calc(100% - 22rem);
  display: flex;
  align-items: center;

`
const MapItemWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 22rem;
  margin: 0 8rem;
  box-sizing: border-box;
  display: flex;
  gap: 2.5rem;
`

const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 6px;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`