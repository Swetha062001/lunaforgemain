import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://lunaforge.dev",
            lastModified: new Date(),
            priority: 1.0,
        },
        {
            url: "https://lunaforge.dev/services",
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: "https://lunaforge.dev/work",
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: "https://lunaforge.dev/about",
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: "https://lunaforge.dev/contact",
            lastModified: new Date(),
            priority: 0.9,
        },
    ];
}