import { useState } from 'react';
import ExtLink from './ExtLink';

interface Props {
  publication: any;
  index: number;
}

const PublicationItem = ({ publication, index }: Props): JSX.Element => {
  const [showAllAuthors, setShowAllAuthors] = useState(false);

  // Extract author categories
  const coAuthors = publication.coAuthors ?? [];
  const authors = publication.authors ?? [];
  const correspondingAuthors = publication.correspondingAuthors ?? [];

  // Combine co-authors and authors (these can be hidden)
  const regularAuthors = [
    ...coAuthors.map((name: string) => ({ name, symbol: '†' })),
    ...authors.map((name: string) => ({ name, symbol: '' })),
  ];

  // Corresponding authors are always shown
  const correspondingAuthorsList = correspondingAuthors.map((name: string) => ({
    name,
    symbol: '*',
  }));

  const visibleAuthorCount = 3;
  const hasHiddenAuthors = regularAuthors.length > visibleAuthorCount;
  const visibleAuthors =
    showAllAuthors || !hasHiddenAuthors
      ? regularAuthors
      : regularAuthors.slice(0, visibleAuthorCount);
  const hiddenCount = hasHiddenAuthors ? regularAuthors.length - visibleAuthorCount : 0;

  const handleToggleAuthors = () => {
    setShowAllAuthors(previous => !previous);
  };

  // Function to render author name with special formatting for "Yongjun Cho"
  const renderAuthorName = (authorObj: { name: string; symbol: string }, isLast: boolean) => {
    const { name, symbol } = authorObj;
    const isYongjunCho = name === 'Yongjun Cho';

    return (
      <span key={name}>
        {isYongjunCho ? (
          <b>
            <u>{name}</u>
          </b>
        ) : (
          name
        )}
        {symbol && <sup>{symbol}</sup>}
        {!isLast && ', '}
      </span>
    );
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
          {visibleAuthors.map((authorObj, idx) =>
            renderAuthorName(
              authorObj,
              idx === visibleAuthors.length - 1 &&
                !hasHiddenAuthors &&
                correspondingAuthorsList.length === 0
            )
          )}
          {!showAllAuthors && hasHiddenAuthors && (
            <>
              {' '}
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
          {correspondingAuthorsList.length > 0 && (
            <>
              {(visibleAuthors.length > 0 || (hasHiddenAuthors && !showAllAuthors)) && ', '}
              {correspondingAuthorsList.map(
                (authorObj: { name: string; symbol: string }, idx: number) =>
                  renderAuthorName(authorObj, idx === correspondingAuthorsList.length - 1)
              )}
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
