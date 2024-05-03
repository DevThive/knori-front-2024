"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import instance from "@/app/axios/axiosInstance";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { DataGrid } from "@mui/x-data-grid";

const ContactList = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    fetchContactList();
  }, []);

  const fetchContactList = async () => {
    try {
      const response = await instance.get("contact/contactlists");
      setContactData(response.data);
    } catch (error) {
      console.error("문의 목록을 가져오는 데 실패했습니다:", error);
    }
  };

  const handleRowClick = async (params) => {
    const contactId = params.row.id;
    // useNavigate를 동적으로 import합니다.
    const navigate = (await import("react-router-dom")).useNavigate();
    navigate(`/contact/${contactId}`);
  };

  // 컬럼 정의 생략...

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
    // 추가 컬럼 정의 가능
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
