import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="GoBarber" />
      <form>
        <h1>Faça seu logon</h1>

        <Input name="email" icon={FiMail} placeholder="Email" type="text" />
        <Input name="senha" icon={FiLock} placeholder="Senha" type="password" />

        <Button type="submit">Entrar</Button>
        <a href="forgot">Esqueci minha senha</a>
      </form>
      <a href="login">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;