import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const handleExternalLink = useCallback((url: string) => {
    // For now, these are placeholder links - replace with actual URLs when ready
    console.log(`Navigate to: ${url}`);
    setIsMenuOpen(false);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full bg-custom-gray-50/95 backdrop-blur-md border-b border-custom-gray-200 z-50">
        <div className="w-full px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 max-w-7xl mx-auto">
            {/* Logo - Tighter spacing between icon and text */}
            <div className="flex items-center space-x-1.5 flex-shrink-0 min-w-0">
              <div className="w-8 h-8 bg-emerald-400 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-custom-gray-800" />
              </div>
              <span className="text-xl font-bold text-custom-gray-800 whitespace-nowrap">
                memely.ai
              </span>
            </div>
            
            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 flex-shrink-0">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-custom-gray-600 hover:text-custom-gray-800 transition-colors whitespace-nowrap text-sm lg:text-base"
                type="button"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('workflow')}
                className="text-custom-gray-600 hover:text-custom-gray-800 transition-colors whitespace-nowrap text-sm lg:text-base"
                type="button"
              >
                How it Works
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-custom-gray-600 hover:text-custom-gray-800 transition-colors whitespace-nowrap text-sm lg:text-base"
                type="button"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-custom-gray-600 hover:text-custom-gray-800 transition-colors whitespace-nowrap text-sm lg:text-base"
                type="button"
              >
                FAQ
              </button>
              <button 
                onClick={() => handleExternalLink('/blog')}
                className="text-custom-gray-600 hover:text-custom-gray-800 transition-colors whitespace-nowrap text-sm lg:text-base"
                type="button"
              >
                Blog
              </button>
              <button 
                onClick={() => handleExternalLink('/docs')}
                className="text-custom-gray-600 hover:text-custom-gray-800 transition-colors whitespace-nowrap text-sm lg:text-base"
                type="button"
              >
                Docs
              </button>
            </nav>
            
            {/* Desktop CTA Buttons - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-3 lg:space-x-4 flex-shrink-0">
              <Button 
                variant="outline" 
                className="border-custom-gray-300 text-custom-gray-700 hover:bg-custom-gray-100 whitespace-nowrap text-sm px-3 lg:px-4"
                type="button"
              >
                Schedule Demo
              </Button>
              <Button 
                className="bg-emerald-400 hover:bg-emerald-500 text-custom-gray-800 whitespace-nowrap text-sm px-3 lg:px-4"
                type="button"
              >
                Join Waitlist
              </Button>
            </div>
            
            {/* Mobile Menu Button - Properly positioned with margin */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-md transition-colors hover:bg-custom-gray-100 focus:bg-emerald-400/20 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 active:bg-emerald-400/30 flex-shrink-0 ml-4"
              onClick={toggleMenu}
              type="button"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-custom-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-custom-gray-800" />
              )}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu - ANIMATED: Smooth slide down with proper z-index */}
      <div 
        className={`md:hidden fixed inset-x-0 top-16 bg-custom-gray-50/98 backdrop-blur-md border-b border-custom-gray-200 shadow-lg z-40 transition-all duration-300 ease-out ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="max-w-7xl mx-auto py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-custom-gray-600 hover:text-custom-gray-800 transition-colors py-2 text-left"
              type="button"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('workflow')}
              className="text-custom-gray-600 hover:text-custom-gray-800 transition-colors py-2 text-left"
              type="button"
            >
              How it Works
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-custom-gray-600 hover:text-custom-gray-800 transition-colors py-2 text-left"
              type="button"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-custom-gray-600 hover:text-custom-gray-800 transition-colors py-2 text-left"
              type="button"
            >
              FAQ
            </button>
            <button 
              onClick={() => handleExternalLink('/blog')}
              className="text-custom-gray-600 hover:text-custom-gray-800 transition-colors py-2 text-left"
              type="button"
            >
              Blog
            </button>
            <button 
              onClick={() => handleExternalLink('/docs')}
              className="text-custom-gray-600 hover:text-custom-gray-800 transition-colors py-2 text-left"
              type="button"
            >
              Docs
            </button>
            <div className="flex flex-col space-y-3 pt-4 border-t border-custom-gray-200">
              <Button 
                variant="outline" 
                className="border-custom-gray-300 text-custom-gray-700 hover:bg-custom-gray-100 w-full"
                type="button"
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule Demo
              </Button>
              <Button 
                className="bg-emerald-400 hover:bg-emerald-500 text-custom-gray-800 w-full"
                type="button"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Waitlist
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}