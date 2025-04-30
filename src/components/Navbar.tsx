 import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <div className='sticky z-30 top-0 border-b bg-background p-2 sm:px-6'>
        <div className=' flex justify-between items-center mx-auto max-w-4xl h-10 '>
           <div className=' flex gap-4 '>
             <Link href={'/'} className=' flex items-center gap-2 '>
               <ExternalLink className=' w-6 h-6 '/>
               <span className=' font-bold '>ShareJson.</span>
             </Link>
             <nav>
                <Link href={'/dashboard'} className=' text-md font-medium text-muted-foreground transition-colors hover:text-foreground '>
                   Dashboard
                </Link>
             </nav>
           </div>
           <SignedOut>
              <SignInButton mode='modal'>
                <Button variant="outline">Sign In</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
           
        </div>
    </div>
  )
}

export default Navbar