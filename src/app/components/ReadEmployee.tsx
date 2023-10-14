import { ActionIcon, Table } from '@mantine/core';
import { IconEdit, IconTrashXFilled } from '@tabler/icons-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Text } from '@mantine/core';
import { ModalsProvider, modals } from '@mantine/modals';
import FormCreate from './FormCreate';


export default function ReadEmployee() {
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
            title: 'คำเตือน!ลบข้อมูลนี้ใช่ไหม',
            centered: true,
            children: (
                <Text size="sm">
                    พี่จะลบจริงๆใช่ไหม : {id}
                </Text>
            ),
            labels: { confirm: 'ลบเลย', cancel: "อย่าพึ่งลบ" },
            confirmProps: { color: 'red' },
            onCancel: () => console.log('Cancel'),
            onConfirm: async() => {
                const res = await axios.delete(`http://localhost:3000/api/em/${id}`);
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
            <td>{row.dpname}</td>
            <td>{row.poname}</td>
            <td><ActionIcon color="green" variant="outline" onClick={() => (row.id)}>
                <IconEdit size="1.125rem" />
            </ActionIcon></td>

            <td><ActionIcon color="red" variant="outline" onClick={() => openDeleteModal(row.id)}>
                <IconTrashXFilled size="1.125rem" />
            </ActionIcon></td>
            



        </tr>
    ))

    return (
        <>
            <ModalsProvider labels={{ confirm: 'Submit', cancel: 'Cancel' }}>
                <div style = {{display : 'flex',justifyContent:'end'}}>
                    <Button
                    variant="outline" onClick={()=>
                    modals.open({
                        title:"add Detail",
                        children: <FormCreate />,
                    })}
                    >
                        create
                    </Button>

                </div>


                <Table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>ชื่อ</td>
                            <td>นามสกุล</td>
                            <td>เพศ</td>
                            <td>จากรัฐ</td>
                            <td>เงินเดือน</td>
                            <td>แผนก</td>
                            <td>ตำแหน่ง</td>
                            <td>เครื่องมือ</td>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>
            </ModalsProvider>
        </>
    )
}
