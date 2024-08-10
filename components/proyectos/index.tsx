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
  const [localStorageLikes, setLocalStorageLikes] = useState<
    {id: string}[] | []
  >([]);
  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const isLocalstorage = localStorage.getItem('likes');
      const localStorageResult = isLocalstorage
        ? JSON.parse(isLocalstorage)
        : [];
      setLocalStorageLikes(localStorageResult);
    }
  }, []);
  return (
    <section id='proyectos' className='pt-20 relative w-full'>
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
                  className='templateProyect  m-auto max-sm:w-[95%]  w-[350px]'>
                  <TemplateProyect>
                    <div className='h-[230px] relative overflow-hidden [&>div]:hover:flex'>
                      <ImageProyect
                        src={el.fields.linkImgPagina}
                        loading='lazy'
                        alt={el.fields.appMisPelis}
                      />
                      <div className='absolute inset-0 backdrop-brightness-50  items-center justify-center hidden transition-all'>
                        <Link
                          className='hover:opacity-70'
                          href={el.fields.linkDeArticle}
                          target='blank'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='50'
                            height='50'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='#00deff'
                            fill='none'
                            strokeLinecap='round'
                            strokeLinejoin='round'>
                            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                            <path d='M21 12a9 9 0 1 0 -9 9' />
                            <path d='M3.6 9h16.8' />
                            <path d='M3.6 15h7.9' />
                            <path d='M11.5 3a17 17 0 0 0 0 18' />
                            <path d='M12.5 3a16.984 16.984 0 0 1 2.574 8.62' />
                            <path d='M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
                            <path d='M20.2 20.2l1.8 1.8' />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className='grid grid-flow-col items-center overflow-y-hidden overflow-x-auto gap-4 pb-2 pl-2'>
                      {el.fields.technologiess.map(
                        (item: {title: string; svg: string}, t: number) => (
                          <div
                            key={item.title + t}
                            className='flex items-center  bg-[#573dbf] dark:bg-[#ddd] p-1 w-max rounded-lg h-[30px] gap-1'>
                            <img
                              src={item.svg}
                              alt={'Tecnologias ' + item.title}
                              height={20}
                              width={20}
                              loading='lazy'
                            />
                            <IconsTecnology>{item.title}</IconsTecnology>
                          </div>
                        )
                      )}
                    </div>
                    <div className='m-4'>
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
                          <div>
                            <Github />
                          </div>
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
                              (item) => item.id === el.fields.id
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
