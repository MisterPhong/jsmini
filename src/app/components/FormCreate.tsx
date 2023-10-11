import {
  Box,
  Button,
  Checkbox,
  Group,
  NumberInput,
  Select,
  TextInput,
} from "@mantine/core";
import React from "react";
import { useForm } from "@mantine/form";
import { DateInput } from "@mantine/dates";
import axios from "axios";

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
    },
  });

  return (
    <Box maw={300} mx="auto">
      <form
        onSubmit={form.onSubmit(async (values) => {
          const res = await axios.post("http://localhost:3000/api/em", {
            firstname: values.firstname,
            lastname: values.lastname,
            gender: values.gender,
            address: values.address,
            salary: Number(values.salary),
            startdate: values.startdate,
            dep_id: Number(values.dep_id),
            pos_id: Number(values.pos_id),
          });
          window.location.replace("/");
        })}
      >
        <TextInput mt={4} label="ชื่อ" {...form.getInputProps("firstname")} />

        <TextInput mt={4} label="นามสกุล" {...form.getInputProps("lastname")} />

        <Select
          mt={4}
          label="เพศ"
          placeholder="Pick one"
          data={[
            { value: "ชาย", label: "ชาย" },
            { value: "หญิง", label: "หญิง" },
          ]}
          {...form.getInputProps("gender")}
        />

        <TextInput mt={4} label="จังหวัด" {...form.getInputProps("address")} />

        <NumberInput
          mt={4}
          label="เงินเดือน"
          {...form.getInputProps("salary")}
        />
        <DateInput
          mt={4}
          label="วันที่เริ่มงาน"
          placeholder="Date input"
          mx="auto"
          {...form.getInputProps("startdate")}
        />

        <Select
          mt={4}
          label="แผนก"
          placeholder="Pick one"
          data={[
            { value: "1", label: "สื่อสารองค์กร" },
            { value: "2", label: "เทคโนโลยีสารสนเทศ" },
          ]}
          {...form.getInputProps("dep_id")}
        />

        <Select
          mt={4}
          label="ตำแหน่ง"
          placeholder="Pick one"
          data={[
            { value: "1", label: "เจ้าหน้าที่ธุรการ" },
            { value: "2", label: "เจ้าหน้าที่การเงินและบัญชี" },
          ]}
          {...form.getInputProps("pos_id")}
        />
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
