import CobasatuComponet from "@/components/cobasatucomponent"
import { PostFeed } from "@/components/postfeed"
import { Suspense } from 'react'
import DashboardLayout from "./layout/layout"
export const metadata = {
    title: 'TESTING',
    description: 'BY sazxt',
}
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <DashboardLayout>
                halo
            </DashboardLayout>
        </main>
    )
}
