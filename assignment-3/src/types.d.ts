interface IFormCreateBook {
  title: string
  author: string
  topic: string
}

interface IBook extends IFormCreateBook {
  id: number
}
