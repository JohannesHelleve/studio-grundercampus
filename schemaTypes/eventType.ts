import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
        name: 'title',
        type: 'string',
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'slug',
        type: 'slug',
        options: {source: 'title'},
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'locationTemp',
        type: 'string',
    }),
    defineField({
        name: 'datetime',
        type: 'datetime',
    }),
    defineField({
        name: 'description',
        type: 'array',
        of: [{type: 'block'}],
    }),
    defineField({
        name: 'organizer',
        type: 'reference',
        to: [{type: 'organizer'}],
    })]
})
