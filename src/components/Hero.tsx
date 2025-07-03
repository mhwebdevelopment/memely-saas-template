import { Button } from '@/components/ui/button';
import { ArrowRight, Play, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function Hero() {
  const containerRef = useScrollAnimation();

  return (
    <section ref={containerRef} className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 graph-web-bg">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-custom-gray-100 border border-custom-gray-200 rounded-full px-4 py-2 mb-6 sm:mb-8 fade-in-up">
            <TrendingUp className="w-4 h-4 text-emerald-400 mr-2" />
            <span className="text-sm text-custom-gray-600">Save 99% on video production costs</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight fade-in-up stagger-1">
            <span className="text-custom-gray-800">AI-Powered</span>{' '}
            <span className="text-emerald-400">Meme Marketing</span>{' '}
            <span className="text-custom-gray-800">Videos</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-custom-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4 fade-in-up stagger-2">
            Automate viral meme video creation for TikTok, Instagram, and YouTube. 
            Generate trending content with AI, trending audio, and smart scheduling.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12 px-4 fade-in-up stagger-3">
            <Button size="lg" className="bg-emerald-400 hover:bg-emerald-500 text-custom-gray-800 text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto hover-lift">
              Schedule Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-custom-gray-300 text-custom-gray-700 hover:bg-custom-gray-100 text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto hover-lift">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="bg-custom-gray-100 border border-custom-gray-200 rounded-lg p-4 sm:p-6 fade-in-up stagger-4">
              <Clock className="w-6 sm:w-8 h-6 sm:h-8 text-emerald-400 mb-3 mx-auto" />
              <h3 className="text-xl sm:text-2xl font-bold text-custom-gray-800 mb-2">95% Time Saved</h3>
              <p className="text-custom-gray-600 text-sm sm:text-base">From hours to minutes per video</p>
            </div>
            
            <div className="bg-custom-gray-100 border border-custom-gray-200 rounded-lg p-4 sm:p-6 fade-in-up stagger-5">
              <DollarSign className="w-6 sm:w-8 h-6 sm:h-8 text-emerald-400 mb-3 mx-auto" />
              <h3 className="text-xl sm:text-2xl font-bold text-custom-gray-800 mb-2">$29/Month</h3>
              <p className="text-custom-gray-600 text-sm sm:text-base">vs $3000+ agency production</p>
            </div>
            
            <div className="bg-custom-gray-100 border border-custom-gray-200 rounded-lg p-4 sm:p-6 fade-in-up stagger-6">
              <TrendingUp className="w-6 sm:w-8 h-6 sm:h-8 text-emerald-400 mb-3 mx-auto" />
              <h3 className="text-xl sm:text-2xl font-bold text-custom-gray-800 mb-2">3x Engagement</h3>
              <p className="text-custom-gray-600 text-sm sm:text-base">AI-optimized for viral content</p>
            </div>
          </div>
        </div>
        
        <div className="relative max-w-5xl mx-auto fade-in-up stagger-6">
          <div className="bg-gradient-to-r from-emerald-400/20 to-blue-500/20 rounded-2xl p-1">
            <div className="bg-custom-gray-100 rounded-xl p-6 sm:p-8">
              <div className="aspect-video bg-custom-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-12 sm:w-16 h-12 sm:h-16 text-emerald-400 mx-auto mb-4" />
                  <p className="text-custom-gray-600">Demo Video Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}