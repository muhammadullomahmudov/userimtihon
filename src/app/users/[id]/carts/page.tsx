"use client"
import { cartType } from '@/interfaces/page'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<cartType[]>([])

    useEffect(() => {
        async function getCartData() {
            setLoading(true)
            try {
                const res = await fetch("https://fakestoreapi.com/carts")
                if (!res.ok) throw new Error("Failed to fetch")
                const getData = await res.json()
                setData(getData)
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        getCartData()
    }, [])


    return (
        <ul>
            {data.map(cart => (
                <Link key={cart.id} href={`/users/${cart.userId}/carts/${cart.id}`}>
                    <li className='mb-10'>
                        <p>{cart.id}</p>
                        <p> {cart.userId}</p>
                        <p> {cart.date}</p>
                    </li>
                </Link>
            ))}
        </ul>
    )
}

export default Page
