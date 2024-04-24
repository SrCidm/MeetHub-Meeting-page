import { AlarmClock, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

function PreviewMeet({ formValue }) {
  const [date, setDate] = useState(new Date());
  const [timeSlots, setTimeSlots] = useState();
  const createTimeSlot = (interval) => {
    const startTime = 8 * 60; // 8 AM in minutes
    const endTime = 22 * 60; // 10 PM in minutes
    const totalSlots = (endTime - startTime) / interval;
    const slots = Array.from({ length: totalSlots }, (_, i) => {
      const totalMinutes = startTime + i * interval;
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      const formattedHours = hours > 12 ? hours - 12 : hours; // Convert to 12-hour format
      const period = hours >= 12 ? "PM" : "AM";
      return `${String(formattedHours).padStart(2, "0")}:${String(
        minutes
      ).padStart(2, "0")} ${period}`;
    });
    console.log(slots)
    setTimeSlots(slots);
  };
  useEffect(() => {
    formValue?.duration && createTimeSlot(formValue.duration);
  }, [formValue]);
  return (
    <div className="p-5 py-10 shadow-lg m-5 border-t-8 shadow-yellow-500" style={{borderTopColor:formValue?.themeColor}}>
      <Image src="/meethub.svg" alt="logo" width={200} height={200} />
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
        {/* { Meeting Info} */}
        <div className="p-4 border-r">
          <h2>Business Name</h2>
          <h2 className="font-extrabold text-3xl overflow-hidden text-overflow-ellipsis">
            {formValue?.eventName ? formValue?.eventName : "Meeting Name"}
          </h2>
          <div className=" shrink-[0] mt-5 flex flex-col gap-4">
            <h2 className="flex gap-2 ">
              <AlarmClock />
              {formValue?.duration} Min
            </h2>
            <h2 className="flex  shrink-[0]  gap-2">
              <Video />
              {formValue?.locationType} Conference
            </h2>
            <Link
              className="text-primary mx-1 "
              href={formValue?.locationUrl ? formValue?.locationUrl : "#"}
            >
              {formValue?.locationUrl}
            </Link>
          </div>
        </div>
        {/* {Time & Date Selection} */}
        <div className="col-span-2 flex md:flex-row sm:flex-col  p-4 md:p-2">
          <div className="flex flex-col md:pr-4">
            <h2 className="font-bold text-4xl">Select date and time</h2>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="mt-5 rounded-md border shadow"
              disabled={(date) => date <= new Date}
            />
          </div>
          <div className="overflow-auto gap-4 md:p-5 md:w-50 sm:p-2   md:gap-2  max-h-[400px]">
            {timeSlots?.map((time) => (
              <div>
                <Button key={time.id} className=" border-primary text-primary overflow-hidden " variant="outline">
                  {time}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewMeet;
