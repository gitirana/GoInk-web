/* packages */
import styled from 'styled-components';

/* images */
import backgroundImage from '../../assets/Imagem.png';
// import inkMark from '../../assets/ink-mark.svg';
// import image from '../../assets/dark-gray.png';

export const Container = styled.div`
  height: 100vh;

  background: #0d0d0d;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  width: 100%;
  max-width: 700px;

  img {
    margin-top: 40px;
  }

  form {
    margin: 40px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: #ff9000;
      }
    }
  }

  > a {
    color: #ff9000;
    display: block;
    margin-top: 10px;
    text-decoration: none;
    transition: color 0.2s;
    font-weight: 500;

    display: flex;
    align-items: center;

    &:hover {
      color: #f4ede8;
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background-image: url(${backgroundImage});
  background-size: cover;
`;
