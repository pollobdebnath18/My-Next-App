import Image from "next/image";
import React from "react";

 export const metadata = {
  title: 'About Page',
  description: '...',
}
 

const About = () => {
  return (
    <div>
      <h2 className="text-3xl">This is About Page</h2>
      <Image
        className="mt-16 mb-16 rounded-2xl"
        src="/virat_test.jpg"
        alt="virat"
        width="400"
        height="300"
      ></Image>
      {/* another img from external */}
      {/* <Image
        src="https://media.assettype.com/thequint/2018-01/5d369107-8477-4216-a39d-ad806e1d3a0c/Virat-century.jpg"
        width="500"
        height="300"
        alt="virat"
      ></Image> */}
    </div>
  );
};

export default About;
