import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <h1>Страница информации</h1>
      <p>
        Иди дела делай, информацию он смотрит
      </p>
      <button className="btn" onClick={() => history.push('/')}>
        ВОЗВРАЩАЕМСЯ
      </button>
    </>
  )
}
