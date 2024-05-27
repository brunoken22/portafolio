'use client';
import {Botton} from './styled';
import {Body} from '@/ui/typography';
import {useState, useEffect} from 'react';
import {SubirLikes, QuitarLike} from '@/lib/hook';
import Heart from '@/ui/icons/heart.svg';

interface LikeProps {
  data: {
    id: string;
    proyect: string;
    likes: number;
  };
  isLikeLocal: boolean;
  id: string;
}

export default function Like(props: LikeProps) {
  const [contador, setContador] = useState(props.data.likes);
  const [isLike, setIsLike] = useState(props.isLikeLocal);

  useEffect(() => {
    setIsLike(props.isLikeLocal);
  }, [props.isLikeLocal]);

  const handleLike = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    target.style.cursor = 'progress';

    const getLikesLocal =
      typeof localStorage !== 'undefined' &&
      JSON.parse(localStorage.getItem('likes') || '[]');

    let newLikesAll;
    if (isLike) {
      newLikesAll = getLikesLocal.filter((item: any) => item.id !== props.id);
      setIsLike(false);
      setContador((prev) => prev - 1);
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
      setContador((prev) => prev + 1);
      await SubirLikes({
        id: props.data.id,
        proyect: props.data.proyect,
        like: contador + 1,
      });
      target.style.fill = 'tomato';
    }

    target.style.cursor = 'pointer';
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('likes', JSON.stringify(newLikesAll));
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '90px',
      }}>
      {contador ? <Body $size={'1rem'}>{contador} Me encanta</Body> : null}
      <Botton
        id={props.id}
        onClick={handleLike}
        $isLike={isLike}
        aria-label='like'>
        <Heart />
      </Botton>
    </div>
  );
}
