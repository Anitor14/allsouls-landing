import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { CHURCH, SOCIAL_LINKS } from "./content";

const LandingFooter = () => {
  return (
    <footer className="border-t border-slate-100 bg-[#F8FAFC]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Image
            src="/images/church-logo.png"
            alt={CHURCH.name}
            width={866}
            height={140}
            className="h-11 w-auto"
          />
          <p className="mt-5 flex gap-2.5 text-[#56575d]">
            <MapPin size={18} className="mt-1 shrink-0 text-[#2c4e9c]" />
            {CHURCH.address}
          </p>
          <a
            href={`mailto:${CHURCH.email}`}
            className="mt-2.5 flex gap-2.5 text-[#56575d] transition-colors hover:text-[#2c4e9c]"
          >
            <Mail size={18} className="mt-1 shrink-0 text-[#2c4e9c]" />
            {CHURCH.email}
          </a>
        </div>

        <div>
          <h3 className="font-bold text-[#2B3A67]">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-[#56575d]">
            <li>
              <a href="#about" className="hover:text-[#2c4e9c]">
                About
              </a>
            </li>
            <li>
              <a href="#visit" className="hover:text-[#2c4e9c]">
                Visit
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-[#2c4e9c]">
                Gallery
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-[#2B3A67]">Follow us</h3>
          <ul className="mt-4 space-y-2.5 text-[#56575d]">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2c4e9c]"
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 text-sm text-[#616161] sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {CHURCH.name}. All rights
            reserved.
          </p>
          <p>
            Powered by{" "}
            <a
              href="https://www.valuedrivertechnology.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#192C58] transition-colors hover:text-[#365FBE]"
            >
              Value Driver Technology
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
