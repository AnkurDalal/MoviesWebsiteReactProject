export const getMoviesDetails = async ({params}) => {
    const id=params.movieId
  try {
    const resp = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );

    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
