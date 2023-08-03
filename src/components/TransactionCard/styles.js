import { styled } from 'styled-components'

import { Trash, TrendingDown, TrendingUp } from 'react-feather'

export const Container = styled.tr``

export const Label = styled.td`
  padding: 16px 32px;

  text-align: center;
  color: ${props =>
    props.type === 'deposit'
      ? '#51DB61'
      : props.type === 'withdraw'
      ? '#F2594E'
      : '#131313'};
`

export const UpIcon = styled(TrendingUp)`
  margin-left: 6px;
`

export const DownIcon = styled(TrendingDown)`
  margin-left: 6px;
`

export const DeleteIcon = styled(Trash)`
  cursor: pointer;
`
