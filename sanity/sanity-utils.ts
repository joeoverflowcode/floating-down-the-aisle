import { createClient, groq } from "next-sanity"
import { Page } from "@/types/Page"
import clientConfig from "./config/client-config"
import imageUrlBuilder  from "@sanity/image-url"

const builder = imageUrlBuilder(clientConfig)
export function urlFor(source:any){
    return builder.image(source)
}

export async function getPages(): Promise<Page[]>{

    return createClient(clientConfig).fetch(
        groq`*[_type == "page"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            }`
        )
    } 


export async function getPage(slug:string): Promise<Page> {
    
    return createClient(clientConfig).fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        content,
        gallery[]{
            _key,
            "image": image.asset->url,
            caption
            }
        }`,
        {slug}
    )
}