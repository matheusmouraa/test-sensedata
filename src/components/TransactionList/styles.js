import { styled } from 'styled-components'

import { ArrowDown } from 'react-feather'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1000px) {
    width: 100%;
  }
`

export const TableContainer = styled.div`
  width: 100%;
  max-width: 1300px;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    gap: 20px;

    overflow: scroll;
  }
`

export const Table = styled.table`
  width: 100%;
  max-width: 1300px;

  overflow: scroll;

  background: #fff;
`

export const cardContainer = styled.tr``

export const Content = styled.th`
  position: relative;

  font-weight: 400;
  padding: 16px 32px;

  cursor: pointer;
`

export const TableHeader = styled.thead``

export const TableBody = styled.tbody``

export const ArrowIcon = styled(ArrowDown)`
  position: absolute;
  right: -1;
`
