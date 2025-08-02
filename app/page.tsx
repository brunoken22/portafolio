import { fetchApiAuth } from "@/lib/hook";

import V1 from "@/components/V1";
import V2 from "@/components/V2";

export default async function Home() {
  const proyect = await fetchApiAuth(["/api/proyect"]);
  const data = await fetchApiAuth(["/api/like"]);

  return <V2 proyect={proyect} />;
}
