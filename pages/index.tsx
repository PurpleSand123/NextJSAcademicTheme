import { NextPage } from 'next';

import About from '../components/About';
import News from '../components/News';
import PublicationList from '../components/PublicationList';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Honors from '../components/Honors';

const Index: NextPage<unknown> = () => (
  <>
    <About />
    <News />
    <PublicationList />
    <Experience />
    <Education />
    <Honors />
  </>
);

export default Index;
