import Image from 'next/image';
import {BodyMain, Title, BodyParr} from '@/ui/typography';
import {ContainerMain, EnlaceArrow} from '@/ui/contenedores';
import Arrow from '@/ui/icons/arrow.svg';
export default function Main() {
  return (
    <ContainerMain>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <picture>
          <Image
            src={'/hero.webp'}
            alt='hero'
            loading='lazy'
            height={250}
            width={250}
            style={{
              backgroundColor: 'rgb(229 229 229)',
              borderRadius: '50%',
            }}
          />
        </picture>
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
            textAlign: 'center',
          }}>
          <Title>Bruno ken</Title>
          <BodyParr>
            Software Developer <span>&#160;</span>
          </BodyParr>
        </div>
        <BodyMain $opacity={0.8}>
          Tengo sólido conocimiento en desarrollo Fullstack y pasión por
          soluciones innovadoras. Durante mi formación, adquirí habilidades en
          diversas tecnologías: front-end TypeScript, React.js, Next.js, y en
          back-end con Node.js, Express, PostgreSQL y Firebase
        </BodyMain>
      </div>
      <EnlaceArrow href='#habilidades' aria-label='arrow'>
        <Arrow className='arrow' />
      </EnlaceArrow>
    </ContainerMain>
  );
}
