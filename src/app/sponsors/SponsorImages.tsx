import React, { useState } from 'react';

async function fetchSponsImages() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/sponsors?populate=*`,
      {
        cache: "no-store",
      }
    );
    const data = await response.json();
    if (!data.data) {
      return [];
    }
    const sponsorAttributes = data.data.attributes;
  
    let sponsorImages = [];
    for (const key in sponsorAttributes) {
      const mediaAttribute = sponsorAttributes[key];
      if (mediaAttribute && mediaAttribute.data) {
        if (Array.isArray(mediaAttribute.data)) {
          if (mediaAttribute.data.attributes.url && mediaAttribute.data.attributes.mime.startsWith('image')) {
            sponsorImages.push(mediaAttribute.data.attributes.url);
          }
        }
      }
    }
  
    return sponsorImages;
  };

  async function SponsorImages(){
    const images = await fetchSponsImages();
    return (
        <div className="grid grid-cols-3 gap-4 basis-1/3 text-center w-6/7 lg:w-3/4 ml-10 mr-10 mb-10 place-items-center align-start">
            <img src={images[16]} alt="Urban One"/>
            <img src={images[15]} alt="United Healthcare" />
            <img src={images[12]} alt="Sysco" />
            <img src={images[4]} alt="Dominion Energy" />
            <img src={images[13]} alt="Threads" />
            <img src={images[10]} alt="Pepsi" />
            <img src={images[2]} alt="Bombas" />
            <img src={images[6]} alt="Krispy Kreme" />
            <img src={images[1]} alt="Boar's Head" />
            <img src={images[5]} alt="E-Z Box" />
            <img src={images[18]} alt="Williams Bakery" />
            <img src={images[0]} alt="APRI" />
            <img src={images[8]} alt="NAACP" />
            <img src={images[3]} alt="Clearview Counseling" />
            <img src={images[14]} alt="Ukrops" />
            <img src={images[9]} alt="National Pan-Hellenic Council" />
            <img src={images[11]} alt="Richmond, VA" />
            <div className="flex flex-col justify-center align-center items-center">
                <img src={images[17]} alt="Walmart" />
                <p className="text-xs text-center">Stores 1969 and 2821</p>
            </div>
            <div/>
            <img src={images[7]} alt="Massie Law" />
          </div>)
  }

  export default SponsorImages;