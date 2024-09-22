'use client'

import { usePathname, useSearchParams } from "next/navigation";

export default function Profile() {
    
    // const pathname = usePathname()
    // console.log(pathname);

    const searchParams = useSearchParams()

    console.log(searchParams.get('userid'));
    

    return (
        <h1>Profile page</h1>
    )
    
}