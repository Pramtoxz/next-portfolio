import { profileData } from "@/lib/data/portfolio-data";

export function FooterSocials() {
  return (
    <div className="w-full space-y-8 pt-4">
      {/* Horizontal Divider Line */}
      <div className="w-full h-px bg-black/15" />

      {/* Massive Full-Width Display Typographic Name */}
      <div
        className="w-full overflow-hidden select-none py-2 text-center"
        aria-hidden="true"
      >
        <div className="text-[14vw] sm:text-[15vw] font-normal uppercase font-display tracking-tight text-black leading-[0.85] text-center">
          PRAMUDITO METRA
        </div>
      </div>

      {/* Bottom Credit & Social Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] sm:text-xs font-sans font-semibold text-neutral-500 tracking-wider uppercase">
        <div>
          © 2026 DESIGN BY PRAMUDITO METRA. ALL RIGHT RESERVED.
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center gap-6 text-black">
          <a
            href={profileData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-500 transition-colors py-2"
          >
            LINKEDIN
          </a>
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-500 transition-colors py-2"
          >
            GITHUB
          </a>
          <a
            href={profileData.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-500 transition-colors py-2"
          >
            PORTFOLIO
          </a>
        </div>
      </div>
    </div>
  );
}
