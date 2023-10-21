import React from 'react';
import { Card, CardHeader, CardFooter, CardTitle, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

interface EventCardProps {
  title: string;
  description: string;
  roles: string;
}

export const EventCard: React.FC<EventCardProps> = ({ title, description, roles }) => {
  const rolesList = roles.split(',').map(role => role.trim());

  return (
    <div className="drop-shadow-[0_10px_10px_rgba(0,0,0,0.50)]"> 
      <Card className="border-none h-full flex flex-col justify-between rounded-none">
        <CardHeader className="bg-neutral-400 text-black text-center py-4">
          <CardTitle className="py-1"> {title} </CardTitle>
        </CardHeader>
        
        <CardContent className="rounded-none flex flex-col justify-start items-start flex-1 p-4">
          <div className="pl-2 mb-2 text-center italic text-gray-700"> [Description & location] {description} </div>
          <div className="pl-2 text-gray-700 italic">
            Roles:
            <ul className="list-disc pl-8">
                {rolesList.map((role, index) => (
                    <li key={index}>{role}</li>
                ))}
            </ul>
          </div>
        </CardContent>

        <CardFooter className="flex justify-center items-center">
          <Button variant="default" size="default" className="bg-neutral-400 text-white rounded-[0.7rem]">
            Signup
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};