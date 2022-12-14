/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'
import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline'

// Os componentes funcionais não possuem uma referência, que é necessária para que o Flip Move funcione. 
// Para fazê-lo funcionar, você precisa envolver seu componente funcional em React.forwardRef 
// e passá-lo para o primeiro elemento que aceita refs, como elementos DOM ou componentes de classe:
const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/'

  return (
    <div ref={ref} className="p-2 transition duration-200 ease-in transform cursor-pointer group sm:hover:scale-105 hover:z-50">
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        width={1920}
        height={1000}
        layout="responsive"
        alt=""
      />

      <div className="p-2">
        <p className="max-w-md truncate">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center transition-opacity duration-200 opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} •`}{' '}
          {result.release_date || result.first_air_date} •{' '}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  )
})

export default Thumbnail
