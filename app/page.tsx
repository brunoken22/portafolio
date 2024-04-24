import Image from 'next/image';
import {Body, Title, BodyParr} from '@/ui/typography';
import {Skill} from '@/components/skill';
import {Proyectos} from '@/components/proyectos';
import {Contact} from '@/components/contact';
import {Container, EnlaceArrow} from '@/ui/contenedores';
import Arrow from '@/ui/icons/arrow.svg';
import ProgressBar from '@/components/progress-bar';

export default function Home() {
  return (
    <ProgressBar>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: '90vh',
        }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            src={'/hero.webp'}
            alt='hero'
            loading='lazy'
            height={250}
            width={250}
            style={{
              backgroundColor: 'rgb(229 229 229)',
              borderRadius: '50%',
              maxWidth: '300px',
              minWidth: '250px',
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Title>Bruno ken</Title>
            <BodyParr>
              Software Developer <span>&#160;</span>
            </BodyParr>
          </div>
          <Body>
            Tengo un sólido conocimiento en desarrollo Fullstack y un entusiasmo
            por la creación de soluciones innovadoras. Durante mi formación, he
            adquirido habilidades en diversas tecnologías, incluyendo desarrollo
            web front-end con HTML, CSS, TypeScript y frameworks como{' '}
            <span>React.js ,Next.js</span>. También estoy familiarizado con el
            desarrollo back-end utilizando Node.js, Express y bases de datos
            como PostgreSQL Y Firebase.
          </Body>
        </div>
        <EnlaceArrow href='#skill' aria-label='arrow'>
          <Arrow className='arrow' />
        </EnlaceArrow>
      </div>
      <Skill />
      <hr
        style={{
          width: '80%',
          backgroundColor: '#ddd',
          boxShadow: '#ddd 0px 100px 1000px 10px',
        }}
      />
      <Proyectos />
      <hr
        style={{
          width: '80%',
          backgroundColor: '#ddd',
          boxShadow: '#ddd 0px 100px 1000px 10px',
        }}
      />
      <Contact />
    </ProgressBar>
  );
}
