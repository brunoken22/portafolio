import {client} from '@/lib/contenful';
export async function GET() {
  try {
    let proyect;
    await client.getEntries({content_type: 'cms'}).then((response) => {
      proyect = response.items;
    });
    return Response.json(proyect, {
      status: 200,
    });
  } catch (e: any) {
    return Response.json(e.message, {
      status: 500,
    });
  }
}
