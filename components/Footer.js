export default function Footer({ email }) {
  return (
    <footer className="max-w-4xl mx-auto px-4 py-8 text-sm text-gray-600">
      <div>© {new Date().getFullYear()} — {email ? <a href={`mailto:${email}`} className="underline">{email}</a> : "Contact : email"}</div>
    </footer>
  )
}
