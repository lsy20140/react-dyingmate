import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import {ReactComponent as MainIcon} from '../../../assets/icons/PlayerRoom/Phone/main_icon.svg'
import {ReactComponent as IconWrapper} from '../../../assets/icons/PlayerRoom/Phone/header_wrapper.svg'
import axios from 'axios'  
import StyledButton from '../../ui/StyledButton'
import {ReactComponent as SendIcon} from '../../../assets/icons/PlayerRoom/Phone/send_icon.svg'
import { ReactComponent as BubbleVector } from '../../../assets/img/PlayerRoom/message_bubble_vec.svg'

export default function Phone() {
  const [data, setData ] = useState('')
  const [isSend, setIsSend] = useState(false);

  // 날짜 구하기
  const date = new Date();
  const week = ['일', '월', '화', '수', '목', '금', '토'];

  const textarea = useRef();


  const handleChange = (e) => {
    setData(e.target.value);
    textarea.current.style.height = textarea.current.scrollHeight + 'px';
    console.log(data)
  }

  const handleSubmit = async (e) => {
    setIsSend(true);
    textarea.value = ''
    axios.post(
      '/api/message/post',
      {message: data},
      {withCredentials: true},
      
    )
    .then((response) => {
      console.log(response)
        
    }).catch(function (error) {
        // 오류발생시 실행
        console.log(error.message)  
    })
  }

  useEffect(() => {
    axios.get('http://43.202.133.134:8080/message/get?messageId=2', {

      
    }, )
    .then(function (response) {
      console.log("요청 성공")
      console.log(response.data)
      // setData(response.data.toString())
      console.log("data:" , data)
    })
    .catch(function (error) {
      console.log(error);
    });
 
  },[])


  return (
    <>
      <Container>
        <PhoneWrapper>
          <Header>
            <p>{date.getHours()}:{String(date.getMinutes()).padStart(2, "0")}</p>
            <IconWrapper/>
          </Header>
          <Main>
            <p>부고문자는 한번만 작성할 수 있으니 신중하게 작성해야 합니다. <br/>
              {date.getMonth()}월 {date.getDay()}일 ({week[date.getDay()]}) {date.getHours()}:{String(date.getMinutes()).padStart(2, "0")}
            </p>
            {isSend && 
            <MessageArea>
              <Bubble>
                <p>{data}</p>
                <BubbleVector/>
              </Bubble>
            </MessageArea>
            }

          </Main>
          <Footer method='POST'>
            <FormInput 
              ref={textarea}
              type={"text"}
              id='message' 
              name='message' 
              value={data ?? ''}
              onChange={handleChange}
              placeholder='부고 문자에 들어갈 내용을 작성해주세요.' 
              spellCheck="false"
              required
            />
            <StyledButton width={'6rem'} handleOnClick={handleSubmit} text={<SendIcon/>} btnColor={`var(--main-color)`} />
          </Footer>
        </PhoneWrapper>
        <TextArea>
          <MainIcon/>
          <div>부고 문자를 작성해요</div>
          <p>나의 죽음을 어떻게 전해야 할 지 나의 주변인들을 <br/> 생각하면서 신중하게 고민해보세요.  </p>
          <p>실제 부고 문자 작성 에서는 상주, 고인과의 관계, 장례식장,<br/> 발인 일시 등이 들어가야 해요.</p>
          <p>나만의 특별한 부고 문자를 작성해 전달해도 좋아요.</p>
        </TextArea>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 11rem); 
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 2.5rem;  
  padding: 2.5rem 2.5rem 0 2.5rem;
  gap: 6rem;

`

const PhoneWrapper = styled.div`
  width: 26rem;
  height: 95%;
  background-color: white;
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;


`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;

  *{
    display: block;
  }
  p{
    color: black;
    font-weight: 600;

  }
`

const Main = styled.div`
  padding: 1.8rem;
  height: 38rem;
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p{
    color: var(--font-gray-3);
  }

`

const MessageArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  svg {
    position: absolute;
    right: -0.78rem;
    bottom:0;
  }
`

const Bubble = styled.div`
  background-color: var(--main-color);
  height: fit-content;
  width: 17.25rem;
  text-align: left;
  border-radius: 1.25rem;
  position: relative;
  p{
    color: white;
    padding: 1rem;
    box-sizing: border-box;
  }
`

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  text-align: left;
  gap: 1.5rem;
  font-size: 1.125rem;
  color: white;

  div{
    font-size: 1.5rem;
  }
`

const Footer = styled.form`
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  align-items: flex-end;
`

const FormInput = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  border: none;
  border-radius: 1.25rem;
  color: var(--font-gray-2);
  background-color: #f3f3f3;
  &:focus {
    border: none;
  }
  &::placeholder {
    color: var(--font-gray-1);
  }

`

