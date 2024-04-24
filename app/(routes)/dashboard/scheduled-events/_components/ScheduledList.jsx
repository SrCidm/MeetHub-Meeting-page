import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AlarmClock, CalendarCheck2, Hourglass, Video } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function ScheduledList({ meetingList }) {
  return (
    <div>
      {meetingList &&
        meetingList.map((meeting, index) => (
          <Accordion type="single" collapsible key={index}>
            <AccordionItem value="item-1">
              <AccordionTrigger>{meeting?.formatedDate}</AccordionTrigger>
              <AccordionContent>
                <div>
                  <div className=" shrink-[0] mt-5 flex flex-col gap-4">
                    <h2 className="flex gap-2 ">
                      <AlarmClock />
                      {meeting?.duration} Min
                    </h2>
                    <h2 className="flex  shrink-[0]  gap-2">
                      <Video />
                      {meeting?.locationUrl}
                    </h2>
                    <h2 className="flex  shrink-[0]  gap-2">
                      <CalendarCheck2 />
                      {meeting.formatedDate}
                    </h2>
                      <h2 className="flex  shrink-[0]  gap-2">
                        <Hourglass />
                        {meeting.selectedTime}
                      </h2>
                    <Link
                      className="text-primary mx-1 "
                      href={meeting?.locationUrl ? meeting?.locationUrl : "#"}
                    >
                      {meeting?.locationUrl}
                    </Link>
                            </div>
                            <Link href={meeting?.locationUrl} ><Button className="mt-5">Don't Miss Out, Join Now</Button></Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
    </div>
  );
}

export default ScheduledList;
