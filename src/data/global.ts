// Global Site Data
const currentYear = new Date().getFullYear();
export const siteData = {
    name: "Filip Štefičar",
    author: "Filip Štefičar",
    lang: "en-GB",
    ogLang: "en_GB",
    langSchema: "en",
    copyright: `Filip Štefičar - ${currentYear} | All Rights Reserved`,
    ver: "0.0.1",
    url: "https://filipsteficar.com",
    cmsURL: "#",
    graphQL: "#"
}
// Define the MenuItem Interface
interface MenuItem {
    label: string
    href: string
    isExternal?: boolean
}
// Main Menu
export const mainMenu: MenuItem[] = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "About Me",
        href: "/about"
    },
    {
        label: "Contact",
        href: "/contact"
    }
]
// Contact Info
export const contactInfo = {
    email: "info@filipsteficar.com",
    address: "Jastrebarsko, Croatia"
}
// Define the SocialMediaItem Interface
interface SocialMediaItem {
    label: string
    href: string
}
// Social Media
export const socialMedia: SocialMediaItem[] = [
    {
        label: "Instagram",
        href: "https://www.instagram.com/filip.steficar"
    },
    {
        label: "Unsplash",
        href: "https://unsplash.com/@filipsteficar"
    },
    {
        label: "Linkedin",
        href: "https://www.linkedin.com/in/filip-steficar-6b0b65283",
    }
]
// Define the Toolbox Interface
interface Toolbox {
    label: string
    href: string
}
// Toolbox
export const myToolbox: Toolbox[] = [
    {
        label: "Davinci Resolve",
        href: "/"
    },
    {
        label: "FL Studio",
        href: "/"
    },
    {
        label: "WordPress",
        href: "/",
    },
    {
        label: "Astro JS",
        href: "/",
    },
    {
        label: "n8n",
        href: "/",
    },
    {
        label: "Darktable",
        href: "/",
    },
    {
        label: "Affinity",
        href: "/",
    },
    {
        label: "Bricks Builder",
        href: "/",
    },
    {
        label: "Tailwind CSS",
        href: "/",
    }
]
// Define the SeenOn Interface
interface SeenOn {
    label: string
    href: string
}
// Seen On
export const seenOn: SeenOn[] = [
    {
        label: "Wix",
        href: "/"
    },
    {
        label: "Squarespace",
        href: "/"
    },
    {
        label: "WordPress",
        href: "/",
    },
    {
        label: "PicsArt",
        href: "/",
    },
    {
        label: "Unfold",
        href: "/",
    },
    {
        label: "Figma",
        href: "/",
    },
    {
        label: "Notion",
        href: "/",
    },
    {
        label: "Medium",
        href: "/",
    },
    {
        label: "Trello",
        href: "/",
    }
]