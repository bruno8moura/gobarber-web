import React from 'react';
import { FiMail, FiUser, FiArrowLeft, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import logo from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

const SignIn: React.FC = () => {
  function handleSubmit(data: Object): void {
    console.log('handleSubmit: ', data);
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" type="text" />
          <Input name="email" icon={FiMail} placeholder="E-mail" type="text" />
          <Input
            name="senha"
            icon={FiLock}
            placeholder="Senha"
            type="password"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="login">
          <FiArrowLeft />
          Voltar para o logon
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
