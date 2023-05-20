import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'author',
    title: 'Название сайта',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Название сайта',
            type: 'string',
        }),
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
})