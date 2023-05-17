import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
    name: 'default',
    title: 'Nadya',

    projectId: '5ubnyen7',
    dataset: 'production',

    plugins: [deskTool(), visionTool()],

    schema: {
        types: schemaTypes,
    },
})