import data from './data/experience.json';

const Experience = (): JSX.Element => {
  return (
    <section className="grid w-full" id="experience">
      <h2 className="text-xl font-bold mt-12 mb-4">Experience</h2>
      <div className="space-y-6">
        {data.map((item: any, index: number) => (
          <div
            key={index}
            className="border-l-2 border-gray-200 pl-4"
          >
            <h3 className="font-semibold text-gray-900">
              {item.role}{' '}
              <span className="text-gray-700">@ {item.company}</span>
            </h3>
            <p className="text-xs text-gray-500">
              {item.location} &middot; {item.period}
            </p>
            {item.bullets && item.bullets.length > 0 && (
              <ul className="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
                {item.bullets.map((bullet: string, bulletIndex: number) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

