export default function About({ summary, skills = [] }) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-3">À propos</h2>
      <p className="text-gray-700 mb-4">{summary}</p>

      <h3 className="text-xl font-medium mb-2">Compétences</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map(s => (
          <span key={s} className="px-3 py-1 rounded-md border text-sm">{s}</span>
        ))}
      </div>
    </section>
  )
}
