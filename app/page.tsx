import {Skill} from '@/components/skill';
import {Proyectos} from '@/components/proyectos';
import {Contact} from '@/components/contact';
import ProgressBar from '@/components/progress-bar';
import Main from '@/components/main';
export default function Home() {
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
      <Proyectos />
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
