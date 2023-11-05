"use client"

import Navbar from "../navbar";
import Image from "next/image";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import backgroundPic from './Components/about_background_header.png';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";

export default function About() { 
    const [expanded, setExpanded] = useState<string[]>([]);

    const toggleAccordion = (panel: string) => () => {
        if (expanded.includes(panel)) {
        // If the panel is already expanded, close it
        setExpanded(expanded.filter((item) => item !== panel));
        } else {
        // If the panel is not expanded, open it
        setExpanded([...expanded, panel]);
        }
    };

  const accordionItems = [
    {
      id: 'panel1',
      title: 'Our Beginning: Early 2000\'s',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      backgroundColor: '#F5F5F5',
      summaryBackgroundColor: '#D3D3D3',
    },
    {
      id: 'panel2',
      title: 'Growth Phase: 2005 - 2009',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      backgroundColor: '#F5F5F5',
      summaryBackgroundColor: '#D3D3D3',
    },
    {
      id: 'panel3',
      title: 'Fighting hunger & our future: 2010 - Beyond',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      backgroundColor: '#F5F5F5',
      summaryBackgroundColor: '#D3D3D3',
    },
  ];
  
  return (
    <main className="flex min-h-screen flex-col items-center">
        <div className="flex items-center justify-center md:p-16 p-2 pt-16"
        style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(https://s3-alpha-sig.figma.com/img/c817/5127/594805745557a8e6edf7c0c616c75e94?Expires=1699228800&Signature=OBES9WNyQe02wWEZB46QegoAOmIk7SZRnhnsFiJCfwbIEx4ezAuZbF3mjhxEWewrdQe9zEORtVUFz6HUbFpGCmD4ml77jIYodu6LbSO1Vf~2NkG3svCHl7Jo6w7xbgEW4mFqxi6RHxUpziUvaMkJf9N6073eraFVBuxtMBvUvrGYwdqe0FyE3SCbKIEB5ak~yfcWoKTAJjnUgcYsbvSN-4Wi5ApsTYnrSbT6v1~RvjpdpeTzYgYZXJjCxhfwXN~JNglWPDNbiiz83F2UYQo3NI6Tw5P~VzDsA4SUNQkZkUeyj1O-2PG015ZAdkRIdsOp3OTm3d62EU-T3GP9mR1mPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '200vh',
            height: '40vh',
            position: 'relative',
        }}
        >
            <div>
                <h2 className="text-center text-sm md:text-7xl pt-3 pb-3 font-bold" style = {{color: '#FFF', fontFamily: 'Inter',}}>About Us</h2>
                <p className="text-center text-sm md:text-4xl pt-3 pb-3 font-bold" style={{ color: '#E5DEDE', fontFamily: 'Inter', fontStyle: 'italic' }}>Est. 2002</p>
            </div>
        </div>


        <div>
            <div className="flex w-full items-center">
                <div className="h-full p-4 md:text-center text-left text-black">
                    <div className="mt-12"><h1 style = 
                    {{
                        color: '#000',
                        textAlign: 'center',
                        fontFamily: 'Inter',
                        fontSize: '50px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal',
                    }}
                    >Who We Are</h1></div>
                    <p style = 
                    {{
                        color: '#838383',
                        textAlign: 'center',
                        fontFamily: 'Inter',
                        fontSize: '30px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: 'normal',
                    }}
                    >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>

        <div>
            <div className="flex w-full items-center">
                <div className="h-full p-4 md:text-center text-left text-black">
                    <div className="mt-12"><h1 style = 
                    {{
                        color: 'black',
                        textAlign: 'center',
                        fontFamily: 'Inter',
                        fontSize: '50px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal',
                    }}>Ways We Help Others</h1></div>
                    <div className="flex justify-around w-11/12 m-auto mt-10">
                        <div
                        style={{
                            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(https://s3-alpha-sig.figma.com/img/7473/152d/7532aea559ed10b94265fbdbcd1fc9cc?Expires=1699228800&Signature=fRpGTZYirybxXwIOyFI8W7HqRf6Q9qbTESCVsc123~d4rCtLGz8qBxExWVIZa8w-E20imjEcOCh5FBFBtNCb1HfjLJ9G~ik9GbhU1Oyh1GBdh4cF89VIwaNVg7Pe4jdOOxLoDJUvGdf9Q-eWHPMvtbqcL~JnO3~C5kXWYYpYgUGsbOd8bTnnCKIx5CuVxI3pYtK28kVk3Yt0teKrg-JhqxMG8Gup0H4024mVUrwOLOOwrgeqi7nUBpYozSWdLrfzNgX0mVnZdtzxsQQgk9oKdCHyWFH7bZ~ltIqtfvhbPirAoFGL0YFq9YcBTGMqfYToLtJwLB2l3DdgkcEt6K2ySw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center 10px',
                            width: '300px',
                            height: '350px',
                            position: 'relative',
                            color: 'white',
                            fontFamily: 'Inter', 
                            fontSize: '20px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: 'normal',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                        }}
                        >Food Distribution</div>
                        <div className="lg:w-72 md:w-56 sm:w-40 mx-4"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(https://s3-alpha-sig.figma.com/img/dadb/a0ae/10d1630da1b459ff35748fbe00d1b83f?Expires=1699228800&Signature=G0DfaalhUQBajAfq49Smn4y5LD65A5jd83Sfq~nytA5jvre1vOhA91fS1XMz6QOP1~I~I2UZq6T5ED3ud0O5p60tmlFrFszqDXgm-Hj--MqjUEALMuOqCDnIkLJs8rNeE8BD89lAlcGz~VCXTKN7rPta36~QNxO6YIPks~Q4cKVa~Ih2JtAWyXuZ~dNbfdn6NFvnXULZqGuU0v7Kqi~ZF1vZTgYIWRihsz8vTI-y36-Mi2GnNpJ4jFbzL4RG1EclcyMrRdo4O4smsE731W~2qZPt1UY5H5lYyYodby6-uRuRaDDmytDDY~91YvP-Bts70FaM4lsT0QKpWBM9lGX0-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center 10px',
                            width: '300px',
                            height: '350px',
                            position: 'relative',
                            color: 'white',
                            fontFamily: 'Inter', 
                            fontSize: '20px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: 'normal',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                        }}
                        >Support for Vulnerable Populations</div>
                        <div className="lg:w-72 md:w-56 sm:w-40 mx-4"
                            style={{
                                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(https://s3-alpha-sig.figma.com/img/660d/ed41/bd24b896233d414d99f3c30c1c4d9768?Expires=1699228800&Signature=NBaY9kQpA2TsTtbJuv5CR64GVyW3xqdFe7CyaAyyU2N3TS~NfQweD8v8GQjzlnBNFSzY6XpoeE~ogG9VEBkK4kxTm5j0J3-mDzyAvOg86dmCc0dlEZqU58ez15ipmMcAXUqdSGqWcqqIDhDvPMohDUflGCOEpgUBvvD3rSY08YVi1oobulwVoqeZasjJAinFBp9fAvKjfMBiOgzSts7fBZuQmEZMCgNXy6SIG69uvB5a5b0gccEq1wM~RqVRzxw4zf1KuSrXlPYvDxNQMpbSr745iZZDYYdoeiSk4FPfzUAAit~Fhubs6ksEZibk3F-TYEbt6cJD0rioVQndx71ClQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center 10px',
                                width: '300px',
                                height: '350px',
                                position: 'relative',
                                color: 'white',
                                fontFamily: 'Inter', 
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: 'normal',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                            }}
                        >Advocacy and Awareness</div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className="flex w-full items-center">
                <div className="h-full p-4 md:text-center text-left text-black">
                    <div className="mt-12"><h1 style = 
                    {{
                        color: '#000',
                        textAlign: 'center',
                        fontFamily: 'Inter',
                        fontSize: '50px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal',
                    }}
                    >Our Timeline</h1></div>
                </div>
            </div>
        </div>

        <div>
      {accordionItems.map((item) => (
        <Accordion
            key={item.id}
            expanded={expanded.includes(item.id)}
            onChange={toggleAccordion(item.id)}
            style={{
            backgroundColor: item.backgroundColor,
            width: '100%',
            }}
        >
          <AccordionSummary
                    sx={{
                        backgroundColor: expanded.includes(item.id) ? '#BA1218' : '#D3D3D3'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', textAlign: 'center', width: '100%', 
                    color: expanded.includes(item.id) ? 'white' : 'black', fontFamily: 'Open Sans' }}>
                        <div>
                            <Typography style={{ fontFamily: 'Open Sans', fontSize: '20px', fontStyle: 'normal', fontWeight: expanded.includes(item.id) ? '700' : '400'}}>
                                {item.title}
                            </Typography>
                        </div>
                        <div style={{ fontSize: '1.5rem', cursor: 'pointer', fontFamily: 'Open Sans' }}>
                            {expanded.includes(item.id) ? '-' : '+'}
                        </div>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography style = {{wordWrap: 'break-word', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{item.content}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
    </div>
      </main>
  );
}
