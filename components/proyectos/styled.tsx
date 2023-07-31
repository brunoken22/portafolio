import styled from 'styled-components'

export const TemplateProyect = styled.div`
   display: flex;
   flex-direction: column;
   color: #fff;
   gap: 3rem;
   border: 2px solid #fff;

`
export const DivProyectos = styled.div`
   display: flex;
   gap: 4rem;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
`
export const Botton = styled.button`

   border: 0;
   background: transparent;
   cursor: pointer;
   fill: lightcyan;

   &:hover{
      fill: tomato;
   }
   &:focus{
      fill: tomato;
   }
`