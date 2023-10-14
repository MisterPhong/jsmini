import { Box, Button, Checkbox, Group, NumberInput, Select, TextInput,  } from '@mantine/core'
import { DateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import React from 'react'
import axios from 'axios';

export default function FormCreate() {
    const form = useForm({
        initialValues: {
            firstname: "",
            lastname: "",
            gender: "",
            address: "",
            salary: "",
            startdate: "",
            dep_id: "",
            pos_id: "",
            termsOfService: false,
        },

    });
    return (
        <Box maw={300} mx="auto">
            <form onSubmit={form.onSubmit(async(values)=>{
                const res = await axios.post("http://localhost:3000/api/em",{
            firstname: values.firstname,
            lastname: values.lastname,
            gender: values.gender,
            address: values.address,
            salary: Number(values.salary),
            startdate: values.startdate,
            dep_id: Number(values.dep_id),
            pos_id: Number(values.pos_id),
                })
            })}>
                <TextInput
                    withAsterisk
                    label="ชื่อ"
                    {...form.getInputProps('firstname')}
                />

                <TextInput
                    withAsterisk
                    label="สกุล"
                    {...form.getInputProps('lastname')}
                />

                <Select
                    mt={4}
                    label="เพศ"
                    placeholder="Pick one"
                    data={[
                        { value: 'ชาย', label: 'ชาย' },
                        { value: 'หญิง', label: 'หญิง' },

                    ]}
                    {...form.getInputProps("gender")}
                />
                <TextInput
                    withAsterisk
                    label="จังหวัด"
                    {...form.getInputProps('address')}
                />
                <NumberInput
                    label="เงินเดือน"
                    defaultValue={1000}
                    parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                    formatter={(value) =>
                        !Number.isNaN(parseFloat(value))
                            ? `B ${value}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                            : 'B '
                    }
                    {...form.getInputProps('salary')}
                />
                    <DateInput
                    valueFormat="YYYY MMM DD"
                    label="Date input"
                    placeholder="Date input"
                    maw={400}
                    mx="auto"
                    {...form.getInputProps('startdate')}
                />

<Select
                    mt={4}
                    label="แผนก"
                    placeholder="Pick one"
                    data={[
                        { value: '1', label: 'หนึ่ง' },
                        { value: '2', label: 'สอง' },

                    ]}
                    {...form.getInputProps('dep_id')}
                />
                <Select
                    mt={4}
                    label="ตำแหน่ง"
                    placeholder="Pick one"
                    data={[
                        { value: '1', label: 'หนึ่ง' },
                        { value: '2', label: 'สอง' },

                    ]}
                    {...form.getInputProps('pos_id')}
                />


                <Group position="right" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </Box>
    )
}
