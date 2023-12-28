export const GOOGLE_API_KEY = "AIzaSyAX_c-ohBW1AwpKxqe77Xct2RsS7G-1_Zs";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const API_options = {
  Authorization: "Bearer"[GOOGLE_API_KEY],
  Accept: "application / json",
};

console.log(YOUTUBE_VIDEOS_API);
