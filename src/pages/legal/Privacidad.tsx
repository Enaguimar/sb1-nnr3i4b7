import Section from '@/components/ui/Section';

export default function Privacidad() {
  return (
    <div className="pt-20 bg-gray-900 text-white">
      <Section>
        <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>
        <div className="prose prose-invert max-w-none">
          <p>
            En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos, le informamos:
          </p>

          <h2>1. Responsable del tratamiento</h2>
          <p>
            Kastillikos Pyrofantasía es el responsable del tratamiento de los datos personales que nos facilite a través de este sitio web.
          </p>

          <h2>2. Finalidad del tratamiento</h2>
          <p>
            Los datos personales que nos facilite serán tratados con las siguientes finalidades:
          </p>
          <ul>
            <li>Gestionar sus consultas y solicitudes</li>
            <li>Enviarle presupuestos solicitados</li>
            <li>Mantener la relación comercial</li>
          </ul>

          <h2>3. Base legal</h2>
          <p>
            La base legal para el tratamiento de sus datos es su consentimiento expreso, que nos otorga al enviarnos sus datos a través de los formularios de contacto.
          </p>

          <h2>4. Derechos</h2>
          <p>
            Puede ejercer sus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición enviando un email a info@kastillikos.es
          </p>
        </div>
      </Section>
    </div>
  );
}