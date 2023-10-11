import React from "react";
import pertamina from "../assets/portfolio/pertamina-porto.png";
import rspa from "../assets/portfolio/rspa-porto.png";
import eplanning from "../assets/portfolio/e-planning-porto.png";
import ebudgeting from "../assets/portfolio/e-budgeting-porto.png";
import emusrenbang from "../assets/portfolio/e-musrenbang-porto.png";
import ppid from "../assets/portfolio/ppid-porto.png";
import sitanda from "../assets/portfolio/sitanda-porto.png";
import setda from "../assets/portfolio/setda-porto.png";
import dprd from "../assets/portfolio/dprd-porto.png";
import sikm from "../assets/portfolio/sikm-porto.png";
import kesbangpol from "../assets/portfolio/kesbangpol-porto.png";
import dataSektoral from "../assets/portfolio/data-sektoral-porto.png";
import catalog from "../assets/portfolio/e-catalog.jpg";
import sikampung from "../assets/portfolio/sikampung-porto.png";
import digitalOffice from "../assets/portfolio/digital-office-porto.png";
import sniper from "../assets/portfolio/sniper-porto.png";
import bumdes from "../assets/portfolio/bumdes-porto.png";
import potensial from "../assets/portfolio/potensial-village.jpg";
import sefeo from "../assets/portfolio/sefeo-porto.png";

const Portfolio = () => {
  const portfolios = [
    
    {
      id: 1,
      src: sefeo,
      be: "Express JS",
      fe: "React JS"

    },
    {
      id: 2,
      src: potensial,
      be: "Express JS",
      fe: "React JS"
    },
    {
      id: 3,
      src: bumdes,
      be: "Nest JS",
      fe: "React JS"
    },
    {
      id: 4,
      src: sniper,
      be: "Nest JS",
      fe: "React JS"
    },
    {
      id: 5,
      src: digitalOffice,
      be: "Laravel",
      fe: "HTML5/CSS"
    },
    {
      id: 6,
      src: sikampung,
      be: "Laravel",
      fe: "Vue JS"
    },
    {
      id: 7,
      src: catalog,
      be: "Express JS",
      fe: "React JS"
    },
    {
      id: 8,
      src: dataSektoral,
      be: "Laravel",
      fe: "React JS"
    },
    {
      id: 9,
      src: sikm,
      be: "Laravel",
      fe: "React JS"
    },
    {
      id: 10,
      src: dprd,
      be: "CodeIgniter",
      fe: "HTML5/CSS"
    },
    {
      id: 11,
      src: setda,
      be: "CodeIgniter",
      fe: "HTML5/CSS"
    },
    {
      id: 12,
      src: kesbangpol,
      be: "CodeIgniter",
      fe: "HTML5/CSS"
    },
    {
      id: 13,
      src: ppid,
      be: "CodeIgniter",
      fe: "HTML5/CSS"
    },
    {
      id: 14,
      src: sitanda,
      be: "CodeIgniter",
      fe: "HTML5/CSS"
    },
    {
      id: 15,
      src: eplanning,
      be: "Laravel",
      fe: "Vue JS"
    },
    {
      id: 16,
      src: emusrenbang,
      be: "Laravel",
      fe: "Vue JS"
    },
    {
      id: 17,
      src: ebudgeting,
      be: "Laravel",
      fe: "Vue JS"
    },
    {
      id: 18,
      src: rspa,
      be: "CodeIgniter",
      fe: "HTML5/CSS"
    },
    {
      id: 19,
      src: pertamina,
      be: "CodeIgniter",
      fe: "HTML5/CSS"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-t from-cyan-500 to-cyan-900 to-gray-900 w-full py-20 text-white md:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portofolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, be, fe }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              <span className="w-1/2 px-2 py-4 m-3 duration-200 hover:scale-105" rel="noreferrer">{be}</span>
              <span className="w-1/2 px-2 py-4 m-3 duration-200 hover:scale-105" rel="noreferrer">{fe}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
