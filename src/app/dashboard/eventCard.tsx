import React from 'react';
import { Card, CardHeader, CardFooter, CardTitle, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import Image, { StaticImageData } from "../../../node_modules/next/image";

import book_icon from ".././_images/book-open.svg";
import user_icon from ".././_images/users.svg";
import calendar_icon from ".././_images/calendar-clock.svg";
import globe from ".././_images/globe.svg";


interface EventCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  roles: string;
  date: string;
  start_time: string;
  end_time: string;
  location: string;
}


export const EventCard: React.FC<EventCardProps> = ({ image, title, description, roles, date, start_time, end_time, location }) => {

  return (
    <div className="drop-shadow-[0_10px_10px_rgba(0,0,0,0.50)]"> 
      <Card className="border-2 h-full flex flex-col justify-between rounded-xl">
        <CardHeader className="p-0">
          <Image src={image} alt="card header image" className="rounded-t-xl object-cover h-full w-full"></Image>
        </CardHeader>
        
        <CardTitle className="p-6 text-[#860E13]"> {title} </CardTitle>
        
        <CardContent className="rounded-none flex flex-col justify-start items-start flex-1 pl-6">
          <div className="flex items-center mb-2 pb-2">
            <Image src={book_icon} alt="description icon" className="mr-2" />
            <p className="font-bold"> Description: </p>
          </div>
          <p className="text-[#6B7280] pb-3"> {description} </p>

          <div className="flex items-center mb-2 pb-2">
            <Image src={user_icon} alt="description icon" className="mr-2" />
            <p className="font-bold"> Available Positions: </p>
          </div>
          <p className="text-[#6B7280] pb-4"> {roles} </p>

          <div className="flex items-center mb-2 pb-2">
            <Image src={calendar_icon} alt="description icon" className="mr-2" />
            <p className="text-[#6B7280]"> {date} from {start_time} - {end_time} </p>
          </div>

          <div className="flex items-center mb-2">
            <Image src={globe} alt="description icon" className="mr-2" />
            <p className="text-[#6B7280]"> {location} </p>
          </div>
        </CardContent>

        <CardFooter className="flex justify-center items-center">
          <Button variant="default" size="default" className="bg-[#ED1C24] text-white rounded-md">
            Register
          </Button>
        </CardFooter>

      </Card>
    </div>
  );
};