"use client";

import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import backgroundPic from "../_images/about_background_header.png";
import foodDistribution from "../_images/food_distribution.png";
import supportVulnerable from "../_images/support_vulnerable.png";
import advocayAwareness from "../_images/advocay_awareness.png";


//bg-[url('./_images/homepage_bg.png')]

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

  /* TODO: 
  - add accordionItems a Single Types in Strapi so users can alter it
  - backgrouundColor and summaryBackgroundColor does not change so just use those color values in the code directly
  */
  const accordionItems = [
    {
      id: "panel1",
      title: "Our Beginning: Early 2000's",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      backgroundColor: "#F5F5F5",
      summaryBackgroundColor: "#D3D3D3",
    },
    {
      id: "panel2",
      title: "Growth Phase: 2005 - 2009",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      backgroundColor: "#F5F5F5",
      summaryBackgroundColor: "#D3D3D3",
    },
    {
      id: "panel3",
      title: "Fighting hunger & our future: 2010 - Beyond",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      backgroundColor: "#F5F5F5",
      summaryBackgroundColor: "#D3D3D3",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div
        className="flex items-center justify-center md:p-16 p-2 pt-16 overflow-hidden"
        style={{
          backgroundImage: "url(../_images/about_background_header.png), linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5))",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "40vh",
          position: "relative",
        }}
      >
        <div>
          <h2
            className="text-center text-4xl md:text-7xl pt-3 pb-3 font-bold"
            style={{ color: "#FFF", fontFamily: "Inter" }}
          >
            
            About Us
          </h2>
          <p
            className="text-center text-lg md:text-4xl pt-3 pb-3 font-bold"
            style={{
              color: "#E5DEDE",
              fontFamily: "Inter",
              fontStyle: "italic",
            }}
          >
            Est. 2002
          </p>
        </div>
      </div>

      <div>
        <div className="flex w-full items-center">
          <div className="h-full p-4 md:text-center text-center text-black md:px-20">
            <div className="mt-12 p-8">
              <h1 className="text-4xl md:text-5xl"
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Inter",
                  
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                Who We Are
              </h1>
            </div>

            {/**TODO: need to add the below as a single type in Strapi for user to edit it*/}
            <p className="text-xl md:text-3xl"
              style={{
                color: "#838383",
                textAlign: "center",
                fontFamily: "Inter",
    
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
              }}
            > 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex w-full items-center">
          <div className="h-full md:p-4 md:text-center text-left text-black">
            <div className="mt-12">
              <h1 className="text-4xl md:text-5xl px-3"
                style={{
                  color: "black",
                  textAlign: "center",
                  fontFamily: "Inter",
                
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                Ways We Help Others
              </h1>
            </div>
            {/**TODO:
             * - Change S3 URLS to actual images
             * - Stack pictures horizontally on desktop image
             */}
            <div className="flex flex-col lg:flex-row items-center w-11/12 m-auto mt-10 justify-around">
              <div
                className="lg:w-auto md:w-56 sm:w-40 md:mx-10 my-4 text-center"
                style={{
                  backgroundImage:
                    "url(../_images/food_distribution.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center 10px",
                  width: "300px",
                  height: "350px",
                  position: "relative",
                  color: "white",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  paddingBottom: "20px",
                }}
              >
                Food Distribution
              </div>
              <div
                className="lg:w-auto md:w-56 sm:w-40 md:mx-10 my-4 text-center"
                style={{
                  backgroundImage:
                    "url(../_images/support_vulnerable.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center 10px",
                  width: "300px",
                  height: "350px",
                  position: "relative",
                  color: "white",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  paddingBottom: "20px",
                }}
              >
                Support for Vulnerable Populations
              </div>
              <div
                className="lg:w-auto md:w-56 sm:w-40 md:mx-10 my-4 text-center"
                style={{
                  backgroundImage:
                    "url(../_images/advocay_awareness.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center 10px",
                  width: "300px",
                  height: "350px",
                  position: "relative",
                  color: "white",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  paddingBottom: "20px",
                }}
              >
                Advocacy and Awareness
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex w-full items-center">
          <div className="h-full p-4 md:text-center text-left text-black">
            <div className="mt-12">
              <h1
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Inter",
                  fontSize: "50px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                Our Timeline
              </h1>
            </div>
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
              width: "100%",
            }}
          >
            <AccordionSummary
              sx={{
                backgroundColor: expanded.includes(item.id)
                  ? "#BA1218"
                  : "#D3D3D3",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  textAlign: "center",
                  width: "100%",
                  color: expanded.includes(item.id) ? "white" : "black",
                  fontFamily: "Open Sans",
                }}
              >
                <div>
                  <Typography
                    style={{
                      fontFamily: "Open Sans",
                      fontSize: "20px",
                      fontStyle: "normal",
                      fontWeight: expanded.includes(item.id) ? "700" : "400",
                    }}
                  >
                    {item.title}
                  </Typography>
                </div>
                <div
                  style={{
                    fontSize: "1.5rem",
                    cursor: "pointer",
                    fontFamily: "Open Sans",
                  }}
                >
                  {expanded.includes(item.id) ? "-" : "+"}
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                style={{
                  wordWrap: "break-word",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.content}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </main>
  );
}
