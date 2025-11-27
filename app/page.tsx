import { fetchApiAuth } from "@/lib/hook";
import V2 from "@/components/V2";

export default async function Home() {
  const proyect = await fetchApiAuth(["/api/proyect", {}]);
  return <V2 proyect={proyect} />;
}
