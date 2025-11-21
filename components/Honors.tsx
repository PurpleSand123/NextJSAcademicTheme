import data from './data/honors.json';

const Honors = (): JSX.Element => {
  return (
    <section className="grid w-full" id="honors">
      <h2 className="text-xl font-bold mt-12 mb-4">Honors &amp; Awards</h2>
      <div className="space-y-4">
        {data.map((item: any, index: number) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between bg-gray-50 rounded-md p-4"
          >
            <div>
              <p className="text-sm font-semibold text-gray-900">{item.name}</p>
              <p className="text-sm text-gray-700">{item.description}</p>
              {item.organization && (
                <p className="text-xs text-gray-500 mt-1">{item.organization}</p>
              )}
            </div>
            <div className="mt-2 sm:mt-0 text-right">
              <p className="text-xs uppercase tracking-wide text-gray-500">{item.category}</p>
              <p className="text-sm text-gray-700">{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Honors;
