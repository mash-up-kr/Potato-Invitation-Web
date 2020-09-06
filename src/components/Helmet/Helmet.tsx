import React from 'react'
import { Helmet } from 'react-helmet-async'

interface Props {
  title: string
  description: string
}

const ReactHelmet: React.FC<Props> = ({ title, description }) => {
  return (
    <Helmet defaultTitle="나와 초대장">
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}
export default ReactHelmet
