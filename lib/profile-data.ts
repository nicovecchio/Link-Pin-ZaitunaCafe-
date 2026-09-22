import type { ComponentType, SVGProps } from "react"
import { MapPin, Star } from "lucide-react"
import { WhatsAppIcon, InstagramIcon } from "@/components/brand-icons"

type IconType = ComponentType<SVGProps<SVGSVGElement>>

export type SocialLink = {
  label: string
  url: string
  icon: IconType
}

export type MainLink = {
  title: string
  subtitle?: string
  url: string
  icon?: IconType
}

export type ProfileData = {
  avatarUrl: string
  name: string
  bio: string
  socialLinks: SocialLink[]
  links: MainLink[]
}

// Edita libremente este objeto para personalizar tu página.

export const profileData: ProfileData = {
  avatarUrl: "/profile.png",
  name: "Zaituna Cafe",
  bio: "Compartir contigo nos hace feliz",
  socialLinks: [
    {
      label: "Instagram",
      url: "https://instagram.com/zaitunacafe",
      icon: InstagramIcon,
    },
    {
      label: "WhatsApp",
      url: "https://api.whatsapp.com/send/?phone=584242753345&text=Hola%21%20Quiero%20m%C3%A1s%20informaci%C3%B3n",
      icon: WhatsAppIcon,
    },
    {
      label: "Google Review",
      url: "https://g.page/r/TU_LINK_DE_GOOGLE_REVIEWS/review",
      icon: Star,
    },
  ],
  links: [
    {
      title: "Instagram",
      subtitle: "@zaitunacafe",
      url: "https://instagram.com/zaitunacafe",
      icon: InstagramIcon,
    },
    {
      title: "WhatsApp",
      subtitle: "Escríbenos directamente",
      url: "https://api.whatsapp.com/send/?phone=584242753345&text=Hola%21%20Quiero%20m%C3%A1s%20informaci%C3%B3n",
      icon: WhatsAppIcon,
    },
    {
      title: "Déjanos tu reseña en Google",
      subtitle: "Tu opinión nos ayuda a crecer",
      url: "https://g.page/r/TU_LINK_DE_GOOGLE_REVIEWS/review",
      icon: Star,
    },
    {
      title: "Visítanos",
      subtitle: "Zaituna Café Sambil Caracas",
      url: "https://google.com/maps/place/Zaituna+Caf%C3%A9+Sambil+Caracas/@10.4888125,-66.854125,17z",
      icon: MapPin,
    },
  ],
}

