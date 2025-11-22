import Image from 'next/image';

import ExtLink from './ExtLink';
import SupportingBox from './SupportingBox';
import ProfileImage from './ProfileImage';
import personalInfo from './data/personalInfo.json';

const About = (): JSX.Element => {
  return (
    <section className="grid gap-12" id="about">
      <div className="block">
        <div className="float-left mr-8 mb-4 rounded-md leading-none">
          <ProfileImage></ProfileImage>
        </div>

        <div className="w-full">
          <h1 className="text-4xl font-bold pb-4">{personalInfo.name}</h1>
          <p className="mb-4 mt-2">
            A <strong>{personalInfo.about.position}</strong> at{' '}
            <ExtLink href={personalInfo.about.company.link}>
              <strong>{personalInfo.about.company.team}</strong> team of{' '}
              {personalInfo.about.company.name}
            </ExtLink>
            , I have {personalInfo.about.industryExperience} in the AI startup industry. I completed
            a master's program at the {personalInfo.about.master.name} of{' '}
            <ExtLink href={personalInfo.about.master.link}>
              <strong>{personalInfo.about.master.institution}</strong>
            </ExtLink>{' '}
            advised by{' '}
            <ExtLink href={personalInfo.about.master.advisor.link}>
              {' '}
              {personalInfo.about.master.advisor.name},{' '}
            </ExtLink>
            specializing in {personalInfo.about.specialization}.
          </p>
          <p className="mb-4 mt-2">
            My research aims to achieve <strong>robust generalization</strong> in robotics by
            integrating <strong>Vision-Language-Action (VLA) models</strong> with{' '}
            <strong>large-scale physical interaction data</strong>. Currently, I am bridging the gap
            between research and real-world deployment by developing{' '}
            <strong>commonsense-aware navigation systems</strong>, while actively expanding these
            generalizable methodologies to robotic manipulation. My work addresses fundamental
            challenges in robot learning, including <strong>Sim-to-Real transfer</strong> and{' '}
            <strong>data efficiency</strong>. Furthermore, I am dedicated to democratizing robot
            learning by releasing <strong>open-source benchmarks and datasets</strong>, fostering an
            inclusive <strong>ecosystem</strong> adaptable to diverse robotic hardware.
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Research Interest: {personalInfo.about.interest}
          </p>
          <div className="flex items-center justify-between mt-2">
            <p className="text-sm">✉️ {personalInfo.about.email}</p>
            <SupportingBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
