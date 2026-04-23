import { useEffect, useState } from 'react';
import ExtLink from './ExtLink';
import personalInfo from './data/personalInfo.json';

// Module-level cache shared across all PublicationItem instances.
const starCache = new Map<string, number>();
const inflight = new Map<string, Promise<number | null>>();

const parseRepoPath = (url: string): string | null => {
  const match = url.match(/github\.com\/([^/]+\/[^/#?]+)/);
  return match ? match[1].replace(/\.git$/, '') : null;
};

const fetchStars = async (repoPath: string): Promise<number | null> => {
  if (starCache.has(repoPath)) return starCache.get(repoPath)!;
  if (inflight.has(repoPath)) return inflight.get(repoPath)!;
  const p = fetch(`https://api.github.com/repos/${repoPath}`)
    .then(r => (r.ok ? r.json() : null))
    .then(j => {
      const n = j && typeof j.stargazers_count === 'number' ? j.stargazers_count : null;
      if (n !== null) starCache.set(repoPath, n);
      return n;
    })
    .catch(() => null)
    .finally(() => {
      inflight.delete(repoPath);
    });
  inflight.set(repoPath, p);
  return p;
};

const formatStars = (n: number): string => (n >= 1000 ? `${(n / 1000).toFixed(1)}k` : `${n}`);

interface Props {
  publication: any;
  index: number;
}

const PublicationItem = ({ publication, index }: Props): JSX.Element => {
  const [showAllAuthors, setShowAllAuthors] = useState(false);
  const [stars, setStars] = useState<Record<string, number>>({});

  useEffect(() => {
    const codeLinks = (publication.links ?? []).filter(
      (l: any) => l.name === 'code' && parseRepoPath(l.url)
    );
    let cancelled = false;
    (async () => {
      const entries = await Promise.all(
        codeLinks.map(async (l: any) => {
          const repo = parseRepoPath(l.url)!;
          const n = await fetchStars(repo);
          return [l.url, n] as const;
        })
      );
      if (cancelled) return;
      const next: Record<string, number> = {};
      for (const [url, n] of entries) if (n !== null) next[url] = n;
      if (Object.keys(next).length > 0) setStars(previous => ({ ...previous, ...next }));
    })();
    return () => {
      cancelled = true;
    };
  }, [publication.links]);

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

  // Check if the user is first author or co-first author
  const myName = personalInfo.name;
  const isMyCoFirstAuthor = coAuthors.length > 0 && coAuthors.includes(myName);
  const isMyFirstAuthor = coAuthors.length === 0 && authors.length > 0 && authors[0] === myName;

  // Function to render author name with special formatting for the user
  const renderAuthorName = (authorObj: { name: string; symbol: string }, isLast: boolean) => {
    const { name, symbol } = authorObj;
    const isMyName = name === myName;

    return (
      <span key={name}>
        {isMyName ? (
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
        {(isMyFirstAuthor || isMyCoFirstAuthor) && (
          <p className="text-xs text-red-600 dark:text-red-400 font-semibold mb-1">
            {isMyCoFirstAuthor ? 'Co-First Author' : 'First Author'}
          </p>
        )}
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
        {Array.isArray(publication.conference) ? (
          publication.conference.map((conf: string, idx: number) => (
            <p key={idx} className="text-sm text-black dark:text-white">
              {conf}
            </p>
          ))
        ) : (
          <p className="text-sm text-black dark:text-white">{publication.conference}</p>
        )}
        <p className="text-black dark:text-white flex justify-end text-sm font-semibold mt-2 flex-wrap gap-x-2">
          {publication.links.map((linkItem: any, idx: any) => {
            const starCount = stars[linkItem.url];
            const label =
              linkItem.name === 'code' && typeof starCount === 'number'
                ? `${linkItem.name} ★${formatStars(starCount)}`
                : linkItem.name;
            return (
              <ExtLink href={linkItem.url} key={idx}>
                [{label}]
              </ExtLink>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default PublicationItem;
