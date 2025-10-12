
import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Menu, X, TrendingUp, Users, Target, Lightbulb, ArrowRight, CheckCircle, Calendar } from 'lucide-react'
import strategicPartnershipsImg from './assets/strategic-partnerships.jpg'
import organicGrowthImg from './assets/organic-growth.jpg'
import strategicAlliancesImg from './assets/strategic-alliances.jpg'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [currentPage, setCurrentPage] = useState('home')
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState({ title: '', content: '' })

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  const showPrivacyPolicy = () => {
    setCurrentPage('privacy')
    window.scrollTo(0, 0)
  }

  const showTermsOfService = () => {
    setCurrentPage('terms')
    window.scrollTo(0, 0)
  }

  const showHome = () => {
    setCurrentPage('home')
    window.scrollTo(0, 0)
  }

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={showHome} />
  }

  if (currentPage === 'terms') {
    return <TermsOfService onBack={showHome} />
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-foreground">Yada Media Partners</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">Contact</button>
            </div>

            <div className="hidden md:block">
              <Button onClick={() => window.open('https://app.fyxer.com/e/fabian25/30', '_blank')}>Schedule a Call</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-foreground">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-foreground hover:bg-accent rounded-md">Home</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-foreground hover:bg-accent rounded-md">Services</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-foreground hover:bg-accent rounded-md">About</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-foreground hover:bg-accent rounded-md">Contact</button>
              <div className="px-3 py-2">
                <Button onClick={() => window.open('https://app.fyxer.com/e/fabian25/30', '_blank')} className="w-full">Schedule a Call</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              3-5x Your Company Valuation in 60 Days. <span className="text-primary">Guaranteed.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Unlock the fastest path to exponential growth through strategic media acquisitions. We guarantee one profitable acquisition within 60 days, or our services are FREE. Stop wasting money on ads and start scaling with unparalleled speed and impact.
            </p>
            <Button size="lg" onClick={() => scrollToSection('services')} className="group">
              Claim Your Guaranteed Acquisition
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Value Proposition */}
          <div className="mt-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-8">
              Your Path to Explosive Organic Growth & Valuation Skyrocket
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto text-center">
              Are you tired of the endless ad spend treadmill, watching your marketing budget vanish with diminishing returns? We offer a revolutionary alternative: a proven methodology for achieving explosive, sustainable growth and a 3-5x increase in company valuation by leveraging the credibility and direct access of strategic acquisitions and authentic brand collaborations. Our approach cuts through the noise, building genuine connections and crafting compelling narratives that resonate directly with your Ideal Customer Profile (ICP), ensuring your brand not only gets noticed but dominates its niche with unwavering trust and loyalty.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Target className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Strategic Acquisitions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We specialize in acquiring or gaining significant influence within ICP-targeted online communities, content platforms, and audience lists. This provides instant credibility and direct access to highly engaged, pre-qualified audiences – no more guessing games with ad targeting. This is the fastest way to scale and significantly boost your company's valuation.</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Brand Partnerships</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We identify and forge powerful, revenue-generating alliances with complementary brands, industry influencers, and key opinion leaders. These collaborations open doors to new, untapped audiences, shared resources, and mutually beneficial growth opportunities that multiply your reach.</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Rapid Brand Scaling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">By focusing on these organic, high-leverage strategies, we help your brand achieve significant, rapid, and sustainable growth. This means expanding your reach exponentially, cementing your reputation as an industry leader, and building a robust foundation for long-term, predictable success – all without the continuous drain of ad expenditures.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
            Our Proven Framework for Guaranteed Success
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background p-6 rounded-lg border border-border hover:border-primary transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">1</div>
                <h3 className="text-lg font-semibold">Media Landscape Analysis</h3>
              </div>
              <p className="text-muted-foreground">Identifying relevant publications, journalists, and platforms aligned with your brand.</p>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border hover:border-primary transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">2</div>
                <h3 className="text-lg font-semibold">Partnership Scouting</h3>
              </div>
              <p className="text-muted-foreground">Finding and evaluating ideal strategic partners whose values align with yours.</p>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border hover:border-primary transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">3</div>
                <h3 className="text-lg font-semibold">Relationship Building</h3>
              </div>
              <p className="text-muted-foreground">Crafting compelling pitches and fostering long-term connections with media and partners.</p>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border hover:border-primary transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">4</div>
                <h3 className="text-lg font-semibold">Narrative Development</h3>
              </div>
              <p className="text-muted-foreground">Creating stories that resonate powerfully across all media channels and partnerships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Media Acquisition & Strategic Partnerships designed to elevate your brand's presence and credibility.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden">
              <img src={strategicPartnershipsImg} alt="Strategic Partnerships" className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle className="text-2xl">Media Acquisition</CardTitle>
                <CardDescription>Elevate your brand through earned media opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Public Relations (PR) and press releases</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Earned media placements in leading publications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Thought leadership positioning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Guest contributions and speaking engagements</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Benefits:</h4>
                  <p className="text-sm text-muted-foreground">Increased brand awareness, enhanced credibility, improved SEO, and cost-effective exposure.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <img src={strategicAlliancesImg} alt="Strategic Alliances" className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle className="text-2xl">Strategic Partnerships</CardTitle>
                <CardDescription>Forge powerful alliances for mutual growth</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Co-marketing initiatives and joint campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Joint ventures and market expansion</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Influencer collaborations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Affiliate programs and performance partnerships</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Benefits:</h4>
                  <p className="text-sm text-muted-foreground">Expanded reach, shared resources, enhanced brand value, and accelerated growth.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-accent/50">
            <CardHeader>
              <CardTitle className="text-2xl">How We Work: Our Collaborative Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-3">1</div>
                  <h4 className="font-semibold mb-2">Discovery</h4>
                  <p className="text-sm text-muted-foreground">Understanding your brand and goals</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-3">2</div>
                  <h4 className="font-semibold mb-2">Research</h4>
                  <p className="text-sm text-muted-foreground">Identifying opportunities</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-3">3</div>
                  <h4 className="font-semibold mb-2">Outreach</h4>
                  <p className="text-sm text-muted-foreground">Building relationships</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-3">4</div>
                  <h4 className="font-semibold mb-2">Execution</h4>
                  <p className="text-sm text-muted-foreground">Managing campaigns</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-3">5</div>
                  <h4 className="font-semibold mb-2">Reporting</h4>
                  <p className="text-sm text-muted-foreground">Optimizing results</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Story & Mission
              </h2>
              <p className="text-muted-foreground mb-4">
                We are a dedicated team passionate about helping businesses achieve sustainable growth and authentic brand recognition. In an era dominated by ever-increasing ad spend, we believe there's a more impactful and cost-effective way to scale.
              </p>
              <p className="text-muted-foreground mb-4">
                Our mission is to empower brands to break free from the advertising treadmill by harnessing the power of earned media and strategic collaborations. We are committed to fostering genuine connections, crafting compelling narratives, and building lasting relationships that drive organic growth and establish unwavering credibility for our clients.
              </p>
              <p className="text-muted-foreground">
                Our approach is rooted in the belief that true brand scaling comes from authentic engagement and trusted endorsements, not just paid impressions. We prioritize strategies that build long-term value, enhance reputation, and create a loyal customer base.
              </p>
            </div>
            <div>
              <img src={organicGrowthImg} alt="Organic Growth" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-6">
            Ready for Guaranteed Growth?
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            Stop competing for attention with endless ad spend and start dominating your market. We’re so confident in our ability to deliver, we offer an unbeatable guarantee: One profitable acquisition in 60 days or less, or you don't pay. It's time to build a legacy of organic growth and authentic connections that redefine your brand's success.
          </p>

          <Card className="max-w-2xl mx-auto text-center">
            <CardHeader>
              <CardTitle className="text-3xl">Book Your Free Strategy Call</CardTitle>
              <CardDescription className="text-lg">
                Schedule a 30-minute consultation to discover how we can 3-5x your company valuation in 60 days.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <a 
                  href="https://app.fyxer.com/e/fabian25/30" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Your Call Now
                  </Button>
                </a>
              </div>
              
              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Or email us directly at: <a href="mailto:fabian@yadagroup.ca" className="text-primary hover:underline font-semibold">fabian@yadagroup.ca</a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent/50 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
                <span className="ml-2 text-lg font-bold text-foreground">Yada Media Partners</span>
              </div>
              <p className="text-sm text-muted-foreground">Empowering brands through strategic media acquisition and powerful partnerships.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="text-sm text-muted-foreground hover:text-primary">Home</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-sm text-muted-foreground hover:text-primary">Services</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-sm text-muted-foreground hover:text-primary">About</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-sm text-muted-foreground hover:text-primary">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">Media Acquisition</li>
                <li className="text-sm text-muted-foreground">Strategic Partnerships</li>
                <li className="text-sm text-muted-foreground">Brand Scaling</li>
                <li className="text-sm text-muted-foreground">Thought Leadership</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><button onClick={showPrivacyPolicy} className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</button></li>
                <li><button onClick={showTermsOfService} className="text-sm text-muted-foreground hover:text-primary">Terms of Service</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">© 2025 Yada Media Partners. All Rights Reserved.</p>
            <p className="text-sm text-muted-foreground mt-2">
              Contact: <a href="mailto:fabian@yadagroup.ca" className="text-primary hover:underline">fabian@yadagroup.ca</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Privacy Policy Component
function PrivacyPolicy({ onBack }) {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-foreground">Yada Media Partners</span>
            </div>
            <Button onClick={onBack}>Back to Home</Button>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
          <h1>Privacy Policy for Yada Media Partners</h1>
          <p><strong>Effective Date:</strong> October 12, 2025</p>
          
          <p>At Yada Media Partners, accessible from yadamediapartners.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Yada Media Partners and how we use it.</p>
          
          <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
          
          <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Yada Media Partners. This policy is not applicable to any information collected offline or via channels other than this website.</p>
          
          <h2>Consent</h2>
          <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
          
          <h2>Information we collect</h2>
          <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
          
          <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
          
          <p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>
          
          <h2>How we use your information</h2>
          <p>We use the information we collect in various ways, including to:</p>
          <ul>
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners</li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>
          
          <h2>Log Files</h2>
          <p>Yada Media Partners follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>
          
          <h2>Cookies and Web Beacons</h2>
          <p>Like any other website, Yada Media Partners uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited.</p>
          
          <h2>CCPA Privacy Rights</h2>
          <p>Under the CCPA, among other rights, California consumers have the right to request that a business disclose categories and specific pieces of personal data collected, request deletion of personal data, and request that a business not sell personal data.</p>
          
          <h2>GDPR Data Protection Rights</h2>
          <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the right to access, rectification, erasure, restriction of processing, objection to processing, and data portability.</p>
          
          <h2>Children's Information</h2>
          <p>Yada Media Partners does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately.</p>
        </div>
      </div>
    </div>
  )
}

// Terms of Service Component
function TermsOfService({ onBack }) {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-foreground">Yada Media Partners</span>
            </div>
            <Button onClick={onBack}>Back to Home</Button>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
          <h1>Terms of Service for Yada Media Partners</h1>
          <p><strong>Effective Date:</strong> October 12, 2025</p>
          
          <h2>1. Introduction</h2>
          <p>Welcome to Yada Media Partners! These Terms of Service ("Terms") govern your use of our website, services, and products (collectively, "Services"). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.</p>
          
          <h2>2. Services Provided</h2>
          <p>Yada Media Partners specializes in strategic media acquisitions and brand scaling. Our services include, but are not limited to, media landscape analysis, partnership scouting, relationship building, narrative development, public relations, earned media placements, thought leadership positioning, guest contributions, speaking engagements, co-marketing initiatives, joint ventures, influencer collaborations, and affiliate programs.</p>
          
          <h2>3. Guarantees</h2>
          <p>We guarantee one profitable acquisition within 60 days of engaging our services, or our services are free. Specific terms and conditions for this guarantee will be outlined in a separate service agreement between Yada Media Partners and the client.</p>
          
          <h2>4. User Obligations</h2>
          <p>By using our Services, you agree to:</p>
          <ul>
            <li>Provide accurate and complete information when requested</li>
            <li>Use our Services only for lawful purposes</li>
            <li>Not engage in any activity that interferes with or disrupts our Services</li>
            <li>Not attempt to gain unauthorized access to any part of our Services</li>
          </ul>
          
          <h2>5. Intellectual Property</h2>
          <p>All content, trademarks, service marks, trade names, logos, and intellectual property displayed on our website are the property of Yada Media Partners or their respective owners. You may not use, reproduce, distribute, or create derivative works from any content without our express written permission.</p>
          
          <h2>6. Disclaimer of Warranties</h2>
          <p>Our Services are provided "as is" and "as available" without any warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
          
          <h2>7. Limitation of Liability</h2>
          <p>In no event shall Yada Media Partners, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
          
          <h2>8. Indemnification</h2>
          <p>You agree to indemnify and hold harmless Yada Media Partners and its affiliates, officers, agents, employees, and partners from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your access to or use of the Services.</p>
          
          <h2>9. Governing Law</h2>
          <p>These Terms shall be governed and construed in accordance with the laws of Canada, without regard to its conflict of law provisions.</p>
          
          <h2>10. Changes to Terms</h2>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.</p>
          
          <h2>11. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at fabian@yadagroup.ca.</p>
        </div>
      </div>
    </div>
  )
}

export default App

