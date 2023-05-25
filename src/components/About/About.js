import React from "react";
import "./About.css";

function About() {
  const skillsets = [
    "React",
    "MUI",
    "Javascript",
    "HTML",
    "CSS",
    "Bootstrap",
    "Wordpress",
    "ChatGPT",
  ];
  const projectManagementTools = ["Trello", "Gantt"];
  return (
    <section className="about section-card">
      <h2>Litt om meg</h2>
      <p>
        Hei, jeg heter Heine Günther. Etter en variert karriere innen mat og
        logistikk, bestemte jeg meg for å bytte karrierevei og har nylig
        fullført utdannelsen min som Front End Developer. Selv om det kan virke
        som et stort hopp, ser jeg likhetstrekk som kreativitet, nysgjerrighet
        for å kontinuerlig lære og prøve nye metoder, godt samarbeid, presisjon,
        tidsstyring og å holde kundene fornøyde. Gjennom å bygge de ulike
        elementene sammen, skaper jeg nå nettsider, i stedet for matretter!
      </p>
      <p>
        Jeg ser etter å bli med i et team der jeg kan bidra med mine ferdigheter
        og fortsette å lære mer fra andre
      </p>
      <p>
        {" "}
        Sjekk ut noen av prosjektene mine og ta kontakt i kontaktskjemaet
        nedenfor. Jeg ser fra til å høre fra deg!.
      </p>
      <h4>ferdigheter:</h4>
      <p className="skillsets">{skillsets.join(", ")}</p>
      <h4>Verktøy for prosjektstyring:</h4>
      <p className="projectManagementTools">
        {" "}
        {projectManagementTools.join(", ")}
      </p>
    </section>
  );
}

export default About;
