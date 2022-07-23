export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Category Title',
      type: 'string',
    },
    {
      name: 'categorySlug',
      title: 'Category Title Slug',
      type: 'slug',
    },
    {
      name: 'list',
      title: 'Sub Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'subCategory'},
          ]
        }
      ]
    },
  ],
}
