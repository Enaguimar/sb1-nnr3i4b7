import Container from '@/components/ui/Container';
import FooterContact from './footer/FooterContact';
import FooterLinks from './footer/FooterLinks';
import FooterSocial from './footer/FooterSocial';
import FooterCopyright from './footer/FooterCopyright';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <FooterContact />
          <FooterLinks />
        </div>
        
        <div className="flex justify-center mt-12">
          <FooterSocial />
        </div>
        
        <FooterCopyright />
      </Container>
    </footer>
  );
}