'use server'

import { cookies } from 'next/headers'

export default async function create(data) {
    cookies().set('name', 'lee')
}