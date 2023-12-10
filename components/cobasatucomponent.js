"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function CobasatuComponet(){
    const pathname = usePathname()
    return (<nav>
        <ul>
            <li>
                <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
                    Home
                </Link>
            </li>
            <li>
                <Link
                    className={`link ${pathname === '/test-satu' ? 'active' : ''}`}
                    href="/about"
                >
                    About
                </Link>
            </li>
        </ul>
    </nav>)
}