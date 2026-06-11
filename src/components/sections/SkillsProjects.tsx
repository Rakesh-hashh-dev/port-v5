import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export function SkillsProjects() {
  const { ref: skillsRef, isVisible: skillsVisible } = useIntersectionObserver();
  const { ref: projectsRef, isVisible: projectsVisible } = useIntersectionObserver();

  return (
    <>
      <section 
        id="skills" 
        ref={skillsRef}
        className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-xl flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative z-10 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
        }`}
      >
        <div className="lg:w-1/2 space-y-8">
          <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 px-4 py-2 rounded-full backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#d3bbff] animate-pulse"></span>
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">Core Capabilities</span>
          </div>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            Multidimensional <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Skill Architecture</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            A synthesis of high-end analytical rigor and creative technicality. Operating at the intersection of strategic business management and digital craftsmanship to deliver compound value.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="font-label-sm text-label-sm px-4 py-2 rounded-full border border-outline-variant bg-surface-container text-on-surface-variant hover:border-primary hover:text-primary transition-colors cursor-default">MBA Frameworks</span>
            <span className="font-label-sm text-label-sm px-4 py-2 rounded-full border border-outline-variant bg-surface-container text-on-surface-variant hover:border-primary hover:text-primary transition-colors cursor-default">Data Visualization</span>
            <span className="font-label-sm text-label-sm px-4 py-2 rounded-full border border-outline-variant bg-surface-container text-on-surface-variant hover:border-primary hover:text-primary transition-colors cursor-default">Agile Delivery</span>
          </div>
        </div>

        <div className="lg:w-1/2 w-full h-[500px] flex justify-center items-center">
          <div className="orbit-container">
            <div className="orbit-core">
              <span className="material-symbols-outlined text-[48px] text-on-primary">token</span>
            </div>
            
            <div className="orbit-ring orbit-ring-1">
              <div className="orbit-item ring-1-item-1">
                <div className="orbit-item-content font-label-sm text-label-sm text-primary uppercase">Strategy</div>
              </div>
              <div className="orbit-item ring-1-item-2">
                <div className="orbit-item-content font-label-sm text-label-sm text-secondary uppercase">Operations</div>
              </div>
            </div>
            
            <div className="orbit-ring orbit-ring-2">
              <div className="orbit-item ring-2-item-1">
                <div className="orbit-item-content font-label-sm text-label-sm text-tertiary-fixed uppercase">Analytics</div>
              </div>
              <div className="orbit-item ring-2-item-2">
                <div className="orbit-item-content font-label-sm text-label-sm text-primary-fixed uppercase">Leadership</div>
              </div>
            </div>
            
            <div className="orbit-ring orbit-ring-3">
              <div className="orbit-item ring-3-item-1">
                <div className="orbit-item-content font-label-sm text-label-sm text-on-primary-container border-secondary/40 uppercase">Product Mgmt</div>
              </div>
              <div className="orbit-item ring-3-item-2">
                <div className="orbit-item-content font-label-sm text-label-sm text-surface-tint border-primary/40 uppercase">Photography</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        id="projects" 
        ref={projectsRef}
        className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-xl relative z-10 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
        }`}
      >
        <div className="mb-12 flex justify-between items-end">
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Featured Endeavors</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">A curated selection of strategic and creative implementations.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 font-label-sm text-label-sm text-primary hover:text-primary-fixed transition-colors group">
            VIEW ALL
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>

        <div className="bento-grid">
          {/* Main Large Card */}
          <div className="bento-item glass-panel col-span-12 lg:col-span-8 row-span-2 group cursor-pointer">
            <div className="bento-img-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop')" }}></div>
            <div className="bento-overlay"></div>
            <div className="absolute top-6 right-6 z-10">
              <span className="font-label-sm text-label-sm px-3 py-1 rounded-full bg-surface-container-high/80 text-secondary border border-secondary/20 backdrop-blur-md">MBA Capstone</span>
            </div>
            <div className="bento-content">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Global Market Penetration Strategy</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mb-6">Comprehensive analysis and go-to-market framework developed for a Series B fintech startup, resulting in a streamlined expansion roadmap across EMEA regions.</p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 border-l-2 border-primary pl-3">
                  <span className="font-display-hero text-[24px] font-bold text-on-surface">32%</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">Projected<br/>Growth</span>
                </div>
              </div>
            </div>
          </div>

          {/* Small Top Right Card */}
          <div className="bento-item glass-panel col-span-12 md:col-span-6 lg:col-span-4 row-span-1 group cursor-pointer">
            <div className="bento-img-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop')", filter: "grayscale(100%) contrast(1.2) brightness(0.5)" }}></div>
            <div className="bento-overlay"></div>
            <div className="bento-content !p-6">
              <span className="font-label-sm text-label-sm text-primary mb-2 block uppercase">Business Analysis</span>
              <h3 className="font-body-lg text-body-lg font-bold text-on-surface mb-2">Operational Efficiency Audit</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm line-clamp-2">Data-driven optimization of supply chain logistics utilizing predictive modeling.</p>
            </div>
          </div>

          {/* Small Bottom Right Card */}
          <div className="bento-item glass-panel col-span-12 md:col-span-6 lg:col-span-4 row-span-1 group cursor-pointer">
            <div className="bento-img-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop')" }}></div>
            <div className="bento-overlay"></div>
            <div className="bento-content !p-6">
              <span className="font-label-sm text-label-sm text-primary-fixed mb-2 block uppercase">Photography</span>
              <h3 className="font-body-lg text-body-lg font-bold text-on-surface mb-2">Urban Brutalism Series</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm line-clamp-2">A visual study of geometric concrete structures and light interplay in metropolitan environments.</p>
            </div>
          </div>

          {/* Wide Bottom Card */}
          <div className="bento-item glass-panel col-span-12 row-span-1 group cursor-pointer flex items-center overflow-hidden h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-surface-dim to-transparent z-10 w-2/3"></div>
            <div className="bento-img-bg bg-right" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop')" }}></div>
            <div className="bento-overlay !bg-none !bg-black/40"></div>
            <div className="relative z-20 p-8 md:p-12 w-full md:w-1/2">
              <span className="font-label-sm text-label-sm px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 backdrop-blur-md inline-block mb-4 uppercase">Web Architecture</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">SaaS Platform Redesign</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">End-to-end UX/UI overhaul for a B2B analytics dashboard, increasing user retention by 40% through cognitive load reduction and streamlined workflows.</p>
              <div className="flex items-center gap-2 text-primary font-label-sm text-label-sm group-hover:translate-x-2 transition-transform duration-300">
                  Explore Case Study <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
