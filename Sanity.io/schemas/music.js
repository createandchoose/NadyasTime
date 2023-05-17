import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'music',
    title: 'Music',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'cover',
            title: 'Cover',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'numberoftracks',
            title: 'Number of tracks',
            type: 'string',
        }),
        defineField({
            name: 'genre',
            title: 'Genre',
            type: 'string',
        }),
        defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'string',
        }),
        defineField({
            name: 'tracklist',
            title: 'Track List',
            type: 'array',
            of: [{
                name: 'track',
                type: 'object',
                title: 'Track',
                fields: [{
                        name: 'number',
                        type: 'string',
                        title: 'Number',
                    },
                    {
                        name: 'name',
                        type: 'string',
                        title: 'Track Name',
                    },
                    {
                        name: 'duration',
                        type: 'string',
                        title: 'Duration',
                    },
                ],
            }, ],
            preview: {
                select: {
                    title: 'name',
                    subtitle: 'number',
                },
            }
        }),
        defineField({
            name: 'gallary',
            title: 'Gallery List',
            type: 'array',
            options: {
                hotspot: true,
            },
            of: [{
                name: 'gallaryprops',
                type: 'object',
                title: 'Image',
                fields: [{
                        name: 'image',
                        type: 'image',
                        title: 'image',
                    },
                    {
                        name: 'name',
                        type: 'string',
                        title: 'Image name',
                    },
                    {
                        name: 'description',
                        type: 'text',
                        title: 'Description',
                    },
                ],
            }, ],
        }),
        defineField({
            title: 'URL: Download MP3 [128kb/s]',
            name: 'downloadmp3',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
            })
        }),
        defineField({
            title: 'URL: Bandcamp link',
            name: 'bandcamplink',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
            })
        }),
        defineField({
            name: 'released',
            title: 'Released',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD',
                calendarTodayLabel: 'Today'
            }
        }),
        defineField({
            name: 'releaseNote',
            title: 'Release note',
            type: 'blockContent',
        }),
        defineField({
            name: 'productNote',
            title: 'Product note',
            type: 'blockContent',
        }),
    ]
})