

import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-500 animate-bounce">404</h1>
        <p className="mt-4 text-xl text-gray-700">Oops! Page not found.</p>
        <Link href="/">
          <b className="mt-8 inline-block px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            Go to Home
          </b>
        </Link>
      </div>
    </div>
  );
}
