export interface IEquipo {
    titulo: string;
    img: string;
    descripcion: string;
}

export const equipos: IEquipo[] = [
    {
        titulo: 'Blackmagic Pocket Cinema 6K Pro',
        img: 'equipos/blackmagic-pocket-cinema-6k-pro.png',
        descripcion: 'La Blackmagic Pocket Cinema Camera 6K Pro graba en 6K, tiene sensor Super 35, filtros ND incorporados y pantalla táctil.'
    },
    {
        titulo: 'Sony A7 II',
        img: 'equipos/sony-a72.png',
        descripcion: 'La Sony A7 II es una cámara sin espejo de fotograma completo, con 24.3 MP, estabilización de imagen y enfoque automático rápido.'
    },
    {
        titulo: 'Canon EOS 250D',
        img: 'equipos/canon-eos-250d.png',
        descripcion: 'La Canon EOS 250D es una DSLR compacta con sensor de 24.1 MP, video 4K, pantalla táctil abatible y enfoque automático rápido.'
    },
    {
        titulo: 'Micrófonos de Estudio',
        img: 'equipos/microfono-de-estudio.png',
        descripcion: 'Los micrófonos de estudio capturan audio de alta calidad, ideales para grabaciones profesionales, con mayor sensibilidad y reducción de ruido.'
    },
    {
        titulo: 'RØDECaster Pro II',
        img: 'equipos/rodecaster-pro-2.png',
        descripcion: 'El RØDECaster Pro II es una consola de producción de audio todo en uno, con grabación multicanal, efectos integrados y conectividad avanzada.'
    },
    {
        titulo: 'Hollyland Lark M2',
        img: 'equipos/hollyland-lark-m2.png',
        descripcion: 'El Hollyland Lark M2 es un sistema de micrófono inalámbrico compacto, con transmisión estable, calidad de sonido clara y fácil de usar.'
    },
    {
        titulo: 'DJI Ronin RS3 Mini',
        img: 'equipos/dji-ronin-rs3-mini.png',
        descripcion: 'El DJI Ronin RS3 Mini es un estabilizador compacto para cámaras, con control inalámbrico, pantalla OLED y soporta cargas de hasta 2 kg.'
    },
    {
        titulo: 'Blackmagic ATEM Mini Pro',
        img: 'equipos/blackmagic-atem-mini-pro.png',
        descripcion: 'El Blackmagic ATEM Mini Pro es un switcher de video compacto con múltiples entradas HDMI y transmisión directa a plataformas en vivo.'
    }
];
