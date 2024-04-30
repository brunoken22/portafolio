import {createClient} from 'contentful';


export const client = createClient({
    space: 'dehbm7ub5p2i',
    accessToken: process.env.NEXT_PUBLIC_CONTENFUL as string,
  });
  