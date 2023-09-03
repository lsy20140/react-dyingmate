import React from 'react'
import styled from 'styled-components'
import {ReactComponent as MainIcon} from '../../../../assets/icons/PlayerRoom/Diary/main_icon.svg'
import UploadBoxSrc from '../../../../assets/img/PlayerRoom/upload_box.png'

export default function StepThree() {
  const handleUploadFile = () => {

  }
  const handleChange = (e) => {
    console.log(e.target.files[0]);
  };

  return (
    <Content>
      <UploadBox>
        <div>
          <img src={UploadBoxSrc} alt="btnStart"/>
        </div>
        <input type="file" id='img_file' accept="image/jpg, image/png, image/jpeg" onChange={handleChange}/>
      </UploadBox>

      <TextArea>
        <MainIcon/>
        <Text>
          <p>영정사진은, </p>
          <p>나의 품격과 소중함을 남겨진 사람들에게 알리는 중요한 메세지 입니다. <br/>
              당신의 이야기를 간직하고 영원히 기억할 이 묘비를 아름답게 꾸며주세요. 
          </p>
        </Text>
      </TextArea>
    </Content>
  )
}

const Content = styled.div`
  width: 60rem;
  height: 30rem;
  display: flex;
  flex-direction: row;
  gap: 3.75rem;
  margin: 0 4.25rem;
  align-items: center;

`

const UploadBox = styled.div`
  margin: 2rem;
  img{
    max-width: 13rem;
  }
  background-repeat:no-repeat;
  align-items: center;
  justify-content: center;
  display: flex;

  input[type="file"] {
    width: 10rem;
    position: absolute;
    padding: 0;
    overflow: hidden;
    border: 0;
    z-index: 999;
    opacity: 0;
    
  }
`

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex:60%;
  gap: 1.8rem;
 
`
const Text = styled.div`
  text-align: left;
  font-size: 1.125rem;
  p:nth-child(1){
    font-size: 1.25rem;
    margin-bottom: 0.4rem;
  }

`