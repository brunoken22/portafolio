import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
// "https://portafolio-taupe-nine.vercel.app"
async function fetchApiAuth(api: any) {
   const option = api[1] || {};
   if (api) {
      if (true) {
         const response = await fetch(
            "https://portafolio-taupe-nine.vercel.app" + api[0],
            option
         );
         const data = await response.json();
         if (data) {
            return data;
         }
         throw "Algo salió +mal";
      }
   }
}

export function ObtenerLikes() {
   const api = "/api/like";
   const { data, error, isLoading } = useSWR([api], fetchApiAuth);
   return { data, error, isLoading };
}

export async function SubirLikes(like: any) {
   const api = "/api/like";
   const header = {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(like),
   };
   const data = await fetchApiAuth(like.id ? [api, header] : null);

   return data;
}
export async function QuitarLike(like: any) {
   const api = "/api/like";
   const header = {
      method: "PATCH",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(like),
   };

   const dataMod = await fetchApiAuth(like.like ? [api, header] : null);
   return dataMod;
}

export function mensaje(data: any) {
   const api = "/api/mensaje";
   const header = {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
   };

   const dataMod = fetchApiAuth(data ? [api, header] : null);
   return dataMod;
}
