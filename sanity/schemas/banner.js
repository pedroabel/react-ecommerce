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
      title: 'Produtos',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'Descrição',
      type: 'string',
    },
    {
      name: 'smallText',
      title: 'Texto - Pequeno',
      type: 'string',
    },
    {
      name: 'midText',
      title: 'Texto - Medio',
      type: 'string',
    },
    {
      name: 'largeText1',
      title: 'Texto - Grande 1',
      type: 'string',
    },
    {
      name: 'largeText2',
      title: 'Texto - Grande 2',
      type: 'string',
    },
    {
      name: 'discount',
      title: 'Desconto',
      type: 'string',
    },
    {
      name: 'saleTime',
      title: 'Ofeta',
      type: 'string',
    },
  ],
}
