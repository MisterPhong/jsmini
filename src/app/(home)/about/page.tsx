<<<<<<< HEAD
"use client"
import GetPublicAPI from '@/app/components/GetPublicAPI'
import { Card } from '@mantine/core'
import React from 'react'

type Props = {}

export default function Aboutme({}: Props) {
  return (
    <>
    <Card>
    <h1>รายการเหรียญวันนี้</h1>
    <GetPublicAPI/>
    </Card>
    </>
  )
}
=======
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
>>>>>>> 75e05848ae9fbb3f523278fd074936187d35888b
