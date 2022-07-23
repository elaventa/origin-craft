export default {
    name: 'featured',
    title: 'Featured Products',
    type: 'document',
    fields: [
        {
            name: 'fproducts',
            title: 'Featured Products',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: [
                  {type: 'product'},
                ]
              }
            ]
        },
    ],
  
    preview: {
      select: {
        title: 'title',
        media: 'mainImage',
      },
      prepare(selection) {
        const {author} = selection
        return Object.assign({}, selection, {
          subtitle: author && `by ${author}`,
        })
      },
    },
  }
  