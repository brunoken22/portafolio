import styled from 'styled-components';

export const Title = styled.h1`
  color: ${({theme}: any) => theme.color};
  text-align: center;
  font-size: 4rem;
  margin-bottom: 0;
  @media (max-width: 700px) {
    font-size: 3rem;
  }
`;

export const Subtitle = styled.h2`
  /* color:${({theme}: any) => theme.color};
   font-weight:${({theme}: any) => (theme.color === '#000' ? 400 : '')}; 
   font-size: 2rem;
   text-align: center;
   @media(max-width:700px){
      font-size: 1.5rem;
   } */
`;
export const Body = styled.p<any>`
  font-size: ${(props: any) => (props.$size ? props.$size : '1.2rem')};
  font-weight: ${(props: any) => (props.$weight ? props.$weight : 300)};
  font-weight: ${({theme}: any) => (theme.color === '#000' ? 400 : '')};
  margin: ${(props: any) => (props.$margin ? props.$margin : 0)};
  color: ${({theme}: any) => theme.color};
  text-align: center;
  @media (max-width: 700px) {
    margin-left: 2%;
    margin-right: 2%;
    font-size: 1rem;
  }
`;

export const BodyParr = styled.p`
  color: ${({theme}: any) => theme.color};
  position: relative;
  float: left;
  background: ${({theme}: any) => theme.background};
  margin-top: 0;
  font-weight: ${({theme}: any) => (theme.background !== '#fff' ? 100 : 500)};
  text-align: center;

  span {
    position: absolute;
    right: 0;
    width: 0;
    background-color: ${({theme}: any) => theme.background};
    border-left: 1px solid ${({theme}: any) => theme.color};
    margin-right: -7px;
    animation: escribir 5s steps(30) infinite alternate;
  }

  @keyframes escribir {
    from {
      width: 100%;
    }
    to {
      width: 0;
    }
  }
`;
