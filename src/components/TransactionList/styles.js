import { styled } from 'styled-components'

import { ArrowDown } from 'react-feather'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  max-width: 1300px;
`

export const Table = styled.table`
  width: 100%;

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
