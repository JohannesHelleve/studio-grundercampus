import {defineField, defineType} from 'sanity'

export const avatarType = defineType({
  name: 'avatar',
  title: 'Avatar',
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
        name: 'image',
        type: 'image',
      }),
      defineField({
        name: 'url',
        type: 'url',
      })],
    })
