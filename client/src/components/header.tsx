import React from 'react'
import { ModeToggle } from './mode-toggle'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='grid grid-cols-3 ' >
        <ul className='grid grid-cols-2 '>
            <li>
                <Link href="/register">Đăng kí</Link>
            </li>
            <li>
                <Link href="/login">Đăng nhập</Link>
            </li>
        </ul>
        <ModeToggle/>
    </div>
  )
}
