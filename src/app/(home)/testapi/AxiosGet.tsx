"use client";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import DisplayData from "./DisplayData";

export default function AxiosGet() {
  const [data, setData] = useState<any>([]);
  const getData = async () => {
    const response = await axios.get(
      "https://ce.ksu.ac.th/ceteacher/teachers.json.php"
    );
    setData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return <DisplayData data={data} />;
}
