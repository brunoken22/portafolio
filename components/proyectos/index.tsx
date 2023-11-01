'use client';
import * as contentful from 'contentful';
import {
  TemplateProyect,
  DivProyectos,
  Botton,
  TemplateLoadingProyect,
  Loader,
} from './styled';
import {Body} from '@/ui/typography';
import Image from 'next/image';
import {useEffect, useState} from 'react';
import Link from 'next/link';
import Heart from '@/ui/icons/heart.svg';
import {Zoom} from 'react-awesome-reveal';
import {ObtenerLikes, SubirLikes, QuitarLike} from '@/lib/hook';

const client = contentful.createClient({
  space: 'dehbm7ub5p2i',
  accessToken: 'vfQ16mfGkwZCKSPTKJypjjLoKDZH_6mZgkD__9if1ws',
});
export function Proyectos() {
  const [proyect, setProyect] = useState();
  const {data, error, isLoading} = ObtenerLikes();

  useEffect(() => {
    client.getEntries({content_type: 'cms'}).then((response: any) => {
      const productos = response.items;
      setProyect(productos);
    });
  }, []);

  return (
    <div id='proyectos'>
      <div>
        <h2 style={{textAlign: 'center', marginBottom: '3rem'}}>Experiencia</h2>
      </div>
      <DivProyectos>
        {proyect && data
          ? (proyect as any).map((el: any, p: number) => {
              return (
                <div key={data[p].id}>
                  <Zoom triggerOnce>
                    <TemplateProyect>
                      <Link
                        id={data[p].id}
                        href={el.fields.linkDeArticle}
                        key={p}
                        target='blank'>
                        <Image
                          src={el.fields.linkImgPagina}
                          width={350}
                          height={230}
                          alt={el.fields.appMisPelis}></Image>
                      </Link>
                      <div>
                        <Body>{el.fields.appMisPelis}</Body>
                        <Like data={data[p]} />
                      </div>
                    </TemplateProyect>
                  </Zoom>
                </div>
              );
            })
          : [1, 2, 3, 4, 5, 6, 7, 8].map((item: number) => (
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
  const [newData, setNewData] = useState({id: '', proyect: '', like: 0});
  const [modData, setModData] = useState({id: '', proyect: '', like: 0});

  useEffect(() => {
    setContador(props.data.likes);
  }, [props.data.likes]);

  const handleClick = async (e: any) => {
    e.preventDefault();
    e.target.style.disabled = true;
    e.target.style.cursor = 'progress';
    await SubirLikes({
      id: props.data.id,
      proyect: props.data.proyect,
      like: contador + 1,
    });
    e.target.style.disabled = false;
    e.target.style.cursor = 'pointer';
    e.target.style.fill = 'tomato';

    setContador((e: number) => e + 1);
    setNewData({
      id: props.data.id,
      proyect: props.data.proyect,
      like: contador + 1,
    });
    setModData({
      id: '',
      proyect: '',
      like: 0,
    });
  };

  const handleDobleClick = async (e: any) => {
    e.preventDefault();
    e.target.style.disabled = true;
    e.target.style.cursor = 'progress';
    await QuitarLike({
      id: props.data.id,
      proyect: props.data.proyect,
      like: contador - 1,
    });
    e.target.style.disabled = false;
    e.target.style.cursor = 'pointer';
    e.target.style.fill = '#ddd';
    setContador((e: number) => e - 1);
    setNewData({
      id: '',
      proyect: '',
      like: 0,
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        height: '90px',
      }}>
      <Body $weight='100' $size={'1rem'}>
        {contador} Me gusta
      </Body>
      <Botton
        onClick={newData.id ? handleDobleClick : handleClick}
        aria-label='like'>
        <Heart></Heart>
      </Botton>
    </div>
  );
}
