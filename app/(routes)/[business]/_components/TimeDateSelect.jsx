import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import React from "react";

function TimeDateSelect({
  date,
  handleDateChange,
  timeSlots,
  setSelectedTime,
  enableTimeSlots,
  selectedTime,
  prevBooking
}) {
  const checkTimeSlot = (time) => {
    return  (prevBooking.filter(item => item.selectedTime == time)).length > 0;
  }
  return (
    <div className="col-span-2 flex md:flex-row sm:flex-col  p-4 md:p-2">
      <div className="flex flex-col md:pr-4">
        <h2 className="font-bold text-4xl">Select date and time</h2>
        <Calendar
          mode="single"
          selected={date}
          onSelect={(d)=>handleDateChange(d)}
          className="mt-5 rounded-md border shadow"
          disabled={(date) => date <= new Date()}
        />
      </div>
      <div className="overflow-auto gap-4 md:p-5 md:w-50 sm:p-2   md:gap-2  max-h-[400px]">
        {timeSlots.map((time, index) => (
          <div key={index}>
            <Button
              disabled={!enableTimeSlots||checkTimeSlot(time)}
              onClick={() => setSelectedTime(time)}
              className={ `border-primary text-primary overflow-hidden ${time==selectedTime&&'bg-primary text-black'}` }
              variant="outline"
            >
              {time}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimeDateSelect;
