import luxury6 from "@/public/img/luxury/luxury-6.jpg";
import luxury7 from "@/public/img/luxury/luxury-7.jpg";
import luxury8 from "@/public/img/luxury/luxury-8.jpg";

// import instance from "@/app/axios/axiosInstance";

// async function roomStyleAllBlogs() {
//   try {
//     const response = await instance.get("/class");
//     const data = response.data;

//     const formttedData = data.map((item) => {
//       const creeatedAtDate = new Date(item.createdAt);
//       return {
//         id: item.id,
//         img: item.img,
//         price: item.price,
//         member: item.member,
//         learningtime: item.learningtime,
//         star: item.star,
//       };
//     });

//     console.log(formttedData);
//   } catch (error) {
//     console.log("데이터를 가져오는 중 오류가 발생했습니다.", error);

//     return [
//       {
//         title: "유아,초,중,고 클래스",
//         des: "facilisis tempor erat facilisis. Proin imperdiet rutrum cursus",
//         img: luxury6,
//         image: "/testimg/classimg11.jpg",
//         price: "미정",
//         bed: 3,
//         guest: 4,
//         star: 4.9,
//       },
//       {
//         title: "Small Suite",
//         des: "facilisis tempor erat facilisis. Proin imperdiet rutrum cursus",
//         img: luxury7,
//         image: "/testimg/classimg2.jpg",
//         cl: "center",
//         price: 199,
//         bed: 2,
//         guest: 3,
//         star: 4.4,
//       },
//     ];
//   }
// }
// export default roomStyleAllBlogs;

// //클래스
const roomStyleAllBlogs = [
  {
    title: "유아,초,중,고 클래스",
    des: "facilisis tempor erat facilisis. Proin imperdiet rutrum cursus",
    img: luxury6,
    image: "/testimg/classimg11.jpg",
    price: "미정",
    bed: 3,
    guest: 4,
    star: 4.9,
  },
  {
    title: "Small Suite",
    des: "facilisis tempor erat facilisis. Proin imperdiet rutrum cursus",
    img: luxury7,
    image: "/testimg/classimg2.jpg",
    cl: "center",
    price: 199,
    bed: 2,
    guest: 3,
    star: 4.4,
  },
  {
    title: "Luxury room",
    des: "facilisis tempor erat facilisis. Proin imperdiet rutrum cursus",
    img: luxury8,
    image: "/testimg/classimg3.jpg",
    price: 302,
    bed: 3,
    guest: 6,
    star: 4.4,
  },
];
export default roomStyleAllBlogs;
