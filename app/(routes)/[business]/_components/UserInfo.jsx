import { Input } from '@/components/ui/input'
import React from 'react'

function UserInfo({setUserName,setUserEmail,setUserNote}) {
  return (
      <div className='p-4 px-8 flex-col gap-3'>
          <h2 className='font-bold text-xl'>Enter Details</h2>
          <div>
              <h2>Name*</h2>
              <Input onChange={(event)=>setUserName(event.target.value)} />
          </div>
          <div>
              <h2>Email*</h2>
              <Input onChange={(event)=>setUserEmail(event.target.value)} />
          </div>
          <div>
              <h2>Share any Comments</h2>
              <Input onChange={(event)=>setUserNote(event.target.value)} />
          </div>
          <div>
          </div>
      </div>
  )
}

export default UserInfo