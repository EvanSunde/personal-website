import { PortableTextBlock } from "sanity"

export type Project = {
    _id: string;
    _createdAt: Date;
    name: string;
    image: String;
    slug: String;
    url: String;
    content: PortableTextBlock[];
}