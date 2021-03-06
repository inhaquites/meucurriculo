const express = require('express');

const routes = express.Router();

routes.get('/teste', (req, res) => {
  res.send('teste');
});

routes.get('/', (req, res) => {
  return res.json({
    "name": "Rodrigo Inhaquites.",
    "contact": "https://www.linkedin.com/in/rodrigoinhaquites/",
    "studying": "Curso de Formação GoStack da Rocketseat(Node.js, React.js e ReactNative)",
    "myGoals": "Atuar com desenvolvimento nas tecnologias Node.js, React.js e ReactNative para ampliar e aplicar meus conhecimentos",
    "skills": {
      "databases": "MS Sql Server, MySQL, Oracle",
      "programmingLanguages": "C#, Javascript",
      "versionControl": "GitHub, TFS",
      "orms": "NHibernate, Entity Framework, Dapper",
    },
    "educationBackground": [
      {
        "course": "Graduação, Análise e Desenvolvimento de Sistemas",
        "institution": "IERGS/UNIASSELVI",
        "period": "2019 - 2022"
      },
      {
        "course": "Técnico de Informática com ênfase em Desenvolvimento de Sistemas",
        "institution": "Escola Martinho Lutero",
        "period": "2001 - 2002"
      }
    ],
    "workExperience": [
      {
        "company": "SMark CRM",
        "post": "Desenvoledor Senior | .Net Core",
        "period": "05/2021 - Present"
      },
      {
        "company": "Hammer Consult",
        "post": "Desenvoledor Pleno .Net",
        "period": "09/2019 - 05/2021"
      },
      {
        "company": "Grupo VG Servicos",
        "post": "Desenvoledor Fullstack",
        "period": "08/2012 - 06/2019"
      },
      {
        "company": "Hospital Moinhos de Vento",
        "post": "Desenvoledor (PJ)",
        "period": "06/2011 - 07/2012"
      },
      {
        "company": "Grupo VG Servicos",
        "post": "Desenvoledor Fullstack",
        "period": "03/2007 - 06/2011"
      }
    ],
    "languages":
    {
      "language": "English",
      "level": "Basic",
      "educationInstitute": [
        {
          "institute": "English Live",
          "period": "2019 - Present"
        },
        {
          "institute": "Yazigi",
          "period": "2007 - 2008"
        }
      ]
    }
  });
});

module.exports = routes;
