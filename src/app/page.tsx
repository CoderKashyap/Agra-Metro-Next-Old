'use client'

import Link from "next/link";


export default function Home() {

  return (
    <>

      <div className="flex items-center justify center flex-col m-16">

        Welcome to Next.Js

        <Link href={'stations'}> Navigate to station page. </Link>
        <Link href={'stations/1'}> Navigate to station detail page. </Link>
        <Link href={'stations/1/2/3/4'}> Navigate to station edit page. </Link>
        
      </div>

      <div className="m-16">
        <h2>Alternative way of router</h2>
        <button>Navigate to stations page using useRouter Hook.</button>
      </div>

    </>);
}
