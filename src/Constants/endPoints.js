
class EndPoints {
    BaseUrl = 'https://api.spotify.com/'
    AuthCodeUrl = 'authorize?client_id=654c7484fce14022bd0ec15f605a0bd3&response_type=code&redirect_uri=http://localhost:3000/sportify&scope=user-read-private%20user-read-email&state=34fFs29kd09';
    TokenUrl = 'api/token';
    CategoriesUrl = 'https://api.spotify.com/v1/browse/categories?country=IN&limit=50';
    Token = 'BQAP4oAlkzILrze0jiK647sQkXQJB392A7N1wypGsFvem6ILp_amaORKtw-2NMO5HATlU0101DAGgq18uo8x6hid7QvratGe9kBcUD8Wac2M4KH_Bj5RspdRBLFczT6lfyFmNX3mVviAaKMDaKizRaF4zYpC-cucMht2DKcYBczU-B7WpQfw6KAKmRjtAY6R';

    PlayList = 'https://api.spotify.com/v1/browse/categories/cattegoryId/playlists?country=IN';
}
export default EndPoints;

