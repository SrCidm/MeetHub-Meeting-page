'use client'
import { Button } from '@/components/ui/button';
import { CalendarClock, CalendarDays, NotebookPen, Plus, Settings2 } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const SideNavBar = () => {
  const menu = [
    {
      id: 1,
      name: "Meeting Categories",
      path: "/dashboard/meeting-categories",
      icon: NotebookPen,
    },
    {
      id: 2,
      name: "Scheduled Events",
      path: "/dashboard/scheduled-events",
      icon: CalendarDays,
    },
    {
      id: 3,
      name: "Availability Management",
      path: "/dashboard/availability",
      icon: CalendarClock,
    },
    {
      id: 4,
      name: "Settings",
      path: "/dashboard/settings",
      icon: Settings2,
    },
  ];
  const path = usePathname();
  const [activePath, setActivePath] = useState(path);
  useEffect(() => {
    path && setActivePath(path);
  }, [path]);

  return (
    <div>
      <div className="p-5 py-14">
        <div className="flex justify-center cursor-pointer">
          <Image src="/meethub.svg" alt="meethub" width={150} height={150} />
        </div>
      </div>
      <div>
        <Link href={"/create-meeting"}>
          <Button className="transition-all duration-300 hover:bg-yellow-300 flex mt-7 gap-2 w-full rounded-full">
            <Plus />
            Create
          </Button>
        </Link>

        <div className="mt-5 flex-col gap-5">
          {menu.map((item, index) => (
            <Link key={index} href={item.path}>
              <Button
                variant="ghost"
                className={`
                                ${
                                  activePath == item.path &&
                                  "text-black bg-amber-500"
                                }
                                transition-all duration-300
                                hover:text-black
                                hover:bg-amber-500
                                w-full flex gap-2
                                justify-start
                                `}
              >
                <item.icon />
                {item.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;