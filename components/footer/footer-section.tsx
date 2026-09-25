import { FooterCta } from "./footer-cta";
import { FooterSocials } from "./footer-socials";

export function FooterSection() {
  return (
    <footer
      id="contact"
      className="relative w-full bg-[#EDEDED] pt-20 sm:pt-28 pb-10 sm:pb-14 border-t border-black/10"
      aria-label="Contact and Social Links"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FooterCta />
        <FooterSocials />
      </div>
    </footer>
  );
}
