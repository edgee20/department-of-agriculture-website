import { AccordionData } from "@/lib/types/services";

interface AgencyProps {
  agency: AccordionData["accordionData"][number]["agency"];
}

const AgencyDetails = ({ agency }: AgencyProps) => {
  const { name, address, tel, fax, email, website } = agency;

  return (
    <div className="space-y-2 py-2 text-sm ml-[20px]">
      <p>
        <i>Name: </i>
        {name}
      </p>
      <p>
        <i>Address: </i>
        {address}
      </p>
      <p>
        <i>Telephone: </i>
        {Array.isArray(tel) ? tel.join(", ") : tel}
      </p>
      {fax && (
        <p>
          <i>Fax: </i>
          {fax}
        </p>
      )}
      <p>
        <i>Email: </i>
        {Array.isArray(email) ? (
          email.map((emailItem, index) => (
            <span key={emailItem}>
              <a href={`mailto:${emailItem}`} className="underline">
                {emailItem}
              </a>
              {index < email.length - 1 && ", "}
            </span>
          ))
        ) : (
          <a href={`mailto:${email}`} className="underline">
            {email}
          </a>
        )}
      </p>
      <p>
        <i>Website: </i>
        {website ? (
          Array.isArray(website) ? (
            website.length > 0 ? (
              website.map((websiteItem, index) => (
                <span key={websiteItem}>
                  <a
                    href={websiteItem}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {websiteItem}
                  </a>
                  {index < website.length - 1 && ", "}
                </span>
              ))
            ) : (
              <span>No website available</span>
            )
          ) : (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {website}
            </a>
          )
        ) : (
          <span>No website available</span>
        )}
      </p>
    </div>
  );
};

export default AgencyDetails;
