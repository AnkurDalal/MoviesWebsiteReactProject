export const getMoviesData =async () => {
  try {
    const resp = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=batman` );

    const data =await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
