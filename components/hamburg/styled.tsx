import styled from 'styled-components'

export const DivHamburg = styled.div`
   color:${({theme}:any)=>theme.color};
   background-color:${({theme}:any)=>theme.background};
   display: flex;
   flex-direction: column;
   gap: 0.3rem;
   position: fixed;
   top: 8%;
   right: 0;
   left: 40%;
   bottom: 0;
   justify-content: center;
   align-items: center;
   z-index: 10;
   border-radius: 50% 0 0 50%;


`
export const DivElemnt = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   height: 20%;
   font-size: 1.5rem;
   color:${({theme}:any)=>theme.color};
   background-color:${({theme}:any)=>theme.background};

`
export const Enlaces = styled.a`
   text-decoration: none;
   color:${({theme}:any)=>theme.color};
   background-color:${({theme}:any)=>theme.background};
   font-weight: 500;
   cursor: pointer;
   &:after {
      content: "";
      display: block;
      margin: auto;
      height: 2px;
      width: 0px;
      transition: all .5s;
   }
   &:hover:after {
      width: 100%;
      background: #FF6038;
   }
`