import Image from "next/image"
import { profileData } from "@/lib/profile-data"
import { SocialIcons } from "@/components/social-icons"
import { LinkButton } from "@/components/link-button"

export default function Page() {
  const { avatarUrl, name, bio, socialLinks, links } = profileData

  return (
    <main className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-slate-950 p-4">
      {/* Fondo con gradiente verde oliva y resplandor de Zaituna */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,#2d3a24_0%,#0f172a_60%,#020617_100%)]"
      />

      <section className="relative z-10 flex w-full max-w-md flex-col items-center gap-6">
        {/* Encabezado del perfil */}
        <header className="flex flex-col items-center gap-4 text-center">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#4a5d3f] to-[#8a9a5b] opacity-85 blur-md"
            />
            <Image
              src={avatarUrl || "/placeholder.svg"}
              alt={`Foto de perfil de ${name}`}
              width={112}
              height={112}
              priority
              className="relative size-28 rounded-full border-2 border-white/20 object-cover -rotate-12"
            />
          </div>

          <div className="space-y-2">
            <h1 className="text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {name}
            </h1>
            <p className="mx-auto max-w-xs text-pretty text-sm leading-relaxed text-emerald-100/80">
              {bio}
            </p>
          </div>
        </header>

        {/* Redes sociales */}
        <SocialIcons links={socialLinks} />

        {/* Enlaces principales */}
        <div className="flex w-full flex-col gap-3">
          {links.map((link) => (
            <LinkButton key={link.title} link={link} />
          ))}
        </div>

        <footer className="pt-2 text-center text-xs text-emerald-200/40">
          {`© ${new Date().getFullYear()} ${name}`}
        </footer>
      </section>
    </main>
  )
}
