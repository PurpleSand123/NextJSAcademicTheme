import SupportingBox from './SupportingBox';
import ProfileImage from './ProfileImage';
import personalInfo from './data/personalInfo.json';
import renderInline from './renderInline';

const About = (): JSX.Element => {
  return (
    <section className="grid gap-12" id="about">
      <div className="block">
        <div className="float-left mr-8 mb-4 rounded-md leading-none">
          <ProfileImage></ProfileImage>
        </div>

        <div className="w-full">
          <h1 className="text-4xl font-bold pb-4">{personalInfo.name}</h1>
          {personalInfo.about.bio.map((paragraph, idx) => (
            <p key={idx} className="mb-4 mt-2">
              {renderInline(paragraph)}
            </p>
          ))}
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
