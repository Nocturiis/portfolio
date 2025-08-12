import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  const summary = `Je suis un étudiant en ingénierie à l'Université de Liège. Passionné depuis l'enfance par l'informatique, j'ai réalisé nombre de petits projets et ce site sert de portfolio à caractère non-exhaustif afin de présenter et documenter certains de ces projets. Bonne visite ;)`;
  const skills = ["JavaScript", "React", "Next.js", "Node.js", "TailwindCSS"];

  const projects = [
    {
      id: 1,
      name: "Portfolio personnel",
      html_url: "https://mon-portfolio.com",
      description: "Mon site personnel, conçu avec Next.js et TailwindCSS.",
      language: "Next.js",
      stargazers_count: 0
    },
    {
      id: 2,
      name: "Application météo",
      html_url: "https://meteo-app.com",
      description: "Application météo responsive utilisant l'API OpenWeather.",
      language: "JavaScript",
      stargazers_count: 0
    },
    {
      id: 3,
      name: "Site vitrine entreprise",
      html_url: "https://exemple.com",
      description: "Site vitrine professionnel pour une entreprise locale.",
      language: "HTML/CSS",
      stargazers_count: 0
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header name="Nathan Remacle" role="Engineering Student" avatar="/avatar.png" />
      <main className="flex-grow">
        <About summary={summary} skills={skills} />
        <Projects repos={projects} />
      </main>
      <Footer email="nathanremacle@outlook.fr" />
    </div>
  )
}
