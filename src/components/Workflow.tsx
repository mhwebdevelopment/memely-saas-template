import { Upload, Brain, Video, Calendar, BarChart3, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Product Input',
    description: 'Upload product info, images, or website URL. Our AI extracts key selling points.',
    details: 'Website scraping, asset processing, metadata extraction'
  },
  {
    number: '02',
    icon: Calendar,
    title: 'Schedule Setup',
    description: 'Set posting frequency and platform preferences. Automated scheduling begins.',
    details: 'Cron jobs, Redis queuing, Buffer integration'
  },
  {
    number: '03',
    icon: Brain,
    title: 'AI Generation',
    description: 'OpenAI creates viral captions, hooks, and selects matching GIFs automatically.',
    details: 'GPT-4 content generation, GIPHY API integration'
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Quality Check',
    description: 'Content stored in database to prevent repeats. Performance tracking enabled.',
    details: 'PostgreSQL deduplication, analytics setup'
  },
  {
    number: '05',
    icon: Video,
    title: 'Video Assembly',
    description: 'FFmpeg compiles trending audio, GIFs, and product assets into viral videos.',
    details: 'GPU acceleration, trending audio library, Ken Burns effects'
  },
  {
    number: '06',
    icon: BarChart3,
    title: 'Auto Publishing',
    description: 'Videos posted across TikTok, Instagram, and YouTube with performance tracking.',
    details: 'Buffer API, webhook analytics, growth metrics'
  }
];

export function Workflow() {
  const containerRef = useScrollAnimation();

  return (
    <section ref={containerRef} id="workflow" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 grid-bg-large">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-custom-gray-800 mb-3 sm:mb-4 fade-in-up">
            <span className="text-emerald-400">6-Step</span> Automation Pipeline
          </h2>
          <p className="text-lg sm:text-xl text-custom-gray-600 max-w-3xl mx-auto px-4 fade-in-up stagger-1">
            Our optimized workflow processes your product into viral content faster than any human team, 
            with built-in redundancy and performance monitoring at every stage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div 
                className={`group bg-custom-gray-100 border border-custom-gray-200 rounded-lg p-3 sm:p-4 hover:border-emerald-400/50 transition-all duration-300 relative hover-lift fade-in-up workflow-step-${index + 1}`}
              >
                {/* Step number */}
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center text-custom-gray-800 font-bold text-xs">
                  {step.number}
                </div>
                
                <div className="w-10 h-10 bg-emerald-400/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-emerald-400/20 transition-colors">
                  <step.icon className="w-5 h-5 text-emerald-400" />
                </div>
                
                <h3 className="text-base sm:text-lg font-semibold text-custom-gray-800 mb-2">{step.title}</h3>
                <p className="text-custom-gray-600 mb-3 leading-relaxed text-sm">{step.description}</p>
                
                <div className="text-xs text-custom-gray-500 bg-custom-gray-200 rounded px-2 py-1">
                  {step.details}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-12 fade-in-up stagger-6">
          <div className="bg-custom-gray-100 border border-custom-gray-200 rounded-lg p-4 sm:p-6 max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl font-bold text-custom-gray-800 mb-3">
              From Product to Viral in{' '}
              <span className="text-emerald-400">Under 3 Minutes</span>
            </h3>
            <p className="text-custom-gray-600 mb-4 text-sm">
              Average processing time: 2.8 minutes per video including AI generation, 
              video assembly, and cross-platform publishing.
            </p>
            <button className="bg-emerald-400 hover:bg-emerald-500 text-custom-gray-800 font-medium px-5 py-2 rounded-lg transition-colors hover-lift text-sm">
              See It In Action
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}