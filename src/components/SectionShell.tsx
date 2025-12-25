import type { FC, ReactNode } from "react";

interface SectionShellProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  noTopPadding?: boolean;
}

export const SectionShell: FC<SectionShellProps> = ({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  noTopPadding = false
}) => {
  return (
    <section 
      id={id} 
      className={noTopPadding ? "pb-16 md:pb-24" : "section-padding"}
    >
      <div className="container-page space-y-10">
        <header className="max-w-3xl space-y-4 fade-in-up">
          {eyebrow && <span className="tag-pill">{eyebrow}</span>}
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              {title}
            </h2>
            {subtitle && (
              <p className="text-base md:text-lg text-slate-600">{subtitle}</p>
            )}
          </div>
        </header>
        <div className="fade-in-up">{children}</div>
      </div>
    </section>
  );
};


