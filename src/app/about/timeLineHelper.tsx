"use client";
import useSWR from "swr";
import axios from "axios";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

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

export default function TimeLineHelper() {
  const titles = [
    "Our Beginning: Early 2000's",
    "Growth Phase: 2005 - 2009",
    "Fighting hunger & our future: 2010 - Beyond",
  ];

  const address = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/about-us-page?`;
  const auth = `${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`;

  const fetcher = async (url: any) =>
    await axios.get(url).then((res) => {
      return [
        res.data["data"]["attributes"]["timeline_textfield_1"],
        res.data["data"]["attributes"]["timeline_textfield_2"],
        res.data["data"]["attributes"]["timeline_textfield_3"],
      ];
    });

  let { data, error } = useSWR(address, fetcher);

  if (error) return <div>Error loading data...</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="pb-16">
      {data.map((item, index) => (
        <Accordion key={index} className="max-w-full md:max-w-md lg:max-w-xl">
          <AccordionSummary
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            {titles[index]}
          </AccordionSummary>
          <AccordionDetails>{item}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
