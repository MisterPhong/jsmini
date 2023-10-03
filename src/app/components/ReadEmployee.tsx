import { ActionIcon, Table, Text } from "@mantine/core";
import { IconTrashX } from "@tabler/icons-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ModalsProvider, modals } from "@mantine/modals";
import { useRouter } from "next/navigation";

export default function ReadEmployee() {
  const router = useRouter();

  const [employee, setEmployee] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:3000/api/em");
    setEmployee(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(employee);

  const openDeleteModal = (id: number) =>
    modals.openConfirmModal({
      title: "Delete your profile",
      centered: true,
      children: <Text size="sm">ต้องลบข้อมูลนี้หรือไม่ {id}</Text>,
      labels: { confirm: "Delete account", cancel: "No don't delete it" },
      confirmProps: { color: "red" },
      onCancel: () => console.log("Cancel"),
      onConfirm: async () => {
        const res = await axios.delete("http://localhost:3000/api/em/" + id);
        getData();
      },
    });

  const rows = employee.map((row: any) => (
    <tr key={row.id}>
      <td>{row.id}</td>
      <td>{row.firstname}</td>
      <td>{row.lastname}</td>
      <td>{row.gender}</td>
      <td>{row.address}</td>
      <td>{row.salary}</td>
      <td>{row.depname}</td>
      <td>{row.posname}</td>
      <td>
        <ActionIcon
          color="red"
          variant="filled"
          onClick={() => openDeleteModal(row.id)}
        >
          <IconTrashX size="1.125rem" />
        </ActionIcon>
      </td>
    </tr>
  ));

  return (
    <>
      <ModalsProvider labels={{ confirm: "Submit", cancel: "Cancel" }}>
        <Table>
          <thead>
            <tr>
              <td>ID</td>
              <td>ชื่อ</td>
              <td>นามสกุล</td>
              <td>เพศ</td>
              <td>จังหวัด</td>
              <td>เงินเดือน</td>
              <td>แผนก</td>
              <td>ตำแหน่ง</td>
              <td>#</td>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ModalsProvider>
    </>
  );
}
