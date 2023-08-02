import { useState } from 'react'
import { Button } from '../Button'
import { CreateModal } from '../CreateModal'

export const TransactionList = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        style={{ alignSelf: 'flex-end', marginRight: '100px' }}
        onClick={() => setIsOpen(true)}
      >
        Nova transação
      </Button>

      <CreateModal isOpen={isOpen} handleClose={() => setIsOpen(false)} />
    </>
  )
}
