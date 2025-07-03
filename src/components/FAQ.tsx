import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const faqs = [
  {
    question: 'How does memely.ai compare to traditional video production?',
    answer: 'memely.ai automates the entire video creation process, reducing production time from hours to minutes while cutting costs by 84%. Our AI handles content generation, video assembly, and publishing across multiple platforms automatically.'
  },
  {
    question: 'What platforms does memely.ai support for publishing?',
    answer: 'We support TikTok, Instagram Reels, Facebook Reels, and YouTube Shorts through Buffer API integration. This allows one-click publishing to all major short-form video platforms from a single dashboard.'
  },
  {
    question: 'Can I use my own API keys to reduce costs?',
    answer: 'Yes! You can use your own OpenAI, GIPHY, and Buffer API keys to minimize variable costs and maintain full control over your integrations. This reduces per-video costs to just $0.003.'
  },
  {
    question: 'How does the trending audio library work?',
    answer: 'Our audio library is updated weekly with viral sounds optimized for 7-second and 15-second videos. Each track has the beat drop positioned at 2.5 seconds to perfectly sync with your product showcase moment.'
  },
  {
    question: 'What video formats and lengths are supported?',
    answer: 'We generate 7-second videos (with static product images) and 15-second videos (with product video clips). All outputs are optimized for mobile viewing with 9:16 aspect ratio and platform-specific requirements.'
  },
  {
    question: 'How does the AI ensure content variety?',
    answer: 'Our AI uses PostgreSQL deduplication and unique hash checking to prevent repeated content. The system generates fresh captions, hooks, and GIF selections for every video while maintaining brand consistency.'
  },
  {
    question: 'What analytics and performance tracking do you provide?',
    answer: 'We track engagement rates, view-through rates, follower growth, and ROI across all platforms. Our nightly ETL processes aggregate data from social APIs to provide comprehensive performance insights.'
  },
  {
    question: 'Is there a limit on video processing speed?',
    answer: 'With GPU acceleration, videos render in under 30 seconds. Our Bull queue system with Redis handles batch processing efficiently, allowing simultaneous video generation for high-volume accounts.'
  },
  {
    question: 'Can I customize the video templates and branding?',
    answer: 'Yes, Business and Enterprise plans include custom branding removal, template customization, and white-label options. You can also upload custom audio files and adjust video styling parameters.'
  },
  {
    question: 'What happens to my content if I cancel?',
    answer: 'You retain full ownership of all generated content. We provide data export tools and 30-day grace period access to download your video library and analytics data before account closure.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useScrollAnimation();

  return (
    <section ref={containerRef} id="faq" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-custom-gray-100 grid-bg">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-custom-gray-800 mb-4 sm:mb-6 fade-in-up">
            Frequently Asked{' '}
            <span className="text-emerald-400">Questions</span>
          </h2>
          <p className="text-lg sm:text-xl text-custom-gray-600 px-4 fade-in-up stagger-1">
            Everything you need to know about memely.ai's AI-powered video generation platform.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-custom-gray-50 border border-custom-gray-200 rounded-lg overflow-hidden hover:border-emerald-400/50 transition-all duration-300 fade-in-up stagger-${index % 4 + 2}`}
            >
              <button
                className="w-full px-4 sm:px-6 py-4 text-left flex items-center justify-between hover:bg-custom-gray-100 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-base sm:text-lg font-medium text-custom-gray-800 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-custom-gray-600 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-4">
                  <div className="border-t border-custom-gray-200 pt-4">
                    <p className="text-custom-gray-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 sm:mt-16 fade-in-up stagger-6">
          <div className="bg-custom-gray-50 border border-custom-gray-200 rounded-lg p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-custom-gray-800 mb-4">
              Still have questions?
            </h3>
            <p className="text-custom-gray-600 mb-6 text-sm sm:text-base">
              Our team is here to help you get started with AI-powered meme marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-400 hover:bg-emerald-500 text-custom-gray-800 font-medium px-6 py-3 rounded-lg transition-colors hover-lift">
                Schedule Demo
              </button>
              <button className="border border-custom-gray-300 text-custom-gray-700 hover:bg-custom-gray-100 font-medium px-6 py-3 rounded-lg transition-colors hover-lift">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}