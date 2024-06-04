import axios from "axios";

export const getInstagramContents = async () => {
  try {
    const { data } = await axios.get(`
https://graph.instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM_USER_ID}/media?fields=id,media_type,media_url,permalink,thumbnail_url,username,caption&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN}
`);
    // console.log(data.data);
    return data.data;
  } catch (error) {
    console.error("Instagram API 요청 중 에러 발생:", error);
    // 에러 처리 로직 또는 에러를 다시 던지기
    throw error;
  }
};

export default getInstagramContents;
