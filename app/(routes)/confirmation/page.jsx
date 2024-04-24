import { Button } from '@/components/ui/button'
import { CalendarCheck} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Confirmation() {
  return (
    <div className='flex flex-col items-center justify-center gap-6
    p-20'>
        <CalendarCheck className='h-9 w-9 text-green-500'/>
        <h2 className='font-bold text-3xl'>Mission accomplished! Meeting booked!</h2>
        <h2 className='text-lg text-gray-500'>Details dispatched to your inbox</h2>
        <Link href={'/'}><Button>Ok</Button></Link> 

    </div>
  )
}

export default Confirmation 