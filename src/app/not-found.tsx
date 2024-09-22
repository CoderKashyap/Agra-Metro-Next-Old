import Link from "next/link";

export default function NotFound() {

    return (
        <>

            <div className="flex items-center justify-center flex-col gap-12 h-screen">
                <h1 className="text-5xl">Page Not Found</h1>
                <Link href={'/'} className="bg-black text-white">Go back to Home</Link>
            </div>

        </>
    )


}