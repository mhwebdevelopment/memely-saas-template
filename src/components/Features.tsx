import { Zap, Brain, Calendar, BarChart3, Globe, Shield } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const features = [
  {
    icon: Brain,
    title: 'AI Content Generation',
    description: 'Smart captions, hooks, and GIF selection powered by OpenAI and trending data analysis.'
  },
  {
    icon: Zap,
    title: 'Instant Video Assembly',
    description: 'FFmpeg-powered rendering with GPU acceleration. Videos ready in under 30 seconds.'
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'Buffer API integration for TikTok, Instagram, Facebook, and YouTube Shorts automation.'
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Track engagement rates, view-through rates, and follower growth across all platforms.'
  },
  {
    icon: Globe,
    title: 'Trending Audio Library',
    description: 'Weekly-updated database of viral audio clips optimized for 7s and 15s videos.'
  },
  {
    icon: Shield,
    title: 'User API Keys',
    description: 'Use your own OpenAI, GIPHY, and Buffer keys for complete control and cost optimization.'
  }
];

export function Features() {
  const containerRef = useScrollAnimation();

  return (
    <section ref={containerRef} id="features" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-custom-gray-100 grid-bg">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-custom-gray-800 mb-3 sm:mb-4 fade-in-up">
            Everything You Need to{' '}
            <span className="text-emerald-400">Go Viral</span>
          </h2>
          <p className="text-lg sm:text-xl text-custom-gray-600 max-w-3xl mx-auto px-4 fade-in-up stagger-1">
            From content ideation to cross-platform publishing, our AI handles the entire 
            meme marketing pipeline so you can focus on growing your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group bg-custom-gray-50 border border-custom-gray-200 rounded-lg p-3 sm:p-4 hover:border-emerald-400/50 transition-all duration-300 hover:bg-white hover-lift fade-in-up stagger-${index % 3 + 2}`}
            >
              <div className="w-10 h-10 bg-emerald-400/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-emerald-400/20 transition-colors">
                <feature.icon className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-custom-gray-800 mb-2">{feature.title}</h3>
              <p className="text-custom-gray-600 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-12 fade-in-up stagger-6">
          <div className="inline-flex flex-col sm:flex-row items-center bg-custom-gray-50 border border-custom-gray-200 rounded-full px-4 sm:px-5 py-2 gap-2 sm:gap-0">
            <span className="text-sm text-custom-gray-600 sm:mr-3">Ready to automate your content?</span>
            <button className="text-emerald-400 hover:text-emerald-500 font-medium text-sm">
              Schedule a Demo →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}