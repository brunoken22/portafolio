import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
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

export function SubirLikes(like: any) {
   const api = "/api/like";
   const header = {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(like),
   };
   const { data, error, isLoading } = useSWRImmutable(
      [api, header],
      fetchApiAuth
   );
   return { data, error, isLoading };
}
