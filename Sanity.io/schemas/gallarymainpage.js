import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'gallarymainpage',
    title: '[Gallary] - MainPage',
    type: 'document',
    fields: [
        defineField({
            title: 'One Big',
            name: 'pic1',
            type: 'reference',
            to: [{ type: 'arts' }]
        }),
        defineField({
            title: 'Right UP-1',
            name: 'pic2',
            type: 'reference',
            to: [{ type: 'arts' }]
        }),
        defineField({
            title: 'Right UP-2',
            name: 'pic3',
            type: 'reference',
            to: [{ type: 'arts' }]
        }),
        defineField({
            title: 'Right DOWN-1',
            name: 'pic4',
            type: 'reference',
            to: [{ type: 'arts' }]
        }),
    ]
})