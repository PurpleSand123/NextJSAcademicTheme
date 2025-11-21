import { NextPage } from 'next';

import About from '../components/About';
import PublicationList from '../components/PublicationList';
import Education from '../components/Education';

const Index: NextPage<unknown> = () => (
  <>
    <About />
    <PublicationList />
  </>
);

export default Index;
