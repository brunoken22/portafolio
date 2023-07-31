import {Label,Input,Button,Form,ContenedorForm,Textarea,DivContact,OneContact}from './styled'
import { Body,Subtitle } from '@/ui/typography'
import { useForm } from "react-hook-form";
import Linkedin from '@/ui/icons/linkedin.svg'
import Github from '@/ui/icons/github.svg'
import Link from 'next/link';
import {  Slide } from "react-awesome-reveal";

type FormData = {
   name: string;
   email: string;
};
export function Contact(){
   const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
   const onSubmit = handleSubmit(data => console.log(data));
 

   return (
      <ContenedorForm id="3">
         <Slide>
         <DivContact>
            <div>
               <Body><span style={{color:"greenyellow"}}>Datos de contacto</span></Body>
               <Subtitle>¡Trabajemos juntos!</Subtitle>
            </div>
            <OneContact>
               <div style={{display: "flex",alignItems:"center"}}><Body>Tlf: </Body><a href="tel:+541161204047" style={{color:"#fff",textDecoration:"none"}}> +541161204047</a></div>
               <div style={{display: "flex",alignItems:"center"}}><Body>Email: </Body><a href="bruno_am_22@hotmail.com" style={{color:"#fff",textDecoration:"none"}}> bruno_am_22@hotmail.com</a></div>
            </OneContact>
            <OneContact $direction="row">
               <Link href="https://github.com/brunoken22" target="_blank"><Github/></Link>
               <Link href="https://www.linkedin.com/in/brunoken18/" target="_blank"><Linkedin/></Link>   
            </OneContact>
         </DivContact>
         <Form>
            <div>
               <Label htmlFor='name'>Nombre</Label>
               <Input type='text' {...register("name")} placeholder='Bruno Ken'></Input>
            </div>
            <div>
               <Label>Email</Label>
               <Input type='email' {...register("email")} placeholder='Bruno_am_22@hotmail.com'></Input>
            </div>
            <div>
               <Label>Mensaje</Label>
               <Textarea ></Textarea>
            </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
               <Button>Enviar</Button>
            </div>
         </Form>
         </Slide>
      </ContenedorForm>
   )
}