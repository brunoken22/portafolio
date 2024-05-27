'use client';
import {Botton} from './styled';
import {Body} from '@/ui/typography';
import {useState} from 'react';
import {SubirLikes, QuitarLike} from '@/lib/hook';
import Heart from '@/ui/icons/heart.svg';

export default function Like(props: any) {
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
