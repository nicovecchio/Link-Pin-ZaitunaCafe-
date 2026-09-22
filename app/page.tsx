import Image from "next/image"
import { profileData } from "@/lib/profile-data"
import { SocialIcons } from "@/components/social-icons"
import { LinkButton } from "@/components/link-button"

export default function Page() {
  const { avatarUrl, name, bio, socialLinks, links } = profileData

  return (
    <main className="relative flex min-h-dvh w-full items-center justify-center p-4 overflow-hidden">
      {/* Fondo con gradiente sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black"
      />

      <section className="relative z-10 flex w-full max-w-md flex-col items-center gap-6">
        {/* Encabezado del perfil */}
        <header className="flex flex-col items-center gap-4 text-center">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-full bg-gradient-to-tr from-emerald-500 to-amber-500 opacity-75 blur-sm"
            />
            <Image
              src={avatarUrl || "/placeholder.svg"}
              alt={`Foto de perfil de ${name}`}
              width={112}
              height={112}
              priority
              className="relative size-28 rounded-full border-2 border-white/20 object-cover"
            />
          </div>

          <div className="space-y-2">
            <h1 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl text-white">
              {name}
            </h1>
            <p className="mx-auto max-w-xs text-pretty text-sm leading-relaxed text-white/80">
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

        <footer className="pt-2 text-center text-xs text-white/30">
          {`© ${new Date().getFullYear()} ${name}`}
        </footer>
      </section>
    </main>
  )
}
