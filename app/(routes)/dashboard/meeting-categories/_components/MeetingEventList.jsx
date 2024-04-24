"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { app } from '@/app/config/FirebaseConfig';
import { Button } from '@/components/ui/button';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { getFirestore, collection, query, where, getDocs, orderBy, deleteDoc, doc, getDoc } from 'firebase/firestore'
import { AlarmClock, Copy, EraserIcon, FilePenLine, MapPinned, Settings2} from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { toast } from "sonner";

function MeetingEventList() {
    const db = getFirestore(app);
    const { user } = useKindeBrowserClient();
    const [eventList, setEventList] = useState([]);
    const[businessInfo,setBusinessInfo]=useState()
  
    useEffect(() => {
        user && getEventList();
        user && BusinessInfo();
    }, [user]);
    
  
    const getEventList = async () => {
        setEventList([]);
        const q = query(collection(db, "MeetingEvent"), where("createdBy", "==", user?.email), orderBy("id","desc"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            setEventList(prevEvent=>[...prevEvent,doc.data()])
        });

    }
    const onDeleteMeetingEvent = async (event) => {
        await deleteDoc(doc(db, "MeetingEvent", event?.id)).then(resp => {
            toast("Meeting Event Sent to the Abyss!");
            getEventList();
        })
    }
    const BusinessInfo = async () => {
        const docRef = doc(db, "Business", user.email);
        const docSnap = await getDoc(docRef);
        setBusinessInfo(docSnap.data());
    }
    const onCopyClickHandler = (event) => {
        const meetingEventUrl=process.env.NEXT_PUBLIC_BASE_URL+"/"+businessInfo.businessName+"/"+event.id
        navigator.clipboard.writeText(meetingEventUrl);
        toast("URL copied successfully")
    }
        return (
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {eventList.length > 0 ? eventList?.map((event, index) => (
                    <div key={index}
                        className='flex flex-col gap-5 border shadow-md p-5 border-t-8 rounded-lg'
                        style={{borderTopColor:event?.themeColor}}
                    >
                        <div className='flex justify-end'>
                            <DropdownMenu>
                            <DropdownMenuTrigger asChild><Settings2 className='cursor-pointer' /></DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem className="flex gap-2 cursor-pointer"><FilePenLine/> Edit</DropdownMenuItem>
                                    <DropdownMenuItem
                                        className="flex gap-2  cursor-pointer"
                                        onClick={()=>onDeleteMeetingEvent(event)}
                                    >
                                        <EraserIcon />Delete
                                    
                                    </DropdownMenuItem>
                            </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <h2 className='font-medium text-2xl'>
                            {event?.eventName}
                        </h2>
                        <div className='flex justify-between'>
                            <h2 className='flex text-gray-500 gap-2'>
                                <AlarmClock />{event.duration} Min
                            </h2>
                            <h2 className='flex text-gray-500 gap-2'>
                                <MapPinned />{event.locationType}
                            </h2>
                        </div>
                        <hr />
                        <div className='flex justify-between'>
                            <h2 className='flex gap-2 text-primary cursor-pointer'
                                onClick={() => {
                                    onCopyClickHandler(event);
                                }}
                            >
                                <Copy className='h4 w-4 text-sm items-center' />Copy Link
                                <Button variant="outline" className="border-primary rounded-full text-primary">Share</Button>
                            </h2>
                        </div>
                    </div>
                )) : <h2>Loading...</h2>}
            </div>
    )
}

export default MeetingEventList