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
import sikampung from "../assets/portfolio/sikampung-porto.png";
import digitalOffice from "../assets/portfolio/digital-office-porto.png";
import sniper from "../assets/portfolio/sniper-porto.png";
import bumdes from "../assets/portfolio/bumdes-porto.png";
import sefeo from "../assets/portfolio/sefeo-porto.png";

const Portfolio = () => {
  const portfolios = [
    
    {
      id: 1,
      src: sefeo,
      be: "Node Express",
      fe: "ReactJS"

    },
    {
      id: 2,
      src: bumdes,
      be: "PHP",
      fe: "Bootstrap"
    },
    {
      id: 3,
      src: sniper,
      be: "PHP",
      fe: "Bootstrap"
    },
    {
      id: 4,
      src: digitalOffice,
      be: "PHP",
      fe: "Bootstrap"
    },
    {
      id: 5,
      src: sikampung,
      be: "PHP",
      fe: "Bootstrap"
    },
    {
      id: 6,
      src: dataSektoral,
      be: "PHP",
      fe: "Bootstrap"
    },
    {
      id: 7,
      src: sikm,
      be: "PHP",
      fe: "Bootstrap"
    },
    {
      id: 8,
      src: dprd,
      be: "PHP",
      fe: "Bootstrap"
    },
    {
      id: 9,
      src: setda,
      be: "PHP",
      fe: "Bootstrap"
    },
    {
      id: 10,
      src: kesbangpol,
      be: "PHP",
      fe: "Bootstrap"
    },
    {
      id: 11,
      src: ppid,
      be: "PHP",
      fe: "Bootstrap"
    },
    {
      id: 12,
      src: sitanda,
      be: "PHP",
      fe: "Bootstrap"
    },
    {
      id: 13,
      src: eplanning,
      be: "PHP",
      fe: "Bootstrap"
    },
    {
      id: 14,
      src: emusrenbang,
      be: "PHP",
      fe: "Bootstrap"
    },
    {
      id: 15,
      src: ebudgeting,
      be: "PHP",
      fe: "Bootstrap"
    },
    {
      id: 16,
      src: rspa,
      be: "PHP",
      fe: "Bootstrap"
    },
    {
      id: 16,
      src: pertamina,
      be: "PHP",
      fe: "Bootstrap"
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
              <span className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" rel="noreferrer">{be}</span>
              <span className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" rel="noreferrer">{fe}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
