import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import expressjs from "../assets/expressjs.png";
import typescript from "../assets/typescript.png";
import graphql from "../assets/graphql.png";
import sequelize from "../assets/sequelize.png";
import laravel from "../assets/laravel.png";
import codeigniter from "../assets/codeigniter.png";
import wordpress from "../assets/wordpress.png";
import gitlab from "../assets/gitlab.png";
import tailwind from "../assets/tailwind.png";
import materialUI from "../assets/material-ui.png";
import mysql from "../assets/mysql.png";
import postgresql from "../assets/postgresql.png";
import mongodb from "../assets/mongoDB.png";
import bulma from "../assets/bulma.png";
import bootstrap5 from "../assets/bootstrap5.png";
import nestjs from "../assets/nestjs.png";
import heroku from "../assets/heroku.png";
import netlify from "../assets/netlify.png";
import railway from "../assets/railway-logo.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React JS",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: expressjs,
      title: "Express JS",
      style: "shadow-green-700",
    },
    {
      id: 6,
      src: nestjs,
      title: "Nest JS",
      style: "shadow-red-600",
    },
    {
      id: 7,
      src: typescript,
      title: "Typescript",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-500",
    },
    {
      id: 9,
      src: materialUI,
      title: "Material UI",
      style: "shadow-sky-600",
    },
    {
      id: 10,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-400",
    },
    {
      id: 11,
      src: bootstrap5,
      title: "Bootstrap CSS",
      style: "shadow-purple-700",
    },
    {
      id: 12,
      src: bulma,
      title: "Bulma CSS",
      style: "shadow-green-600",
    },
    {
      id: 13,
      src: gitlab,
      title: "GitLab",
      style: "shadow-orange-500",
    },
    {
      id: 14,
      src: laravel,
      title: "Laravel",
      style: "shadow-orange-800",
    },
    {
      id: 15,
      src: codeigniter,
      title: "CodeIgniter",
      style: "shadow-orange-700",

    },
    {
      id: 16,
      src: wordpress,
      title: "Wordpress",
      style: "shadow-blue-300",
    },
    {
      id: 17,
      src: mysql,
      title: "MySQL",
      style: "shadow-blue-500",
    },
    {
      id: 18,
      src: postgresql,
      title: "PostgreSQL",
      style: "shadow-blue-500",
    },
    {
      id: 19,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-800",
    },
    {
      id: 20,
      src: sequelize,
      title: "Sequelize",
      style: "shadow-blue-400",
    },
    {
      id: 21,
      src: heroku,
      title: "Heroku",
      style: "shadow-purple-800",
    },
    {
      id: 22,
      src: netlify,
      title: "Netlify",
      style: "shadow-green-300",
    },
    {
      id: 23,
      src: railway,
      title: "Railway",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-cyan-500 to-cyan-900 to-gray-900 py-20 w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
