export const dataState: DataState = {
    pages: [
        {heading: 'Цикл while', about: 'Цикл while here'},
        {heading: 'Цикл for', about: 'Цикл for here'},
        {heading: 'Конструкция switch', about: 'Конструкция switch here'},
    ]
}

export type DataState = {
    pages: PageType[]
}

export type PageType = {
    heading: string
    about: string
}