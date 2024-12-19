import Section from '@/components/ui/Section';

export default function Cookies() {
  return (
    <div className="pt-20 bg-gray-900 text-white">
      <Section>
        <h1 className="text-4xl font-bold mb-8">Política de Cookies</h1>
        <div className="prose prose-invert max-w-none">
          <h2>¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Se utilizan ampliamente para hacer que los sitios web funcionen o funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
          </p>

          <h2>Tipos de cookies que utilizamos</h2>
          <h3>Cookies técnicas</h3>
          <p>
            Son aquellas que permiten al usuario la navegación a través de una página web y la utilización de las diferentes opciones o servicios que en ella existan.
          </p>

          <h3>Cookies analíticas</h3>
          <p>
            Son aquellas que permiten al responsable de las mismas el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas.
          </p>

          <h2>¿Cómo gestionar las cookies?</h2>
          <p>
            Puede configurar su navegador para que rechace todas las cookies, acepte solo algunas o le avise cuando un sitio intente guardar una. Sin embargo, rechazar las cookies puede impedir que algunas funciones del sitio web funcionen correctamente.
          </p>
        </div>
      </Section>
    </div>
  );
}