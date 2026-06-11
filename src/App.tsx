import { useState, useEffect } from 'react';
import { ShaderBackground } from './components/backgrounds/ShaderBackground';
import { Navbar, Footer, GlowLayers, ScrollProgress, CustomCursor, BackToTop } from './components/layout/Layout';
import { HeroSection, ExperienceSection } from './components/sections/HeroExperience';
import { SkillsProjects } from './components/sections/SkillsProjects';
import { PhotographyContact } from './components/sections/PhotographyContact';

export default function App() {
  const [contentOpacity, setContentOpacity] = useState(1);

  useEffect(() => {
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      // Check if it's an internal link
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        const href = anchor.getAttribute('href');
        // Ignore '#', only intercept actual section links
        if (href === '#' || !href) return;
        
        e.preventDefault();
        const targetId = href.substring(1);
        
        // Trigger fade out
        setContentOpacity(0);
        
        setTimeout(() => {
          // Scroll to the element instantly while invisible
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'auto' });
          }
          
          // Trigger fade in
          setContentOpacity(1);
        }, 300);
      }
    };

    document.addEventListener('click', handleNavClick);
    return () => document.removeEventListener('click', handleNavClick);
  }, []);

  return (
    <div className="bg-background text-on-surface antialiased min-h-screen relative overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container cursor-default">
      <CustomCursor />
      <ScrollProgress />
      <BackToTop />
      <ShaderBackground />
      <GlowLayers />
      
      <Navbar />
      
      <div 
        className="pt-[140px] transition-opacity duration-300 ease-in-out"
        style={{ opacity: contentOpacity }}
      >
        <HeroSection />
        <ExperienceSection />
        <SkillsProjects />
        <PhotographyContact />
      </div>
      
      <Footer />
    </div>
  );
}
