import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CheckCircle, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Email validation utility
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Sanitize email input
const sanitizeEmail = (email: string): string => {
  return email.trim().toLowerCase();
};

export function WaitlistBanner() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const containerRef = useScrollAnimation();

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedEmail = sanitizeEmail(e.target.value);
    setEmail(sanitizedEmail);
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    const sanitizedEmail = sanitizeEmail(email);
    
    if (!sanitizedEmail) {
      toast.error('Please enter your email address');
      return;
    }
    
    if (!isValidEmail(sanitizedEmail)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      toast.success('Successfully joined the waitlist!');
      setEmail('');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
      console.error('Waitlist submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [email, isSubmitting]);

  return (
    <section ref={containerRef} className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-custom-gray-200 to-custom-gray-100 graph-web-bg">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-custom-gray-800 mb-4 sm:mb-6 fade-in-up">
            Ready to{' '}
            <span className="text-emerald-400">Automate</span>{' '}
            Your Content?
          </h2>
          <p className="text-lg sm:text-xl text-custom-gray-600 max-w-2xl mx-auto px-4 fade-in-up stagger-1">
            Join thousands of creators and businesses already saving 95% of their time 
            with AI-powered meme marketing automation.
          </p>
        </div>
        
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6 sm:mb-8 fade-in-up stagger-2" noValidate>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-custom-gray-500 pointer-events-none" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  className="pl-10 bg-custom-gray-50 border-custom-gray-300 text-custom-gray-800 placeholder:text-custom-gray-500 h-12"
                  required
                  disabled={isSubmitting}
                  autoComplete="email"
                  aria-label="Email address"
                />
              </div>
              <Button 
                type="submit" 
                className="bg-emerald-400 hover:bg-emerald-500 text-custom-gray-800 h-12 px-6 w-full sm:w-auto hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting || !email.trim()}
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4" />}
              </Button>
            </div>
          </form>
        ) : (
          <div className="max-w-md mx-auto mb-6 sm:mb-8 bg-emerald-400/10 border border-emerald-400/30 rounded-lg p-6 scale-in">
            <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-custom-gray-800 mb-2">You're on the list!</h3>
            <p className="text-custom-gray-600">
              We'll notify you as soon as early access opens. Expect big things!
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="text-center fade-in-up stagger-3">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-2">500+</div>
            <div className="text-custom-gray-600 text-sm sm:text-base">Beta Users</div>
          </div>
          <div className="text-center fade-in-up stagger-4">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-2">10K+</div>
            <div className="text-custom-gray-600 text-sm sm:text-base">Videos Generated</div>
          </div>
          <div className="text-center fade-in-up stagger-5">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-2">84%</div>
            <div className="text-custom-gray-600 text-sm sm:text-base">Cost Savings</div>
          </div>
        </div>
        
        <div className="border-t border-custom-gray-300 pt-6 sm:pt-8 fade-in-up stagger-6">
          <p className="text-sm text-custom-gray-500 mb-4">
            Trusted by marketing teams at leading companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 opacity-50">
            <div className="text-custom-gray-400 font-bold text-sm sm:text-base">SHOPIFY</div>
            <div className="text-custom-gray-400 font-bold text-sm sm:text-base">HUBSPOT</div>
            <div className="text-custom-gray-400 font-bold text-sm sm:text-base">CANVA</div>
            <div className="text-custom-gray-400 font-bold text-sm sm:text-base">BUFFER</div>
          </div>
        </div>
      </div>
    </section>
  );
}