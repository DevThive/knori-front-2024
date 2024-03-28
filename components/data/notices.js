import axios from "axios";

async function noticeData() {
  try {
    const response = await axios.get("https://api.knori.or.kr/notices");
    let data = response.data;

    // 날짜 기준으로 데이터 내림차순 정렬
    data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    // 데이터 가공
    const formattedData = data.map((item) => {
      const createdAtDate = new Date(item.createdAt);
      const pureImageUrl = item.photo.replace(/[\[\]\"\\]/g, "");
      return {
        id: item.id,
        img: pureImageUrl,
        img1: pureImageUrl,
        img2: pureImageUrl,
        date: createdAtDate.getDate(),
        month: createdAtDate.getMonth() + 1, // 월은 0부터 시작하므로 1을 더해줍니다.
        year: createdAtDate.getFullYear(),
        postby: item.user ? item.user : "Admin", // user 필드가 없을 경우 "Admin"을 기본값으로 설정
        title: item.content_name,
        content: item.content,
      };
    });

    // 가공된 데이터 반환
    console.log(formattedData);
    return formattedData;
  } catch (error) {
    console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
    // 오류 처리
    return [
      {
        id: "1",
        img: "/img/blog/blog-1.jpg",
        img1: "/img/blog/blog-11.jpg",
        img2: "/img/blog/blog-12.jpg",
        date: "21",
        month: "Jul",
        year: "2023",
        postby: "Admin",
        title: "Find cheap hotels in the best locations",
      },
      {
        id: "2",
        img: "/img/blog/blog-2.jpg",
        img1: "/img/blog/blog-11.jpg",
        img2: "/img/blog/blog-12.jpg",
        date: "25",
        month: "Aug",
        year: "2023",
        postby: "Admin",
        title: "Book a room Today most Affordable Rates.",
      },
    ];
  }
}

export default noticeData;
