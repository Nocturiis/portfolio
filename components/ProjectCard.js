export default function ProjectCard({ project }) {
  return (
    <a href={project.html_url} target="_blank" rel="noreferrer"
       className="block border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start gap-4">
        <div>
          <h4 className="font-semibold">{project.name}</h4>
          <p className="text-sm text-gray-600 mt-1">{project.description || "Pas de description"}</p>
        </div>
        <div className="text-sm text-gray-500">
          <div>{project.language || "—"}</div>
          <div>{project.stargazers_count} ★</div>
        </div>
      </div>
    </a>
  )
}
