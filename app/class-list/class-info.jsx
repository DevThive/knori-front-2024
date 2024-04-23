"use client";
import classist from "@/components/data/class-all";
import { useState, useEffect } from "react";
import Paginations from "./paginations";
import Casino from "./current-class-items";
import instadata from "@/components/data/instadata";

const ITEMS_PER_PAGE = 6;

const Classcontainer = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await classist();
      const test = await instadata();
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
