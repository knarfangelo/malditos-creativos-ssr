
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
                titulo: 'DESARROLLOS',
                numeros: '57'
            },
            {
                titulo: 'VISUALIZACIONES',
                numeros: '+250K'
            },
            {
                titulo: 'PAÍSES',
                numeros: '15'
            },

        ]
    },
    {
        titulo: 'Stream & podcast',
        img: '/servicios/stream-podcast.webp',
        estilo: 'animate__animated animate__fadeInUp',
        numeros: [
            {
                titulo: 'GRABACIONES',
                numeros: '69'
            },
            {
                titulo: 'HORAS DE CONTENIDO',
                numeros: '5780'
            },
            {
                titulo: 'PAÍSES',
                numeros: '3'
            },

        ]
    },
    {
        titulo: 'Creación de contenido',
        img: '/servicios/creacion-contenido.webp',
        estilo: 'animate__animated animate__bounceInRight',
        numeros: [
            {
                titulo: 'HORAS DE GRABACIÓN',
                numeros: '+200'
            },
            {
                titulo: 'DE REPRODUCCIONES',
                numeros: '+5M'
            },
            {
                titulo: 'PLATAFORMAS',
                numeros: '+7'
            },

        ]
    },
    {
        titulo: 'Representación de influencers',
        img: '/servicios/influencers.webp',
        estilo: 'animate__animated animate__bounceInRight',
        numeros: [
            {
                titulo: 'INFLUENCERS',
                numeros: '+10'
            },
            {
                titulo: 'DE SEQUIDORES',
                numeros: '+10M'
            },
            {
                titulo: 'PAISES',
                numeros: '+10'
            },
        ]
    },
]