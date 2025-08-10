import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  const summary = `Je suis développeur·se spécialisé·e en ... (remplace par ton résumé professionnel). Disponible pour missions freelance / CDI.`;
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
      <Header name="Ton Nom" role="Développeur·se Web" avatar="/avatar.jpg" />
      <main className="flex-grow">
        <About summary={summary} skills={skills} />
        <Projects repos={projects} />
      </main>
      <Footer email="ton.email@example.com" />
    </div>
  )
}
