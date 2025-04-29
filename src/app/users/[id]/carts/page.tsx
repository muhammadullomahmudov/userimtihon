"use client"
import { cartType } from '@/interfaces/page'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<cartType>()
    useEffect(() => {
        async function getCartData() {

            try {
                const res = await fetch("https://fakestoreapi.com/carts")
                const getData = res.json()
                setData(await getData)
                setLoading(true)
            }
            catch (err: any) {

                if (!err.ok) throw new Error("Failed to fetch")
            }
            finally {
                setLoading(false)
            }
        }
        getCartData()

    }, [])
    console.log(data);

    return (
        <>


            <ul>
                <Link href={`users/${id}/carts/${id}`}>
                    <li>
                        <p>{data?.id}</p>

                    </li>
                </Link>
            </ul>



        </>
    )
}

export default page