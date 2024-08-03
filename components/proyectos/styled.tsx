'use client';
import styled from 'styled-components';

export const TemplateProyect = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${({theme}: any) => theme.background};
  color: ${({theme}: any) => theme.color};
  gap: 1rem;
  box-shadow: -2px 0px 5px 4px #5959597a;
  border-radius: 7px;
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
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%;
  height: 230px;
  transition: scale 200ms ease;
  &:hover {
    scale: 1.3;
    opacity: 0.5;
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
  position: relative;
  svg {
    fill: ${({theme}: any) => (theme?.background == '#fff' ? '#000' : '#fff')};
  }
  &:hover svg {
    opacity: 0.6;
  }
`;
export const IconsTecnology = styled.p`
  width: max-content;
  font-size: 0.6rem;
`;
