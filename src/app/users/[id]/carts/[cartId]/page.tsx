'use client'
import { cartType,  } from '@/interfaces/page';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const page = () => {
    const { id } = useParams();
    const [cartData, setCartData] = useState<cartType>()
    useEffect(() => {
        async function getCartData() {

            try {
                const res = await fetch(`https://fakestoreapi.com/carts/${id}`)
                const carts = res.json()
                setCartData(await carts)
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

        <li key={cartData?.id}>
            <p>{cartData?.userId}</p>
            <p>{cartData?.date}</p>
        </li>
            </ul>
        </div>
    )

}

export default page