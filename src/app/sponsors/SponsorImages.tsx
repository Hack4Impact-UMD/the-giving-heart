import React, { useEffect, useState } from 'react';

// Define an interface for the image data
interface SponsorImage {
    url: string; // Adjust this if your actual data structure is different
}

// Define an interface for the state
interface SponsorImagesState {
    ourSponsors: SponsorImage[];
    ourSupporters: SponsorImage[];
    auxiliarySupporters: SponsorImage[];
}

// Define the component
function SponsorImages() {
    // Initialize state with explicit types
    const [sponsorImages, setSponsorImages] = useState<SponsorImagesState>({
        ourSponsors: [],
        ourSupporters: [],
        auxiliarySupporters: []
    });

    useEffect(() => {
        async function fetchSponsImages() {
            const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/sponsor-categories?populate=*`;
            const response = await fetch(apiUrl, { cache: "no-store" });
            const data = await response.json();
            
            if (!data.data) {
                return { ourSponsors: [], ourSupporters: [], auxiliarySupporters: [] };
            }

            // Helper function to extract image URLs from a media list
            const extractUrls = (mediaList: any[]) => {
                return mediaList.map((item: any) => ({
                    url: item.attributes.url
                })).filter((image: SponsorImage) => image.url);
            };

            const { ourSponsors, ourSupporters, auxiliarySupporters } = data.data.attributes;
            return {
                ourSponsors: extractUrls(ourSponsors.data),
                ourSupporters: extractUrls(ourSupporters.data),
                auxiliarySupporters: extractUrls(auxiliarySupporters.data),
            };
        }

        fetchSponsImages().then(images => setSponsorImages(images));
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4 basis-1/3 text-center w-6/7 lg:w-3/4 ml-10 mr-10 mb-10 place-items-center align-start">
            <h2 className="sm:pb-8 pb-2 text-xl font-semibold">
              Our Sponsors
            </h2>
            {sponsorImages.ourSponsors.map((image, index) => <img key={index} src={image.url} alt="Our Sponsor"/>)}
            <h2 className="sm:pb-8 pb-2 text-xl font-semibold">
              Supporters
            </h2>
            {sponsorImages.ourSupporters.map((image, index) => <img key={index} src={image.url} alt="Our Supporter"/>)}
            <h2 className="sm:pb-8 pb-2 text-xl font-semibold">
              Auxillary Supporters
            </h2>
            {sponsorImages.auxiliarySupporters.map((image, index) => <img key={index} src={image.url} alt="Auxiliary Supporter"/>)}
        </div>
    );
}

export default SponsorImages;
