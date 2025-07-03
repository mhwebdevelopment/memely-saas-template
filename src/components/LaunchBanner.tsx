import { Calendar, Rocket, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function LaunchBanner() {
  const containerRef = useScrollAnimation();

  return (
    <section ref={containerRef} className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 grid-bg-large">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-gradient-to-r from-emerald-400/20 to-emerald-500/20 border border-emerald-400/30 rounded-2xl p-4 sm:p-6 lg:p-8 fade-in-up">
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 items-center">
            <div className="fade-in-left stagger-1">
              <div className="flex items-center mb-3">
                <Rocket className="w-5 h-5 text-emerald-400 mr-2" />
                <span className="text-emerald-600 font-semibold text-sm">Launch Timeline</span>
              </div>
              
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-custom-gray-800 mb-3">
                Beta Launch:{' '}
                <span className="text-emerald-400">March 2025</span>
              </h2>
              
              <p className="text-base sm:text-lg text-custom-gray-700 mb-4">
                Join 500+ early adopters already generating viral content. 
                Limited beta access available with exclusive pricing.
              </p>
              
              <div className="space-y-2 mb-4 sm:mb-6">
                <div className="flex items-center text-custom-gray-700">
                  <Calendar className="w-4 h-4 text-emerald-400 mr-2" />
                  <span className="text-sm">Beta testing: January 2025</span>
                </div>
                <div className="flex items-center text-custom-gray-700">
                  <Users className="w-4 h-4 text-emerald-400 mr-2" />
                  <span className="text-sm">Public launch: March 2025</span>
                </div>
                <div className="flex items-center text-custom-gray-700">
                  <Rocket className="w-4 h-4 text-emerald-400 mr-2" />
                  <span className="text-sm">Enterprise features: Q2 2025</span>
                </div>
              </div>
            </div>
            
            <div className="bg-custom-gray-50 border border-custom-gray-200 rounded-lg p-4 sm:p-5 lg:p-6 fade-in-right stagger-2">
              <h3 className="text-lg sm:text-xl font-bold text-custom-gray-800 mb-3">Early Access Benefits</h3>
              
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-custom-gray-700">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                  <span className="text-sm">50% off first year pricing</span>
                </li>
                <li className="flex items-center text-custom-gray-700">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                  <span className="text-sm">Priority feature requests</span>
                </li>
                <li className="flex items-center text-custom-gray-700">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                  <span className="text-sm">Dedicated onboarding support</span>
                </li>
                <li className="flex items-center text-custom-gray-700">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                  <span className="text-sm">Lifetime grandfathered pricing</span>
                </li>
              </ul>
              
              <Button className="w-full bg-emerald-400 hover:bg-emerald-500 text-custom-gray-800 text-base py-2 hover-lift">
                Secure Early Access
              </Button>
              
              <p className="text-xs text-custom-gray-500 text-center mt-2">
                Limited to first 1,000 signups • No credit card required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}