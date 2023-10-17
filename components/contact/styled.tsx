import styled, {keyframes} from 'styled-components';
const msj = keyframes`
   0%{
      color:#fff;
   }
   50%{
      color:#8ff79d;

   }
   100%{
      color:#00ff22;
   }
`;
export const ContenedorForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
`;
export const DivContact = styled(ContenedorForm)`
  width: auto;
  gap: 2rem;
  flex-direction: column;
  @media (max-width: 700px) {
    margin: 1rem;
  }
`;
export const OneContact = styled(DivContact)<any>`
  align-items: center;
  flex-direction: ${(props: any) => props.$direction};
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 3rem;
  padding: 1rem;
  width: 360px;
  border: 2px solid #252525;
  border-left-width: thick;
  border-bottom-width: thick;
  @media (max-width: 700px) {
    margin: 0;
    margin-bottom: 2rem;
  }
`;
export const Label = styled.label`
  display: block;
`;
export const Input = styled.input`
  height: 30px;
  width: 100%;
  text-indent: 6px;
  border-radius: 10px;
  font-size: 1rem;
  &:focus {
    outline: 3px solid #84dcff;
  }
`;
export const Textarea = styled.textarea`
  text-indent: 6px;
  border-radius: 10px;
  font-size: 1rem;
  max-width: 100%;
  min-width: 100%;
  max-height: 310px;
  min-height: 100px;
  &:focus {
    outline: 3px solid #84dcff;
  }
`;
export const Span = styled.span`
  color: ${({theme}: any) =>
    theme.color == '#000' ? '#7868fd' : 'greenyellow'};
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({theme}: any) =>
    theme.background == '#fff' ? '#a29ae7' : '#3291df'};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2ren;
  &:hover {
    background-color: #4793d1;
  }
  &:active {
    background-color: #2d99f1;
  }
`;

export const Enviado = styled.p`
  text-align: center;
  animation: ${msj} 2s ease 5s infinite normal forwards;
  box-shadow: 0px 10px 10px 1px;
`;
export const Enlaces = styled.a`
  color: ${({theme}: any) => theme.color};
  text-decoration: none;
`;

export const DivEnlaceContact = styled.div<any>`
  svg {
    fill: ${({theme}: any) => theme.color};
  }
  .github:hover {
    fill: #e196ff;
  }
  .whatsapp:hover {
    fill: #5cb95c;
  }
  .linkedin:hover {
    fill: #4b9cec;
  }
`;
