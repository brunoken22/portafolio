import {
  Label,
  Input,
  Button,
  Form,
  ContenedorForm,
  Textarea,
  DivContact,
  OneContact,
  Enviado,
  Span,
  Enlaces,
  DivEnlaceContact,
} from './styled';
import {Body, Subtitle} from '@/ui/typography';
import {useForm} from 'react-hook-form';
import Linkedin from '@/ui/icons/linkedin.svg';
import Github from '@/ui/icons/github.svg';
import Whatsapp from '@/ui/icons/whatsapp.svg';
import Link from 'next/link';
import {Slide, Fade} from 'react-awesome-reveal';
import {mensaje} from '@/lib/hook';
type FormData = {
  name: string;
  email: string;
  message: string;
};
export function Contact() {
  const {register, setValue, handleSubmit, formState} = useForm<FormData>();

  const onSubmit = async (e: any) => {
    await mensaje({
      name: e.name,
      email: e.email,
      message: e.message,
    });
    setValue('name', '');
    setValue('email', '');
    setValue('message', '');

    alert('mensaje enviado');
  };

  return (
    <ContenedorForm id='contacto'>
      <Slide>
        <DivContact>
          <div>
            <Body>
              <Span>Datos de contacto</Span>
            </Body>
            <Subtitle>¡Trabajemos juntos!</Subtitle>
          </div>
          <OneContact>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <Body>Tlf: </Body>
              <Enlaces href='tel:+541161204047'> +541161204047</Enlaces>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <Body>Email: </Body>
              <Enlaces href='mailto:bruno_am_22@hotmail.com'>
                {' '}
                bruno_am_22@hotmail.com
              </Enlaces>
            </div>
          </OneContact>
          <OneContact $direction='row'>
            <Link
              href='https://github.com/brunoken22'
              aria-label='github'
              target='_blank'>
              <DivEnlaceContact>
                <Github className='github' />
              </DivEnlaceContact>
            </Link>
            <Link
              href='https://www.linkedin.com/in/brunoken18/'
              aria-label='linkedin'
              target='_blank'>
              <DivEnlaceContact>
                <Linkedin className='linkedin' />
              </DivEnlaceContact>
            </Link>
            <Link
              href='https://api.whatsapp.com/send?phone=+541161204047&text=Mi%20nombre%20es%20Bruno,%20y%20soy%20un%20apasionado%20desarrollador%20fullstack%20con%20una%20s%C3%B3lida%20experiencia%20en%20la%20creaci%C3%B3n%20de%20soluciones%20web%20completas%20y%20eficientes.%20Me%20encantar%C3%ADa%20formar%20parte%20de%20su%20equipo%20y%20contribuir%20con%20mi%20experiencia%20y%20entusiasmo%20al%20%C3%A9xito%20de%20sus%20proyectos.'
              aria-label='whatsapp'
              target='_blank'>
              <DivEnlaceContact>
                <Whatsapp className='whatsapp' />
              </DivEnlaceContact>
            </Link>
          </OneContact>
        </DivContact>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label htmlFor='name'>Nombre</Label>
            <Input
              type='text'
              {...register('name')}
              id='name'
              placeholder='Bruno Ken'
              required></Input>
          </div>
          <div>
            <Label htmlFor='email'>Email</Label>
            <Input
              type='email'
              {...register('email')}
              id='email'
              placeholder='Bruno_am_22@hotmail.com'
              required></Input>
          </div>
          <div>
            <Label htmlFor='message'>Mensaje</Label>
            <Textarea {...register('message')} id='message' required></Textarea>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}>
            <Button aria-label='Enviar'>Enviar</Button>
          </div>

          {formState.isSubmitted && (
            <div>
              <Enviado>Formulario enviado, Revisa tu correo</Enviado>
            </div>
          )}
        </Form>
      </Slide>
    </ContenedorForm>
  );
}
