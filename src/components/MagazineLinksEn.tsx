import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const MagazineLinksEn: React.FC = () => {
  const links = [
    {
      title: 'Google Knowledge Graph Card',
      url: 'https://share.google/ewTTrgxnU5UzLJeWD',
      description: 'Knowledge Graph ID: /g/11zyrqjbq9',
    },
    {
      title: 'aleksandrsarkisian.space',
      url: 'https://aleksandrsarkisian.space',
      description: 'Publications & directory of profiles',
    },
    {
      title: 'sarkisian.teduza.com',
      url: 'https://sarkisian.teduza.com',
      description: 'Personal website',
    },
    {
      title: 'teduza.com',
      url: 'https://teduza.com',
      description: 'Core project & ecosystem',
    },
    {
      title: 'company.teduza.com',
      url: 'https://company.teduza.com',
      description: 'M.A.R.S. COMPANION LLC',
    },
  ];

  return (
    <section className="pt-16 pb-12 border-t border-[#E5E7EB]">
      <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6B7280] mb-6">
        References
      </div>

      <div className="divide-y divide-[#E5E7EB] border-y border-[#E5E7EB]">
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group py-4 flex items-baseline justify-between transition-colors hover:text-[#0F172A]"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="font-heading font-medium text-base sm:text-lg text-[#111827] group-hover:text-black transition-colors">
                {link.title}
              </span>
              <span className="text-xs text-[#6B7280]">
                — {link.description}
              </span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 ml-4" />
          </a>
        ))}
      </div>
    </section>
  );
};
