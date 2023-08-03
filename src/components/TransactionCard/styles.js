import { styled } from 'styled-components'

export const Container = styled.tr`
  @media (max-width: 600px) {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }
`

export const Label = styled.td`
  padding: 1rem 2rem;
  border: 0;
  border-radius: 0.25rem;

  @media (max-width: 600px) {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;
    font-size: 1rem;

    &:before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`
