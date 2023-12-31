import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

  const [form, setForm] = useState({
    email: {
      hasChanged: false,
      value: ""
    },
    password: {
      hasChanged: false,
      value: ""
    }
  })

  const isEmailValid = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  const navigate = useNavigate();
  const goToRegisterPage = () => {
    navigate('/register');
  }

  return (
    <main className='centralize'>
      <form>
        <input type="email" placeholder='Email' value={form.email.value}
          onChange={event => setForm({
            ...form, email: {
              hasChanged: true, value: event.target.value
            }
          })}
          data-testid='email' />
        {
          form.email.hasChanged && !form.email.value
          && <div data-testid="email-required" className='textWhite'>Email é obrigatório !</div>
        }
        {
          form.email.hasChanged && !isEmailValid(form.email.value)
          && <div data-testid="email-invalid" className='textWhite'>Email inválido !</div>
        }

        <input type="password" placeholder='Senha' value={form.password.value}
          onChange={event => setForm({
            ...form, password: {
              hasChanged: true, value: event.target.value
            }
          })}
          data-testid="password" />
        {
          form.password.hasChanged && !form.password.value
          && <div data-testid="password-required" className='textWhite'>Senha é obrigatória !</div>
        }
        <button type="button" className='clear'
          data-testid="recover-password-button"
          disabled={!isEmailValid(form.email.value)}>
          Recuperar senha
        </button>
        <button type="button" className='solid'
          data-testid="login-button"
          disabled={!isEmailValid(form.email.value) || !form.password.value}>
          Entrar
        </button>
        <button 
            type="button" 
            className='outline' 
            data-testid="register-button"
            onClick={goToRegisterPage}>
          Registrar
        </button>
      </form>
    </main>
  );
}

export default LoginPage;