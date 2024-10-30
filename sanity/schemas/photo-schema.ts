const photo = {
    
    name: 'photo',
    title: 'Photo',
    type: 'object',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true }
        },
        {
            name: 'caption',
            title: 'Caption',
            type: 'string'
        }
    ]
}

export default photo