import CertificateCard from "../../components/CertificateCard";
import { certificates } from "../../data/certificates";

export default function CertificatesPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">My Certificates</h1>
      <p className="mb-8 max-w-full">
        I believe in continuous learning and professional development. Here are
        some of the certifications I've earned throughout my career.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.id} {...certificate} />
        ))}
      </div>
    </div>
  );
}
