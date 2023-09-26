import React from 'react'
import styled from 'styled-components'
import { ReactComponent as CloseModal } from '../assets/icons/close_modal.svg'
import MapItem from './Map/MapItem'
import TestImage from '../assets/img/splashBg.png'

export default function MapOverlay({showMap, setShowMap}) {
  // stageImg 수정 필요
  const StageInfo = [
    {id: 0, isClear: true, stageTitle: '주인 할머니의 방', stageImg: TestImage, path: '/gmroom'},
    {id: 1,  isClear: true, stageTitle: '첫 번째 메이트의 방', stageImg: TestImage, path: '/manroom'},
    {id: 2,  isClear: true, stageTitle: '두 번째 메이트의 방', stageImg: TestImage, path: '/womanroom'},
    {id: 3,  isClear: false, stageTitle: '나의 방', stageImg: TestImage, path: '/playerroom'},
    {id: 4,  isClear: false, stageTitle: '마지막 이야기', stageImg: TestImage, path: '/final'},
  ]

  const handleModal = () => {
    setShowMap(!showMap)
  }

  return (
    <>
      {showMap && (
        <Overlay>
          <Header>
            <CloseModal onClick={handleModal}/>
          </Header>
          <Main>
            <MapItemWrapper>
              <Line/>
              {StageInfo.map(({id, isClear, stageTitle, stageImg, path}) => (
                <MapItem key={id} isClear={isClear} stageTitle={stageTitle} stageImg={stageImg} path={path}/>
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
  background-color: #1C1717B2;
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
  height: 23rem;
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