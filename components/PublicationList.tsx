import PublicationItem from './PublicationItem';
import data from './data/publications.json';

const PublicationList = (): JSX.Element => {
  return (
    <section className="grid w-full" id="publications">
      <h2 className="text-xl font-bold mt-12 mb-4">Publications</h2>
      <p className="text-sm text-black dark:text-white mb-4">
        † denotes equal contribution, * denotes corresponding author
      </p>
      <div>
        {data.map((publication, index) => (
          <PublicationItem publication={publication} index={index} key={index} />
        ))}
      </div>
    </section>
  );
};

export default PublicationList;
