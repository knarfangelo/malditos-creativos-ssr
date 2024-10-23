
export interface estadistica{
    titulo: string;
    numeros: string;
}

export interface IServicio {
    titulo: string;
    img: string;
    numeros: estadistica[];
}

export const servicios: IServicio[] = [
    {
        titulo: 'Diseño Web',
        img: '/servicios/disenio-web.webp',
        numeros: [
            {
                titulo: 'INFLUENCERS',
                numeros: '550'
            },
            {
                titulo: 'ACTIVATIONS',
                numeros: '1,500'
            },
            {
                titulo: 'COUNTRIES',
                numeros: '30'
            },

        ]
    },
    {
        titulo: 'Stream & podcast',
        img: '/servicios/stream-podcast.webp',
        numeros: [
            {
                titulo: 'INFLUENCERS',
                numeros: '500'
            },
            {
                titulo: 'ACTIVATIONS',
                numeros: '1,500'
            },
            {
                titulo: 'COUNTRIES',
                numeros: '15'
            },

        ]
    },
    {
        titulo: 'Creacion de contenido',
        img: '/servicios/creacion-contenido.webp',
        numeros: [
            {
                titulo: 'IN 15 COUNTRIES',
                numeros: '#1'
            },
            {
                titulo: 'INFLUENCERS',
                numeros: '1,500'
            },
            {
                titulo: 'ACTIVATIONS',
                numeros: '2,000'
            },

        ]
    },
]