"use client"
import React, { useState } from 'react'
import MeetForm from './_components/MeetForm';
import PreviewMeet from './_components/PreviewMeet';

function CreateMeeting() {
    const [formValue,setFormValue]=useState();
  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
        {/* Meeting Form  */}
        <div className=' bg-neutral-900 shadow-md border h-screen'>
            <MeetForm setFormValue={(v)=>setFormValue(v)} />
        </div>
        {/* Preview  */}
        <div className='md:col-span-2'>
              <PreviewMeet formValue={formValue}/>  
        </div>
    </div>
  )
}

export default CreateMeeting