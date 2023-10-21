import React from 'react';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "../../components/ui/card";
import { Button, buttonVariants } from "../../components/ui/button";

interface EventCardProps {
  title: string;
  description: string;
  roles: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, description, roles }) => {
  return (
    <div className="shadow-md max-w-md rounded-none">
      <Card className="h-full flex flex-col justify-between">
        <CardHeader className="bg-neutral-400 text-black text-center py-4">
          <CardTitle className="py-1"> {title} </CardTitle>
        </CardHeader>
        
        <CardContent className="rounded-none flex flex-col justify-center items-center flex-1">
          <div className="py-1 text-center mb-2 text-gray-700"> {description} </div>
          <div className="py-1 text-gray-700">{roles}</div>
        </CardContent>

        <CardFooter className="flex justify-center items-center rounded-none">
          <Button variant="default" size="default" className="bg-neutral-500 text-white rounded-[0.7rem]">
            Signup
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EventCard;
