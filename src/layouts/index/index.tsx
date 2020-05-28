import React from 'react'
import Header, { TitleActive } from 'components/header'

type Params = {
  children: React.ReactNode
}

export default ({ children }: Params) => {
  return (
    <div>
      <Header currentActive={TitleActive.Index} />
      {children}
    </div>
  )
}
