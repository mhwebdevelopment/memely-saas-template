import { Zap, Twitter, Linkedin, Github, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState, useCallback } from 'react';
import { toast } from 'sonner';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast.error('Please enter your email address');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Successfully subscribed to newsletter!');
      setEmail('');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }, [email]);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  const handleExternalLink = useCallback((url: string) => {
    // For now, these are placeholder links - replace with actual URLs when ready
    console.log(`Navigate to: ${url}`);
  }, []);

  return (
    <footer className="bg-custom-gray-100 border-t border-custom-gray-200">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-emerald-400 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-custom-gray-800" />
                </div>
                <span className="text-xl font-bold text-custom-gray-800">memely.ai</span>
              </div>
              <p className="text-custom-gray-600 mb-6 text-sm leading-relaxed">
                AI-powered meme marketing automation that saves 95% of your time and 84% of your costs. 
                Generate viral content for TikTok, Instagram, and YouTube automatically.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <button
                  onClick={() => handleExternalLink('https://twitter.com/memelyai')}
                  className="w-9 h-9 bg-custom-gray-200 hover:bg-emerald-400 rounded-lg flex items-center justify-center transition-colors group"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="w-4 h-4 text-custom-gray-600 group-hover:text-custom-gray-800" />
                </button>
                <button
                  onClick={() => handleExternalLink('https://linkedin.com/company/memelyai')}
                  className="w-9 h-9 bg-custom-gray-200 hover:bg-emerald-400 rounded-lg flex items-center justify-center transition-colors group"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-custom-gray-600 group-hover:text-custom-gray-800" />
                </button>
                <button
                  onClick={() => handleExternalLink('https://github.com/memelyai')}
                  className="w-9 h-9 bg-custom-gray-200 hover:bg-emerald-400 rounded-lg flex items-center justify-center transition-colors group"
                  aria-label="View our GitHub"
                >
                  <Github className="w-4 h-4 text-custom-gray-600 group-hover:text-custom-gray-800" />
                </button>
                <button
                  onClick={() => handleExternalLink('mailto:hello@memely.ai')}
                  className="w-9 h-9 bg-custom-gray-200 hover:bg-emerald-400 rounded-lg flex items-center justify-center transition-colors group"
                  aria-label="Send us an email"
                >
                  <Mail className="w-4 h-4 text-custom-gray-600 group-hover:text-custom-gray-800" />
                </button>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-sm font-semibold text-custom-gray-800 uppercase tracking-wider mb-4">
                Product
              </h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('features')}
                    className="text-custom-gray-600 hover:text-emerald-400 transition-colors text-sm"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('workflow')}
                    className="text-custom-gray-600 hover:text-emerald-400 transition-colors text-sm"
                  >
                    How it Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('pricing')}
                    className="text-custom-gray-600 hover:text-emerald-400 transition-colors text-sm"
                  >
                    Pricing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleExternalLink('/api')}
                    className="text-custom-gray-600 hover:text-emerald-400 transition-colors text-sm flex items-center"
                  >
                    API Access
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleExternalLink('/integrations')}
                    className="text-custom-gray-600 hover:text-emerald-400 transition-colors text-sm"
                  >
                    Integrations
                  </button>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-sm font-semibold text-custom-gray-800 uppercase tracking-wider mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => handleExternalLink('/blog')}
                    className="text-custom-gray-600 hover:text-emerald-400 transition-colors text-sm flex items-center"
                  >
                    Blog
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleExternalLink('/docs')}
                    className="text-custom-gray-600 hover:text-emerald-400 transition-colors text-sm flex items-center"
                  >
                    Documentation
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('faq')}
                    className="text-custom-gray-600 hover:text-emerald-400 transition-colors text-sm"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleExternalLink('/help')}
                    className="text-custom-gray-600 hover:text-emerald-400 transition-colors text-sm"
                  >
                    Help Center
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleExternalLink('/status')}
                    className="text-custom-gray-600 hover:text-emerald-400 transition-colors text-sm flex items-center"
                  >
                    System Status
                    <div className="w-2 h-2 bg-emerald-400 rounded-full ml-2"></div>
                  </button>
                </li>
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h3 className="text-sm font-semibold text-custom-gray-800 uppercase tracking-wider mb-4">
                Stay Updated
              </h3>
              <p className="text-custom-gray-600 text-sm mb-4">
                Get the latest updates on new features, AI improvements, and marketing tips.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-custom-gray-50 border-custom-gray-300 text-custom-gray-800 placeholder:text-custom-gray-500 text-sm"
                    disabled={isSubmitting}
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-emerald-400 hover:bg-emerald-500 text-custom-gray-800 text-sm py-2 disabled:opacity-50"
                  disabled={isSubmitting || !email.trim()}
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </form>
              
              <p className="text-xs text-custom-gray-500 mt-3">
                No spam. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-custom-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-sm text-custom-gray-500">
              © 2025 memely.ai. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <button
                onClick={() => handleExternalLink('/privacy')}
                className="text-sm text-custom-gray-500 hover:text-emerald-400 transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleExternalLink('/terms')}
                className="text-sm text-custom-gray-500 hover:text-emerald-400 transition-colors"
              >
                Terms of Service
              </button>
              <button
                onClick={() => handleExternalLink('/cookies')}
                className="text-sm text-custom-gray-500 hover:text-emerald-400 transition-colors"
              >
                Cookie Policy
              </button>
              <button
                onClick={() => handleExternalLink('/security')}
                className="text-sm text-custom-gray-500 hover:text-emerald-400 transition-colors"
              >
                Security
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}