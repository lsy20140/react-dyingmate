import React, { useCallback, useEffect, useState } from 'react'
import Message from '../Message';
import styled from 'styled-components';
import { ReactComponent as DialogNextIcon } from '../../assets/icons/dialog_next_icon.svg'
import { useRoomFocus } from '../../contexts/RoomFocus';

export default function DialogBox({messageArr}) {
  const [curMessage, setCurMessage] = useState(0);
  const [messageEnded, setMessageEnded] = useState(false);

  const {focus, setFocus} = useRoomFocus();

    const handleOnClick = useCallback(() => {
      setMessageEnded(false);

      if (curMessage < messageArr.length - 1) {
        setCurMessage(curMessage + 1);
      } else {
        // setCurMessage(0);
        setFocus(true)
        console.log("last message!!")
        console.log("DialogBoxfocus",focus)

      }
    }, [curMessage, messageEnded, messageArr.length]);

  return (
    <Container>
      <Message
        text={messageArr[curMessage]}
        key={curMessage}
        trail={35}
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
    right: 4rem;
    bottom: 3rem;
  }

`
