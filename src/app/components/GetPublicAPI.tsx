import { Table } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";

<<<<<<< HEAD
type Props = {};

export default function GetPublicAPI({ }: Props) {
=======
export default function GetPublicAPI() {
>>>>>>> 75e05848ae9fbb3f523278fd074936187d35888b
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get(
      "https://api.coinstats.app/public/v1/markets?coinId=bitcoin"
    );
    setData(res.data);
  };
<<<<<<< HEAD
  useEffect(() => {
    getData();
  }, []);
=======

  useEffect(() => {
    getData();
  }, []);

>>>>>>> 75e05848ae9fbb3f523278fd074936187d35888b
  console.log(data);
  const rows = data.map((row: any) => (
    <tr key={row.price}>
      <td>{row.pair}</td>
      <td>{row.volume}</td>
      <td>{row.exchange}</td>
    </tr>
  ));
<<<<<<< HEAD

=======
>>>>>>> 75e05848ae9fbb3f523278fd074936187d35888b
  return (
    <>
      <Table>
        <thead>
          <tr>
            <td>pair</td>
            <td>volume</td>
            <td>exchange</td>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  );
}
