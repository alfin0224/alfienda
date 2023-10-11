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
          &nbsp; &nbsp; &nbsp; I was born in Banyumas, Central Java, Indonesia, on February 24, 1997. The first time I started to focus on learning information technology was when I began school at SMK TELKOM Purwokerto. I graduated from the school after studying there for 3 years. Following my graduation from Vocational High School, I continued my education at the Indonesian Islamic University, majoring in informatics engineering, and graduated from college after studying for 4 years.
        </p>
        <br />

        <p className="text-xl">
        &nbsp; &nbsp; &nbsp; I have 5 months of internship experience at PT. BINTANG KOMUNIKASI UTAMA as a Full Stack Developer. Then, I have 3 months of internship experience at PT. PERTAMINA RU IV Cilacap as a Full Stack Developer. After That, I have 6 months of freelance project work experience at RSPA Buah Hati as a Full Stack Developer. And after graduated from college, I have 3 years of work experience at KOMINFO West Papua Province as a web developer. After that, I worked hybrid as a Full Stack Developer for 1 year at DPMK West Papua Province. From early 2023 to September 2023, I developed web applications used for advertising media, managing membership data, and programming data for learning activities in the Sefeo English community as a Fullstack Developer.
          </p>
        <br />

        <p className="text-xl">
        &nbsp; &nbsp; &nbsp; I have a passion for building beautiful, modern websites to meet needs and solve problems in business processes. I am a forward-thinking and curiosity-driven web developer, offering more than 4 years of experience in web development by writing clean, efficient, reusable, and reliable code for various business processes. Some of my notable projects include Pertamina RU IV Cilacap, Halfway House for Children with Cancer and Blood Disorders, Various provincial government systems, and the Sefeo English Community System.
        </p>
      </div>
    </div>
  );
};

export default About;
