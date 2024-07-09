import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { LogInIcon } from 'lucide-react'
import Link from 'next/link'

export default function Header () {
  return (
    <header className='bg-gray-500 bg-opacity-5 py-4  dark:bg-slate-900 dark:bg-opacity-40 z-10 relative'>
      <div className='container mx auto flex justify-between items-center'>
        <Link
          href='/'
          className=' text-4xl text-neutral-800 dark:text-neutral-200'
        >
          _dev<span className='text-indigo-600'>space</span>
        </Link>

        <div className='flex items-center gap-4'>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
