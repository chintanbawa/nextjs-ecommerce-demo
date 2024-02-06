'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'


const Header = () => {
    const router = useRouter()
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    // useEffect only runs on the client, 
    // so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        if (typeof window !== 'undefined') router.refresh()
        return null
    }

    return (
        <div className='flex justify-between px-6 py-3 bg-secondary-1'>
            <Link href="/">
                <p className="text-inverted text-2xl font-bold hover:scale-110">
                    E-COMMERCE
                </p>
            </Link>
            <select className='w-[200px] bg-inverted p-1 rounded-md text-primary' value={theme} onChange={e => setTheme(e.target.value)}>
                <option value="system">System</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="rose">Rose</option>
                <option value="purple">Purple</option>
            </select>
        </div >
    )
}

export default Header