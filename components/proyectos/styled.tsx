import styled from 'styled-components';

export const TemplateProyect = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({theme}: any) => theme.background};
  color: ${({theme}: any) => theme.color};
  gap: 1rem;
  box-shadow: -2px 0px 5px 4px #5959597a;
  transition: transform 200ms ease;
  border-radius: 15px;
  width: min-content;
  &:hover {
    box-shadow: 0px 0px 10px 10px #5959597a;
    opacity: 0.8;
    transform: scale(1.1);
  }
`;
export const TemplateLoadingProyect = styled(TemplateProyect)`
  width: 320px;
  height: 380px;
  box-shadow: none;
  border: none;
  background-color: transparent;
  &:hover {
    opacity: 1;
    transform: none;
  }
`;
export const Loader = styled.div`
  @keyframes loading {
    0% {
      left: -100%;
    }

    100% {
      left: 100%;
    }
  }

  width: 100%;
  height: 100%;

  .space {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    gap: 1rem;
  }

  .loading {
    position: relative;
    background-color: #1f1f32;
    width: 5%;
    height: 100%;
    animation: loading 5s steps(40) infinite;
  }
`;
export const DivProyectos = styled.div`
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  @media (max-width: 570px) {
    padding: 0.5rem;
  }
`;
export const ImageProyect = styled.img`
  object-fit: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 320px;
  height: 230px;
  @media (max-width: 470px) {
    width: 90vw;
  }
`;
export const Botton = styled.button<any>`
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  svg {
    fill: ${(prev) => (prev.$isLike ? 'tomato' : '#ddd')};
  }
  &:hover svg {
    fill: tomato;
    width: 45px;
    height: 45px;
    z-index: 10;
  }
  &:focus svg {
    fill: tomato;
    width: 45px;
    height: auto;
    z-index: 10;
  }
`;
export const LinkGthub = styled.a<any>`
  width: auto;
  svg {
    fill: ${({theme}: any) => (theme?.background == '#fff' ? '#000' : '#fff')};
  }
  &:hover svg {
    opacity: 0.6;
  }
`;
