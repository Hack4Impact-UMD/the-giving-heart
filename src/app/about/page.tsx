"use client";

import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import backgroundPic from "../_images/about_background_header.png";
import IconButton from "@mui/material/IconButton";
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
        className="flex items-center justify-center w-full bg-cover bg-[url('./_images/about_background_header.png')] md:p-16 p-2 pt-16"
        
      >
        <div>
          <h2
            className="text-center text-xl md:text-7xl pt-3 pb-3 font-bold"
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
                Who We Are
              </h1>
            </div>

            {/**TODO: need to add the below as a single type in Strapi for user to edit it*/}
            <p
              style={{
                color: "#838383",
                textAlign: "center",
                fontFamily: "Inter",
                fontSize: "30px",
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
          <div className="h-full p-4 md:text-center text-left text-black">
            <div className="mt-12">
              <h1
                style={{
                  color: "black",
                  textAlign: "center",
                  fontFamily: "Inter",
                  fontSize: "50px",
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
            <div className="flex flex-col items-center w-11/12 m-auto mt-10">
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(https://s3-alpha-sig.figma.com/img/7473/152d/7532aea559ed10b94265fbdbcd1fc9cc?Expires=1701043200&Signature=M5QPGkCZZMlbPjlNSpBhQ3j6xY3FwyGmQqw46BH0-S~5IRtb3-UTAE6uv-GGlSmlXOi8gJ~VxjVEB2mxh-tOXgYDcqlzVwtnitqdIKJLwdtUvwvRVn4TvpCaAISnEOC7XW8ci10GnCebZX5bBQvrXLJVa~p7XLhlKrQFzfMdKD7yEpLIHzi8hHZZjKrHBOrq1TRA6sn8asYq827ySUdRxb2t5soyiJuRxUsXjw7neQcydEqCvqxJFBxmnNs0sGH70hujaYxYlDwI-GxDYCDiRbHV68HpqCpuSRKXof437cBKQPRKl1TVyRW9-jwrsS1T8RVFkAJFC9ecBa9M5MI5Ng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
                  backgroundSize: "cover",
                  backgroundPosition: "center 10px",
                  width: "300px",
                  height: "350px",
                  position: "relative",
                  color: "white",
                  fontFamily: "Inter",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  paddingBottom: "4px",
                }}
              >
                Food Distribution
              </div>
              <div
                className="lg:w-72 md:w-56 sm:w-40 mx-4 mt-4"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(https://s3-alpha-sig.figma.com/img/dadb/a0ae/10d1630da1b459ff35748fbe00d1b83f?Expires=1701043200&Signature=cKNea49bOng6t3MP2N8UOEP0v6BlG4QpYPzPJObk~3DOFGZsxX5GwAQbkOxEyEQs5POYXWr2IkKKKziyUvIPLk3qbNoUOXIRdQxPE9dQvYjyaH46j3H-Ow-y0t3NLO7m9Ewe6e-09Lx5quveY4C97X0qkVz-YXuTLPsvV0zvHMjhwKVCwEA4tFdwfO8k9o6Q6TPYIT7QhqY-f47s5vKoijlbyWYRJkO3bIt~YEpudQn6zHAIudcdhvVWURF0cOJXmEdlF88fE0BHlGg5Uj3iTpF-Acb19q9N6wNyrb6Uta~q~xpYaSYvoj8wOdK9pzGVnt8BH0TvWOvFbj5A81dOtQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
                  backgroundSize: "cover",
                  backgroundPosition: "center 10px",
                  width: "300px",
                  height: "350px",
                  position: "relative",
                  color: "white",
                  fontFamily: "Inter",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                Support for Vulnerable Populations
              </div>
              <div
                className="lg:w-72 md:w-56 sm:w-40 mx-4 mt-4 mb-4"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(https://s3-alpha-sig.figma.com/img/660d/ed41/bd24b896233d414d99f3c30c1c4d9768?Expires=1701043200&Signature=NmKArShEfBzlMHv4gRsU22TlDfcKUWAAY19peTBGpqcDlTAzcJXUU5cqe1qKW6~KruPHBg2BiZIFxnUys5PeYzp3U3CAn3SBHsnN9xRD2b17grioK7FtuRXhwOMCn8DWAwjULGfUiBWm~F~IpbU6YH3OGKbyY7TkCnbNZamwR-G2UEEy6i1i4BuuwzF-u1nqXCIf0crZTLehGFaZCIOYl5X9TDxecSOTIiy3mGmSof16QhWrysHcVDqJ9ggMjLEGjY0o~54yqB-MUuPL7HvjcSI6pkvQqDacOqMd7K8G6FdACLvtm5WrcTBFnXJZKenVpN5~aO3Smsdc9jQjAZ1KGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
                  backgroundSize: "cover",
                  backgroundPosition: "center 10px",
                  width: "300px",
                  height: "350px",
                  position: "relative",
                  color: "white",
                  fontFamily: "Inter",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
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
