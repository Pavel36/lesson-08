import block from 'bem-cn'
import React from 'react'
import './ReferencesPage.css'

interface Props {
}

const b = block('references-page')

export const ReferencesPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      References
    </div>
  )
}
