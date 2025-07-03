import { useState, useEffect, useMemo, useCallback } from 'react';
import { TrendingUp, Clock, DollarSign, Users, Video, Zap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';

// Updated cost data with $29/month Creator plan
const costComparisonData = [
  { name: 'Agency', cost: 3000, ai: 29 },
  { name: 'Freelancer', cost: 1500, ai: 29 },
  { name: 'Low-cost Labor', cost: 600, ai: 29 },
  { name: 'memely.ai', cost: 29, ai: 29 }
];

const timeEfficiencyData = [
  { step: 'Content Planning', traditional: 240, ai: 5 },
  { step: 'Script Writing', traditional: 120, ai: 2 },
  { step: 'Asset Creation', traditional: 480, ai: 1 },
  { step: 'Video Editing', traditional: 360, ai: 3 },
  { step: 'Publishing', traditional: 60, ai: 1 }
];

// Updated ROI data with $29/month plan (348/year)
const roiData = [
  { month: 'Month 1', traditional: 3000, memely: 29, savings: 2971 },
  { month: 'Month 2', traditional: 6000, memely: 58, savings: 5942 },
  { month: 'Month 3', traditional: 9000, memely: 87, savings: 8913 },
  { month: 'Month 6', traditional: 18000, memely: 174, savings: 17826 },
  { month: 'Month 12', traditional: 36000, memely: 348, savings: 35652 }
];

const performanceMetrics = [
  { 
    name: 'Time Saved', 
    value: 95, 
    fill: '#7FD689',
    description: 'From hours to minutes'
  },
  { 
    name: 'Cost Reduction', 
    value: 99, 
    fill: '#6EE7B7',
    description: 'vs agency methods'
  },
  { 
    name: 'Engagement Boost', 
    value: 200, 
    fill: '#5EEAD4',
    description: 'AI-optimized content'
  }
];

const chartConfig = {
  traditional: {
    label: 'Agency Cost',
    color: '#F8A5A5',
  },
  ai: {
    label: 'AI-Powered',
    color: '#7FD689',
  },
  memely: {
    label: 'memely.ai Cost',
    color: '#495057',
  },
  savings: {
    label: 'Total Savings',
    color: '#A7F3D0',
  },
  cost: {
    label: 'Monthly Cost',
    color: '#7FD689',
  },
  value: {
    label: 'Performance',
    color: '#7FD689',
  }
};

// FIXED: Optimized counter hook with mobile-specific improvements
function useCountUp(end: number, duration: number = 5000, shouldStart: boolean = false, decimals: number = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) {
      setCount(0);
      return;
    }

    let startTime: number;
    let animationFrame: number;
    let isActive = true;

    const animate = (currentTime: number) => {
      if (!isActive) return;
      
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = easeOutQuart * end;
      
      if (decimals > 0) {
        setCount(Math.round(currentValue * Math.pow(10, decimals)) / Math.pow(10, decimals));
      } else {
        setCount(Math.floor(currentValue));
      }
      
      if (progress < 1 && isActive) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    // MOBILE FIX: Add small delay to ensure proper initialization
    const startDelay = setTimeout(() => {
      if (isActive) {
        animationFrame = requestAnimationFrame(animate);
      }
    }, 100);
    
    return () => {
      isActive = false;
      clearTimeout(startDelay);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, shouldStart, decimals]);

  return count;
}

// FIXED: Properly contained chart components with responsive containers
const CostChart = ({ data }: { data: typeof costComparisonData }) => (
  <div className="w-full overflow-hidden">
    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-custom-gray-800 mb-3 sm:mb-4 text-center px-2">
      Monthly Cost: memely.ai vs Other Methods
    </h3>
    <div className="w-full h-[250px] sm:h-[300px] lg:h-[350px] overflow-hidden">
      <ChartContainer config={chartConfig} className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart 
            data={data} 
            margin={{ top: 20, right: 20, left: 20, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#dee2e6" />
            <XAxis 
              dataKey="name" 
              stroke="#6c757d" 
              fontSize={10}
              tickLine={false}
              axisLine={false}
              interval={0}
              angle={-45}
              textAnchor="end"
              height={60}
              tick={{ fontSize: 10, fill: '#6c757d' }}
            />
            <YAxis 
              stroke="#6c757d" 
              fontSize={10}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 10, fill: '#6c757d' }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="cost"
              stroke="#7FD689"
              fill="#7FD689"
              fillOpacity={0.6}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  </div>
);

const TimeChart = ({ data }: { data: typeof timeEfficiencyData }) => (
  <div className="w-full overflow-hidden">
    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-custom-gray-800 mb-3 sm:mb-4 text-center px-2">
      Time Efficiency: Traditional vs AI-Powered (Minutes)
    </h3>
    <div className="w-full h-[250px] sm:h-[300px] lg:h-[350px] overflow-hidden">
      <ChartContainer config={chartConfig} className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart 
            data={data} 
            margin={{ top: 20, right: 20, left: 20, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#dee2e6" />
            <XAxis 
              dataKey="step" 
              stroke="#6c757d" 
              fontSize={10}
              tickLine={false}
              axisLine={false}
              interval={0}
              angle={-45}
              textAnchor="end"
              height={60}
              tick={{ fontSize: 10, fill: '#6c757d' }}
            />
            <YAxis 
              stroke="#6c757d" 
              fontSize={10}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 10, fill: '#6c757d' }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="traditional"
              stackId="1"
              stroke="#adb5bd"
              fill="#adb5bd"
              fillOpacity={0.6}
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="ai"
              stackId="2"
              stroke="#7FD689"
              fill="#7FD689"
              fillOpacity={0.8}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  </div>
);

const ROIChart = ({ data }: { data: typeof roiData }) => (
  <div className="w-full overflow-hidden">
    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-custom-gray-800 mb-3 sm:mb-4 text-center px-2">
      Interactive ROI Analysis - Cumulative Cost Comparison Over Time
    </h3>
    <div className="w-full h-[250px] sm:h-[300px] lg:h-[350px] overflow-hidden">
      <ChartContainer config={chartConfig} className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart 
            data={data} 
            margin={{ top: 20, right: 20, left: 20, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#dee2e6" />
            <XAxis 
              dataKey="month" 
              stroke="#6c757d" 
              fontSize={10}
              tickLine={false}
              axisLine={false}
              interval={0}
              angle={-45}
              textAnchor="end"
              height={60}
              tick={{ fontSize: 10, fill: '#6c757d' }}
            />
            <YAxis 
              stroke="#6c757d" 
              fontSize={10}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 10, fill: '#6c757d' }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="traditional"
              stroke="#F8A5A5"
              fill="#F8A5A5"
              fillOpacity={0.7}
              strokeWidth={3}
              name="Agency Cost"
            />
            <Area
              type="monotone"
              dataKey="memely"
              stroke="#495057"
              fill="#495057"
              fillOpacity={0.9}
              strokeWidth={4}
              name="memely.ai Cost"
            />
            <Area
              type="monotone"
              dataKey="savings"
              stroke="#A7F3D0"
              fill="#A7F3D0"
              fillOpacity={0.5}
              strokeWidth={2}
              name="Total Savings"
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
    <div className="flex flex-wrap justify-center mt-4 gap-3 sm:gap-6 px-2">
      <div className="flex items-center">
        <div className="w-3 h-3 bg-[#F8A5A5] rounded-full mr-2"></div>
        <span className="text-xs sm:text-sm text-custom-gray-600">Agency Cost</span>
      </div>
      <div className="flex items-center">
        <div className="w-3 h-3 bg-[#495057] rounded-full mr-2"></div>
        <span className="text-xs sm:text-sm text-custom-gray-600">memely.ai Cost</span>
      </div>
      <div className="flex items-center">
        <div className="w-3 h-3 bg-[#A7F3D0] rounded-full mr-2"></div>
        <span className="text-xs sm:text-sm text-custom-gray-600">Total Savings</span>
      </div>
    </div>
  </div>
);

const PerformanceChart = ({ data, isVisible }: { data: typeof performanceMetrics, isVisible: boolean }) => (
  <div className="w-full overflow-hidden">
    <h3 className="text-lg sm:text-xl font-bold text-custom-gray-800 mb-4 text-center px-2">Performance Improvements</h3>
    <div className="w-full h-[250px] sm:h-[300px] overflow-hidden">
      <ChartContainer config={chartConfig} className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart 
            cx="50%" 
            cy="50%" 
            innerRadius="20%" 
            outerRadius="80%" 
            data={data}
            startAngle={90}
            endAngle={450}
          >
            <PolarAngleAxis 
              type="number" 
              domain={[0, 100]} 
              tick={false}
              tickCount={0}
            />
            <RadialBar 
              dataKey="value" 
              cornerRadius={10} 
              fill="#7FD689"
              background={{ fill: '#dee2e6' }}
              animationBegin={isVisible ? 1000 : 0}
              animationDuration={3000}
              isAnimationActive={isVisible}
            />
            <ChartTooltip 
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-white p-3 border border-custom-gray-200 rounded-lg shadow-lg">
                      <p className="font-semibold text-custom-gray-800">{data.name}</p>
                      <p className="text-emerald-400 font-bold">{data.value}%</p>
                      <p className="text-custom-gray-600 text-sm">{data.description}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
    <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4 px-2">
      {data.map((metric, index) => (
        <div key={index} className="text-center">
          <div className="text-base sm:text-lg font-bold text-custom-gray-800 mb-1">
            {metric.value}%
          </div>
          <div className="text-xs font-medium text-custom-gray-700 mb-1">
            {metric.name}
          </div>
          <div className="text-xs text-custom-gray-500">
            {metric.description}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export function Stats() {
  const [activeChart, setActiveChart] = useState('cost');
  const [isVisible, setIsVisible] = useState(false);
  const [chartVisible, setChartVisible] = useState(false);
  const [startCounting, setStartCounting] = useState(false);
  const containerRef = useScrollAnimation();

  // Updated animated counters with $29/month plan values
  const animatedAgency = useCountUp(36000, 5000, startCounting);
  const animatedMemely = useCountUp(348, 5000, startCounting);
  const animatedMonthlyCost = useCountUp(29, 5000, startCounting);
  const animatedSavings = useCountUp(35652, 5000, startCounting);

  // Memoized stats data with updated cost reduction percentage
  const stats = useMemo(() => [
    {
      icon: DollarSign,
      value: '99%',
      label: 'Cost Reduction',
      description: 'vs agency video production'
    },
    {
      icon: Clock,
      value: '95%',
      label: 'Time Saved',
      description: 'From hours to minutes per video'
    },
    {
      icon: TrendingUp,
      value: '3x',
      label: 'Higher Engagement',
      description: 'AI-optimized viral content'
    },
    {
      icon: Video,
      value: '2.8min',
      label: 'Processing Time',
      description: 'Complete automation pipeline'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Beta Users',
      description: 'Already generating content'
    },
    {
      icon: Zap,
      value: '99.9%',
      label: 'Uptime',
      description: 'Enterprise-grade reliability'
    }
  ], []);

  // Memoized chart selection handlers
  const handleChartChange = useCallback((chartType: string) => {
    setActiveChart(chartType);
  }, []);

  // FIXED: Improved intersection observer with mobile-specific handling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            // MOBILE FIX: Longer delay for mobile devices
            const isMobile = window.innerWidth < 768;
            const delay = isMobile ? 800 : 400;
            
            const timer = setTimeout(() => {
              setStartCounting(true);
            }, delay);
            
            return () => clearTimeout(timer);
          }
        });
      },
      { 
        threshold: 0.2, // Lower threshold for mobile
        rootMargin: '0px 0px -30px 0px' // Reduced margin for mobile
      }
    );

    const chartObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !chartVisible) {
            setChartVisible(true);
          }
        });
      },
      { threshold: 0.1 } // Lower threshold for mobile
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
      
      const performanceChart = currentRef.querySelector('.performance-chart');
      if (performanceChart) {
        chartObserver.observe(performanceChart);
      }
    }

    return () => {
      observer.disconnect();
      chartObserver.disconnect();
    };
  }, [isVisible, chartVisible, containerRef]);

  // Memoized chart components
  const chartComponents = useMemo(() => ({
    cost: <CostChart data={costComparisonData} />,
    time: <TimeChart data={timeEfficiencyData} />,
    roi: <ROIChart data={roiData} />
  }), []);

  return (
    <section ref={containerRef} className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-custom-gray-100 grid-bg-dense overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-custom-gray-800 mb-3 sm:mb-4 fade-in-up">
            The Numbers Don't Lie:{' '}
            <span className="text-emerald-400">Massive ROI</span>
          </h2>
          <p className="text-lg sm:text-xl text-custom-gray-600 max-w-3xl mx-auto px-4 fade-in-up stagger-1">
            Real data from our beta users showing significant improvements in efficiency, 
            cost savings, and content performance across all major platforms.
          </p>
        </div>
        
        {/* Key Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8 sm:mb-12">
          {stats.map((stat, index) => (
            <div key={`stat-${index}`} className={`bg-custom-gray-50 border border-custom-gray-200 rounded-lg p-3 sm:p-4 text-center hover:border-emerald-400/50 transition-all duration-300 hover-lift fade-in-up stagger-${index % 3 + 2}`}>
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-emerald-400/10 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <stat.icon className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400" />
              </div>
              <div className="text-lg sm:text-xl font-bold text-custom-gray-800 mb-1">{stat.value}</div>
              <div className="text-xs font-medium text-custom-gray-700 mb-1">{stat.label}</div>
              <div className="text-xs text-custom-gray-500 leading-tight">{stat.description}</div>
            </div>
          ))}
        </div>
        
        {/* Chart Selection - MOBILE OPTIMIZED: Smaller buttons that always fit horizontally */}
        <div className="flex justify-center mb-4 sm:mb-6 fade-in-up stagger-4 px-2">
          <div className="bg-custom-gray-50 rounded-lg p-1 flex gap-0.5 sm:gap-1 border border-custom-gray-200 max-w-full overflow-hidden">
            <button
              onClick={() => handleChartChange('cost')}
              className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-xs font-medium transition-colors whitespace-nowrap ${
                activeChart === 'cost' 
                  ? 'bg-emerald-400 text-custom-gray-800' 
                  : 'text-custom-gray-600 hover:text-custom-gray-800'
              }`}
              type="button"
              aria-label="Show cost comparison chart"
            >
              Cost
            </button>
            <button
              onClick={() => handleChartChange('time')}
              className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-xs font-medium transition-colors whitespace-nowrap ${
                activeChart === 'time' 
                  ? 'bg-emerald-400 text-custom-gray-800' 
                  : 'text-custom-gray-600 hover:text-custom-gray-800'
              }`}
              type="button"
              aria-label="Show time efficiency chart"
            >
              Time
            </button>
            <button
              onClick={() => handleChartChange('roi')}
              className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-xs font-medium transition-colors whitespace-nowrap ${
                activeChart === 'roi' 
                  ? 'bg-emerald-400 text-custom-gray-800' 
                  : 'text-custom-gray-600 hover:text-custom-gray-800'
              }`}
              type="button"
              aria-label="Show ROI analysis chart"
            >
              ROI
            </button>
          </div>
        </div>
        
        {/* Charts - FIXED: Proper container with overflow control */}
        <div className="w-full bg-custom-gray-50 border border-custom-gray-200 rounded-lg p-3 sm:p-6 mb-8 sm:mb-12 fade-in-up stagger-5 overflow-hidden">
          <div className="w-full overflow-hidden">
            {chartComponents[activeChart as keyof typeof chartComponents]}
          </div>
        </div>
        
        {/* Performance Metrics Grid with Radial Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 overflow-hidden">
          <div className="bg-custom-gray-50 border border-custom-gray-200 rounded-lg p-4 sm:p-6 fade-in-left stagger-6 performance-chart overflow-hidden">
            <PerformanceChart data={performanceMetrics} isVisible={chartVisible} />
          </div>
          
          <div className="bg-custom-gray-50 border border-custom-gray-200 rounded-lg p-4 sm:p-6 fade-in-right stagger-6 overflow-hidden">
            <h3 className="text-lg sm:text-xl font-bold text-custom-gray-800 mb-3 sm:mb-4">Break-Even Analysis</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-custom-gray-300">
                <span className="text-custom-gray-600 text-sm">Agency (12 months)</span>
                <span className="text-base sm:text-lg font-bold text-custom-gray-500">
                  ${animatedAgency.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-custom-gray-300">
                <span className="text-custom-gray-600 text-sm">memely.ai (12 months)</span>
                <span className="text-base sm:text-lg font-bold text-emerald-400">
                  ${animatedMemely.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-custom-gray-300">
                <span className="text-custom-gray-600 text-sm">Monthly cost</span>
                <span className="text-base sm:text-lg font-bold text-emerald-400">
                  ${animatedMonthlyCost}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-custom-gray-300">
                <span className="text-custom-gray-600 text-sm">Total 12-month savings</span>
                <span className="text-xl sm:text-2xl font-bold text-emerald-400">
                  ${animatedSavings.toLocaleString()}
                </span>
              </div>
              <div className="bg-emerald-400/10 rounded-lg p-3 mt-3">
                <p className="text-emerald-600 font-medium text-sm">
                  Break-even after just 1 month vs agency methods
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}