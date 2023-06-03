import { createClient, groq } from "next-sanity";



export async function getProjects() {
    const client = createClient({
        projectId:"h0kh9tzz",
        dataset: "production",
        apiVersion: "2023-05-26",
    })


return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset,
        url,
        content
    }`
    )   
}
