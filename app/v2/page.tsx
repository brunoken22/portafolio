import { fetchApiAuth } from "@/lib/hook";
import V1 from "@/components/V1";

export default async function Home() {
  const proyect = await fetchApiAuth(["/api/proyect", {}]);
  const data = await fetchApiAuth(["/api/like", {}]);

  return <V1 proyect={proyect} data={data} />;
}
