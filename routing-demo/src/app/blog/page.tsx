import { Metadata } from "next"

export const metadata: Metadata = {
    title: {
        absolute: "Blog",
    },
}

export default async function blog(){
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Intentional Delay")
        }, 2000)
    })
    return <h1>My blog</h1>
}