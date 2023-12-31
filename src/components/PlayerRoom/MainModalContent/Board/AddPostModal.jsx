import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {IoIosClose} from 'react-icons/io'
import IconStyledButton from '../../../ui/IconStyledButton'
import {PiImageSquareBold} from 'react-icons/pi'
import { addBucketlist } from '../../../../apis/api/PlayerRoom/bucketlist'
import { getRandomX, getRandomY } from '../../../../apis/utils/PlayerRoom/getRandomPosition'
import { useAuthContext } from '../../../../contexts/AuthContext'
import axios from 'axios'

export default function AddPostModal({isImagePost, setOpenModal}) {
  const [post, setPost] = useState({})
  const [photo, setPhoto] = useState()
  const formData = new FormData()
  const {token} = useAuthContext()

  const handleChange = (e) => {
    const {name, value, files} = e.target
    setPost((post) => ({...post, 'title': 'title', 'photo': '', 'xLoc': getRandomX, 'yLoc': getRandomY, [name]:value}))
    if(name === 'file') {
      setPhoto(files && files[0]);
      setPost((post) => ({...post, 'photo': files[0]}))
      return
    }
    console.log("post", post)
  }

  const closeModal = () => {
    setOpenModal(false)
  }

  const handleSubmit = async (e) => {
    for ( const key in post ) {
      formData.append(key, post[key]);
    }
    console.log("formData", formData)
    closeModal()
    await axios
    .post('/api/bucketlist/add', formData, {
      headers: {
        'Content-Type' : 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
      },
      withCredentials: true,
    })
    .then((response) => {
      console.log(response)
      
    }).catch(function (error) {
        // 오류발생시 실행
      console.log(error.message)
    })
  }


  return (
    <>
      <Overlay>
        <ModalContainer>
          <CloseHeader>
            <IoIosClose onClick={() => setOpenModal()}/>
          </CloseHeader>  
          <Wrapper>
            <Header>
              <p>버킷리스트 내용을 작성하세요.</p>
              <p>해야하는 목록에 대한 내용을 작성하고 보드에 붙여보세요.</p>
            </Header>
            <Main method='POST'>
              <FormInput 
                type={"text"}
                id='content' 
                name='content' 
                value={post.content ?? ''}
                onChange={handleChange}
                placeholder='내용을 입력하세요.' 
                spellCheck="false"
                required
              />
              <ButtonWrapper>
                {photo &&
                  <PhotoNameBox>
                    <PiImageSquareBold/>
                    <p>{photo.name}</p>
                  </PhotoNameBox>
                }
                {isImagePost && 
                  <UploadBox>
                    <p>+ 파일 추가하기</p>
                    <input type="file" name='file' accept='.png, .jpg,image/*' onChange={handleChange}/>
                  </UploadBox>
                }
                <IconStyledButton width={'100%'} text={'생성하기'} fontSize={'1.25rem'} fontWeight={'700'} color={'white'} btnColor={'var(--main-color)'} handleOnClick={handleSubmit} />
              </ButtonWrapper>
            </Main>
          </Wrapper>
        </ModalContainer>
      </Overlay>

    </>


  )
}


const Overlay = styled.div`
  position: absolute;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  z-index:999;
`

const ModalContainer = styled.div`
  width: 40%;
  height: fit-content;
  outline: 2px solid white;
  filter: drop-shadow(0px 4px 45px rgba(0, 0, 0, 0.10));
  background: linear-gradient(237deg, rgba(0, 0, 0, 0.51) -23.03%, rgba(0, 0, 0, 0.12) 119.63%);
  backdrop-filter: blur(60px);
  border-radius: 2.5rem;
`

const CloseHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1.75rem 2.25rem 0 2.25rem;  

  svg {
    color: white;
    font-size: 2rem;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const Header = styled.div`
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  p:first-child {
    font-size: 1.5rem;
    font-weight: 600;
  }

  p:last-child {
    font-size: 1.25rem;
    font-weight: 400;
  }
`

const Main = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 2rem 3.75rem 2rem;
  gap: 1rem;
`

const FormInput = styled.textarea`
  width: 100%;
  height: 10rem;
  box-sizing: border-box;
  padding: 1rem;
  outline: none;
  border-radius: 0.75rem;
  color: var(--font-gray-3);
  background-color: #f3f3f3;
  font-size: 1rem;  

  &::placeholder {
    color: var(--font-gray-1);
  }

`
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const PhotoNameBox = styled.div`
  width: 100%;
  background-color: #CCC;
  border-radius: 0.75rem;
  padding: 1.25rem 1.88rem;
  display: flex;
  color: #666;
  font-weight: 500;
  font-size: 1.25rem;  
  box-sizing: border-box;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`

const UploadBox = styled.div`
  width: 100%:
  height: 3.75rem;
  background-color: var(--main-color-2);
  border-radius: 0.75rem;
  color: white;
  padding: 1rem 0;
  font-weight: 500;
  font-size: 1.25rem; 
  justify-content: center;
  display: flex;
  align-items: center;
  position: relative;

  input[type="file"] {
    width: 100%;
    position: absolute; 
    padding: 0;
    overflow: hidden;
    border: 0;
    z-index: 999;
    opacity: 0;
  }
`