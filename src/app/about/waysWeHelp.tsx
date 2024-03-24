// "use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Indices, any, array } from 'zod';
import { Item } from '@radix-ui/react-accordion';

/* Fetch ways we help pics */
async function fetchWaysWeHelpPics() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/about-us-page?populate=ways_we_help_others_pictures`,
      {
        cache: "no-store",
      }
    );
    const data = await response.json();
    if (!data.data) {
      return [];
    }
    const waysWeHelpData = data.data.attributes.ways_we_help_others_pictures.data;
  
    const waysWeHelpImages = waysWeHelpData.map(
      (image: { attributes: { url: any } }) =>
        image.attributes.url
    );
  
    return waysWeHelpImages;
  };
  
  /* Fetch ways we help pics */
  async function fetchWaysWeHelpCaptions() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/about-us-page?`,
      {
        cache: "no-store",
      }
    );
    const data = await response.json();
    if (!data.data) {
      return [];
    }
    const waysWeHelpCaptions = 
      [data.data.attributes.ways_we_help_others_caption_1, data.data.attributes.ways_we_help_others_caption_2, data.data.attributes.ways_we_help_others_caption_3];
  
    return waysWeHelpCaptions;
  };
  async function fetchWaysWeHelpSubtitle(){
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/about-us-page?`,
      {
        cache: "no-store",
      }
    );
    const data = await response.json();
    if (!data.data) {
      return [];
    }
    const subtitle = data.data.attributes.subtitle_2;

    return subtitle;
  }
export default async function WaysWeHelp(){
    /* zip the images and captions together */
    const images = await fetchWaysWeHelpPics();
    const captions = await fetchWaysWeHelpCaptions();
    const mapped = images.map((img:any, i:any) => [img, captions[i]]);

    const subtitle = await fetchWaysWeHelpSubtitle();
    // console.log(mapped);
    return (
        <div className="h-full md:p-4 md:text-center text-center text-black">
          <div className="mt-12">
            <h1 className="text-3xl font-semibold px-3">
              {subtitle}
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row items-center w-11/12 m-auto mt-4 justify-around">
              {mapped.map((item: any) =>(
                  <div key="id"
                  className="lg:w-auto md:w-56 sm:w-40 md:mx-10 my-4 text-center"
                  style={{
                    backgroundImage: "url(" + item[0] + ")",
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
                  {item[1]}
                </div>
              ))}
          </div>
        </div>
    );

}