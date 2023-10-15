"use client"

import { useEffect, useState } from "react"

export const formatter = new Intl.NumberFormat("he-IL", {
    style: 'currency',
    currency: 'ILS'
})

interface CurrencyProps {
    value?: string | number
}

const Currency: React.FC<CurrencyProps> = ({
    value
}) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, []);

    if (!isMounted) {
        return null
    }

    return (
        <>
            {formatter.format(Number(value))}
        </>
    );
}

export default Currency;