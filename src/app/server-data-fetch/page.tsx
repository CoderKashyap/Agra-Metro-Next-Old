async function fetctListOfUsers(){

}



export default async function ServerSideDataFetching() {

    const listOfUsers = await fetctListOfUsers()

    return (
        <>

            <div>Server side data fetching</div>

        </>
    )

}