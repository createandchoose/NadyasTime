import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'arts',
    title: 'Посты',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            title: 'Обложка поста',
            type: 'image',
        }),
        defineField({
            name: 'title',
            title: 'Название',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Ссылка на пост',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'description',
            title: 'Текст поста',
            type: 'blockContent',
        }),
        defineField({
            name: 'publishedAt',
            title: 'Дата выпуска',
            type: 'datetime',
        }),
    ]
})