import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { CHURCH, SOCIAL_LINKS } from "./content";

const LandingFooter = () => {
  return (
    <footer className="border-t border-slate-100 bg-[#F8FAFC]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.9fr_1.1fr_0.8fr]">
        <div>
          <Link href="/" aria-label="All Souls' Church, Lekki">
            <Image
              src="/images/church-logo.png"
              alt={CHURCH.name}
              width={866}
              height={140}
              className="h-11 w-auto"
            />
          </Link>
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
              <Link href="/#about" className="transition-colors hover:text-[#2c4e9c]">
                About
              </Link>
            </li>
            <li>
              <Link href="/#visit" className="transition-colors hover:text-[#2c4e9c]">
                Visit
              </Link>
            </li>
            <li>
              <Link href="/#clergy" className="transition-colors hover:text-[#2c4e9c]">
                Clergy
              </Link>
            </li>
            <li>
              <Link href="/#gallery" className="transition-colors hover:text-[#2c4e9c]">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/#app" className="transition-colors hover:text-[#2c4e9c]">
                The App
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-[#2B3A67]">Legal & Policies</h3>
          <ul className="mt-4 space-y-2.5 text-[#56575d]">
            <li>
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-[#2c4e9c]"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-use"
                className="transition-colors hover:text-[#2c4e9c]"
              >
                Terms of Use
              </Link>
            </li>
            <li>
              <Link
                href="/account-and-data-deletion"
                className="transition-colors hover:text-[#2c4e9c]"
              >
                Account & Data Deletion
              </Link>
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
                  className="transition-colors hover:text-[#2c4e9c]"
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-[#616161] md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {CHURCH.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-[#56575d]">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-[#2c4e9c]"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link
              href="/terms-of-use"
              className="transition-colors hover:text-[#2c4e9c]"
            >
              Terms of Use
            </Link>
            <span>•</span>
            <Link
              href="/account-and-data-deletion"
              className="transition-colors hover:text-[#2c4e9c]"
            >
              Account & Data Deletion
            </Link>
          </div>
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
