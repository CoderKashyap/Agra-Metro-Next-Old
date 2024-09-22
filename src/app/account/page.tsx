import { redirect } from "next/navigation"

export default function Profile() {
    

    const userProfileInfo = null

    if (userProfileInfo === null) redirect('profile?userid=1')

    return (
        <h1>Profile page</h1>
    )
    
}