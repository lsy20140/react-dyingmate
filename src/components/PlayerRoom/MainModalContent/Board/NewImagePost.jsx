import React from 'react'
import styled from 'styled-components'
import {ReactComponent as Pin} from '../../../../assets/img/PlayerRoom/pin.svg'
import PostImageSrc from '../../../../assets/img/PlayerRoom/post_image.png'

export default function NewImagePost() {
  return (
    <PostItem>
      <HeaderPin><Pin/></HeaderPin>
      <PostImage />
    </PostItem>
  )
}

const PostItem = styled.div`
  position: relative;
  width: 5rem;
  height: 6rem;
  flex-shrink: 0;
  background-color: #FFF9F0;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  box-sizing: border-box;
`
const HeaderPin = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`

const PostImage = styled.div`
  background-image: url(${PostImageSrc});
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`