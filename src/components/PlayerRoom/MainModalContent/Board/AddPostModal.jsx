import React, { useState } from 'react'
import styled from 'styled-components'
import {IoIosClose} from 'react-icons/io'
import IconStyledButton from '../../../ui/IconStyledButton'
import { addBucketlist } from '../../../../apis/api/PlayerRoom/bucketlist'

export default function AddPostModal({openModal, setOpenModal, pos}) {
  const [content, setContent] = useState('')

  const handleChange = (e) => {
    setContent(e.target.value)

  }

  const handleSubmit = async (e) => {
    e.preventDefault()  
    // 저장

    try{
      const {data} = await addBucketlist(content, pos)
      return data
    }
    catch (error) {
      console.log(error)
    }
  }

  const handleModal = () => {
    setOpenModal(!openModal)
  }


  return (
    <>
      {
        openModal && 
        <Overlay>
        <ModalContainer>
          <CloseHeader>
            <IoIosClose onClick={handleModal}/>
          </CloseHeader>  
          <Wrapper>
            <Header>
              <p>버킷리스트 내용을 작성하세요.</p>
              <p>해야하는 목록에 대한 내용을 작성하고 보드에 붙여보세요.</p>
            </Header>
            <Main method='POST'>
              <FormInput 
                type={"text"}
                id='bucketlist' 
                name='bucketlist' 
                value={content ?? ''}
                onChange={handleChange}
                placeholder='내용을 입력하세요.' 
                spellCheck="false"
                required
              />
              <ButtonWrapper>
                <IconStyledButton width={'100%'} text={'생성하기'} fontSize={'1.25rem'} fontWeight={'700'} color={'white'} btnColor={'var(--main-color)'} handleOnClick={() => handleSubmit} />
              </ButtonWrapper>
            </Main>
          </Wrapper>
        </ModalContainer>
      </Overlay>
      }
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