'use client';
import {
  TemplateProyect,
  DivProyectos,
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
import Github from '@/ui/icons/github.svg';
import ComputerSvg from '@/ui/icons/computer.svg';
import Like from './like';

export default function Proyectos({proyect, data}: {proyect: any; data: any}) {
  const [localStorageLikes, setLocalStorageLikes] = useState<any[] | []>([]);
  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const isLocalstorage = localStorage.getItem('likes');
      const localStorageResult = isLocalstorage
        ? JSON.parse(isLocalstorage)
        : [];
      setLocalStorageLikes(localStorageResult);
    }
  });
  return (
    <section id='proyectos' style={{paddingTop: '5rem', position: 'relative'}}>
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
      <DivProyectos className='proyectAll'>
        {proyect && data
          ? (proyect as any).map((el: any) => {
              return (
                <Zoom
                  triggerOnce
                  key={el.fields.id}
                  className='templateProyect'>
                  <TemplateProyect>
                    <Link
                      href={el.fields.linkDeArticle}
                      target='blank'
                      style={{overflow: 'hidden', height: '230px'}}>
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
                        (item: {title: string; svg: string}, t: number) => (
                          <IconsTecnology key={item.title + t}>
                            <img
                              src={item.svg}
                              alt={'Tecnologias ' + item.title}
                              height={20}
                              width={20}
                              loading='lazy'
                            />
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
                          aria-label={el.fields.appMisPelis}
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
    </section>
  );
}
