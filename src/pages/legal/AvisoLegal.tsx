import Section from '@/components/ui/Section';

export default function AvisoLegal() {
  return (
    <div className="pt-20 bg-gray-900 text-white">
      <Section>
        <h1 className="text-4xl font-bold mb-8">Aviso Legal</h1>
        <div className="prose prose-invert max-w-none">
          <h2>1. Datos identificativos</h2>
          <p>
            En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:
          </p>
          <ul>
            <li>Denominación social: Kastillikos Pyrofantasía</li>
            <li>Domicilio social: Calle San Ramon, 151 Bajo. Acceso Fº Castaño, Yecla, Murcia</li>
            <li>Email: info@kastillikos.es</li>
            <li>Teléfono: +34 650 351 098</li>
          </ul>

          <h2>2. Objeto</h2>
          <p>
            El presente aviso legal regula el uso y utilización del sitio web kastillikos.es, del que es titular Kastillikos Pyrofantasía.
          </p>

          <h2>3. Privacidad y tratamiento de datos</h2>
          <p>
            Cuando para el acceso a determinados contenidos o servicios sea necesario facilitar datos de carácter personal, los usuarios garantizarán su veracidad, exactitud, autenticidad y vigencia. La empresa dará a dichos datos el tratamiento automatizado que corresponda en función de su naturaleza o finalidad, en los términos indicados en la sección de Política de Privacidad.
          </p>

          <h2>4. Propiedad industrial e intelectual</h2>
          <p>
            El usuario reconoce y acepta que todos los contenidos que se muestran en el sitio web y en especial, diseños, textos, imágenes, logos, iconos, botones, software, nombres comerciales, marcas, o cualesquiera otros signos susceptibles de utilización industrial y/o comercial están sujetos a derechos de propiedad intelectual.
          </p>
        </div>
      </Section>
    </div>
  );
}