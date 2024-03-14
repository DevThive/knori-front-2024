"use client";
import classist from "@/components/data/class-all";
import { useState, useEffect } from "react";
import Paginations from "./paginations";
import Casino from "./current-class-items";

const ITEMS_PER_PAGE = 6;

const Classcontainer = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await classist();
      setClasses(data);
    };
    fetchData();
  }, []);

  const totalPages = Math.ceil(classes.length / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentClassItems = classes.slice(startIndex, endIndex).reverse();

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="blog__grid section-padding" id="blog-grid">
        <Casino currentClassItems={currentClassItems} />
        <div className="container">
          <Paginations
            currentPage={currentPage}
            handlePrevPage={handlePrevPage}
            totalPages={totalPages}
            handleNextPage={handleNextPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};

export default Classcontainer;

// // 임포트 경로와 컴포넌트 이름을 확인하고 필요에 따라 수정했습니다.
// import classes from "@/components/data/class-all";
// import { useState, useEffect } from "react";
// import Image from "@/components/Image"; // @ 경로는 프로젝트 설정에 따라 다를 수 있습니다.

// const Casino = () => {
//   // 컴포넌트 이름을 Casino로 수정했을 수 있습니다. 의도한 이름으로 확인하세요.
//   const [classesData, setClassesData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // 오류 처리를 위한 try-catch 구문 추가
//         const data = await classes.fetchData();
//         setClassesData(data);
//       } catch (error) {
//         console.error("데이터를 가져오는 중 오류가 발생했습니다.", error);
//       }
//     };
//     fetchData();
//   }, []);

//   // 배열을 뒤집지 않고, 최근 3개의 항목만 선택합니다.
//   const blogItem = classesData.slice(0, 3);

//   // Image 컴포넌트에 onError 이벤트 핸들러 추가
//   const handleImageError = (event) => {
//     event.target.src = "/img/blog/blog-3.jpg";
//   };

//   return (
//     <div className="modern__room section-padding">
//       <div className="container">
//         <div className="row">
//           {classesData?.map((item, index) => (
//             <div key={index} className="col-xl-4 col-lg-6 col-md-6 mb-30">
//               <div className="deluxe__three-item">
//                 <div className="deluxe__three-item-image">
//                   <Image
//                     src={item.photo}
//                     alt={item.title}
//                     width={500}
//                     height={500}
//                     onError={handleImageError} // onError 핸들러를 Image 컴포넌트에 적용
//                   />
//                   <div className="deluxe__three-item-image-content">
//                     <h4>
//                       <a href="/class-details">{item.title}</a>
//                       <span>$32/Night</span>
//                     </h4>
//                     <p>{item.content}</p>

//                     <div className="deluxe__three-item-image-content-bottom">
//                       <a className="simple-btn" href="/room-details">
//                         <i className="far fa-chevron-right"></i> Read More
//                       </a>
//                       <p>
//                         <i className="fas fa-star"></i> <span>4.8</span>2k
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Casino; // 컴포넌트 이름을 Casino로 수정했을 수 있습니다.
