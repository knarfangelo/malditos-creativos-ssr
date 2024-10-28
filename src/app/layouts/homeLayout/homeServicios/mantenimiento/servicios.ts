
export interface estadistica{
    titulo: string;
    numeros: string;
}

export interface IServicio {
    titulo: string;
    img: string;
    estilo?: string;
    numeros: estadistica[];
}

export const servicios: IServicio[] = [
    {
        titulo: 'Diseño Web',
        img: '/servicios/disenio-web.webp',
        estilo: 'animate__animated animate__bounceInLeft',
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
        estilo: 'animate__animated animate__fadeInUp',
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
        titulo: 'Creación de contenido',
        img: '/servicios/creacion-contenido.webp',
        estilo: 'animate__animated animate__bounceInRight',
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