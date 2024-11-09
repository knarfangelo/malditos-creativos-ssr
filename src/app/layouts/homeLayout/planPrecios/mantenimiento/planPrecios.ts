export interface IPlanPrecios {
    title: string;                 // Título de la categoría de plan, e.g., "DISEÑO WEB"
    plans: IPlanDetail[];          // Array de detalles del plan
  }
  
  export interface IPlanDetail {
    name: string;                  // Nombre del plan, e.g., "PA EMPEZAR"
    price: string;                 // Precio del plan, e.g., "S/999"
    features: string[];            // Lista de características del plan
  }
  
  export const planPrecios: IPlanPrecios[] = [
    {
      title: 'DISEÑO WEB',
      plans: [
        {
          name: 'PA EMPEZAR',
          price: 'S/999',
          features: [
            'Diseño Profesional de una Landing Page',
            'Optimización para dispositivos móviles (responsive)',
            'Sección de contacto con formulario básico',
            'Integración con redes sociales',
            'Implementación de Google Maps',
            'Carga Rápida y Optimizada'
          ]
        },
        {
          name: 'PA ROMPERLA',
          price: 'S/1799',
          features: [
            'Todo lo que incluye el plan Básico',
            'Diseño y desarrollo de un sitio web de hasta 5 páginas (inicio, servicios, contacto, nosotros, blog)',
            'Sección de contacto con formulario dinámico',
            'Blog con capacidad para publicar artículos y galería de fotos',
            'Configuración básica de SEO para búsquedas'
          ]
        },
        {
          name: 'PA GOZARLA',
          price: 'Desde S/3500',
          features: [
            'Todo lo que incluye el plan Estándar',
            'Desarrollo completo de una tienda online o blog',
            'Hasta 10 páginas o secciones (inicio, tienda, servicios, blog, nosotros, contacto, etc.)',
            'Gestión de productos o publicaciones',
            'Integración de pasarela de pago segura',
            'Sistema de gestión de inventario (e-commerce)',
            'Blog completamente funcional y auto-gestionable',
            'Configuración avanzada de SEO para mejorar la visibilidad en Google y soporte técnico por 1 mes'
          ]
        }
      ]
    },
    {
      title: 'DISEÑO GRÁFICO',
      plans: [
        {
          name: 'PA EMPEZAR',
          price: 'S/599',
          features: [
            'Análisis de marca',
            'Paleta de colores',
            'Diseño de logo',
            'Tipografía',
            'Ocho gráficas mensuales para postear en redes',
            'Diseño de un modelo de firma digital para Gmail'
          ]
        },
        {
          name: 'PA ROMPERLA',
          price: 'S/799',
          features: [
            'Análisis de marca',
            'Paleta de colores',
            'Diseño de logo',
            'Tipografías',
            'Doce gráficas mensuales para postear en redes',
            'Diseño de portada para Facebook',
            'Diseño de un modelo de firma digital para Gmail'
          ]
        },
        {
          name: 'PA GOZARLA',
          price: 'S/999',
          features: [
            'Análisis de marca',
            'Paleta de colores',
            'Diseño de logo',
            'Tipografías',
            'Dieciséis gráficas mensuales para redes',
            'Diseño de foto de perfil para Facebook e Instagram',
            'Diseño de portada para Facebook',
            'Diseño de un modelo de firma digital para Gmail'
          ]
        }
      ]
    },
    {
      title: 'PAQUETE DIGITAL',
      plans: [
        {
          name: 'PA EMPEZAR',
          price: 'S/599',
          features: [
            'Análisis de marca',
            'Paleta de colores',
            'Diseño de logo',
            'Tipografía',
            'Ocho gráficas mensuales para postear en redes',
            'Gráficas en formatos 16:09 - 1:1',
            'Un video animado para “Stories” en redes'
          ]
        },
        {
          name: 'PA ROMPERLA',
          price: 'S/999',
          features: [
            'Análisis de marca',
            'Manual de marca',
            'Doce gráficas mensuales para postear en redes',
            'Gráficas en formatos 16:09 - 1:1',
            'Dos videos animados para “Stories” en redes',
            'Diseño de un modelo de tarjeta corporativa'
          ]
        },
        {
          name: 'PA GOZARLA',
          price: 'S/1499',
          features: [
            'Manual de identidad',
            'Dieciséis gráficas mensuales para redes',
            'Gráficas en formato cuadrado y vertical',
            'Cuatro videos animados para “Stories” en redes',
            'Diseño de fotos de perfil para Facebook e Instagram',
            'Diseño de portada para Facebook',
            'Copy para post en redes sociales',
            'Parrilla de contenido',
            'Gestión de redes'
          ]
        }
      ]
    }
  ];
  