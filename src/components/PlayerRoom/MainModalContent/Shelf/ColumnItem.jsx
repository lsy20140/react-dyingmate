import React from 'react'
import styled from 'styled-components'

export default function ColumnItem({title, content, link}) {
  return (
    <ItemBox>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <a href={link}/>
    </ItemBox>
  )
}

const ItemBox = styled.div`
  width: 32rem;
  height: 16rem;
  background-color: white;
  border-radius: 1.25rem;
  color: var(--font-gray-3);
  box-sizing: border-box;

  
`

const Content = styled.p`
  width: 32rem;
  word-break:break-all;
`

const Title = styled.p`

  font-size: 1.5rem;
  font-style: 700;

`

