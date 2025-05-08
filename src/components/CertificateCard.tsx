import { Certificate } from "../types/index";

export default function CertificateCard({
  title,
  issuer,
  date,
  imageUrl,
  credentialUrl,
  inProgress,
}: Certificate) {
  return (
    <div className="rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col border border-custom">
      <img
        src={imageUrl}
        alt={title}
        className={`object-cover w-full h-56  ${issuer === "Dakshya Nepal" && "object-top"}`}
      />

      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Issued by: <span className="font-semibold">{issuer}</span>{" "}
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{date}</p>
      </div>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-[#172132]">
        <a
          href={credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary-dark flex items-center justify-center"
        >
          {inProgress ? "In Progress" : "View Certificate"}
        </a>
      </div>
    </div>
  );
}
