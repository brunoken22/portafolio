import {Label,Input,Button,Form,ContenedorForm}from './styled'
import { Body,Subtitle } from '@/ui/typography'

export function Contact(){
   return (
      <ContenedorForm id="3">
         <Subtitle>Contacto</Subtitle>
         <Form>
            <div>
               <Label>Nombre</Label>
               <Input></Input>
            </div>
            <div>
               <Label>Email</Label>
               <Input></Input>
            </div>
            <div>
               <Label>Mensaje</Label>
               <textarea style={{width:"100%"}}></textarea>
            </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
               <Button>Enviar</Button>
            </div>
         </Form>
      </ContenedorForm>
   )
}