import {Skill} from '@/components/skill';
import Proyectos from '@/components/proyectos';
import {Contact} from '@/components/contact';
import ProgressBar from '@/components/progress-bar';
import Main from '@/components/main';
import {fetchApiAuth} from '@/lib/hook';
export default async function Home() {
  const proyect = await fetchApiAuth(['/api/proyect']);
  const data = await fetchApiAuth(['/api/like']);
  return (
    <ProgressBar>
      <Main />
      <Skill />
      <hr
        style={{
          width: '80%',
          backgroundColor: '#ddd',
          boxShadow: '#ddd 0px 100px 1000px 10px',
        }}
      />
      <Proyectos proyect={proyect} data={data} />
      <hr
        style={{
          width: '80%',
          backgroundColor: '#ddd',
          boxShadow: '#ddd 0px 100px 1000px 10px',
        }}
      />
      <Contact />
    </ProgressBar>
  );
}
