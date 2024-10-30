import { Rule } from "@sanity/types"

const page = {
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block'}]
        },
        {
            name: 'gallery',
            title: 'Gallery',
            type: 'array',
            description: 'Add 3 images for the gallery',
            of: [{ type: 'photo'}],
            validation: (Rule: Rule) => Rule.length(3).error('Exactly 3 images are required for the gallery')
        }
    ], 
}

export default page