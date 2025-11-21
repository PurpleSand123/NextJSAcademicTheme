import personalInfo from './data/personalInfo.json';
import SupportingBox from './SupportingBox';

const Footer = (): JSX.Element => {
  const iconStyle = 'hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded-md';

  return (
    <footer>
      <p className="text-center text-sm opacity-40 dark:opacity-50 pb-4 pt-4">
        Built with <i>Next.js, TailwindCSS</i>.{' '}
      </p>
    </footer>
  );
};

export default Footer;
