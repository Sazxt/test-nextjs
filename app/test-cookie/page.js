import Index from "./components"
import LandingPgae from "./components/headerbar";
import create from "./actions";
import { cookies } from 'next/headers'

export const metadata = {
    title: 'TESTING',
    description: 'BY sazxt',
}
export default function Home() {
    create("ok")
    const cookiesList = cookies()
    const hasCookie = cookiesList.has('name')
    console.log(hasCookie)
    // return <Index/>
    return (<LandingPgae>ok</LandingPgae>);
}
