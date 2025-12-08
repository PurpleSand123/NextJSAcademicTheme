import personalInfo from './data/personalInfo.json';
import SupportingBox from './SupportingBox';

const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-5 py-8">
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          © {currentYear} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
