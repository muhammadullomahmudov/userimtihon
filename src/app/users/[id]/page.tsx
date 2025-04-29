'use client'
import { cartType, useType } from '@/interfaces/page';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const page = () => {
    const { id } = useParams();
    const [users, setUsers] = useState<useType>()
    useEffect(() => {
        async function getCartData() {

            try {
                const res = await fetch(`https://fakestoreapi.com/users/${id}`)
                const users = res.json()
                setUsers(await users)
            }
            catch (err: any) {

                if (!err.ok) throw new Error("Failed to fetch")
            }
        }
        getCartData()

    }, [])


    return (
        <div>
            <ul>

                <li key={users?.id}>
                    <p>{users?.name?.firstname}</p>
                    <p>{users?.name?.lastname}</p>
                    <Link href={`${id}/carts`}>Carts</Link>
                </li>
            </ul>
        </div>
    )

}

export default page