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
// Social Media
export const socialMedia = {
    instagram: "https://www.instagram.com/filip.steficar/",
    unsplash: "https://unsplash.com/@filipsteficar"
}