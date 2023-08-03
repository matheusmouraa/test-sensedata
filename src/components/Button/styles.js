import { styled } from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;

  min-width: 130px;
  height: 41px;

  background: #1890ff 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 6px #00000029;
  border: 0;
  border-radius: 6px;

  font-size: 20px;
  font-weight: 400;
  white-space: nowrap;
  color: #f5f8fa;

  cursor: pointer;

  :hover {
    opacity: 0.85;
  }
`
