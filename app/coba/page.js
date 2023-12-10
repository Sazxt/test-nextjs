import Link from 'next/link'
export const metadata = {
    title: 'TESTING',
    description: 'BY sazxt',
}
let items = [
    {
        id: 0,
        title : "testing",
        href : "/"
    },
    {
        id: 1,
        title : "TEST SATU",
        href : "/test-satu"
    },
    {
        id: 3,
        title : "menu dashboard",
        href : "/menu-dashboard"
    },
    {
        id: 4,
        title : "Router Switch",
        href : "/test-dua"
    },
    {
        id: 5,
        title : "testing",
        href : "/"
    },
    {
        id: 6,
        title : "testing",
        href : "/"
    },
]
export default function Coba() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-3xl font-bold underline">
                Aplikasi Demo testing For Nextjs
            </h1>
            {items.map((item,index)=>{
                return (<>
                <div className="flex flex-row w-full gap-2">
                    <div className="basis-1/4 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">{index + 1}</div>
                    <div className="basis-1/4 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">{item.href}</div>
                    <Link className="basis-1/2 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" href={item.href}><div>{item.title}</div></Link>
                </div>
                </>)
            })}
        </main>
    )
}
