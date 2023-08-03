import { createGlobalStyle, styled } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    transition: all 300ms linear 0s;
  }
`

export const MainContent = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-x: none;

  height: 100vh;
  width: 100vw;

  background: #f5f8fa;
  overflow-x: hidden;
  overflow-y: scroll;

  color: #131313;
`
