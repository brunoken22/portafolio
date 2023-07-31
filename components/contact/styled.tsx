import styled from 'styled-components'
export const ContenedorForm = styled.div`
   width: 100%;
   display: flex; 
   justify-content: space-evenly;
   flex-wrap: wrap;
`
export const DivContact = styled(ContenedorForm)`
   width:auto;
    gap: 2rem;
    flex-direction: column;
    @media(max-width:700px){
      margin: 1rem;
    }
`
export const OneContact = styled(DivContact)`
   align-items: center;
   flex-direction: ${((props:any)=>props.$direction)};
`
export const Form= styled.form`
   display: flex;
   flex-direction: column;
   gap: 1rem;
   margin: 3rem;
   padding: 1rem;
   width: 360px;
   border: 2px solid #252525;
   border-left-width: thick;
   border-bottom-width: thick;
   @media(max-width:700px){
      margin: 0;
      margin-bottom :2rem
   }
`
export const Label = styled.label`
    display: block;
`
export const Input = styled.input`
    height: 30px;
    width: 100%;
    text-indent: 6px;
    border-radius: 10px;
    font-size:1rem;
   &:focus{
      outline: 3px solid #84dcff;
   }
`
export const Textarea=styled.textarea`
   height: 150px;
    width: 100%;
    text-indent: 6px;
    border-radius: 10px;
    font-size:1rem;  
   &:focus{
      outline: 3px solid #84dcff;
   }
`
export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2ren;
  &:hover {
      background-color: #0b7dda;
   }
   &:active {
      background-color: #0b7dda;
   }
`
   