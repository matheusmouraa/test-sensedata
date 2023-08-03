import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 200px;

  background: ${props => props.color};
  border-radius: 100%;
  box-shadow: 10px 10px 7px -1px rgba(0, 0, 0, 0.4);
  color: #f5f8fa;
`

export const Title = styled.strong`
  font-size: 30px;
  font-weight: 600;
`

export const Value = styled.strong`
  margin-top: 16px;
  font-size: 30px;
  font-weight: 600;
`
