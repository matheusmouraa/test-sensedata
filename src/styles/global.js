import { createGlobalStyle, styled } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    color: #f5f8fa;
    transition: all 300ms linear 0s;
  }
`

export const MainContent = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;

  height: 100vh;
  width: 100vw;

  background: #333;
`
