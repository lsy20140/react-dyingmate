import React from 'react'
import styled from 'styled-components'
import map_btn from '../assets/img/map_btn.png'
import { Overlay } from '../pages/Overlay'
 

export default function MapOverlay() {
  return (
    <OverlayContainer>
      <Background/>
      
      {/* Main/Room 지도 버튼 */}
      <ButtonBox>
        <img src={map_btn} />
      </ButtonBox>

      {/* 지도 버튼 클릭 시 보임 */}
      <Overlay>
        <p>dfdjfkdjf</p>
      </Overlay>
    </OverlayContainer>
  )
}

const OverlayContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  opacity: 0.6;
`

const ButtonBox = styled.div`
  position: fixed;
  right: 0;

`