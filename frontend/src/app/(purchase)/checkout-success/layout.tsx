import type { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
    title: "Checkout Success",
    description: "Checkout Success Page",
    keywords: "checkout, success, travel",
    authors: [{ name: "Tourvisto Team" }],
    icons: {
        icon: "/fi_2200326.svg",
    },
};

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div>{children}</div>
    )
}

export default layout