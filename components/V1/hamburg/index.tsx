import { DivHamburg, DivElemnt, Enlaces } from "./styled";
import { useRouter } from "next/navigation";

const pages = [
  { title: "Habilidades", link: "#habilidades" },
  { title: "Proyectos", link: "#proyectos" },
  { title: "Contacto", link: "#contacto" },
];

export function DespleHam({ click }: { click: (data: boolean) => void }) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    click(false);
    router.push(e.currentTarget.href);
  };

  return (
    <>
      <DivHamburg>
        <DivElemnt>
          {pages.map((e) => (
            <Enlaces href={e.link} onClick={handleClick} key={e.link} title={e.title}>
              {e.title}
            </Enlaces>
          ))}
        </DivElemnt>
      </DivHamburg>
    </>
  );
}
