import { NextPage } from 'next';
import Link from 'next/link';

const FourOFour: NextPage<unknown> = () => (
  <section className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
    <div className="space-y-8 max-w-2xl">
      {/* Large 404 Number */}
      <div className="relative">
        <h1 className="text-9xl font-bold text-gray-200 dark:text-gray-800 select-none">404</h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl">🔍</div>
        </div>
      </div>

      {/* Error Message */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Page Not Found</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
          Oops! The page you're looking for seems to have wandered off into the digital void.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
        <Link href="/">
          <button
            type="button"
            className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            ← Back to Home
          </button>
        </Link>
        <Link href="/projects">
          <button
            type="button"
            className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            View Projects
          </button>
        </Link>
      </div>

      {/* Helpful Links */}
      <div className="pt-8 border-t border-gray-200 dark:border-gray-700 mt-8">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">You might be interested in:</p>
        <div className="flex flex-wrap gap-3 justify-center text-sm">
          <Link
            href="/#about"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white underline decoration-dotted underline-offset-4 transition-colors"
          >
            About
          </Link>
          <span className="text-gray-300 dark:text-gray-600">•</span>
          <Link
            href="/#publications"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white underline decoration-dotted underline-offset-4 transition-colors"
          >
            Publications
          </Link>
          <span className="text-gray-300 dark:text-gray-600">•</span>
          <Link
            href="/projects"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white underline decoration-dotted underline-offset-4 transition-colors"
          >
            Projects
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default FourOFour;
