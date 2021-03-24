import block from 'bem-cn'
import React from 'react'
import './AuthPage.css'

interface Props {
}

const b = block('auth-page')

export const AuthPage: React.FC<Props> = () => {
  return (
    <form className={b()}>
      <div className={b('header')}>Вход</div>
      <input placeholder="логин" type="text" name="login" className={b('login-input')}/>
      <input placeholder="пароль" type="text" name="password" className={b('password-input')}/>
      <input type="submit" value="Авторизация" className={b('submit')}/>
    </form>
  )
}
