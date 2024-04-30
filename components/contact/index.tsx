'use client';
import {
  Label,
  Input,
  Button,
  Form,
  ContenedorForm,
  Textarea,
  DivContact,
  OneContact,
  Span,
  Enlaces,
  DivEnlaceContact,
  ContainerThankYou,
  DivThankYou,
  DivHandSvg,
  SpanRequiredForm,
} from './styled';
import {Body, Subtitle} from '@/ui/typography';
import {SubmitHandler, useForm} from 'react-hook-form';
import Linkedin from '@/ui/icons/linkedin.svg';
import Github from '@/ui/icons/github.svg';
import CloseSvg from '@/ui/icons/close.svg';
import Whatsapp from '@/ui/icons/whatsapp.svg';
import Link from 'next/link';
import {Slide} from 'react-awesome-reveal';
import {mensaje} from '@/lib/hook';
import {ButtonCloseMessage} from '@/ui/button';
import {useEffect, useState} from 'react';
import EmailSvg from '@/ui/icons/email.svg';
import PhoneSvg from '@/ui/icons/phone.svg';

type FormData = {
  name: string;
  email: string;
  message: string;
};
export function Contact() {
  const [openHandLike, setOpenHandLilke] = useState(false);
  const {register, setValue, handleSubmit, reset, formState} =
    useForm<FormData>();
  useEffect(() => {
    if (formState.isSubmitted) {
      setOpenHandLilke(true);
    }
  }, [formState.isSubmitted]);
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await mensaje({
      name: data.name,
      email: data.email,
      message: data.message,
    });
    setValue('name', '');
    setValue('email', '');
    setValue('message', '');
    reset();
  };

  return (
    <ContenedorForm id='contacto'>
      <Slide triggerOnce>
        <DivContact>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Body>
              <Span>Datos de contacto</Span>
            </Body>
            <Subtitle>¡Trabajemos juntos!</Subtitle>
          </div>
          <OneContact>
            <Enlaces href='tel:+541161204047'>
              <PhoneSvg /> +541161204047
            </Enlaces>
            <Enlaces href='mailto:bruno_am_22@hotmail.com'>
              <EmailSvg />
              bruno_am_22@hotmail.com
            </Enlaces>
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
              href='https://api.whatsapp.com/send?phone=+541161204047&text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20?'
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
            <Label htmlFor='name'>
              Nombre <SpanRequiredForm>*</SpanRequiredForm>
            </Label>
            <Input
              type='text'
              {...register('name')}
              id='name'
              placeholder='Bruno Ken'
              required></Input>
          </div>
          <div>
            <Label htmlFor='email'>
              Email <SpanRequiredForm>*</SpanRequiredForm>
            </Label>
            <Input
              type='email'
              {...register('email')}
              id='email'
              placeholder='Bruno_am_22@hotmail.com'
              required></Input>
          </div>
          <div>
            <Label htmlFor='message'>
              Mensaje <SpanRequiredForm>*</SpanRequiredForm>
            </Label>
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
        </Form>
      </Slide>
      {openHandLike && (
        <ContainerThankYou>
          <DivThankYou>
            <div
              style={{width: '100%', display: 'flex', justifyContent: 'end'}}>
              <ButtonCloseMessage onClick={() => setOpenHandLilke(false)}>
                <CloseSvg />
              </ButtonCloseMessage>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}>
              <DivHandSvg>
                <img
                  src='/handLike.svg'
                  alt='HandLike'
                  aria-label='Hand Like'
                  width={150}
                  height={150}
                />
              </DivHandSvg>
              <h2 style={{fontSize: '2rem'}}>Gracias por contactarme</h2>
              <p>
                ¡Gracias por ponerte en contacto! Apreciamos tu interés y me
                pondré en contacto contigo lo antes posible.
              </p>
            </div>
          </DivThankYou>
        </ContainerThankYou>
      )}
    </ContenedorForm>
  );
}
