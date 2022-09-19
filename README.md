# Hulu | Next.js with Server-side Rendering

![banner](banner.png)

> In this project I used the `getServerSideProps` function which makes Next.js `pre-render` the page on each request using the data returned by getServerSideProps, and is only executed on the server side. Inside `utils` there is a Javascript object in which there is all the data necessary to make the necessary requests using the Fetch API according to the genre sent `through the url query`. The base project was taught on the <strong>Sonny Sangha</strong> channel.

:arrow_right: getServerSideProps (Server-Side Rendering)  <br />
:arrow_right: Fetch API <br />
:arrow_right: Data rendering <br />

<br />

## getServerSideProps (Server-Side Rendering) 

Server Side Rendering delivers the page practically ready for the browser to load some components and perform the navigation flow. In this way, the user access time to the page decreases considerably. Becoming something practically instantaneous.

If you export a function called `getServerSideProps` (Server-Side Rendering) from a page, Next.js will `pre-render` this page on each request using the data returned by getServerSideProps.

```jsx
// pages/index.jsx 

export const getServerSideProps = async (context) => {
  const genre = context.query.genre

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
    ).then((response) => response.json())
    
  return {
    props: {
      results: request.results,
    },
  }
}
```

*<i>Note that irrespective of rendering type, `any props will be passed to the page component and can be viewed on the client-side in the initial HTML`. This is to allow the page to be hydrated correctly. Make sure that you don't pass any sensitive information that shouldn't be available on the client in props.</i>

### getServerSideProps or API Routes

It can be tempting to reach for an `API Route` when you want to fetch data from the server, then call that API route from getServerSideProps. This is an `unnecessary` and `inefficient` approach, as it will cause an `extra request` to be made due to both getServerSideProps and API Routes running on the server.

Take the following example. An API route is used to fetch some data from a CMS. That API route is then called directly from getServerSideProps. This produces an additional call, reducing performance. Instead, directly import the logic used inside your API Route into getServerSideProps. This could mean calling a CMS, database, or other API directly from inside getServerSideProps.

*<i>nextjs.org/docs/basic-features/data-fetching/get-server-side-props</i>


## Fetch API 

The Fetch API provides an interface for `fetching resources` (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.

For making a `request` and `fetching` a resource, use the `fetch()` method. It is implemented in multiple interfaces, specifically Window and WorkerGlobalScope. This makes it available in pretty much any context you might want to fetch resources in.

The fetch() method takes `one mandatory argument`, the `path to the resource you want to fetch`. It returns a `Promise` that resolves to the `Response` to that request — as soon as the server responds with headers — even if the server response is an HTTP error status. You can also optionally pass in an init options object as the second argument (see Request).

```jsx
// pages/index.jsx

const request = await fetch(
  `https://api.themoviedb.org/3${
    requests[genre]?.url || requests.fetchTrending.url
  }`
).then((response) => response.json())

console.log(`request: https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
console.log(request)
```
 
Em `utils/requests.js` contém todos os endpoints que serão filtrados de acordo com a query realizada de `context.query.genre` dentro de getServerSideProps: 

```js
// utils/requests.js

const API_KEY = process.env.API_KEY

export const requests = {
  fetchTrending: {
    title: 'Trendig',
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: 'Action',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: 'Comedy',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  }
  // ...
}
```

- <strong>Query</strong>: `?genre=fetchTrending`

```js
// terminal output

request: https://api.themoviedb.org/3/trending/all/week?api_key=<API_KEY>&language=en-US
{
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg',
      id: 616037,
      title: 'Thor: Love and Thunder',
      original_language: 'en',
      original_title: 'Thor: Love and Thunder',
      overview: 'After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.',
      poster_path: '/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg',
      media_type: 'movie',
      genre_ids: [Array],
      popularity: 4297.051,
      release_date: '2022-07-06',
      video: false,
      vote_average: 6.806,
      vote_count: 3502
    },
    {
      adult: false,
      backdrop_path: '/pdfCr8W0wBCpdjbZXSxnKhZtosP.jpg',
      id: 84773,
      name: 'The Lord of the Rings: The Rings of Power',
      original_language: 'en',
      original_name: 'The Lord of the Rings: The Rings of Power',
      overview: 'Beginning in a time of relative peace, we follow an ensemble cast of characters as they confront the re-emergence of evil to Middle-earth. From the darkest depths of the Misty Mountains, to the majestic forests of Lindon, to the breathtaking island kingdom of Númenor, to the furthest reaches of the map, these kingdoms and characters will carve out legacies that live on long after they are gone.',
      poster_path: '/suyNxglk17Cpk8rCM2kZgqKdftk.jpg',
      media_type: 'tv',
      genre_ids: [Array],
      popularity: 5849.397,
      first_air_date: '2022-09-01',
      vote_average: 7.588,
      vote_count: 667,
      origin_country: [Array]
    },
    {
      adult: false,
      backdrop_path: '/Aa9TLpNpBMyRkD8sPJ7ACKLjt0l.jpg',
      id: 94997,
      name: 'House of the Dragon',
      original_language: 'en',
      original_name: 'House of the Dragon',
      overview: 'The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.',
      poster_path: '/z2yahl2uefxDCl0nogcRBstwruJ.jpg',
      media_type: 'tv',
      genre_ids: [Array],
      popularity: 6239.808,
      first_air_date: '2022-08-21',
      vote_average: 8.64,
      vote_count: 1242,
      origin_country: [Array]
    }
    // ...
  ],
  total_pages: 1000,
  total_results: 20000
}
```

*<i>developer.mozilla.org/en-US/docs/Web/API/Fetch_API</i>

<br />

## Data rendering

Taking advantage of the SSR and Fetch API example explained earlier, we can pass the data we received as a response from that request in `getServerSideProps` through `props` to the main page component:

```jsx
// pages/index.jsx 

// ...
export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu / Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Results results={results} />
    </div>
  )
}
```

And thus propagate the information through other components that took care of the rendering of this data, notice that the responsiveness is already being handled through TailwindCSS:

```jsx
// components/Results.jsx

// ...
const Results = ({ results }) => {
  return (
    <FlipMove className="flex-wrap justify-center px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  )
}

export default Results
```

So we render the thumbnails of `each object` returned in the getServerSideProps request:

```jsx
// components/Thumbnail.jsx

// ...
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
```
