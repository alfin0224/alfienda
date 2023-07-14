import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-cyan-500 to-cyan-900 to-gray-900 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center py-20 w-full h-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
          <p className="py-5">Briefly about me</p>
        </div>

        <p className="text-xl mt-6">
          &nbsp; &nbsp; &nbsp; I was born in Banyumas, Central Java, Indonesia on February 24, 1997.
            The first time I started to focus on learning information technology was when I started school at SMK TELKOM Purwokerto, and I graduated from school after studying for 3 years.
            After I graduated from Vocational High School, I still focused on learning IT by continuing my education at the Indonesian Islamic University majoring in informatics engineering 
            and I graduated from college after studying for 4 years.
        </p>
        <br />

        <p className="text-xl">
        &nbsp; &nbsp; &nbsp;I have work experience for 2 years and 7 months at KOMINFO West Papua Province as a web developer. 
        After that I worked remotely as a web developer for 1 year at DPMK West Papua Province. Then, in early 2023 to May 2023 I helped develop 
        web applications that are used as advertising media, manage membership data and program data for learning activities in the sefeo english community, 
        as a Fullstack Developer
          </p>
        <br />

        <p className="text-xl">
        &nbsp; &nbsp; &nbsp; I have a passion for building beautiful, modern websites to meet needs and solve problems in business processes. 
          A forward-thinking and curiosity-driven web developer who offers more than 4 years experience in web development by writing clean, 
          efficient, reusable and reliable code for various business processes such as Pertamina RU IV Cilacap, Halfway House for children with
          Cancer and Blood Disorders, various provincial government systems, and Sefeo English Community.
        </p>
      </div>
    </div>
  );
};

export default About;
