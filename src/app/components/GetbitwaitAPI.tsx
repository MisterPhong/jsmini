import { Table } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react"; 
type Props = {};


export default function GetbitwaitAPI({ }: Props) {
    const [data, setData] = useState([]);
    const getData = async () => {
        const res = await axios.get(
            "https://data.binance.com/api/v3/ticker/24hr"
        );
        setData(res.data);
    };
    useEffect(() => {
        getData();
    }, []);
    console.log(data);
    const rows = data.map((row: any) => (
        <tr key={row.symbol}>
            <td>{row.priceChangePercent}</td>
            <td>{row.lastPrice}</td>
            <td>{row.weightedAvgPrice}</td>
            <td>{row.count}</td>
        </tr>
    ));

    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <td>priceChangePercent</td>
                        <td>lastPrice</td>
                        <td>weightedAvgPrice</td>
                        <td>count</td>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </>
    );
}
