/* packages */
import React, { useCallback, useContext, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

/* icons */
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

/* images */
import logo from '../../assets/logo.svg';

/* components */
import Input from '../../components/Input';
import Button from '../../components/Button';

/* validations */
import { AuthContext } from '../../context/AuthContext';
import getValidationErrors from '../../utils/getValidationErrors';

/* styles */
import { Background, Container, Content } from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useContext(AuthContext);

  const handleSubmit = useCallback(
    async (data: object) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('Email obrigatório')
            .email('Email inválido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        console.log('submit');
        signIn();
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [signIn],
  );
  return (
    <Container>
      <Content>
        <img src={logo} alt="GoInk" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>
        <a href="login">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
