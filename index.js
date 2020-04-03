const express = require('express');

const app = express();

var port = process.env.port || 3000;

app.get('/', (req, res) => {
  return res.json({
    "name": "Rodrigo Inhaquites.",
    "contact": "https://www.linkedin.com/in/rodrigo-inhaquites-8707a7174/",
    "studying": "Curso de Formação GoStack da Rocketseat(Node.js, React.js e ReactNative)",
    "myGoals": "Atuar com desenvolvimento nas tecnologias Node.js, React.js e ReactNative para ampliar e aplicar meus conhecimentos",
    "skills": {
      "databases": "MS Sql Server, MySQL, Oracle",
      "programmingLanguages": "C#, Javascript",
      "versionControl": "Git, TFS"
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
        "company": "Hammer Consult",
        "post": "Desenvoledor Pleno",
        "period": "09/2019 - Present"
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
})



app.listen(port, function () {
  console.log('Umbler escutando na porta %s', port);
});