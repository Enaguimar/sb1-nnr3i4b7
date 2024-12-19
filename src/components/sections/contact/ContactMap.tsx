import { motion } from 'framer-motion';

export default function ContactMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-[450px] rounded-xl overflow-hidden relative bg-gray-800"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d389.69768357431235!2d-1.1078988794502906!3d38.61250239210368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63fdb1b9465837%3A0x707600150988943e!2sC.%20de%20Francisco%20Casta%C3%B1o%2C%2043%2C%2030510%20Yecla%2C%20Murcia!5e0!3m2!1ses-419!2ses!4v1734440962635!5m2!1ses-419!2ses"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación de Kastillikos Pyrofantasía"
        className="filter contrast-125"
      />
    </motion.div>
  );
}