import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Menu, X, TrendingUp, Users, Target, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react'
import strategicPartnershipsImg from './assets/strategic-partnerships.jpg'
import organicGrowthImg from './assets/organic-growth.jpg'
import strategicAlliancesImg from './assets/strategic-alliances.jpg'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-foreground">MediaPartners</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">Contact</button>
            </div>

            <div className="hidden md:block">
              <Button onClick={() => scrollToSection('contact')}>Schedule a Call</Button>
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
                <Button onClick={() => scrollToSection('contact')} className="w-full">Schedule a Call</Button>
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
              Scale Your Brand. <span className="text-primary">Zero Ad Spend.</span> Maximize Impact.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Unlock unparalleled growth through strategic media acquisition and powerful partnerships, transforming your brand's trajectory without relying on costly advertising.
            </p>
            <Button size="lg" onClick={() => scrollToSection('services')} className="group">
              Discover Our Strategy
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Value Proposition */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Media Acquisition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Gaining earned media, press mentions, and features that elevate your brand's authority and visibility.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Strategic Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Collaborating with complementary brands and influencers to expand reach and unlock new opportunities.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Brand Scaling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Achieving significant, sustainable growth through organic strategies and authentic connections.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
            Our Proven Framework for Success
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
              <img src={organicGrowthImg} alt="Organic Growth" className="rounded-lg shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Stop competing for attention with endless ad spend. Start building a legacy of organic growth and authentic connections.
          </p>

          <Card>
            <CardHeader>
              <CardTitle>Schedule a Free Consultation</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                  <Input id="company" placeholder="Your company name" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea id="message" placeholder="Tell us about your goals..." rows={5} />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Or email us directly at: <a href="mailto:fabian@yadagroup.ca" className="text-primary hover:underline">fabian@yadagroup.ca</a>
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
                <li className="text-sm text-muted-foreground">Privacy Policy</li>
                <li className="text-sm text-muted-foreground">Terms of Service</li>
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

export default App

