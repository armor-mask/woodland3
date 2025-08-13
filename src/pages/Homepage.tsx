import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Bed, Utensils, Waves, Calendar, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <>
      <HeroSection />
      <HighlightCards />
      <TestimonialSlider />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen bg-cover bg-center bg-no-repeat" 
             style={{backgroundImage: 'url(/assets/img_2598-scaled.jpg)'}}>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-center text-resort-white px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to<br />
            <span className="text-resort-gold">Woodland Resort</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-resort-cream max-w-2xl mx-auto leading-relaxed">
            Escape to luxury in the heart of Kragujevac. Experience world-class accommodation, 
            fine dining, and unforgettable moments in our serene natural setting.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="w-full sm:w-auto bg-resort-gold hover:bg-resort-gold/90 text-resort-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
              Book Your Stay
            </button>
            <a 
              href="https://www.google.com/maps/place/Woodland+Resort/@44.0325788,20.8742334,13z/data=!4m9!3m8!1s0x47572155400bb7b9:0x720f0e82bab8e50d!5m2!4m1!1i2!8m2!3d44.0325788!4d20.8742334!16s%2Fg%2F11b6j021pb?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border-2 border-resort-white text-resort-white hover:bg-resort-white hover:text-resort-forest font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 inline-block text-center"
            >
              Find Us on Map
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightCards() {
  const highlights = [
    {
      title: 'Accommodation',
      description: 'Luxurious rooms and suites with modern amenities and stunning views of our pristine grounds.',
      image: '/assets/soba-6-scaled.jpg',
      icon: Bed,
      link: '/accommodation'
    },
    {
      title: 'Dining',
      description: 'Savor exquisite cuisine crafted by our talented chefs using the finest local and international ingredients.',
      image: 'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg',
      icon: Utensils,
      link: '/dining'
    },
    {
      title: 'Pool & Garden',
      description: 'Relax by our pristine pool surrounded by beautifully landscaped gardens and tranquil water features.',
      image: '/assets/pool-garten.jpg',
      icon: Waves,
      link: '/contact'
    },
    {
      title: 'Events & Weddings',
      description: 'Create unforgettable memories with our bespoke event planning and elegant venue spaces.',
      image: '/assets/weeding-graffiti.jpg',
      icon: Calendar,
      link: '/events'
    }
  ];

  return (
    <section className="py-20 bg-resort-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-resort-forest mb-6">
            Experience <span className="text-resort-gold">Excellence</span>
          </h2>
          <p className="text-xl text-resort-gray max-w-3xl mx-auto leading-relaxed">
            Discover the perfect blend of luxury, comfort, and natural beauty that makes 
            Woodland Resort the premier destination in Kragujevac.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="group bg-resort-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={highlight.image} 
                  alt={highlight.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <highlight.icon className="absolute top-4 right-4 h-8 w-8 text-resort-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-resort-forest mb-3">{highlight.title}</h3>
                <p className="text-resort-gray mb-6 leading-relaxed">{highlight.description}</p>
                <Link 
                  to={highlight.link}
                  className="inline-flex items-center text-resort-gold font-semibold hover:text-resort-gold/80 transition-colors duration-200"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
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
      rating: 5,
      text: 'Woodland Resort exceeded all our expectations. The staff was incredibly welcoming, the facilities were pristine, and our wedding celebration was absolutely magical. We couldn\'t have asked for a more perfect venue.'
    },
    {
      name: 'Marco Rossi',
      location: 'Milan, Italy',
      rating: 5,
      text: 'What a fantastic getaway! The rooms were luxurious, the dining was exceptional, and the pool area was the perfect place to relax. The natural setting is breathtaking. We\'ll definitely be returning.'
    },
    {
      name: 'Stefan Nikolić',
      location: 'Novi Sad, Serbia',
      rating: 5,
      text: 'Our corporate retreat at Woodland Resort was a huge success. The meeting facilities were excellent, and the team-building activities around the resort were engaging. Highly recommended for business events.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-resort-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-resort-forest mb-6">
            What Our <span className="text-resort-gold">Guests Say</span>
          </h2>
          <p className="text-xl text-resort-gray max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied guests about their experiences at Woodland Resort.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-resort-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-resort-gold fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-resort-gray mb-8 leading-relaxed italic">
                "{testimonials[currentSlide].text}"
              </blockquote>
              <div>
                <div className="font-bold text-lg text-resort-forest">{testimonials[currentSlide].name}</div>
                <div className="text-resort-gray">{testimonials[currentSlide].location}</div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-resort-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 text-resort-gray hover:text-resort-gold"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-resort-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 text-resort-gray hover:text-resort-gold"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-resort-gold' : 'bg-resort-gray/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}