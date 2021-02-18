const movieRequests = {
    POPULAR_MOVIES: {
        currentURL: `${process.env.REACT_APP_TMDB_BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`,
        currentTitle: 'Popular movies'
    },
    TOP_RATED: {
        currentURL: `${process.env.REACT_APP_TMDB_BASE_URL}/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`,
        currentTitle: 'Top rated movies'
    },
    TRENDING_NOW: {
        currentURL: `${process.env.REACT_APP_TMDB_BASE_URL}/trending/all/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
        currentTitle: 'Trending movies'
    }
};

export default movieRequests;