"use client";
// import Image from "next/image";
import { Button } from "..";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="heroContent">
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aliquid
          veniam dignissimos? Voluptatum, doloribus architecto.
        </p>
        <Button
          content="On Going"
          title="button"
          containerStyles="bg-primary"
          onClick={handleScroll}
        />
      </div>
      <div className="heroImageContainer">
        <div className="heroImage">
          {/* <Image
            width={500}
            height={300}
            // 10TK4j6Cky34pxpDlCjwHzcfRfKfrM_dn
            src={
              "https://drive.google.com/uc?export=view&id=16ItKvB_ZT8dMUoYofbXqDGmxFJWPPrtk"
            }
            alt="heroImage"
            style={{ height: "auth" }}
            // fill
            // objectFit="contain"
          /> */}

          <img  width={500} style={{ height: "auto", objectFit:'contain' }} src="https://drive.google.com/uc?export=view&id=16ItKvB_ZT8dMUoYofbXqDGmxFJWPPrtk" alt="panzabi"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
