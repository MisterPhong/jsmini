"use client";
import GetPublicAPI from "@/app/components/GetPublicAPI";
import { Card } from "@mantine/core";
import React from "react";

export default function AboutPage() {
  return (
    <>
      <Card>
        <h1>About Page</h1>
        <GetPublicAPI />
      </Card>
    </>
  );
}
