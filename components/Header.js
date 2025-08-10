export default function Header({ name = "Ton Nom", role = "Développeur·se", avatar = "/avatar.jpg" }) {
  return (
    <header className="max-w-4xl mx-auto py-10 px-4">
      <div className="flex items-center gap-6">
        <img src={avatar} alt="avatar" className="w-24 h-24 rounded-full object-cover" />
        <div>
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-gray-500">{role} • Open to opportunities</p>
        </div>
      </div>
    </header>
  )
}
