import Navbar from "../navbar";
import Image from "next/image";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

export default function About() {

  return (
    <main className="flex min-h-screen flex-col items-center">
        <div className="flex w-full bg-neutral-400 h-50" >

            <div className="sm:w-1/3 h-full p-4 md:text-center text-left text-white">
            <div className="mt-12"><h1 className="text-1xl">Background Image</h1></div>
            </div>

            <div className="w-1/3 md:p-16 p-2 pt-16 text-black bold">
            <h2 className="text-center text-sm md:text-4xl pt-3 pb-3">Est. 2002</h2>
            </div>

            <div className="sm:w-1/3 h-full p-4 md:text-center text-left text-white">
            <div className="mt-12"><h1 className="text-1xl">Background Image</h1></div>
            </div>

        </div>

        <div>
            <div className="flex w-full items-center">
                <div className="h-full p-4 md:text-center text-left text-black">
                    <div className="mt-12"><h1 className="text-3xl">Who We Are</h1></div>
                    <p className="md:text-lg text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>

        <div>
            <div className="flex w-full items-center">
                <div className="h-full p-4 md:text-center text-left text-black">
                    <div className="mt-12"><h1 className="text-3xl">Ways we help others</h1></div>
                    <div className="flex justify-around w-11/12 m-auto mt-10">
                        <div className="lg:w-72 md:w-56 sm:w-40 w-24 h-100 sm:h-60 bg-neutral-300 mx-4"></div>
                        <div className="lg:w-72 md:w-56 sm:w-40 w-24 h-100 sm:h-60 bg-neutral-300 mx-4"></div>
                        <div className="lg:w-72 md:w-56 sm:w-40 w-24 h-100 sm:h-60 bg-neutral-300 mx-4"></div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className="flex w-full items-center">
                <div className="h-full p-4 md:text-center text-left text-black">
                    <div className="mt-12"><h1 className="text-3xl">Our Timeline</h1></div>
                </div>
            </div>
        </div>

       <div>
       <Accordion style={{ backgroundColor: '#F5F5F5' }}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" style={{ backgroundColor: '#D3D3D3' }}>
            <Typography>Our Beginning: Early 2000&apos;s</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
        </AccordionDetails>
        </Accordion>

        <Accordion style={{ backgroundColor: '#F5F5F5' }}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" style={{ backgroundColor: '#D3D3D3' }}>
            <Typography>Growth Phase: 2005 - 2009</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
        </AccordionDetails>
        </Accordion>

        <Accordion style={{ backgroundColor: '#F5F5F5' }}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" style={{ backgroundColor: '#D3D3D3' }}>
            <Typography>Fighting hunger &amp; our future: 2010 - Beyond</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
        </AccordionDetails>
        </Accordion>
        </div>
      </main>
  );
}
