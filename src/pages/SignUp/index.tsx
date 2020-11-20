/* packages */
import React from 'react';

/* icons */
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

/* images */
import logo from '../../assets/logo.svg';

/* components */
import Input from '../../components/Input';
import Button from '../../components/Button';

/* styles */
import { Background, Container, Content } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logo} alt="GoInk" />
      <form>
        <h1>Faça seu cadastro</h1>
        <Input name="name" icon={FiUser} placeholder="Nome" />

        <Input name="email" icon={FiMail} placeholder="E-mail" />

        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="login">
        <FiArrowLeft />
        Voltar para o login
      </a>
    </Content>
  </Container>
);

export default SignUp;
