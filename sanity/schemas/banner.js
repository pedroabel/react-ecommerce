export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Imagem',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'buttonText',
      title: 'Texto - Botão',
      type: 'string',
    },
    {
      name: 'product',
      title: 'Produto - Slug',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'Descrição',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Categoria',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Titulo',
      type: 'string',
    },
    {
      name: 'discount',
      title: 'Desconto',
      type: 'string',
    },
    {
      name: 'saleTime',
      title: 'Oferta',
      type: 'string',
    },
  ],
}
