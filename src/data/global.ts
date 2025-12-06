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
        label: "DaVinci Resolve",
        href: "https://www.blackmagicdesign.com/products/davinciresolve"
    },
    {
        label: "FL Studio",
        href: "https://www.image-line.com/"
    },
    {
        label: "WordPress",
        href: "https://wordpress.org/",
    },
    {
        label: "Astro JS",
        href: "https://astro.build/",
    },
    {
        label: "n8n",
        href: "https://n8n.io/",
    },
    {
        label: "Darktable",
        href: "https://www.darktable.org/",
    },
    {
        label: "Affinity",
        href: "https://www.affinity.studio/",
    },
    {
        label: "Bricks Builder",
        href: "https://bricksbuilder.io/",
    },
    {
        label: "Tailwind CSS",
        href: "https://tailwindcss.com/",
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