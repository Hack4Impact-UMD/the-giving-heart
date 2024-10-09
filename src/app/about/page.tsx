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
import TimeLineHelper from "./timeLineHelper";
import AboutBanner from "./AboutBanner";
import WhoWeAre from "./WhoWeAre";

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
  return (
    <main className="flex min-h-screen flex-col items-center">
      <AboutBanner />

      <div>
        <div className="flex w-full items-center">
          <WhoWeAre />
        </div>
      </div>

      <div>
        <div className="flex w-full items-center">
          {/* <div className="mt-12">
            <h1 className="text-3xl font-semibold px-3">
              Ways We Help Others
            </h1>
          </div> */}
          {/*TODO:
           * - Change S3 URLS to actual images
           * - Stack pictures horizontally on desktop image */}
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
      <TimeLineHelper />
    </main>
  );
}
