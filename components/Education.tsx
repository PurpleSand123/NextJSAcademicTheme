import data from './data/education.json';

const Education = (): JSX.Element => {
  return (
    <section className="grid w-full" id="education">
      <h2 className="text-xl font-bold mt-12 mb-4">Education</h2>
      <div className="space-y-4">
        {data.map((item: any, index: number) => (
          <div key={index} className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">{item.degree}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {item.institution} &middot; {item.location} &middot; {item.period}
            </p>
            {item.bullets && item.bullets.length > 0 && (
              <ul className="mt-2 list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
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

export default Education;
