"use client";
import { Card } from "@mantine/core";
import ShowTitle from "../components/ShowTitle";
import ReadEmployee from "../components/ReadEmployee";

export default function Home() {
  const titlePage = "หน้าแรกแสดงข้อมูลทั้งหมด";
  return (
    <>
      <Card>
        <ShowTitle title={titlePage} />
<<<<<<< HEAD
        <ReadEmployee/>
=======
        <ReadEmployee />
>>>>>>> 75e05848ae9fbb3f523278fd074936187d35888b
      </Card>
    </>
  );
}
