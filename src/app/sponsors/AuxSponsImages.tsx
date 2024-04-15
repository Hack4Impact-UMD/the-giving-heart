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

  async function AuxSponsImages(){
    const images = await fetchSponsImages();
    return (
        <div>
            <img src={images[19]} alt="Greater Richmond Convention Center" />
            <img src={images[20]} alt="The 25th Market" />
            <img src={images[21]} alt="Aramark" />
          </div>)
  }

  export default AuxSponsImages;