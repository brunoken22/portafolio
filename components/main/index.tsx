import Image from 'next/image';
import {Body, Title, BodyParr} from '@/ui/typography';
import {EnlaceArrow} from '@/ui/contenedores';
import Arrow from '@/ui/icons/arrow.svg';
export default function Main() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '90vh',
        position: 'relative',
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
          desarrollo back-end utilizando Node.js, Express y bases de datos como
          PostgreSQL Y Firebase.
        </Body>
      </div>
      <EnlaceArrow href='#habilidades' aria-label='arrow'>
        <Arrow className='arrow' />
      </EnlaceArrow>
    </div>
  );
}
