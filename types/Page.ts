import { PortableTextBlock } from "next-sanity";
import { Photo } from "./Photo";

export type Page = {
    _id: string,
    _createdAt: Date,
    title: string,
    slug: string,
    content: PortableTextBlock[]
    gallery: Photo[]
}