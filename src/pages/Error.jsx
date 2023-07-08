import React from 'react'

export default function Error() {
  return (
    <div>
      <div className="flex flex-col h-screen bg-white">
  <img
    src="https://img.freepik.com/free-photo/modern-blue-sports-shoe-design-close-up-fashionable-generated-by-ai_188544-19682.jpg?w=1380&t=st=1688826851~exp=1688827451~hmac=a64ae823b8d9d78a66798e91ce8fe8755c6618c62aadc77bfb87d0cd8ebc0b3e"
    alt=""
    className="object-cover w-full h-64"
  />

  <div className="flex items-center justify-center flex-1">
    <div className="max-w-xl px-4 py-8 mx-auto text-center">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        We can't find that page.
      </h1>

      <p className="mt-4 text-gray-500">
        Try searching again, or return home to start from the beginning.
      </p>

      <a
        href="./"
        className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
      >
        Go Back Home
      </a>
    </div>
  </div>
</div>
    </div>
  )
}
