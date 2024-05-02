"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import instance from "@/app/axios/axiosInstance";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom"; // React Router의 useNavigate를 import

const ContactList = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [contactData, setContactData] = useState([]);
  const [navigate, setNavigate] = useState(null); // navigate 함수를 저장할 state

  useEffect(() => {
    fetchContactList();
  }, []);

  useEffect(() => {
    // 클라이언트 측에서만 useNavigate를 사용하도록 함
    if (typeof window !== "undefined") {
      setNavigate(useNavigate());
    }
  }, []);

  const fetchContactList = async () => {
    try {
      const response = await instance.get("contact/contactlists");
      setContactData(response.data);
    } catch (error) {
      console.error("문의 목록을 가져오는 데 실패했습니다:", error);
    }
  };

  const handleRowClick = (params) => {
    const contactId = params.row.id;
    navigate(`/contact/${contactId}`); // navigate 함수를 사용하여 페이지 이동
  };

  const columns = [
    // ... 컬럼 정의

    {
      flex: 0.1,
      field: "id",
      minWidth: 80,
      headerName: "문의 ID",
    },
    {
      flex: 0.25,
      minWidth: 200,
      field: "content_title",
      headerName: "문의",
    },
    {
      flex: 0.25,
      minWidth: 230,
      field: "user_email",
      headerName: "메일",
    },
    {
      flex: 0.15,
      type: "date",
      minWidth: 130,
      headerName: "문의날짜",
      field: "start_date",
      valueGetter: (params) => console.log(params),
    },
    {
      flex: 0.15,
      minWidth: 120,
      field: "content",
      headerName: "content",
    },
    // {
    //   flex: 0.1,
    //   field: "user_phone",
    //   minWidth: 80,
    //   headerName: "user_phone",
    // },

  ];

  return (
    <Card>
      <CardHeader title="문의 목록" />
      <Box sx={{ height: isMobile ? 300 : 500, width: "100%" }}>
        <DataGrid
          columns={columns}
          rows={contactData}
          onRowClick={handleRowClick}
        />
      </Box>
    </Card>
  );
};

export default ContactList;
