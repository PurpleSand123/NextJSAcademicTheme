import ExtLink from './ExtLink';
import data from './data/news.json';

const News = (): JSX.Element => {
  return (
    <section className="grid w-full" id="news">
      <h2 className="text-xl font-bold mt-12 mb-4">News</h2>
      <div className="space-y-3">
        {data.map((item: any, index: number) => (
          <div key={index} className="flex flex-col sm:flex-row sm:items-baseline">
            <span className="text-xs font-mono text-gray-500 w-28 flex-shrink-0">{item.date}</span>
            <div className="sm:ml-4">
              <p className="text-sm text-black">
                <span className="font-semibold">{item.title}</span>
                {item.description && (
                  <>
                    {' '}
                    &mdash; <span>{item.description}</span>
                  </>
                )}
              </p>
              {item.link && item.link.length > 0 && (
                <p className="text-xs mt-1">
                  <ExtLink href={item.link}>More</ExtLink>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
