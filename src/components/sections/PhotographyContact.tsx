import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export function PhotographyContact() {
  const { ref: photoRef, isVisible: photoVisible } = useIntersectionObserver();
  const { ref: achieveRef, isVisible: achieveVisible } = useIntersectionObserver();
  const { ref: contactRef, isVisible: contactVisible } = useIntersectionObserver();

  return (
    <>
      <section 
        id="photography" 
        ref={photoRef}
        className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-xl flex flex-col gap-stack-md transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          photoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
        }`}
      >
        <div>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">Captured Moments</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">A curated visual journal exploring the intersection of light, architecture, and fleeting human experiences in urban landscapes.</p>
        </div>
        
        <div className="masonry-grid">
          <div className="masonry-item tall glass-panel">
            <img alt="Cyberpunk city" src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=600&auto=format&fit=crop" />
            <div className="photo-overlay">
              <div>
                <span className="font-label-sm text-label-sm text-primary mb-2 block">TOKYO, JP</span>
                <h3 className="font-headline-md text-headline-md text-white">Neon Canopy</h3>
              </div>
            </div>
          </div>
          
          <div className="masonry-item wide glass-panel">
            <img alt="Modern architecture" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop" />
            <div className="photo-overlay">
              <div>
                <span className="font-label-sm text-label-sm text-primary mb-2 block">BERLIN, DE</span>
                <h3 className="font-headline-md text-headline-md text-white">Brutalist Geometry</h3>
              </div>
            </div>
          </div>
          
          <div className="masonry-item glass-panel">
            <img alt="Data streams" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop" />
            <div className="photo-overlay">
              <div>
                <span className="font-label-sm text-label-sm text-primary mb-2 block">SAN FRANCISCO, CA</span>
                <h3 className="font-headline-md text-headline-md text-white">Data Streams</h3>
              </div>
            </div>
          </div>
          
          <div className="masonry-item tall glass-panel">
            <img alt="Iceland Horizons" src="https://images.unsplash.com/photo-1470770903672-7cda0ceddf79?q=80&w=600&auto=format&fit=crop" />
            <div className="photo-overlay">
              <div>
                <span className="font-label-sm text-label-sm text-primary mb-2 block">ICELAND</span>
                <h3 className="font-headline-md text-headline-md text-white">Void Horizons</h3>
              </div>
            </div>
          </div>
          
          <div className="masonry-item glass-panel">
            <img alt="Global Nodes" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop" />
            <div className="photo-overlay">
              <div>
                <span className="font-label-sm text-label-sm text-primary mb-2 block">ORBIT</span>
                <h3 className="font-headline-md text-headline-md text-white">Global Nodes</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        id="achievements" 
        ref={achieveRef}
        className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-xl flex flex-col gap-stack-md transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          achieveVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
        }`}
      >
        <div>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">Milestones & Metrics</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Quantifiable impact and recognized excellence across technical and strategic domains.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="glass-panel rounded-xl p-8 relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="font-display-hero text-display-hero text-on-surface mb-2 tracking-tighter">99<span className="text-primary">%</span></div>
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-4">System Uptime</div>
            <p className="font-body-md text-body-md text-on-surface-variant/70">Engineered fault-tolerant microservices architecture handling 10M+ daily requests.</p>
          </div>
          
          <div className="glass-panel rounded-xl p-8 relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="font-display-hero text-display-hero text-on-surface mb-2 tracking-tighter">1.2<span className="text-secondary">M</span></div>
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-4">Active Users</div>
            <p className="font-body-md text-body-md text-on-surface-variant/70">Scaled primary consumer application userbase through targeted UX optimizations.</p>
          </div>
          
          <div className="glass-panel rounded-xl p-8 flex flex-col items-center justify-center text-center relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
            <span className="material-symbols-outlined text-display-hero text-primary mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Awwwards</h3>
            <div className="font-label-sm text-label-sm text-secondary px-3 py-1 bg-secondary-container/20 rounded-full border border-secondary/30 inline-block">Site of the Day</div>
          </div>
        </div>
      </section>

      <section 
        id="contact" 
        ref={contactRef}
        className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-xl grid grid-cols-1 md:grid-cols-2 gap-stack-md transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
        }`}
      >
        <div className="flex flex-col justify-center">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">Initiate Protocol</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-md">Open for strategic consulting and high-impact technical collaborations. Leave a signal.</p>
          
          <form className="space-y-6 max-w-md" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <input type="text" id="name" className="input-minimal font-body-md text-body-md" placeholder="Identification (Name)" />
            </div>
            <div className="relative">
              <input type="email" id="email" className="input-minimal font-body-md text-body-md" placeholder="Comms Channel (Email)" />
            </div>
            <div className="relative">
              <textarea id="message" rows={4} className="input-minimal font-body-md text-body-md resize-none" placeholder="Encrypted Message (Details)"></textarea>
            </div>
            <button type="submit" className="w-full bg-surface-container-high text-on-surface border border-outline-variant/50 hover:bg-white/5 hover:border-primary/50 transition-all duration-300 py-4 rounded-lg font-label-sm tracking-widest flex items-center justify-center gap-2 group">
              TRANSMIT
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </form>
          
          <div className="flex gap-4 mt-12">
            {['link', 'mail', 'photo_camera', 'code'].map((iconName) => (
              <a key={iconName} href="#" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-primary hover:-translate-y-1 transition-all duration-300">
                <span className="material-symbols-outlined">{iconName}</span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="relative h-[500px] rounded-xl overflow-hidden glass-panel group">
          <div className="absolute inset-0 bg-surface/80 mix-blend-multiply z-10 pointer-events-none group-hover:bg-surface/60 transition-colors duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10 pointer-events-none"></div>
          <img alt="Map" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover filter grayscale contrast-150" />
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
            <div className="relative flex h-4 w-4 mb-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-secondary"></span>
            </div>
            <span className="font-label-sm text-label-sm text-white bg-surface-container-high/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 uppercase">BASE: TOKYO</span>
          </div>
        </div>
      </section>
    </>
  );
}
