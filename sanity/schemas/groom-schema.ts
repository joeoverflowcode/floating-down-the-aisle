const groom = {
    name: 'groom',
    title: "Groom",
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Groom Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: () => 'groom',
            }
        },
        {
            name: 'image1',
            title: 'Image 1',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
        {
            name: 'caption1',
            title: 'Caption 1',
            type: "array",
            of:[{type: "block"}]
        },
        {
            name: 'image2',
            title: 'Image 2',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
        {
            name: 'caption2',
            title: 'Caption 2',
            type: "array",
            of:[{type: "block"}]
        }
    ]
}

export default groom