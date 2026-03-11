'use client';

const logos = [
  { id: 1, name: 'Google', color: '#4285F4' },
  { id: 2, name: 'Microsoft', color: '#00A4EF' },
  { id: 3, name: 'Amazon', color: '#FF9900' },
  { id: 4, name: 'Apple', color: '#555555' },
  { id: 5, name: 'Facebook', color: '#1877F2' },
  { id: 6, name: 'Netflix', color: '#E50914' },
  { id: 7, name: 'Tesla', color: '#CC0000' },
  { id: 8, name: 'IBM', color: '#0F62FE' },
];

export default function PartnersMarquees() {
  return (
    <section className="w-full py-16 md:py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Desktop View - Horizontal Marquees */}
        <div className="hidden md:block space-y-8">
          {/* First Bar - Left to Right */}
          <div className="relative w-full overflow-hidden rounded-lg bg-muted/30 py-4">
            <div className="flex w-max animate-marquee-left will-change-transform">
              <div className="flex gap-8 pr-8">
                {logos.map((logo, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center min-w-fit h-24 px-8 bg-muted border border-border rounded-lg hover:border-accent transition-colors duration-300 flex-shrink-0"
                  >
                    <div className="text-center">
                      <div
                        className="text-3xl font-bold mb-2"
                        style={{ color: logo.color }}
                      >
                        {logo.name.charAt(0)}
                      </div>
                      <p className="text-sm text-muted-foreground">{logo.name}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-8 pr-8">
                {logos.map((logo, idx) => (
                  <div
                    key={`duplicate-${idx}`}
                    className="flex items-center justify-center min-w-fit h-24 px-8 bg-muted border border-border rounded-lg hover:border-accent transition-colors duration-300 flex-shrink-0"
                  >
                    <div className="text-center">
                      <div
                        className="text-3xl font-bold mb-2"
                        style={{ color: logo.color }}
                      >
                        {logo.name.charAt(0)}
                      </div>
                      <p className="text-sm text-muted-foreground">{logo.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second Bar - Right to Left */}
          <div className="relative w-full overflow-hidden rounded-lg bg-muted/30 py-4">
            <div className="flex w-max animate-marquee-right will-change-transform">
              <div className="flex gap-8 pr-8">
                {logos.map((logo, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center min-w-fit h-24 px-8 bg-muted border border-border rounded-lg hover:border-accent transition-colors duration-300 flex-shrink-0"
                  >
                    <div className="text-center">
                      <div
                        className="text-3xl font-bold mb-2"
                        style={{ color: logo.color }}
                      >
                        {logo.name.charAt(0)}
                      </div>
                      <p className="text-sm text-muted-foreground">{logo.name}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-8 pr-8">
                {logos.map((logo, idx) => (
                  <div
                    key={`duplicate-${idx}`}
                    className="flex items-center justify-center min-w-fit h-24 px-8 bg-muted border border-border rounded-lg hover:border-accent transition-colors duration-300 flex-shrink-0"
                  >
                    <div className="text-center">
                      <div
                        className="text-3xl font-bold mb-2"
                        style={{ color: logo.color }}
                      >
                        {logo.name.charAt(0)}
                      </div>
                      <p className="text-sm text-muted-foreground">{logo.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View - Vertical Marquees */}
        <div className="md:hidden flex gap-4">
          {/* First Bar - Top to Bottom */}
          <div className="flex-1">
            <div className="relative h-96 w-full overflow-hidden rounded-lg bg-muted/30">
              <div className="flex flex-col h-max animate-marquee-vertical will-change-transform">
                <div className="flex flex-col gap-4 pb-4">
                  {logos.map((logo, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center w-full h-16 px-4 bg-muted border border-border rounded-lg hover:border-accent transition-colors duration-300 flex-shrink-0"
                    >
                      <div className="text-center flex items-center gap-2">
                        <div
                          className="text-2xl font-bold"
                          style={{ color: logo.color }}
                        >
                          {logo.name.charAt(0)}
                        </div>
                        <p className="text-xs text-muted-foreground">{logo.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-4 pb-4">
                  {logos.map((logo, idx) => (
                    <div
                      key={`duplicate-${idx}`}
                      className="flex items-center justify-center w-full h-16 px-4 bg-muted border border-border rounded-lg hover:border-accent transition-colors duration-300 flex-shrink-0"
                    >
                      <div className="text-center flex items-center gap-2">
                        <div
                          className="text-2xl font-bold"
                          style={{ color: logo.color }}
                        >
                          {logo.name.charAt(0)}
                        </div>
                        <p className="text-xs text-muted-foreground">{logo.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Second Bar - Bottom to Top */}
          <div className="flex-1">
            <div className="relative h-96 w-full overflow-hidden rounded-lg bg-muted/30">
              <div className="flex flex-col h-max animate-marquee-vertical-reverse will-change-transform">
                <div className="flex flex-col gap-4 pb-4">
                  {logos.map((logo, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center w-full h-16 px-4 bg-muted border border-border rounded-lg hover:border-accent transition-colors duration-300 flex-shrink-0"
                    >
                      <div className="text-center flex items-center gap-2">
                        <div
                          className="text-2xl font-bold"
                          style={{ color: logo.color }}
                        >
                          {logo.name.charAt(0)}
                        </div>
                        <p className="text-xs text-muted-foreground">{logo.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-4 pb-4">
                  {logos.map((logo, idx) => (
                    <div
                      key={`duplicate-${idx}`}
                      className="flex items-center justify-center w-full h-16 px-4 bg-muted border border-border rounded-lg hover:border-accent transition-colors duration-300 flex-shrink-0"
                    >
                      <div className="text-center flex items-center gap-2">
                        <div
                          className="text-2xl font-bold"
                          style={{ color: logo.color }}
                        >
                          {logo.name.charAt(0)}
                        </div>
                        <p className="text-xs text-muted-foreground">{logo.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
