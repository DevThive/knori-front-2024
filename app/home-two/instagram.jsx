import Link from "next/link";
import getInstagramContents from "@/components/data/instadata";
import { useState, useEffect } from "react";

// const instagram = [
//   {
//     class: 'col-lg-2 col-sm-4 pl-5 pr-5 lg-mb-10',
//     image: '/img/features/instagram-1.jpg',
//   },
//   {
//     class: 'col-lg-2 col-sm-4 pl-5 pr-5 sm-mb-10',
//     image: '/img/features/instagram-2.jpg',
//   },
//   {
//     class: 'col-lg-2 col-sm-4 pl-5 pr-5 sm-mb-10',
//     image: '/img/features/instagram-3.jpg',
//   },
//   {
//     class: 'col-lg-2 col-sm-4 pl-5 pr-5 sm-mb-10',
//     image: '/img/features/instagram-4.jpg',
//   },
//   {
//     class: 'col-lg-2 col-sm-4 pl-5 pr-5 sm-mb-10',
//     image: '/img/features/instagram-5.jpg',
//   },
//   {
//     class: 'col-lg-2 col-sm-4 pl-5 pr-5',
//     image: '/img/features/instagram-6.jpg',
//   },
// ];

const Instagram = () => {
  const [instagramData, setInstagramData] = useState([]); // 상태 추가

  useEffect(() => {
    const fetchData = async () => {
      const data = await getInstagramContents();
      setInstagramData(data);
    };
    fetchData();
  }, []);

  const currentInstagramItems = instagramData.slice(0, 6);

  return (
    <div className="instagram__area">
      <div className="container-fluid">
        <div className="row">
          {currentInstagramItems.map((data, id) => (
            <div className="col-lg-2 col-sm-4 pl-5 pr-5 sm-mb-10" key={id}>
              <div className="instagram__area-item">
                <img src={data.media_url} alt="image" />
                <div className="instagram__area-item-icon">
                  <Link href={data.permalink} target="_blank">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instagram;
