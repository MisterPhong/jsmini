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