import { Suspense } from 'react';
import MovieInfo from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';

export default async function MovieDetail({ params }: { params: Promise<{ id: string }> }) {
  //   const movie = await getMovie(id);
  //   const videos = await getVideos(id);

  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

  // return <h1>{movie.title}</h1>;
  // console.log(params);
  const { id } = await params;
  return (
    <div>
      <h3>Movie detail page</h3>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <h4>Videos</h4>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
