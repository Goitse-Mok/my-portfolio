export default function CertificationsPage() {
  const certs = [
    {
      title: 'Getting Started with Azure DevOps Boards',
      link: 'https://www.coursera.org/account/accomplishments/verify/HHDNXEYCUKXP',
      provider: 'Coursera · Google',
      issued: '2024',
      code: 'HHDNXEYCUKXP'
    },
    {
      title: 'Linux: I/O Redirection for DevOps',
      link: 'https://www.coursera.org/account/accomplishments/verify/Y6RHET0D7MKZ',
      provider: 'Coursera · Google',
      issued: '2024',
      code: 'Y6RHET0D7MKZ'
    },
    {
      title: 'Certified Cybersecurity Technician (CCT)',
      link: null,
      provider: 'EC-Council (In Progress)',
      issued: 'Expected 2025',
      code: null
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-gray-800">
      <h2 className="text-3xl font-bold text-[#054160] mb-6">📜 Certifications</h2>
      <ul className="space-y-6">
        {certs.map((cert, i) => (
          <li key={i} className="border rounded-lg shadow-sm p-4 bg-white">
            <h3 className="text-lg font-semibold text-[#054160] mb-1">{cert.title}</h3>
            <p className="text-sm text-gray-600">{cert.provider} — <em>{cert.issued}</em></p>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-700 text-sm hover:underline"
              >
                View Certificate →
              </a>
            )}
            {cert.code && (
              <p className="text-xs text-gray-500 mt-1">Verification Code: {cert.code}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
