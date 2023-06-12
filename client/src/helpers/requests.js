
const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
    NetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    TrendingMovies: `/trending/movie/day?api_key=${API_KEY}&language=en-US`,
    TopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    ActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    ComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    HorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    RomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    DocumentaryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    AnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    ThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
    DramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
    FamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    AdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
    WarMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
    MysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    CrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
    HistoryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
    DisneyMovies: `/discover/movie?api_key=${API_KEY}&with_companies=2`,
    DreamWorksMovies: `/discover/movie?api_key=${API_KEY}&with_companies=521`,
    PixarMovies: `/discover/movie?api_key=${API_KEY}&with_companies=3`,
    FamilyComediesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751,35`,
    FamilyActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751, 28,12`,
    RomanticComediesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28,10749`,
    ActionComediesMovies: `/discover/movie?api_key=${API_KEY}&with_genres= 28,35`,
    FantasyHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres= 14,27`,
    RomanticDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres= 18,10749`,
    ComedyDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres= 18,35`,
    SciFiThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres= 53,878`,

    top10ComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&sort_by=popularity.desc&language=en-US&page=1`,
    top10ActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&sort_by=popularity.desc&language=en-US&page=1`,
    top10HorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&sort_by=popularity.desc&language=en-US&page=1`,
    top10RomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&sort_by=popularity.desc&language=en-US&page=1`,
    top10DocumantaryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99&sort_by=popularity.desc&language=en-US&page=1`,
    top10ThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53&sort_by=popularity.desc&language=en-US&page=1`,
    top10DramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18&sort_by=popularity.desc&language=en-US&page=1`,
    top10FamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751&sort_by=popularity.desc&language=en-US&page=1`,

    upcomingComedyMovies: `/movie/upcoming?api_key=${API_KEY}&with_genres=35&sort_by=popularity.desc&language=en-US&page=1`,
    upcomingActionMovies: `/movie/upcoming?api_key=${API_KEY}&with_genres=28&sort_by=popularity.desc&language=en-US&page=1`,
    upcomingHorrorMovies: `/movie/upcoming?api_key=${API_KEY}&with_genres=27&sort_by=popularity.desc&language=en-US&page=1`,
    upcomingRomanticMovies: `/movie/upcoming?api_key=${API_KEY}&with_genres=10749&sort_by=popularity.desc&language=en-US&page=1`,
    upcomingDocumantaryMovies: `/movie/upcoming?api_key=${API_KEY}&with_genres=99&sort_by=popularity.desc&language=en-US&page=1`,
    upcomingThrillerMovies: `/movie/upcoming?api_key=${API_KEY}&with_genres=53&sort_by=popularity.desc&language=en-US&page=1`,
    upcomingDramaMovies: `/movie/upcoming?api_key=${API_KEY}&with_genres=18&sort_by=popularity.desc&language=en-US&page=1`,
    upcomingFamilyMovies: `/movie/upcoming?api_key=${API_KEY}&with_genres=10751&sort_by=popularity.desc&language=en-US&page=1`,
    
};

export default requests;