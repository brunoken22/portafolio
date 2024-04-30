import {BodyMain, Title, BodyParr} from '@/ui/typography';
import {
  ContainerMain,
  EnlaceArrow,
  ContainerMe,
  DivName,
  DivConnect,
  ImageMe,
} from '@/ui/contenedores';
import Arrow from '@/ui/icons/arrow.svg';
import {DivEnlaceContact} from '../contact/styled';
import Linkedin from '@/ui/icons/linkedin.svg';
import Github from '@/ui/icons/github.svg';
import Whatsapp from '@/ui/icons/whatsapp.svg';
import Link from 'next/link';

export default function Main() {
  return (
    <ContainerMain id='inicio'>
      <ContainerMe>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ImageMe src={'/hero.webp'} alt='hero' />
        </div>
        <div>
          <DivName>
            <Title>Bruno ken</Title>
            <BodyParr>
              Software Developer <span>&#160;</span>
            </BodyParr>
          </DivName>
          <BodyMain>
            Tengo sólido conocimiento en desarrollo Fullstack y pasión por
            soluciones innovadoras. Durante mi formación, adquirí habilidades en
            diversas tecnologías: front-end TypeScript, React.js, Next.js, y en
            back-end con Node.js, Express, PostgreSQL y Firebase
          </BodyMain>
          <DivConnect>
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
          </DivConnect>
        </div>
      </ContainerMe>
      <EnlaceArrow href='#habilidades' aria-label='arrow'>
        <Arrow className='arrow' />
      </EnlaceArrow>
    </ContainerMain>
  );
}
