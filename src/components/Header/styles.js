import { styled } from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 60px 0;
  gap: 80px;

  width: 100%;
`

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 160px;
`
