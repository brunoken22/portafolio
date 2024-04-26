'use client';
import * as contentful from 'contentful';
import {
  TemplateProyect,
  DivProyectos,
  Botton,
  TemplateLoadingProyect,
  Loader,
  LinkGthub,
  ImageProyect,
  IconsTecnology,
} from './styled';
import {Body, Subtitle} from '@/ui/typography';
import {useEffect, useState} from 'react';
import Link from 'next/link';
import {Zoom} from 'react-awesome-reveal';
import {ObtenerLikes, SubirLikes, QuitarLike} from '@/lib/hook';
import Heart from '@/ui/icons/heart.svg';
import Github from '@/ui/icons/github.svg';
import ComputerSvg from '@/ui/icons/computer.svg';
import {DivContentIcons} from '../skill/styled';

const client = contentful.createClient({
  space: 'dehbm7ub5p2i',
  accessToken: process.env.NEXT_PUBLIC_CONTENFUL as string,
});

export function Proyectos() {
  const [proyect, setProyect] = useState<any>();
  const {data} = ObtenerLikes();
  const [localStorageLikes] = useState<any>(
    typeof localStorage !== 'undefined' &&
      (JSON.parse(localStorage.getItem('likes') as string) as Object[])
  );

  useEffect(() => {
    client.getEntries({content_type: 'cms'}).then((response: any) => {
      const productos = response.items;
      return setProyect(productos);
    });
  }, []);
  return (
    <div id='proyectos' style={{paddingTop: '5rem'}}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Subtitle>
          <ComputerSvg className='computerSvg' />
          Proyectos
        </Subtitle>
      </div>
      <DivProyectos>
        {proyect && data
          ? (proyect as any).map((el: any) => {
              return (
                <div key={el.fields.id}>
                  <Zoom>
                    <TemplateProyect>
                      <Link href={el.fields.linkDeArticle} target='blank'>
                        <ImageProyect
                          src={el.fields.linkImgPagina}
                          loading='lazy'
                          alt={el.fields.appMisPelis}
                        />
                      </Link>
                      <div
                        style={{
                          display: 'flex',
                          gap: '1rem',
                          paddingLeft: '1rem',
                          paddingRight: '1rem',
                          overflow: 'auto',
                        }}>
                        {el.fields.technologiess.map(
                          (item: {title: string; svg: string}) => (
                            <IconsTecnology key={item.title}>
                              <img src={item.svg} alt={item.title} width={20} />
                              {item.title}
                            </IconsTecnology>
                          )
                        )}
                      </div>
                      <div style={{padding: '1rem'}}>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            textAlign: 'start',
                          }}>
                          <Body $weight='500' $size='1.3rem' $align='start'>
                            {el.fields.appMisPelis}
                          </Body>
                          <LinkGthub
                            href={el.fields.github}
                            alt='Link github proyect'
                            target='_blank'>
                            <Github />
                          </LinkGthub>
                        </div>
                        <div>
                          <Like
                            id={el.fields.id}
                            data={data.find(
                              (item: any) => item.id == el.fields.id && item
                            )}
                            isLikeLocal={
                              localStorageLikes?.find(
                                (item: any) => item.id === el.fields.id
                              )
                                ? true
                                : false
                            }
                          />
                        </div>
                      </div>
                    </TemplateProyect>
                  </Zoom>
                </div>
              );
            })
          : [1, 2, 3].map((item: number) => (
              <TemplateLoadingProyect key={item}>
                <Loader>
                  <div className='space'>
                    <div className='loading'></div>
                    <div className='loading'></div>
                    <div className='loading'></div>
                    <div className='loading'></div>
                    <div className='loading'></div>
                    <div className='loading'></div>
                    <div className='loading'></div>
                    <div className='loading'></div>
                  </div>
                </Loader>
              </TemplateLoadingProyect>
            ))}
      </DivProyectos>
    </div>
  );
}
function Like(props: any) {
  const [contador, setContador] = useState(props.data.likes);
  const [isLike, setIsLike] = useState<boolean>(props.isLikeLocal);
  const handleLike = async (e: MouseEvent) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    target.style.cursor = 'progress';
    const getLikesLocal =
      typeof localStorage !== 'undefined' &&
      JSON.parse(localStorage.getItem('likes') as string);

    let newLikesAll;
    if (isLike) {
      newLikesAll = [
        ...getLikesLocal.filter((item: any) => item.id !== props.id),
      ];
      setIsLike(false);
      setContador((e: number) => e - 1);
      await QuitarLike({
        id: props.data.id,
        proyect: props.data.proyect,
        like: contador - 1,
      });
      target.style.fill = '#ddd';
    } else {
      newLikesAll = getLikesLocal
        ? [...getLikesLocal, {id: Number(props.id)}]
        : [{id: Number(props.id)}];
      setIsLike(true);
      setContador((e: number) => e + 1);
      await SubirLikes({
        id: props.data.id,
        proyect: props.data.proyect,
        like: contador + 1,
      });
      target.style.fill = 'tomato';
    }
    target.style.cursor = 'pointer';
    typeof localStorage !== 'undefined' &&
      localStorage.setItem('likes', JSON.stringify(newLikesAll));
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        height: '90px',
      }}>
      <Body $size={'1rem'}>{contador} Me encanta</Body>
      <Botton
        id={props.id}
        onClick={handleLike}
        $isLike={isLike}
        aria-label='like'>
        <Heart></Heart>
      </Botton>
    </div>
  );
}
