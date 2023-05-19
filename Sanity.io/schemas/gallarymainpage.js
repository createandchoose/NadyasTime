import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'gallarymainpage',
    title: 'Главная страница [3 поста]',
    type: 'document',
    fields: [
        defineField({
            title: 'Большой',
            name: 'pic1',
            type: 'reference',
            to: [{ type: 'arts' }]
        }),
        defineField({
            title: 'Справа сверху',
            name: 'pic2',
            type: 'reference',
            to: [{ type: 'arts' }]
        }),
        defineField({
            title: 'Справа снизу',
            name: 'pic3',
            type: 'reference',
            to: [{ type: 'arts' }]
        }),
        defineField({
            title: '❌❌❌ не работает (не должно быть пустым)',
            name: 'pic4',
            type: 'reference',
            to: [{ type: 'arts' }]
        }),
    ]
})