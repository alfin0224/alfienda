import React from "react";
import ppid from "../assets/portfolio/ppid.png"
import sitanda from "../assets/portfolio/sitanda.png"
import sikampung from "../assets/portfolio/sikampung.png"
import rspa from "../assets/portfolio/rspa.jpeg"
import kesbangpol from "../assets/portfolio/kesbangpol.png"
import dataSektoral from "../assets/portfolio/data-sektoral.png"
import egov from "../assets/portfolio/egov.png"
import sefeo from "../assets/portfolio/sefeo.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: sefeo,
      link: '#',
      demo: '#'
    },
    {
      id: 2,
      src: ppid,
      link: 'https://github.com/alfin0224/ppid.git',
      demo: 'https://ppid.papuabaratprov.go.id'
      
    },
    {
      id: 3,
      src: sikampung,
      link: '#',
      demo: 'https://sikampung.papuabaratprov.go.id'
    },
    {
      id: 4,
      src: rspa,
      link: 'https://github.com/alfin0224/rspa.git',
      demo: '#'
    },
    {
      id: 5,
      src: dataSektoral,
      link: 'https://github.com/alfin0224/data-sektoral.git',
      demo: '#'
    },
    {
      id: 6,
      src: kesbangpol,
      link: 'https://github.com/alfin0224/kesbangpol.git',
      demo: 'https://kesbangpol.papuabaratprov.go.id'
    },
    {
      id: 7,
      src: sitanda,
      link: 'https://github.com/alfin0224/sitanda.git',
      demo: 'https://sitanda.papuabaratprov.go.id'
    },
    {
      id: 8,
      src: egov,
      link: '#',
      demo: 'https://egovernment.papuabaratprov.go.id/landing/'
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
          {portfolios.map(({ id, src, link, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              <a href={demo} target="_blank" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</a>
              <a href={link} target="_blank" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
