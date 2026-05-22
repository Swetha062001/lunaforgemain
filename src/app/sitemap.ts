import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://lunaforge.dev",
            lastModified: new Date(),
        },
    ];
}