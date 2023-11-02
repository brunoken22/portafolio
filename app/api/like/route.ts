import {NextRequest, NextResponse} from 'next/server';
import {firebase} from '@/lib/firebase';
export async function POST(request: NextRequest, {params}: any) {
  const body = await request.json();

  if (body.like) {
    const dataAnterior: any = (
      await firebase.collection(body.proyect).doc(body.id).get()
    ).data();
    const newData = await firebase
      .collection(body.proyect)
      .doc(body.id)
      .update({likes: Number(dataAnterior.likes) + 1});

    return NextResponse.json({newData});
  }
  return NextResponse.json({
    message: 'Algo salio mal',
  });
}
export async function GET(request: NextRequest, {params}: any) {
  const collection = await firebase.listCollections();
  const data: any = [];
  for (let snap of collection) {
    const proyect = snap.id;
    const eje = (await snap.get()).docs;
    eje.forEach((doc) => {
      data.push({likes: doc.data().likes, id: doc.id, proyect});
    });
  }
  if (data) {
    return NextResponse.json(data);
  }
  return NextResponse.json({
    message: 'Algo salio mal',
  });
}
export async function PATCH(request: NextRequest, {params}: any) {
  const body = await request.json();

  if (body.like) {
    const dataAnterior: any = (
      await firebase.collection(body.proyect).doc(body.id).get()
    ).data();
    const newData = await firebase
      .collection(body.proyect)
      .doc(body.id)
      .update({likes: Number(dataAnterior.likes) - 1});

    return NextResponse.json({newData});
  }
  return NextResponse.json({
    message: 'Algo salio mal',
  });
}
