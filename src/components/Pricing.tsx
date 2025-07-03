import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Zap, Crown, Building, Rocket } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const plans = [
  {
    name: 'Creator',
    price: 29,
    annual: 24,
    icon: Zap,
    description: 'Perfect for individual creators and small businesses',
    videos: 30,
    features: [
      '30 videos per month',
      'AI content generation',
      'Basic trending audio library',
      '3 social platforms',
      'Email support',
      'Basic analytics'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: 79,
    annual: 64,
    icon: Crown,
    description: 'Ideal for marketing agencies and growing businesses',
    videos: 120,
    features: [
      '120 videos per month',
      'Advanced AI optimization',
      'Full trending audio library',
      'All social platforms',
      'Priority support',
      'Advanced analytics',
      'Custom branding removal',
      'Bulk scheduling'
    ],
    popular: true
  },
  {
    name: 'Business',
    price: 149,
    annual: 119,
    icon: Building,
    description: 'For marketing teams and agencies',
    videos: 400,
    features: [
      '400 videos per month',
      'Premium AI models',
      'Custom audio uploads',
      'White-label options',
      'API access',
      'Dedicated support',
      'Team collaboration',
      'Custom integrations'
    ],
    popular: false
  },
  {
    name: 'Enterprise',
    price: 299,
    annual: 239,
    icon: Rocket,
    description: 'For large enterprises with custom needs',
    videos: 1000,
    features: [
      '1000+ videos per month',
      'Custom AI training',
      'Enterprise integrations',
      'On-premise deployment',
      '24/7 phone support',
      'Custom SLA',
      'Advanced security',
      'Custom development'
    ],
    popular: false
  }
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const containerRef = useScrollAnimation();

  return (
    <section ref={containerRef} id="pricing" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 graph-web-bg">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-custom-gray-800 mb-4 sm:mb-6 fade-in-up">
            Simple, Transparent{' '}
            <span className="text-emerald-400">Pricing</span>
          </h2>
          <p className="text-lg sm:text-xl text-custom-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 fade-in-up stagger-1">
            Choose the plan that fits your content volume. All plans include AI generation, 
            trending audio, and cross-platform publishing. No hidden fees.
          </p>
          
          <div className="inline-flex items-center bg-custom-gray-100 border border-custom-gray-200 rounded-lg p-1 fade-in-up stagger-2">
            <button 
              onClick={() => setIsAnnual(false)}
              className={`px-3 sm:px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                !isAnnual 
                  ? 'bg-emerald-400 text-custom-gray-800 shadow-sm' 
                  : 'text-custom-gray-600 hover:text-custom-gray-800'
              }`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              className={`px-3 sm:px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isAnnual 
                  ? 'bg-emerald-400 text-custom-gray-800 shadow-sm' 
                  : 'text-custom-gray-600 hover:text-custom-gray-800'
              }`}
            >
              Annual (Save 20%)
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-custom-gray-100 border rounded-lg p-6 sm:p-8 hover:border-emerald-400/50 transition-all duration-300 hover-lift fade-in-up stagger-${index + 3} ${
                plan.popular 
                  ? 'border-emerald-400 ring-1 ring-emerald-400/20 lg:scale-105' 
                  : 'border-custom-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-emerald-400 text-custom-gray-800 text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-12 h-12 bg-emerald-400/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-custom-gray-800 mb-2">{plan.name}</h3>
                <p className="text-custom-gray-600 text-sm mb-4 sm:mb-6 px-2">{plan.description}</p>
                
                <div className="mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl font-bold text-custom-gray-800">
                    ${isAnnual ? plan.annual : plan.price}
                  </span>
                  <span className="text-custom-gray-600">/month</span>
                  {isAnnual && (
                    <div className="text-sm text-custom-gray-500 mt-1">
                      ${plan.annual * 12}/year (save ${(plan.price - plan.annual) * 12})
                    </div>
                  )}
                  {!isAnnual && (
                    <div className="text-sm text-custom-gray-500 mt-1">
                      ${plan.annual}/month billed annually
                    </div>
                  )}
                </div>
                
                <div className="text-sm text-custom-gray-600 mb-4 sm:mb-6">
                  {plan.videos} videos • ${((isAnnual ? plan.annual : plan.price) / plan.videos).toFixed(2)} per video
                </div>
              </div>
              
              <ul className="space-y-3 mb-6 sm:mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-sm">
                    <Check className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-custom-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full hover-lift ${
                  plan.popular 
                    ? 'bg-emerald-400 hover:bg-emerald-500 text-custom-gray-800' 
                    : 'bg-custom-gray-200 hover:bg-custom-gray-300 text-custom-gray-800'
                }`}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 sm:mt-16 fade-in-up stagger-6">
          <div className="bg-custom-gray-100 border border-custom-gray-200 rounded-lg p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-custom-gray-800 mb-4">
              All Plans Include
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm text-custom-gray-600">
              <div className="flex items-center">
                <Check className="w-4 h-4 text-emerald-400 mr-2" />
                14-day free trial
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-emerald-400 mr-2" />
                Cancel anytime
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-emerald-400 mr-2" />
                99.9% uptime SLA
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-emerald-400 mr-2" />
                SOC 2 compliant
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}