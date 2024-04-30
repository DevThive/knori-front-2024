"use client";
import React, { useEffect, useState } from "react";

import instance from "@/app/axios/axiosInstance";
// import { Grid } from "@mui/material";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { DataGrid } from "@mui/x-data-grid";

const ContactList = () => {
  const [contactData, setContactData] = useState([]);
  useEffect(() => {
    fetchContactList(); // 컴포넌트가 마운트될 때 문의 리스트를 불러옴
  }, []);
  const fetchContactList = async () => {
    try {
      const response = await instance.get("contact/contactlists"); // 백엔드에서 문의 리스트 가져오기
      setContactData(response.data); // 가져온 데이터를 상태에 설정
      console.log("response.data", response.data);
    } catch (error) {
      console.error("클래스 목록을 가져오는 데 실패했습니다:", error);
    }
  };

  const columns = [
    {
      flex: 0.1,
      field: "id",
      minWidth: 80,
      headerName: "ID",
    },
    {
      flex: 0.25,
      minWidth: 200,
      field: "content_title",
      headerName: "Name",
    },
    {
      flex: 0.25,
      minWidth: 230,
      field: "user_email",
      headerName: "Email",
    },
    {
      flex: 0.15,
      type: "date",
      minWidth: 130,
      headerName: "createdAt",
      field: "start_date",
      //   valueGetter: (params) => new Date(params.value),
    },
    {
      flex: 0.15,
      minWidth: 120,
      field: "content",
      headerName: "content",
    },
    {
      flex: 0.1,
      field: "user_phone",
      minWidth: 80,
      headerName: "user_phone",
    },
  ];
  return (
    // <Grid container spacing={2}>
    //   {contactData.map((item) => (
    //     <Grid item xs={12} key={item.id}>
    //       <div>
    //         <h3>{item.content_title}</h3>
    //         <p>{item.content}</p>
    //         <p>문의자: {item.user_name}</p>
    //       </div>
    //     </Grid>
    //   ))}
    // </Grid>
    <Card>
      <CardHeader title="Basic" />
      <Box sx={{ height: 500 }}>
        <DataGrid columns={columns} rows={contactData.slice(0, 10)} />
      </Box>
    </Card>
  );
};
export default ContactList;
