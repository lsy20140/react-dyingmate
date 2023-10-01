import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import {ReactComponent as MainIcon} from '../../../../assets/icons/PlayerRoom/Diary/main_icon.svg'
import UploadFrameSrc from '../../../../assets/img/PlayerRoom/upload_frame.png'
import UploadBoxSrc from '../../../../assets/img/PlayerRoom/upload_box.png'

export default function StepThree({setData}) {
  const fileInput = useRef(null)
  const [selectImg, setSelectImg] = useState()

  const handleUploadFile = () => {
    // 파일 업로드 api 연동
  }
  const handleChange = (e) => {
    const {name, value, files} = e.target;

    if(name === 'file') {
      setSelectImg(files && files[0]);
      console.log("files", files[0])
      setData((data) => ({...data, 'portrait_photo': files[0]}))
      return;
    }

  };

  return (
    <Content>
      <UploadBox>
        <img src={UploadFrameSrc} onClick={handleUploadFile}/>
        <img src={selectImg ? URL.createObjectURL(selectImg) : UploadBoxSrc } />
        <input type="file" name='file' ref={fileInput} accept='.png, .jpg,image/*' onChange={handleChange}/>
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
  width: 15rem;
  height: 20rem;
  background-repeat:no-repeat;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
  img:nth-child(1){
    position: absolute;
    width: 14.4375rem;
    height: 20rem;
  }
  img:nth-child(2){
    position: absolute;
    width: 10.8rem;
    height: 16.5rem;
    border-radius: 0.25rem;
  }
  

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