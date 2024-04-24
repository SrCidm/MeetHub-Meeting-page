"use client"
import React, { useEffect, useState } from 'react'
import MeetingDateSelection from '../_components/MeetingDateSelection'
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { app } from '@/app/config/FirebaseConfig';

function SharedLink({params}) {
    const db = getFirestore(app);
    const [businessInfo, setBusinessInfo] = useState();
    const [eventInfo, setEventInfo] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        params && getMeetBusinessDetails();
    },[params])

    const getMeetBusinessDetails = async () => {
        setLoading(true)
        const q = query(collection(db, "Business"), where("businessName", "==", params.business));
        const docSnap = await getDocs(q);
        docSnap.forEach((doc) => {
            setBusinessInfo(doc.data());
        });

        const docRef = doc(db, "MeetingEvent", params?.meetEventId);
        const result = await getDoc(docRef);
        setEventInfo(result.data())

        setLoading(false)
    }
    return (
        <div>
            <MeetingDateSelection businessInfo={businessInfo} eventInfo={eventInfo} />
        </div>
    )
}

export default SharedLink