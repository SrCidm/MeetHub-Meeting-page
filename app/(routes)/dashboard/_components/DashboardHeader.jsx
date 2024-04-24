"use client"
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { ChevronDown, LucideLogOut } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

function DashboardHeader() {
  const { user } = useKindeBrowserClient();
  return (
    user && (
      <div className="p-4 px-20 lg:px-5">
        <DropdownMenu>
          <DropdownMenuTrigger className=" flex items-center float-right">
            <div>
              <Image
                src={user?.picture}
                alt="meethub"
                width={40}
                height={40}
                className="rounded-full"
              />
              <ChevronDown />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>
              <LogoutLink className="w-4">
                <div className='flex items-center'>
                  <LucideLogOut className="w-4 mr-2 shrink-[0]"  />
                  LogOut
                </div>
              </LogoutLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  );
}

export default DashboardHeader