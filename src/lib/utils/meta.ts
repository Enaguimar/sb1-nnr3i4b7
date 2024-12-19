export const defaultMeta = {
  title: 'Kastillikos Pyrofantasía - Tienda de Pirotecnia en Yecla',
  description: 'Tienda de pirotecnia recreativa en Yecla. Especialistas en bodas, eventos y celebraciones. Productos pirotécnicos de clase 1, 2 y 3.',
  keywords: 'pirotecnia, fuegos artificiales, petardos, truenos, Yecla, eventos, bodas'
};

export function generateMeta(title: string, description: string, keywords?: string) {
  return {
    title: `${title} | ${defaultMeta.title}`,
    description,
    keywords: keywords || defaultMeta.keywords
  };
}