import React from 'react'

type IProps = {
  title: string
  date: string
  summary: string
}

export default (params: IProps) => {
  const { title, date, summary } = params
  return (
    <div>
      <span>{date}</span>
      <span>{title}</span>
      <span>{summary}</span>
    </div>
  )
}
