"use client"
import GetbitwaitAPI from '@/app/components/GetbitwaitAPI'
import { Card } from '@mantine/core'
import React from 'react'

type Props = {}

export default function bitwait({ }: Props) {
    return (
        <>
        <Card>
            <h1>WelcometoBitwait</h1>
            <GetbitwaitAPI/>
        </Card>
        </>
    )
}