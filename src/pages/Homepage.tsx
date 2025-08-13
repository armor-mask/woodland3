import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Bed, Utensils, Waves, Calendar, Star, Crown, Sparkles, Award, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <HighlightCards />
      <TestimonialSlider />
      <LocationSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen bg-cover bg-center bg-no-repeat overflow-hidden" 
             style={{backgroundImage: 'url(/assets/img_2598-scaled.jpg)'}}>
      {/* Elegant overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B1A06E' fill-opacity='0.3'%3E%3Cpath d='M50 50c13.807 0 25-11.193 25-25S63.807 0 50 0 25 11.193 25 25s11.193 25 25 25zm0 25c13.807 0 25-11.193 25-25S63.807 50 50 50s-25 11.193-25 25 11.193 25 25 25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="relative z-10 flex items-center justify-center h-full text-center text-resort-white px-4">
        <div className="max-w-6xl mx-auto">
          {/* Crown decoration */}
          <div className="mb-8">
            <Crown className="h-20 w-20 text-resort-gold mx-auto mb-4 drop-shadow-lg" />
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-resort-gold"></div>
              <Sparkles className="h-6 w-6 text-resort-gold" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-resort-gold"></div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-wide">
            <span className="block text-resort-white font-serif italic" style={{fontFamily: 'Georgia, serif'}}>
              Welcome to
            </span>
            <span className="block text-resort-gold font-serif text-7xl md:text-9xl mt-4" style={{
              fontFamily: 'Georgia, serif',
              textShadow: '0 4px 20px rgba(177, 160, 110, 0.5)'
            }}>
              Woodland Resort
            </span>
          </h1>
          
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-6 mb-6">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-resort-gold to-transparent"></div>
              <div className="text-resort-gold font-serif italic text-xl tracking-widest">KRAGUJEVAC</div>
              <div className="w-24 h-px bg-gradient-to-l from-transparent via-resort-gold to-transparent"></div>
            </div>
          </div>

          <p className="text-xl md:text-2xl mb-12 text-resort-cream max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
            Immerse yourself in unparalleled luxury where timeless elegance meets modern sophistication. 
            Experience world-class hospitality, exquisite cuisine, and breathtaking natural beauty 
            in Serbia's most distinguished resort destination.
          </p>

          <div className="space-y-6 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
            <button className="group relative w-full sm:w-auto bg-gradient-to-r from-resort-gold to-yellow-600 hover:from-yellow-600 hover:to-resort-gold text-resort-white font-bold px-12 py-5 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-resort-gold/25 border border-resort-gold/30">
              <span className="relative z-10 flex items-center justify-center">
                <Crown className="h-5 w-5 mr-2" />
                Reserve Your Experience
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <a 
              href="https://www.google.com/maps/place/Woodland+Resort/@44.0325788,20.8742334,13z/data=!4m9!3m8!1s0x47572155400bb7b9:0x720f0e82bab8e50d!5m2!4m1!1i2!8m2!3d44.0325788!4d20.8742334!16s%2Fg%2F11b6j021pb?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto border-2 border-resort-white text-resort-white hover:bg-resort-white hover:text-resort-forest font-bold px-12 py-5 rounded-full text-lg transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm bg-white/10"
            >
              <MapPin className="h-5 w-5 mr-2" />
              Discover Our Location
            </a>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute bottom-10 left-10 opacity-30">
        <div className="w-32 h-32 border border-resort-gold/30 rounded-full flex items-center justify-center">
          <div className="w-20 h-20 border border-resort-gold/50 rounded-full flex items-center justify-center">
            <Sparkles className="h-8 w-8 text-resort-gold" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-20 right-16 opacity-20">
        <div className="w-24 h-24 border border-resort-gold/40 rounded-full"></div>
      </div>
    </section>
  );
}

function WelcomeSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-resort-white to-resort-cream relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23364826' fill-opacity='0.4'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' fill-rule='nonzero'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="mb-8">
            <Award className="h-16 w-16 text-resort-gold mx-auto mb-6" />
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-resort-gold"></div>
              <div className="text-resort-gold text-sm tracking-[0.3em] font-medium">LUXURY REDEFINED</div>
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-resort-gold"></div>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-resort-forest mb-8 leading-tight">
            <span className="font-serif italic" style={{fontFamily: 'Georgia, serif'}}>
              Where Every Moment
            </span>
            <br />
            <span className="text-resort-gold font-serif" style={{fontFamily: 'Georgia, serif'}}>
              Becomes a Memory
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-resort-gray leading-relaxed font-light mb-8">
              Nestled in the heart of Kragujevac, Woodland Resort stands as a testament to refined hospitality 
              and architectural elegance. Our commitment to excellence ensures that every guest experiences 
              the pinnacle of luxury and comfort.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-resort-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Crown className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-resort-forest rounded-full flex items-center justify-center">
                    <Sparkles className="h-3 w-3 text-resort-gold" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-resort-forest mb-3 font-serif">Premium Service</h3>
                <p className="text-resort-gray leading-relaxed">
                  24/7 concierge service and personalized attention to every detail of your stay.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-resort-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-resort-forest rounded-full flex items-center justify-center">
                    <Sparkles className="h-3 w-3 text-resort-gold" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-resort-forest mb-3 font-serif">Award Winning</h3>
                <p className="text-resort-gray leading-relaxed">
                  Recognized for excellence in hospitality and commitment to sustainable luxury.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-resort-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-resort-forest rounded-full flex items-center justify-center">
                    <Sparkles className="h-3 w-3 text-resort-gold" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-resort-forest mb-3 font-serif">Unique Experience</h3>
                <p className="text-resort-gray leading-relaxed">
                  Curated experiences that blend Serbian heritage with contemporary luxury.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightCards() {
  const highlights = [
    {
      title: 'Luxury Accommodation',
      subtitle: 'Suites & Villas',
      description: 'Indulge in our meticulously designed rooms and suites, each featuring premium amenities, elegant furnishings, and breathtaking views of our pristine grounds.',
      image: '/assets/soba-6-scaled.jpg',
      icon: Bed,
      link: '/accommodation',
      decorativeIcon: Crown
    },
    {
      title: 'Gourmet Dining',
      subtitle: 'Culinary Excellence',
      description: 'Embark on a gastronomic journey with our award-winning chefs who masterfully blend traditional Serbian flavors with international culinary artistry.',
      image: 'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg',
      icon: Utensils,
      link: '/dining',
      decorativeIcon: Award
    },
    {
      title: 'Wellness & Recreation',
      subtitle: 'Pool & Gardens',
      description: 'Rejuvenate your senses in our tranquil oasis featuring a pristine infinity pool, therapeutic spa services, and beautifully manicured botanical gardens.',
      image: '/assets/pool-garten.jpg',
      icon: Waves,
      link: '/contact',
      decorativeIcon: Sparkles
    },
    {
      title: 'Exclusive Events',
      subtitle: 'Weddings & Celebrations',
      description: 'Create unforgettable memories with our bespoke event planning services, featuring elegant venues and personalized attention to every detail.',
      image: '/assets/weeding-graffiti.jpg',
      icon: Calendar,
      link: '/events',
      decorativeIcon: Crown
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-resort-cream to-resort-white relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <div className="w-40 h-40 border-2 border-resort-gold rounded-full"></div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <div className="w-32 h-32 border border-resort-forest rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-resort-gold"></div>
              <div className="text-resort-gold text-sm tracking-[0.3em] font-medium">DISCOVER EXCELLENCE</div>
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-resort-gold"></div>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-resort-forest mb-8 leading-tight">
            <span className="font-serif italic" style={{fontFamily: 'Georgia, serif'}}>
              Exceptional
            </span>
            <br />
            <span className="text-resort-gold font-serif" style={{fontFamily: 'Georgia, serif'}}>
              Experiences
            </span>
          </h2>
          
          <p className="text-xl text-resort-gray max-w-4xl mx-auto leading-relaxed font-light">
            Immerse yourself in a world of refined luxury where every detail has been carefully crafted 
            to exceed your expectations and create lasting memories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {highlights.map((highlight, index) => (
            <div key={index} className="group relative bg-resort-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 border border-resort-gold/10">
              {/* Decorative corner elements */}
              <div className="absolute top-4 right-4 z-20">
                <highlight.decorativeIcon className="h-8 w-8 text-resort-gold opacity-60" />
              </div>
              
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={highlight.image} 
                  alt={highlight.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Floating icon */}
                <div className="absolute bottom-6 left-6 z-10">
                  <div className="w-16 h-16 bg-resort-gold/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                    <highlight.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-8 relative">
                {/* Decorative line */}
                <div className="w-16 h-px bg-resort-gold mb-6"></div>
                
                <div className="mb-4">
                  <div className="text-sm text-resort-gold font-medium tracking-widest uppercase mb-2">
                    {highlight.subtitle}
                  </div>
                  <h3 className="text-3xl font-bold text-resort-forest mb-4 font-serif leading-tight">
                    {highlight.title}
                  </h3>
                </div>
                
                <p className="text-resort-gray mb-8 leading-relaxed text-lg font-light">
                  {highlight.description}
                </p>
                
                <Link 
                  to={highlight.link}
                  className="group/link inline-flex items-center text-resort-gold font-bold hover:text-resort-forest transition-all duration-300 text-lg"
                >
                  <span className="border-b-2 border-resort-gold group-hover/link:border-resort-forest transition-colors duration-300">
                    Explore More
                  </span>
                  <ChevronRight className="ml-2 h-5 w-5 group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      name: 'Ana Petrović',
      location: 'Belgrade, Serbia',
      title: 'Wedding Celebration',
      rating: 5,
      text: 'Woodland Resort transformed our wedding dreams into reality. Every detail was executed with perfection, from the breathtaking ceremony venue to the exquisite reception. The staff\'s dedication and the resort\'s elegance created an absolutely magical experience that our guests still talk about.'
    },
    {
      name: 'Marco Rossi',
      location: 'Milan, Italy',
      title: 'Luxury Getaway',
      rating: 5,
      text: 'An extraordinary escape from the ordinary. The attention to detail, from the sumptuous accommodations to the world-class dining, exceeded every expectation. The serene natural setting combined with impeccable service created the perfect sanctuary for relaxation and rejuvenation.'
    },
    {
      name: 'Stefan Nikolić',
      location: 'Novi Sad, Serbia',
      title: 'Corporate Retreat',
      rating: 5,
      text: 'Our executive retreat at Woodland Resort was phenomenally successful. The sophisticated meeting facilities, combined with exceptional hospitality and inspiring surroundings, created the perfect environment for productive discussions and team building. Truly a world-class venue.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-gradient-to-b from-resort-forest to-stone-900 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B1A06E' fill-opacity='0.3'%3E%3Cpath d='M60 60c16.569 0 30-13.431 30-30S76.569 0 60 0 30 13.431 30 30s13.431 30 30 30zm0 30c16.569 0 30-13.431 30-30S76.569 60 60 60s-30 13.431-30 30 13.431 30 30 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-resort-gold"></div>
              <div className="text-resort-gold text-sm tracking-[0.3em] font-medium">GUEST TESTIMONIALS</div>
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-resort-gold"></div>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-resort-white mb-8 leading-tight">
            <span className="font-serif italic" style={{fontFamily: 'Georgia, serif'}}>
              Stories of
            </span>
            <br />
            <span className="text-resort-gold font-serif" style={{fontFamily: 'Georgia, serif'}}>
              Excellence
            </span>
          </h2>
          
          <p className="text-xl text-resort-cream max-w-3xl mx-auto font-light">
            Discover why discerning guests from around the world choose Woodland Resort 
            for their most important celebrations and memorable escapes.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-resort-white to-resort-cream rounded-3xl shadow-3xl p-12 md:p-16 border border-resort-gold/20">
            {/* Decorative quote marks */}
            <div className="absolute -top-6 left-12">
              <div className="w-12 h-12 bg-resort-gold rounded-full flex items-center justify-center shadow-xl">
                <span className="text-2xl text-white font-serif">"</span>
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-8">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 text-resort-gold fill-current mx-1" />
                ))}
              </div>
              
              <blockquote className="text-2xl md:text-3xl text-resort-gray mb-10 leading-relaxed font-light italic">
                "{testimonials[currentSlide].text}"
              </blockquote>
              
              <div className="relative">
                <div className="w-20 h-px bg-resort-gold mx-auto mb-6"></div>
                <div className="font-bold text-2xl text-resort-forest mb-2 font-serif">
                  {testimonials[currentSlide].name}
                </div>
                <div className="text-resort-gray text-lg mb-1">
                  {testimonials[currentSlide].location}
                </div>
                <div className="text-resort-gold font-medium tracking-wide text-sm uppercase">
                  {testimonials[currentSlide].title}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-resort-gold hover:bg-yellow-600 rounded-full p-4 shadow-2xl hover:shadow-resort-gold/25 transition-all duration-300 text-white group"
          >
            <ChevronLeft className="h-6 w-6 group-hover:-translate-x-1 transition-transform duration-300" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-resort-gold hover:bg-yellow-600 rounded-full p-4 shadow-2xl hover:shadow-resort-gold/25 transition-all duration-300 text-white group"
          >
            <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-resort-gold shadow-lg scale-125' 
                    : 'bg-resort-gold/30 hover:bg-resort-gold/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-resort-white to-resort-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23364826' fill-opacity='0.4'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-8">
            <MapPin className="h-16 w-16 text-resort-gold mx-auto mb-6" />
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-resort-gold"></div>
              <div className="text-resort-gold text-sm tracking-[0.3em] font-medium">DISCOVER OUR LOCATION</div>
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-resort-gold"></div>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-resort-forest mb-8 leading-tight">
            <span className="font-serif italic" style={{fontFamily: 'Georgia, serif'}}>
              Find Your
            </span>
            <br />
            <span className="text-resort-gold font-serif" style={{fontFamily: 'Georgia, serif'}}>
              Sanctuary
            </span>
          </h2>
          
          <p className="text-xl text-resort-gray max-w-3xl mx-auto leading-relaxed font-light mb-12">
            Perfectly positioned in the cultural heart of Kragujevac, our resort offers 
            easy access to the city's attractions while providing a tranquil escape 
            from the everyday world.
          </p>

          <a 
            href="https://www.google.com/maps/place/Woodland+Resort/@44.0325788,20.8742334,13z/data=!4m9!3m8!1s0x47572155400bb7b9:0x720f0e82bab8e50d!5m2!4m1!1i2!8m2!3d44.0325788!4d20.8742334!16s%2Fg%2F11b6j021pb?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center bg-gradient-to-r from-resort-gold to-yellow-600 hover:from-yellow-600 hover:to-resort-gold text-white font-bold px-12 py-5 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-resort-gold/25"
          >
            <MapPin className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
            <span>Explore Our Location</span>
            <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}