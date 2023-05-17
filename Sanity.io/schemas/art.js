import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'art',
    title: 'Gallary',
    type: 'document',
    fields: [
        defineField({
            name: 'date',
            title: 'Year',
            type: 'date',
            options: {
                dateFormat: 'YYYY',
                calendarTodayLabel: 'Today'
            }
        }),
        defineField({
            name: 'images',
            title: 'Arts',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'arts' } }],
        }),
    ],
    preview: {
        select: {
            date: 'date',
            media: 'images[0].image'
        },
        prepare(selection) {
            const date = new Date(selection.date);
            const year = date.getFullYear();
            return { title: year, media: selection.media }
        },
    },
})