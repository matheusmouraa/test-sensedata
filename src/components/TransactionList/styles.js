import { styled } from 'styled-components'

export const Table = styled.table`
  width: 100%;
  max-width: 1300px;

  background: #5e5e5e;

  /* td {
    padding: 1rem 2rem;
    border: 0;
    background-color: var(--shape);
    border-radius: 0.25rem;
  }

  span {
    cursor: pointer;
  }

  .withdraw {
    color: var(--red);
  }

  .deposit {
    color: var(--green);
  }

  @media (max-width: 600px) {
    td {
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
  } */
`

export const cardContainer = styled.tr`
  border-bottom: 3px solid #ddd;
  display: block;
  margin-bottom: 0.625em;
`

export const Content = styled.th`
  font-weight: 400;
  padding: 1rem 2rem;
  text-align: left;
  line-height: 1.5rem;
`

export const TableHeader = styled.thead`
  @media (max-width: 600px) {
    overflow: hidden;
    position: absolute;
    width: 1px;
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }
`

export const TableBody = styled.tbody``
