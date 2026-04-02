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
              {personalInfo.about.master.advisor.name}
            </ExtLink>
            , specializing in {personalInfo.about.specialization}.
          </p>
          <p className="mb-4 mt-2">
            Intelligence isn't only about language — it's also about navigating the physical world. I
            believe the path to truly generalizable AI is building embodied intelligence that learns
            the way nature does — efficiently, physically, and deployably. I build and ship
            production robotics systems end-to-end: from <strong>large-scale data pipelines</strong>{' '}
            and <strong>VLA model training</strong> to{' '}
            <strong>on-device inference optimization</strong> and{' '}
            <strong>real-world deployment</strong> across multiple field sites.
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
