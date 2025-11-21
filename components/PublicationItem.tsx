import { useState } from 'react';
import ExtLink from './ExtLink';

interface Props {
  publication: any;
  index: number;
}

const PublicationItem = ({ publication, index }: Props): JSX.Element => {
  const [showAllAuthors, setShowAllAuthors] = useState(false);

  const rawAuthors = publication.author ?? '';
  const authors = rawAuthors
    .split(',')
    .map((author: string) => author.trim())
    .filter(Boolean);

  const visibleAuthorCount = 3;
  const hasHiddenAuthors = authors.length > visibleAuthorCount;
  const visibleAuthors =
    showAllAuthors || !hasHiddenAuthors ? authors : authors.slice(0, visibleAuthorCount);
  const hiddenCount = hasHiddenAuthors ? authors.length - visibleAuthorCount : 0;
  const authorsText = visibleAuthors.length > 0 ? visibleAuthors.join(', ') : rawAuthors;

  const handleToggleAuthors = () => {
    setShowAllAuthors(previous => !previous);
  };

  return (
    <div className="mt-4 mb-8 flex gap-4">
      {publication.img && (
        <img
          className="h-28 w-44 rounded-md object-cover flex-shrink-0"
          src={publication.img}
          alt={publication.title}
        />
      )}
      <div className="flex-1">
        <p className="text-sm text-black dark:text-white">
          <span className="mr-1">[{index}]</span>
          <span>{authorsText}</span>
          {!showAllAuthors && hasHiddenAuthors && (
            <>
              ,{' '}
              <button
                type="button"
                className="text-blue-600 hover:underline focus:outline-none"
                onClick={handleToggleAuthors}
              >
                {hiddenCount} more author{hiddenCount > 1 ? 's' : ''}
              </button>
            </>
          )}
          {showAllAuthors && hasHiddenAuthors && (
            <>
              {' '}
              <button
                type="button"
                className="ml-2 text-blue-600 hover:underline focus:outline-none"
                onClick={handleToggleAuthors}
              >
                show less
              </button>
            </>
          )}
        </p>
        <p className="text-base text-black dark:text-white">
          <b>
            <i>{publication.title}</i>
          </b>
        </p>
        <p className="text-sm text-black dark:text-white">{publication.conference}</p>
        <p className="text-black dark:text-white flex justify-end text-sm font-semibold mt-2 flex-wrap gap-x-2">
          {publication.links.map((linkItem: any, idx: any) => (
            <ExtLink href={linkItem.url} key={idx}>
              [{linkItem.name}]
            </ExtLink>
          ))}
        </p>
      </div>
    </div>
  );
};

export default PublicationItem;
