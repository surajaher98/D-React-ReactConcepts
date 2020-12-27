
class EndPoints {
    BaseUrl = 'https://api.spotify.com/'
    AuthCodeUrl = 'authorize?client_id=654c7484fce14022bd0ec15f605a0bd3&response_type=code&redirect_uri=http://localhost:3000/sportify&scope=user-read-private%20user-read-email&state=34fFs29kd09';
    TokenUrl = 'api/token';
    CategoriesUrl = 'https://api.spotify.com/v1/browse/categories?country=IN&limit=50';
    Token = 'BQCS0MVB8OsLWVJ53VKCdg7YrCP5ksyGSIFNTlGrw8d9KmvvknAMeWrqz1wvp9BwjddWEar0q5XczWF-dYuzQ2bzlx4Q5zFu91k3acsiNyjyO8vWFbBElYDILLU3qtsO6_UWBNJZSInnJtuoOaCdxuAxb2ydDbF6SG81nJm-wVs12eUG-A';

    PlayList = 'https://api.spotify.com/v1/browse/categories/cattegoryId/playlists?limit=4';
}
export default EndPoints;

