'use client';
import styled from 'styled-components';

export const TemplateProyect = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${({theme}: any) => theme.background};
  color: ${({theme}: any) => theme.color};
  gap: 1rem;
  box-shadow: -2px 0px 5px 4px #5959597a;
  border-radius: 15px;
  width: 320px;

  @media (max-width: 420px) {
    & {
      width: 90vw;
    }
  }
`;
export const TemplateLoadingProyect = styled(TemplateProyect)`
  width: 320px;
  height: 350px;
  box-shadow: none;
  border: none;
  background-color: transparent;
  &:hover {
    opacity: 1;
    transform: none;
    box-shadow: none;
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
`;
export const ImageProyect = styled.img`
  object-fit: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 100%;
  height: 230px;
  transition: scale 200ms ease;
  &:hover {
    scale: 1.3;
  }
`;
export const Botton = styled.button<{$isLike: boolean}>`
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  svg {
    fill: ${({$isLike}) => ($isLike ? 'tomato' : '#ddd')};
  }
  &:hover svg {
    fill: tomato;
    width: 45px;
    height: 45px;
    z-index: 10;
  }

`;
export const LinkGthub = styled.a<any>`
  width: 40px;

  svg {
    fill: ${({theme}: any) => (theme?.background == '#fff' ? '#000' : '#fff')};
  }
  &:hover svg {
    opacity: 0.6;
  }
`;
export const IconsTecnology = styled.p`
  width: max-content;
  height: 30px;
  font-size: 0.8rem;
  background-color: ${({theme}) =>
    theme.background !== '#fff' ? '#573dbf' : '#e7e7e7'};
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.2rem;
  border-radius: 20px;
  svg {
    height: 20px;
    width: auto;
  }
`;
// &:hover > .templateProyect:not(:hover) {
//   opacity: 0.4; /* Opacidad reducida para los hijos que no están bajo hover */
// }

// .templateProyect:hover {
//   opacity: 1; /* Restaurar la opacidad al hijo que está bajo hover */
// }
