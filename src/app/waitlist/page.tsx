"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuthContext } from "@/utils/context/AuthContext";
import { BookOpen, CalendarClock, Globe } from 'lucide-react';
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"


export default function Settings() {
  const { user } = useAuthContext();
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-8">
        <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
          <div className="w-full">
            <h1 className="text-3xl text-[#860f13] font-medium mb-8 sm:text-3xl md:text-4xl">
              Volunteer Waitlist
            </h1>
            <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-[#860f13] font-medium text-2xl">[Event name]</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="font-bold text-xl mb-2">Event Information</h2>
              <div className="flex flex-row pt-4">
                <div>
                  <BookOpen className="w-12 h-12 mr-4" />
                </div>
                <div className="flex flex-col w-auto">
                  <p className="font-semibold text-lg">Description:</p>
                  <p className="font-light text-lg text-slate-600 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>

              <div className="flex flex-row pt-4">
                <div>
                  <CalendarClock className="w-12 h-12 mr-4" />
                </div>
                <div className="flex flex-col w-auto">
                  <p className="font-semibold text-lg">Date & Time:</p>
                  <p className="font-light text-lg text-slate-600 leading-loose">[Date] from [Start time] - [End time]</p>
                </div>
              </div>

              <div className="flex flex-row pt-4">
                <div>
                  <Globe className="w-12 h-12 mr-4" />
                </div>
                <div className="flex flex-col w-auto justify-start">
                  <p className="font-semibold text-lg">Location</p>
                  <p className="font-light text-lg text-slate-600 leading-loose">[Location]</p>
                </div>
              </div>

            <Separator className="mt-5"/>

            </CardContent>
            <CardContent>
              <h2 className="font-bold text-xl mb-2">Volunteering Capacity</h2>

              <div className="flex flex-col my-8">
                <div className="flex flex-row justify-between text-lg mb-4">
                  <p>[time]-[time]</p>
                  <div className="flex flex-row">
                    <p className="font-semibold mr-4">Capacity: 10</p>
                    <p className="font-semibold">Open: 8</p>
                  </div>
                </div>
                <Progress value={20} />
                <Button className="bg-red-500 w-32 mt-4">Select Shift</Button>
              </div>

              <div className="flex flex-col my-8">
                <div className="flex flex-row justify-between text-lg mb-4">
                  <p>[time]-[time]</p>
                  <div className="flex flex-row">
                    <p className="font-semibold mr-4">Capacity: 10</p>
                    <p className="font-semibold">Open: 4</p>
                  </div>
                </div>
                <Progress value={60} />
                <Button className="bg-red-500 w-32 mt-4">Select Shift</Button>
              </div>

              <div className="flex flex-col my-8">
                <div className="flex flex-row justify-between text-lg mb-4">
                  <p>[time]-[time]</p>
                  <div className="flex flex-row">
                    <p className="font-semibold mr-4">Capacity: 10</p>
                    <p className="font-semibold">Open: 2</p>
                  </div>
                </div>
                <Progress value={80} />
                <Button className="bg-red-500 w-32 mt-4">Select Shift</Button>
              </div>

            </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
