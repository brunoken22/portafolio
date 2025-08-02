'use client';
import {Botton} from './styled';
import {Body} from '@/ui/typography';
import {SubirLikes, QuitarLike} from '@/lib/hook';
import Heart from '@/ui/icons/heart.svg';
import {useEffect, useState} from 'react';

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
  const [likesLocal, setLikesLocal] = useState(props.isLikeLocal);
  const [countLikes, setCountLikes] = useState(props.data?.likes);
  useEffect(() => {
    setLikesLocal(props.isLikeLocal);
    return setCountLikes(props.data?.likes);
  }, [props.isLikeLocal, props.data]);
  const handleLike = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const getLikesLocal =
      typeof localStorage !== 'undefined' &&
      JSON.parse(localStorage.getItem('likes') || '[]');
    let newLikesAll;
    if (likesLocal) {
      setLikesLocal(false);
      newLikesAll = getLikesLocal.filter((item: any) => item.id !== props.id);
      setCountLikes((prev) => prev - 1);
      await QuitarLike({
        id: props.data.id,
        proyect: props.data.proyect,
        like: props.data.likes - 1,
      });
      target.style.fill = '#ddd';
    } else {
      setLikesLocal(true);
      setCountLikes((prev) => prev + 1);
      newLikesAll = getLikesLocal
        ? [...getLikesLocal, {id: Number(props.id)}]
        : [{id: Number(props.id)}];
      await SubirLikes({
        id: props.data.id,
        proyect: props.data.proyect,
        like: props.data.likes + 1,
      });
      target.style.fill = 'tomato';
    }

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('likes', JSON.stringify(newLikesAll));
    }
  };

  return (
    <div className='flex justify-between items-center h-[90px]'>
      {countLikes ? <Body $size={'1rem'}>{countLikes} Me encanta</Body> : null}
      <Botton
        id={props.id}
        onClick={handleLike}
        $isLike={likesLocal}
        aria-label='like'>
        <Heart />
      </Botton>
    </div>
  );
}
