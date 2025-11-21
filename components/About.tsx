import Image from 'next/image';

import ExtLink from './ExtLink';
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
            My research focuses on achieving <strong>generalization performance</strong> in robotics
            and AI by leveraging <strong>imitation learning</strong>,{' '}
            <strong>reinforcement learning</strong>, and <strong>vision-language models</strong>. I
            believe that <strong>large-scale physical interaction data</strong> is crucial to
            solving this challenge, ultimately aiming to{' '}
            <strong>make AI a companion to humans</strong> through an{' '}
            <strong>'open-source Physical AI ecosystem'</strong> that learns physical laws and
            gathers extensive object interaction data to overcome both{' '}
            <strong>generalization</strong> and <strong>hardware limitations</strong>.
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Research Interest: {personalInfo.about.interest}
          </p>
          <p className="text-sm">✉️ {personalInfo.about.email}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
