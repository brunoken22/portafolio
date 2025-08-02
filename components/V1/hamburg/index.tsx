import {DivHamburg, DivElemnt, Enlaces} from './styled';
import {useRouter} from 'next/navigation';
const pages = [
  {title: 'Habilidades', link: '#habilidades'},
  {title: 'Proyectos', link: '#proyectos'},
  {title: 'Contacto', link: '#contacto'},
];

export function DespleHam(props: any) {
  const router = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault();
    props.click(false);
    router.push((e as any).target.href);
  };
  return (
    <>
      <DivHamburg>
        <DivElemnt>
          {pages.map((e) => (
            <Enlaces href={e.link} onClick={handleClick} key={e.link}>
              {e.title}
            </Enlaces>
          ))}
        </DivElemnt>
      </DivHamburg>
    </>
  );
}
