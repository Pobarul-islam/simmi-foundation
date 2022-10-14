import React from "react";
import { Carousel } from "react-carousel-minimal";

const Banner = () => {
  const data = [
    {
      image: "https://simmifoundation.org/home/admin/upload/img71e24d0f53.jpg",
    },
    {
      image: "https://simmifoundation.org/home/admin/upload/img6e825bdb65.jpeg",
    },
    {
      image: "https://simmifoundation.org/home/admin/upload/imga75b483924.jpg",
    },
    {
      image: "https://simmifoundation.org/home/admin/upload/img2973827efc.jpg",
    },
    {
      image: "https://simmifoundation.org/home/admin/upload/img6e825bdb65.jpeg",
    },
    {
      image: "https://simmifoundation.org/home/admin/upload/img71e24d0f53.jpg",
    },
    {
      image: "https://simmifoundation.org/home/admin/upload/img6e825bdb65.jpeg",
    },
    {
      image: "https://simmifoundation.org/home/admin/upload/imga75b483924.jpg",
    },
    {
      image: "https://simmifoundation.org/home/admin/upload/img2973827efc.jpg",
    },
  ];

 
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="w-full">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width="1400px"
            height="564px"
            radius="5px"
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            style={{paddingBottom: "10px"}}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
