import { useRouter } from 'next/router';
import Link from 'next/link';

interface Props {
  title: string;
  href: string;
  external?: boolean;
}

const NavLink = ({ title, href, external = false }: Props): JSX.Element => {
  const router = useRouter();

  const buttonClassName = `rounded-lg no-underline flex h-8 mr-0 pr-5 pl-5
		items-center border-none cursor-pointer font-bold text-sm
		${router.asPath === href ? 'bg-black dark:bg-white text-white dark:text-black' : 'bg-auto'}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <button type="button" className={buttonClassName}>
          {title}
        </button>
      </a>
    );
  }

  return (
    <Link href={href}>
      <button type="button" className={buttonClassName}>
        {title}
      </button>
    </Link>
  );
};

export default NavLink;
