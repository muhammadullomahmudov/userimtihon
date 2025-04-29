import React from 'react'
import { useType } from '@/interfaces/page'
import Link from 'next/link'

const page = async () => {
    const res = await fetch("https://fakestoreapi.com/users")
    if (!res.ok) throw new Error("Failed to fetch")
    const users = await res.json()
    return (
        <div>
            <ul>
                {
                    users.map((el: useType) => {
                        return (
                            <Link href={`users/${el.id}`}>
                                <li >
                                    <p>{el.id}</p>
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default page