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
} from './styled';
import {Body, Subtitle} from '@/ui/typography';
import {useForm} from 'react-hook-form';
import Linkedin from '@/ui/icons/linkedin.svg';
import Github from '@/ui/icons/github.svg';
import Link from 'next/link';
import {Slide} from 'react-awesome-reveal';
import {mensaje} from '@/lib/hook';
type FormData = {
  name: string;
  email: string;
  message: string;
};
export function Contact() {
  const {register, setValue, handleSubmit, formState, reset} =
    useForm<FormData>();

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
    <ContenedorForm id='2'>
      <Slide triggerOnce>
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
              <Github />
            </Link>
            <Link
              href='https://www.linkedin.com/in/brunoken18/'
              aria-label='linkedin'
              target='_blank'>
              <Linkedin />
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
              placeholder='Bruno Ken'></Input>
          </div>
          <div>
            <Label htmlFor='email'>Email</Label>
            <Input
              type='email'
              {...register('email')}
              id='email'
              placeholder='Bruno_am_22@hotmail.com'></Input>
          </div>
          <div>
            <Label htmlFor='message'>Mensaje</Label>
            <Textarea {...register('message')} id='message'></Textarea>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Button>Enviar</Button>
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
