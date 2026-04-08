/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { 
  ShoppingBag, 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter,
  Award,
  ShieldCheck,
  Truck,
  Clock
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const CATEGORIES = [
  { id: "bags", name: "Bags", icon: "👜", description: "Office bags, travel bags, and backpacks." },
  { id: "wallets", name: "Wallets", icon: "👛", description: "Premium genuine leather wallets for men and women." },
  { id: "belts", name: "Belts", icon: "🎗️", description: "Durable and stylish leather belts for every occasion." },
  { id: "jackets", name: "Jackets", icon: "🧥", description: "Handcrafted leather jackets with timeless designs." },
  { id: "footwear", name: "Footwear", icon: "👞", description: "Comfortable and elegant leather shoes and sandals." },
];

const PRODUCTS = [
  { id: 1, name: "Executive Office Bag", category: "bags", price: "₹4,500", image: "https://picsum.photos/seed/leather-bag-1/600/800", rating: 4.8 },
  { id: 2, name: "Classic Bifold Wallet", category: "wallets", price: "₹1,200", image: "https://picsum.photos/seed/leather-wallet-1/600/800", rating: 4.9 },
  { id: 3, name: "Vintage Travel Duffel", category: "bags", price: "₹6,800", image: "https://picsum.photos/seed/leather-duffel/600/800", rating: 4.7 },
  { id: 4, name: "Formal Leather Belt", category: "belts", price: "₹950", image: "https://picsum.photos/seed/leather-belt/600/800", rating: 4.6 },
  { id: 5, name: "Urban Leather Backpack", category: "bags", price: "₹3,200", image: "https://picsum.photos/seed/leather-backpack/600/800", rating: 4.8 },
  { id: 6, name: "Slim Card Holder", category: "wallets", price: "₹650", image: "https://picsum.photos/seed/leather-card/600/800", rating: 4.5 },
];

const REVIEWS = [
  { id: 1, name: "Rahul Sharma", rating: 5, comment: "Exceptional quality! The office bag I bought is both stylish and durable. Highly recommended.", date: "2 weeks ago" },
  { id: 2, name: "Anjali Gupta", rating: 4, comment: "Beautiful craftsmanship. The wallet feels premium and the leather is genuine. Great service too.", date: "1 month ago" },
  { id: 3, name: "Vikram Singh", rating: 5, comment: "Best leather shop in Dharavi. I've been a customer for years and they never disappoint.", date: "3 months ago" },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-secondary selection:text-primary">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-bottom border-border py-3 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-heading text-xl font-bold">LG</div>
            <span className="font-heading text-2xl font-bold tracking-tight hidden sm:block">Leather Gallery</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Home", "Collection", "Our Story", "Craftsmanship", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(" ", "-")}`} 
                className="text-sm font-medium hover:text-accent transition-colors uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-accent-foreground text-[10px] rounded-full flex items-center justify-center">0</span>
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-l border-border">
                <div className="flex flex-col gap-6 mt-12">
                  {["Home", "Collection", "Our Story", "Craftsmanship", "Contact"].map((item) => (
                    <a 
                      key={item} 
                      href={`#${item.toLowerCase().replace(" ", "-")}`} 
                      className="text-xl font-heading font-medium hover:text-accent transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/leather-workshop/1920/1080" 
            alt="Leather Craftsmanship" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <Badge variant="outline" className="mb-6 border-accent text-accent uppercase tracking-[0.3em] px-4 py-1">
              Est. 1995 • Dharavi, Mumbai
            </Badge>
            <h1 className="text-6xl md:text-8xl font-heading font-bold leading-[0.9] mb-8">
              Timeless <span className="italic font-light text-accent">Artistry</span> in Every Stitch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              Experience the legacy of 29+ years of genuine leather craftsmanship. From the heart of Dharavi to your doorstep.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8 py-6 text-lg group">
                Shop Collection
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg border-primary/20 hover:bg-primary/5">
                Our Story
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"></div>
        </motion.div>
      </section>

      {/* Features Bar */}
      <section className="py-12 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "100% Genuine", desc: "Certified Leather" },
              { icon: Award, title: "Premium Quality", desc: "Handcrafted Excellence" },
              { icon: Truck, title: "Pan India", desc: "Fast & Secure Delivery" },
              { icon: Clock, title: "29+ Years", desc: "Legacy of Trust" },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center md:items-start md:text-left md:flex-row gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-accent">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="collection" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">Our Collections</h2>
              <p className="text-muted-foreground text-lg">
                Discover our range of meticulously crafted leather goods, designed for durability and style.
              </p>
            </div>
            <Button variant="link" className="text-accent p-0 h-auto text-lg group">
              View All Products
              <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <Tabs defaultValue="bags" className="w-full">
            <TabsList className="bg-transparent border-b border-border w-full justify-start rounded-none h-auto p-0 mb-12 overflow-x-auto overflow-y-hidden">
              {CATEGORIES.map((cat) => (
                <TabsTrigger 
                  key={cat.id} 
                  value={cat.id}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent px-6 py-4 text-sm uppercase tracking-widest font-medium"
                >
                  {cat.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {CATEGORIES.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {PRODUCTS.filter(p => p.category === cat.id).map((product) => (
                    <motion.div 
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card className="group overflow-hidden border-none bg-transparent shadow-none">
                        <CardContent className="p-0">
                          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-4">
                            <img 
                              src={product.image} 
                              alt={product.name} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                              <Button variant="secondary" size="sm" className="rounded-full">Quick View</Button>
                              <Button size="sm" className="rounded-full">Add to Cart</Button>
                            </div>
                            <Badge className="absolute top-4 left-4 bg-background/80 backdrop-blur-md text-foreground border-none">
                              {product.rating} <Star className="w-3 h-3 ml-1 fill-accent text-accent" />
                            </Badge>
                          </div>
                          <h3 className="font-heading text-xl font-bold mb-1 group-hover:text-accent transition-colors">{product.name}</h3>
                          <p className="text-accent font-bold">{product.price}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                  {/* Placeholder for more products */}
                  <div className="flex flex-col items-center justify-center border-2 border-dashed border-border rounded-2xl p-12 text-center bg-muted/20">
                    <ShoppingBag className="w-12 h-12 text-muted-foreground mb-4 opacity-20" />
                    <h4 className="font-heading text-xl font-bold mb-2">More Coming Soon</h4>
                    <p className="text-sm text-muted-foreground">We are constantly adding new handcrafted pieces to our collection.</p>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 -skew-x-12 translate-x-1/2"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/dharavi-leather/800/800" 
                  alt="Dharavi Leather Market" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-accent p-8 rounded-2xl shadow-2xl hidden md:block max-w-[240px]">
                <p className="text-4xl font-heading font-bold mb-2">29+</p>
                <p className="text-sm uppercase tracking-widest opacity-80">Years of Heritage in Dharavi</p>
              </div>
            </div>

            <div>
              <Badge className="bg-accent/20 text-accent-foreground border-none mb-6 uppercase tracking-widest">Our Heritage</Badge>
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">
                From the Heart of <span className="italic text-secondary">Dharavi</span> to the World
              </h2>
              <div className="space-y-6 text-primary-foreground/80 text-lg leading-relaxed">
                <p>
                  Established in the mid-1990s, Leather Gallery began as a small workshop with a single vision: to bring the finest genuine leather craftsmanship to the people of Mumbai.
                </p>
                <p>
                  Located in the historic Dharavi leather market, we have grown from a local artisan shop to a trusted manufacturer, retailer, and wholesaler serving customers across India.
                </p>
                <p>
                  Every piece we create carries the soul of Dharavi's rich leather-working tradition, combined with modern designs that fit today's lifestyle.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-primary overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Customer" />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium">
                  <span className="text-secondary font-bold">10k+</span> Happy Customers Nationwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section id="craftsmanship" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">The Art of Leather</h2>
            <p className="text-muted-foreground text-lg">
              We believe in slow fashion. Every product is a result of hours of meticulous handwork by our master artisans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "Selection", 
                desc: "We handpick only the finest top-grain and full-grain leathers, ensuring natural texture and longevity.",
                img: "https://picsum.photos/seed/leather-texture/600/400"
              },
              { 
                title: "Precision", 
                desc: "Our master cutters ensure every piece is cut with absolute precision to minimize waste and maximize strength.",
                img: "https://picsum.photos/seed/leather-cutting/600/400"
              },
              { 
                title: "Finishing", 
                desc: "Hand-burnished edges and reinforced stitching give our products their signature premium feel.",
                img: "https://picsum.photos/seed/leather-finish/600/400"
              },
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group"
              >
                <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={step.img} 
                    alt={step.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3 flex items-center gap-3">
                  <span className="text-accent italic">0{i+1}.</span> {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">What Our Customers Say</h2>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
                </div>
                <span className="font-bold text-xl">4.4/5</span>
              </div>
              <p className="text-muted-foreground mb-8">
                Based on 390+ verified reviews from our loyal customers across India.
              </p>
              <Button variant="outline" className="rounded-full">Read All Reviews</Button>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {REVIEWS.map((review, i) => (
                <Card key={review.id} className={`border-none shadow-sm ${i === 2 ? "sm:col-span-2" : ""}`}>
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground uppercase tracking-widest">{review.date}</span>
                    </div>
                    <p className="italic text-lg mb-6 leading-relaxed">"{review.comment}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary uppercase">
                        {review.name.charAt(0)}
                      </div>
                      <span className="font-bold">{review.name}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">Get in Touch</h2>
              <p className="text-muted-foreground text-lg mb-12">
                Have a question about our products or need a custom solution? Visit our store or drop us a message.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-accent shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 uppercase tracking-wider text-sm">Visit Us</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Shop No 15, Kalekar Chawl, Near ONGC Building,<br />
                      Sion‑Bandra Link Rd, Dharavi, Mumbai - 400017
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-accent shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 uppercase tracking-wider text-sm">Call Us</h4>
                    <p className="text-muted-foreground">+91 98336 53138</p>
                    <p className="text-muted-foreground">+91 98195 32255</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-accent shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 uppercase tracking-wider text-sm">Email Us</h4>
                    <p className="text-muted-foreground">info@leathergallery.in</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-muted rounded-2xl border border-border">
                <h4 className="font-bold mb-4 uppercase tracking-wider text-sm">Store Hours</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Monday - Sunday</span>
                    <span className="font-medium">11:00 AM - 09:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <h3 className="text-3xl font-heading font-bold mb-8">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold opacity-60">Full Name</label>
                      <Input placeholder="John Doe" className="bg-muted/50 border-none rounded-xl py-6" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold opacity-60">Email Address</label>
                      <Input placeholder="john@example.com" className="bg-muted/50 border-none rounded-xl py-6" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold opacity-60">Subject</label>
                    <Input placeholder="Inquiry about Office Bags" className="bg-muted/50 border-none rounded-xl py-6" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold opacity-60">Your Message</label>
                    <Textarea placeholder="How can we help you?" className="bg-muted/50 border-none rounded-xl min-h-[150px]" />
                  </div>
                  <Button className="w-full rounded-xl py-6 text-lg">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: "Is your leather 100% genuine?", a: "Yes, we only use 100% genuine leather. We source top-grain and full-grain leathers to ensure the highest quality and durability." },
              { q: "Do you offer custom leather products?", a: "Absolutely! We specialize in custom leather solutions. Whether it's a specific bag design or a custom-sized belt, our artisans can bring your vision to life." },
              { q: "Do you ship across India?", a: "Yes, we provide pan-India shipping. We partner with reliable courier services to ensure your products reach you safely and on time." },
              { q: "How do I care for my leather products?", a: "Leather is a natural material. We recommend keeping it away from excessive moisture and direct sunlight. Use a soft cloth for cleaning and a quality leather conditioner every few months." },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-xl px-6 bg-background overflow-hidden">
                <AccordionTrigger className="hover:no-underline font-bold text-lg py-6">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-heading text-xl font-bold">LG</div>
                <span className="font-heading text-2xl font-bold tracking-tight">Leather Gallery</span>
              </div>
              <p className="text-primary-foreground/60 leading-relaxed">
                Premium leather goods manufacturer and retailer based in Dharavi, Mumbai. Specializing in genuine leather since 1995.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent hover:text-accent-foreground">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent hover:text-accent-foreground">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent hover:text-accent-foreground">
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-8 uppercase tracking-widest text-sm">Quick Links</h4>
              <ul className="space-y-4 text-primary-foreground/60">
                <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="#collection" className="hover:text-accent transition-colors">Collection</a></li>
                <li><a href="#our-story" className="hover:text-accent transition-colors">Our Story</a></li>
                <li><a href="#craftsmanship" className="hover:text-accent transition-colors">Craftsmanship</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-8 uppercase tracking-widest text-sm">Collections</h4>
              <ul className="space-y-4 text-primary-foreground/60">
                <li><a href="#" className="hover:text-accent transition-colors">Office Bags</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Travel Duffels</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Men's Wallets</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Premium Belts</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Leather Jackets</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-8 uppercase tracking-widest text-sm">Newsletter</h4>
              <p className="text-primary-foreground/60 mb-6 text-sm">
                Subscribe to receive updates on new collections and exclusive offers.
              </p>
              <div className="flex gap-2">
                <Input placeholder="Email Address" className="bg-primary-foreground/10 border-none rounded-full" />
                <Button className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">Join</Button>
              </div>
            </div>
          </div>

          <Separator className="bg-primary-foreground/10 mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-primary-foreground/40">
            <p>© 2026 Leather Gallery. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Shipping Info</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
