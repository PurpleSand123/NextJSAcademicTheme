import ExtLink from './ExtLink';

// Parses inline markdown in strings from data JSON:
//   **bold**        → <strong>bold</strong>
//   [text](url)     → <ExtLink>text</ExtLink>
// Bold and links can nest (e.g. [**bold link**](url)).
const renderInline = (text: string): JSX.Element[] => {
  const tokenRegex = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  return text.split(tokenRegex).map((segment, i) => {
    if (segment.startsWith('**') && segment.endsWith('**')) {
      return <strong key={i}>{renderInline(segment.slice(2, -2))}</strong>;
    }
    const linkMatch = segment.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      return (
        <ExtLink key={i} href={href}>
          {renderInline(label)}
        </ExtLink>
      );
    }
    return <span key={i}>{segment}</span>;
  });
};

export default renderInline;
