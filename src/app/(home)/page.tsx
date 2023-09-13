"use client";
import { Card } from "@mantine/core";
import ShowTitle from "../components/ShowTitle";

export default function Home() {
  const titlePage = "หน้าแรกแสดงข้อมูลทั้งหมด";
  return (
    <>
      <Card>
        <ShowTitle title={titlePage} />
      </Card>
    </>
  );
}
