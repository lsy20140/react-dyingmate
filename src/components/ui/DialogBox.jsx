import React, { useCallback, useState } from 'react'
import Message from '../Message';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom'
import { ReactComponent as DialogNextIcon } from '../../assets/icons/dialog_next_icon.svg'
import { useRoomFocus } from '../../contexts/RoomFocus';

export default function DialogBox({messageArr}) {
  const [curMessage, setCurMessage] = useState(0);
  const [messageEnded, setMessageEnded] = useState(false);
  const {setFocus} = useRoomFocus();
  const navigate = useNavigate()

    const handleOnClick = useCallback(() => {
      setMessageEnded(false);

      if(curMessage === 0) {
        setFocus(true)
        setCurMessage(curMessage + 1);
        return;
      }

      if(curMessage > messageArr.length -2) {
        setTimeout(() => {
          navigate('/main')
        }, 2000)
        return;
      }
      setCurMessage(curMessage + 1)
      
    }, [curMessage, messageEnded, messageArr.length]);

  return (
    <Container>
      <Message
        text={messageArr[curMessage]}
        key={curMessage}
        trail={60}
        onMessageEnded={() => {
          setMessageEnded(true);
        }}
      />
      <NextButton onClick={handleOnClick}>
        {(curMessage === messageArr.length - 1) ?  <DialogNextIcon />: <DialogNextIcon />}
      </NextButton>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: center;
  justify-content: center;
  padding: 3rem;
  box-sizing: border-box;
`
const NextButton = styled.div`
  width: 100%;
  
  & > *{
    position: absolute;
    display: flex;
    right: 2rem;
    bottom: 1.5rem;
  }

`
