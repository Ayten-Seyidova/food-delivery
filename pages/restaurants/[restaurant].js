import { useRouter } from "next/router";

const DetailPage = () => {
    const route = useRouter();


    return (
        <>
            <h1>Detail {route.query.restaurant}</h1>
            <button onClick={() => route.push('/')}>Go home</button>
        </>
    )
}

export default DetailPage;