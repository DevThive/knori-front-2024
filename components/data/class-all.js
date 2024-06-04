import axios from "axios";

async function classlist() {
  try {
    // 실제 API 주소를 사용하거나 임시 데이터를 사용해야 합니다.
    const response = await axios.get("https://api.knori.or.kr/class");
    let data = response.data;

    data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const formattedData = data.map((item) => {
      const pureImageUrl = item.photo.replace(/[\[\]\"\\]/g, "");
      const createdAtDate = new Date(item.createdAt);
      return {
        id: item.id,
        title: item.title,
        content: item.content,
        photo: pureImageUrl,
        state: "미정",
        createdAt: createdAtDate,
      };
    });

    // console.log(formattedData);
    return formattedData;
  } catch (error) {
    console.log("데이터를 가져오는 중 오류가 발생했습니다.", error);

    // 임시 데이터를 반환합니다.
    return [
      {
        title: "유아,초,중,고 클래스",
        content:
          "facilisis tempor erat facilisis. Proin imperdiet rutrum cursus",
        photo: "/testimg/classimg11.jpg",
        state: "미정",
      },
      {
        title: "유아,초,중,고 클래스",
        content:
          "facilisis tempor erat facilisis. Proin imperdiet rutrum cursus",
        photo: "/testimg/classimg11.jpg",
        state: "미정",
      },
    ];
  }
}

export default classlist;
