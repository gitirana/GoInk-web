/* packages */
import React from 'react';

/* icons */
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

/* images */
import logo from '../../assets/logo.svg';

/* components */
import Input from '../../components/Input';
import Button from '../../components/Button';

/* styles */
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="GoInk" />
      <form>
        <h1>Faça seu logon</h1>
        <Input name="email" icon={FiMail} placeholder="E-mail" />

        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

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
