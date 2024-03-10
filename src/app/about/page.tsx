"use client";

import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import backgroundPic from "../_images/about_background_header.png";
import foodDistribution from "../_images/food_distribution.png";
import supportVulnerable from "../_images/support_vulnerable.png";
import advocayAwareness from "../_images/advocay_awareness.png";
import useSWR from "swr";
import axios from "axios";

import { styled } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ImageCarousel from "../../components/ui/ImageCarousel";
import WaysWeHelp from "./waysWeHelp";

//bg-[url('./_images/homepage_bg.png')]

import { useState } from "react";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosIcon sx={{ fontSize: "0.8rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));



export default function About() {
  // const address = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/user-attend`;
  // const auth = `${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`;

  // const fetcher = async (url: any) =>
  //   await axios
  //     .get(url)
  //     .then((res) => res.data);

  // let { data, error } = useSWR(address, fetcher);

  // const address = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/about-us-page`;
  // const auth = `${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`;

  // const fetcher = async (url: any) =>
  //   await axios
  //     .get(url, {
  //       headers: { Authorization: `Bearer ${auth}` },
  //     })
  //     .then((res) => res.data);

  // let { data, error } = useSWR(address, fetcher);
  // console.log(error);
  // console.log(data);
  //const timelineText = [data["data"]["attribute"]["timeline_textfield_1"], data["data"]["attribute"]["timeline_textfield_2"], data["data"]["attribute"]["timeline_textfield_3"]]

  /* TODO: 
  - add accordionItems a Single Types in Strapi so users can alter it
  */
  const accordionItems = [
    {
      title: "Our Beginning: Early 2000's",
      content:
      "text",
    },
    {
      title: "Growth Phase: 2005 - 2009",
      content:
      "text",
    },
    {
      title: "Fighting hunger & our future: 2010 - Beyond",
      content:
      "text",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div
        className="flex items-center justify-center md:p-16 p-2 pt-16 overflow-hidden"
        style={{
          backgroundImage:
            "url(../_images/about_background_header.png), linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5))",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "40vh",
          position: "relative",
        }}
      >
        <div>
          <h2 className="text-5xl font-semibold leading-33 tracking-normal text-center text-white">
            About Us
          </h2>
          <p className="text-center text-2xl font-semibold text-gray-300 italic">
            Est. 2002
          </p>
        </div>
      </div>

      <div>
        <div className="flex w-full items-center">
          <div className="h-full p-4 md:text-center text-center text-black md:px-20">
            <div className="mt-12 p-4">
              <h1 className="text-3xl font-semibold">Who We Are</h1>
            </div>

            {/**TODO: need to add the below as a single type in Strapi for user to edit it*/}
            <p className="text-lg text-gray-700">
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
          <div className="h-full md:p-4 md:text-center text-center text-black">
            <div className="mt-12">
              <h1 className="text-3xl font-semibold px-3">
                Ways We Help Others
              </h1>
            </div>
            {/*TODO:
              * - Change S3 URLS to actual images
              * - Stack pictures horizontally on desktop image */}
            
            <WaysWeHelp/>
          </div>
        </div>
      </div>

      <div>
        <div className="flex w-full items-center">
          <div className="h-full p-4 md:text-center text-left text-black">
            <div className="mt-12 text-2xl leading-7 text-center font-semibold">
              <h1>Our Timeline</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-16">
        {accordionItems.map((item, index) => (
          <Accordion key={index} className="max-w-full md:max-w-md lg:max-w-xl">
            <AccordionSummary
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
            >
              {item.title}
            </AccordionSummary>
            <AccordionDetails>{item.content}</AccordionDetails>
          </Accordion>
        ))}
      </div>
    </main>
  );
}

/*
<div className="flex flex-col lg:flex-row items-center w-11/12 m-auto mt-4 justify-around">
              <div
                className="lg:w-auto md:w-56 sm:w-40 md:mx-10 my-4 text-center"
                style={{
                  backgroundImage: "url(../_images/food_distribution.png)",
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
                  backgroundImage: "url(../_images/support_vulnerable.png)",
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
                  backgroundImage: "url(../_images/advocay_awareness.png)",
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
            </div> */