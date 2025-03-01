import {defineField, defineType} from 'sanity'

export const organizerType = defineType({
  name: 'organizer',
  title: 'Organizer',
  type: 'document',
  fields: [
    defineField({
        name: 'title',
        type: 'string',
        validation: (rule) => rule.required(),
    }),
      defineField({
        name: 'short',
        type: 'string',
    }),
      defineField({
        name: 'slug',
        type: 'slug',
        options: {source: 'title'},
        validation: (rule) => rule.required(),
      }),
        defineField({
            name: 'image',
            type: 'image',
        }),
      defineField({
        name: 'description',
        type: 'array',
        of: [{type: 'block'}],
      }),
        defineField({
            name: 'url',
            type: 'url',
        })]
    })
