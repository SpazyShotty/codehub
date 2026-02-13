import { useState, useEffect } from 'react';
import { 
  Download, 
  Apple, 
  MonitorSmartphone, 
  Terminal, 
  Code2, 
  Globe, 
  Zap,
  Shield,
  Users,
  ArrowRight,
  Check,
  ChevronLeft,
  Star,
  Github,
  Twitter,
  Linkedin,
  Menu,
  X
} from 'lucide-react';

interface HomePageProps {
  onBack: () => void;
}

const platforms = [
  {
    id: 'windows',
    name: 'Windows',
    icon: MonitorSmartphone,
    version: 'v2.1.0',
    size: '85 MB',
    requirements: 'Windows 10/11',
    color: '#0078d4',
  },
  {
    id: 'macos',
    name: 'macOS',
    icon: Apple,
    version: 'v2.1.0',
    size: '92 MB',
    requirements: 'macOS 12+',
    color: '#fff',
  },
  {
    id: 'linux',
    name: 'Linux',
    icon: Terminal,
    version: 'v2.1.0',
    size: '78 MB',
    requirements: 'Ubuntu 20.04+',
    color: '#e95420',
  },
];

const features = [
  {
    icon: Code2,
    title: 'Smart Code Editor',
    description: 'Intelligent autocomplete, syntax highlighting, and real-time error detection for 50+ languages.',
  },
  {
    icon: Terminal,
    title: 'Integrated Terminal',
    description: 'Built-in terminal with multi-shell support. Run commands without leaving your workspace.',
  },
  {
    icon: Globe,
    title: 'Cloud Sync',
    description: 'Your code, everywhere. Seamless synchronization across all your devices.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance with native compilation. Launch in under 2 seconds.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'End-to-end encryption, SSO integration, and compliance with SOC 2 standards.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Real-time pair programming, code reviews, and integrated video calls.',
  },
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Senior Developer',
    company: 'TechCorp',
    content: 'CodeHub has transformed how our team collaborates. The real-time sync is game-changing.',
    avatar: 'SC',
  },
  {
    name: 'Marcus Johnson',
    role: 'CTO',
    company: 'StartupXYZ',
    content: 'Best IDE I have used in years. Fast, reliable, and the plugin ecosystem is incredible.',
    avatar: 'MJ',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Full Stack Dev',
    company: 'Freelance',
    content: 'The integrated terminal and cloud sync make working from anywhere seamless.',
    avatar: 'ER',
  },
];

export default function HomePage({ onBack }: HomePageProps) {
  const [selectedPlatform, setSelectedPlatform] = useState('windows');
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadComplete(true);
      setTimeout(() => setDownloadComplete(false), 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass py-3' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c6f135] to-[#a8d41e] flex items-center justify-center">
                <Code2 className="w-6 h-6 text-black" />
              </div>
              <span className="text-xl font-bold">CodeHub</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-[#a6a6a6] hover:text-white transition-colors">Features</a>
              <a href="#download" className="text-[#a6a6a6] hover:text-white transition-colors">Download</a>
              <a href="#testimonials" className="text-[#a6a6a6] hover:text-white transition-colors">Testimonials</a>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={onBack}
                className="hidden sm:flex items-center gap-2 text-[#a6a6a6] hover:text-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <a
                href="#download"
                className="btn-primary px-5 py-2 rounded-full text-black font-medium text-sm"
              >
                Get Started
              </a>
              <button
                className="md:hidden text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass mt-4 mx-4 rounded-xl p-4">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-[#a6a6a6] hover:text-white transition-colors">Features</a>
              <a href="#download" className="text-[#a6a6a6] hover:text-white transition-colors">Download</a>
              <a href="#testimonials" className="text-[#a6a6a6] hover:text-white transition-colors">Testimonials</a>
              <button onClick={onBack} className="text-[#a6a6a6] hover:text-white transition-colors text-left">
                Back to Welcome
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#c6f135]/10 rounded-full blur-[150px]" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c6f135]/10 border border-[#c6f135]/20 mb-8">
              <Star className="w-4 h-4 text-[#c6f135]" />
              <span className="text-sm text-[#c6f135]">Version 2.1 Now Available</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Code Without
              <br />
              <span className="text-[#c6f135]">Limits</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-[#a6a6a6] max-w-2xl mx-auto mb-10">
              The next-generation coding platform. Write, compile, and deploy 
              from anywhere with our powerful desktop application.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#download"
                className="btn-primary flex items-center gap-2 px-8 py-4 rounded-full text-black font-semibold"
              >
                <Download className="w-5 h-5" />
                <span>Download Free</span>
              </a>
              <a
                href="#features"
                className="flex items-center gap-2 px-8 py-4 rounded-full border border-[#333] hover:border-[#c6f135]/50 transition-colors"
              >
                <span>Explore Features</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
              {[
                { value: '2M+', label: 'Developers' },
                { value: '50+', label: 'Languages' },
                { value: '99.9%', label: 'Uptime' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-[#c6f135]">{stat.value}</div>
                  <div className="text-sm text-[#666]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything You Need to <span className="text-[#c6f135]">Code</span>
            </h2>
            <p className="text-[#a6a6a6] max-w-2xl mx-auto">
              A complete development environment packed with features designed 
              to boost your productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-[#111] border border-[#222] hover:border-[#c6f135]/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#c6f135]/10 flex items-center justify-center mb-4 group-hover:bg-[#c6f135]/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-[#c6f135]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#c6f135]/5 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Download <span className="text-[#c6f135]">CodeHub</span>
            </h2>
            <p className="text-[#a6a6a6]">
              Choose your platform and start coding in minutes.
            </p>
          </div>

          {/* Platform Selector */}
          <div className="glass rounded-2xl p-8">
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  onClick={() => setSelectedPlatform(platform.id)}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${
                    selectedPlatform === platform.id
                      ? 'border-[#c6f135] bg-[#c6f135]/10'
                      : 'border-[#222] bg-[#111] hover:border-[#333]'
                  }`}
                >
                  <platform.icon 
                    className="w-8 h-8" 
                    style={{ color: platform.color }}
                  />
                  <div className="text-left">
                    <div className="font-semibold">{platform.name}</div>
                    <div className="text-xs text-[#666]">{platform.version}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Platform Details */}
            <div className="bg-[#0a0a0a] rounded-xl p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  {(() => {
                    const platform = platforms.find(p => p.id === selectedPlatform)!;
                    return (
                      <>
                        <div 
                          className="w-16 h-16 rounded-2xl flex items-center justify-center"
                          style={{ backgroundColor: `${platform.color}20` }}
                        >
                          <platform.icon className="w-8 h-8" style={{ color: platform.color }} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{platform.name} Version</h3>
                          <div className="flex items-center gap-4 mt-1 text-sm text-[#666]">
                            <span>{platform.size}</span>
                            <span>•</span>
                            <span>{platform.requirements}</span>
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </div>

                <button
                  onClick={handleDownload}
                  disabled={isDownloading || downloadComplete}
                  className={`flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                    downloadComplete
                      ? 'bg-green-500 text-white'
                      : 'btn-primary text-black'
                  }`}
                >
                  {isDownloading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      <span>Downloading...</span>
                    </>
                  ) : downloadComplete ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Downloaded!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      <span>Download Now</span>
                    </>
                  )}
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-6 pt-6 border-t border-[#222] grid sm:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-[#c6f135] font-semibold">Free Forever</div>
                  <div className="text-xs text-[#666]">Core features at no cost</div>
                </div>
                <div>
                  <div className="text-[#c6f135] font-semibold">Auto Updates</div>
                  <div className="text-xs text-[#666]">Always stay current</div>
                </div>
                <div>
                  <div className="text-[#c6f135] font-semibold">Open Source</div>
                  <div className="text-xs text-[#666]">Community driven</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Loved by <span className="text-[#c6f135]">Developers</span>
            </h2>
            <p className="text-[#a6a6a6]">
              See what our community has to say about CodeHub.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#111] border border-[#222]"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c6f135] text-[#c6f135]" />
                  ))}
                </div>
                <p className="text-[#a6a6a6] mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c6f135] to-[#a8d41e] flex items-center justify-center text-black font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-xs text-[#666]">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#c6f135]/20 rounded-full blur-[100px]" />
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Start Coding?
              </h2>
              <p className="text-[#a6a6a6] mb-8 max-w-lg mx-auto">
                Join millions of developers who trust CodeHub for their daily coding needs.
              </p>
              <a
                href="#download"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-black font-semibold"
              >
                <Download className="w-5 h-5" />
                <span>Download for Free</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[#111]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c6f135] to-[#a8d41e] flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-black" />
                </div>
                <span className="text-xl font-bold">CodeHub</span>
              </div>
              <p className="text-[#666] text-sm">
                The next-generation coding platform for developers worldwide.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-[#666]">
                <li><a href="#features" className="hover:text-[#c6f135] transition-colors">Features</a></li>
                <li><a href="#download" className="hover:text-[#c6f135] transition-colors">Download</a></li>
                <li><a href="#" className="hover:text-[#c6f135] transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-[#c6f135] transition-colors">Changelog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-[#666]">
                <li><a href="#" className="hover:text-[#c6f135] transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-[#c6f135] transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-[#c6f135] transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-[#c6f135] transition-colors">Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center hover:bg-[#c6f135]/20 hover:text-[#c6f135] transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center hover:bg-[#c6f135]/20 hover:text-[#c6f135] transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center hover:bg-[#c6f135]/20 hover:text-[#c6f135] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-[#111] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#666]">
              © 2026 CodeHub. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-[#666]">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
