"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CircleChevronLeft} from 'lucide-react'
import React, { useEffect, useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import LocationOption from '@/app/_utils/LocationOption'
import Image from 'next/image'
import Link from 'next/link'
import ThemeOptions from '@/app/_utils/ThemeOptions'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { app } from '@/app/config/FirebaseConfig'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
  

function MeetForm({setFormValue}) {
    const [themeColor, setThemeColor] = useState();
    const [eventName, setEventName] = useState();
    const [duration, setDuration] = useState(30);
    const [locationType, setLocationType] = useState();
    const [locationUrl, setLocationUrl] = useState();
    const { user } = useKindeBrowserClient();
    const db = getFirestore(app); //Initialize the database
    const router = useRouter();

    useEffect(() => {
        setFormValue({
            eventName: eventName,
            duration: duration,
            locationType: locationType,
            locationUrl: locationUrl,
            themeColor: themeColor,
      })
    }, [eventName, duration, locationType, locationUrl, themeColor])
    
    const onCreateClick = async () => {
        const id = Date.now().toString();
        await setDoc(doc(db, "MeetingEvent", id), {
            id: id,
            eventName: eventName,
            duration: duration,
            locationType: locationType,
            locationUrl: locationUrl,
            themeColor: themeColor,
            businessId: doc(db, "Business", user?.email),
            createdBy:user?.email
        }).then(resp => {
            toast("Recent Meeting Event Formed!");
            router.replace("/dashboard/meeting-categories")
        })
    }
    
  return (
      <div className='p-8'>
          <Link href={'/dashboard'}>
                <h2 className='flex gap-2'>
                    <CircleChevronLeft/>Cancel
                </h2>
          </Link>
          <div className='mt-4'>
              <h2 className='cursor-default font-bold text-2xl my-4'>Create New Event</h2>
              <hr></hr>
          </div>
          <div className='flex flex-col gap-3 my-4'>
              <h2 className='cursor-default font-bold '>Event Name*</h2>
              <Input onChange={(event)=>setEventName(event.target.value)} placeholder="Meeting event." />
              <h2 className='cursor-default font-bold'>Duration*</h2>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                      <Button variant="outline" className='max-w-40'>{duration}</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={()=>setDuration(15)}>15 Min</DropdownMenuItem>
                        <DropdownMenuItem onClick={()=>setDuration(30)}>30 Min</DropdownMenuItem>
                        <DropdownMenuItem onClick={()=>setDuration(45)}>45 Min</DropdownMenuItem>
                        <DropdownMenuItem onClick={()=>setDuration(60)}>60 Min</DropdownMenuItem>
                    </DropdownMenuContent>
              </DropdownMenu>
              <h2 className='cursor-default font-bold'>Location*</h2>
              <div className='grid grid-cols-4 gap-3'>
                  {LocationOption.map((option, index) => (
                      <div key={index} className={` cursor-pointer border flex flex-col justify-center items center hover:bg-amber-500 hover:border-white ${locationType==option.name&&"bg-amber-500 border-white text-black"}`}
                      onClick={()=>setLocationType(option.name)}
                      >
                          <Image className='m-auto' src={option.icon} width={30} height={30} alt={option.name} />
                          <h2 className='m-auto'>{option.name}</h2>
                      </div>
                  ))}
              </div>
              {locationType && <>
                    <h2 className='font-bold'>Add {locationType} Url*</h2>
                  <Input onChange={(event)=>setLocationUrl(event.target.value)} placeholder="https://meethub.com/"/>
              </>}
              <h2 className='cursor-default font-bold'>
                  Select Theme Color
              </h2>
              <div className='flex justify-evenly'>
                  {ThemeOptions.map((color, index) => (
                      <div key={index} className={`cursor-pointer h-7 w-7 rounded-full
                      ${themeColor==color&&"border-white border-4 "}`}
                          style={{ backgroundColor: color }}
                          onClick={()=>setThemeColor(color)}
                      >
                          
                      </div>
                  ))}
              </div>
          </div>
          <Button
              className='w-full mt-9  disabled:bg-gray-900 disabled:text-gray-700'
              disabled={(!eventName || !duration || !locationType || !locationUrl|| !themeColor)}
              onClick={()=>onCreateClick()}
          >Create</Button>
    </div>
  )
}

export default MeetForm
