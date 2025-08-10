import ProjectCard from "./ProjectCard";

export default function Projects({ repos = [] }) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Projets</h2>
      {repos.length === 0 ? (
        <p className="text-gray-600">Aucun projet à afficher pour le moment.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {repos.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      )}
    </section>
  )
}
