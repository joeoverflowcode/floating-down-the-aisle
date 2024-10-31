import { PortableText } from "@portabletext/react"
import { getPage, urlFor } from "@/sanity/sanity-utils";
import Image from "next/image";

 interface PageProps {
    params: { slug: string };
  };
  
  export default async function Page(props: PageProps) {
    const { slug } = props.params;
    const page = await getPage(slug)
  
    return <div>
                 <h1 className="text-xl">{page.title}</h1>
                 <PortableText value={page.content}/>
                 {page.gallery.map((item, index) => (
                    <div key={index}>
                        <Image src={urlFor(item.image).width(400).url()} alt={`image`} width={400} height={400} />
                        <p>{item.caption}</p>
                    </div>
                ))}
                </div>;
  }
  
  // Use `generateStaticParams` to define paths for static generation
  export async function generateStaticParams() {
    return [
      { slug: 'bride' },
      { slug: 'groom' },
      { slug: 'ceremony' },
      { slug: 'reception' },
      { slug: 'outtakes' },
    ];
  }
  

// import { getPage, urlFor } from "@/sanity/sanity-utils"
// import { PortableText } from "@portabletext/react"
// import Image from "next/image"

// type Props = {
//     params: { slug: string }
//   }
  
//   export default async function Page({ params }: Props) {
//     const {slug} = await params
//     const page = await getPage(slug);
  

//     return (
//         <div>
//             <h1 className="text-xl">{page.title}</h1>
//             <PortableText value={page.content}/>
//             {page.gallery.map((item, index) => (
//                 <div key={index}>
//                     <Image src={urlFor(item.image).width(400).url()} alt={`image`} width={400} height={400} />
//                     <p>{item.caption}</p>
//                 </div>
//             ))}
//             </div>
//     )
// }

// import { getPage } from "@/sanity/sanity-utils";
// import { PortableText } from "@portabletext/react";

// type Props = {
//   params: { slug: string }
// }

// export default async function Page({ params }: Props) {
//   const page = await getPage(params.slug);

//   return (
//     <div><h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">{page.title}</h1>
//       <div className="text-lg text-gray-700 mt-10"><PortableText value={page.content} /></div>
//     </div>
//   )
// }