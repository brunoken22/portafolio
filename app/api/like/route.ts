import {NextRequest, NextResponse} from 'next/server';
import {firebase} from '@/lib/firebase';
export async function POST(request: NextRequest) {
  try {
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
  } catch (e: any) {
    return NextResponse.json(e.message);
  }
}
export async function GET() {
  try {
    const collection = await firebase.listCollections();
    // await firebase
    //   .collection('proyect1')
    //   .doc()
    //   .get()
    //   .then((dataSnapShop) => {
    //     console.log('data', dataSnapShop.data);
    //     return NextResponse.json(dataSnapShop.data, {
    //       status: 200,
    //     });
    //   });
    const data: any = [];
    for (let snap of collection) {
      const proyect = snap.id;
      const eje = (await snap.get()).docs;
      eje.forEach((doc) => {
        data.push({likes: doc.data().likes, id: doc.id, proyect});
      });
    }
    return NextResponse.json(data);
  } catch (e: any) {
    return NextResponse.json(e.message, {
      status: 500,
    });
  }
}
export async function PATCH(request: NextRequest) {
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
