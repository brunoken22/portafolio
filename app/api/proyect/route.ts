import {client} from '@/lib/contenful';
import {NextResponse} from 'next/server';
export async function GET() {
  try {
    let proyect;
    await client.getEntries({content_type: 'cms'}).then((response) => {
      proyect = response.items;
    });
    return NextResponse.json(proyect, {
      status: 200,
    });
  } catch (e: any) {
    return NextResponse.json(e.message, {
      status: 500,
    });
  }
}
