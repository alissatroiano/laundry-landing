import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  title: string;
  image: string;
  text: string;
  rating: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Sarah Martinez',
    title: 'Busy Professional',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Military Mama saved me so much time! My clothes come back perfectly folded and fresh. The service is reliable and professional. Highly recommend!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jennifer Lopez',
    title: 'Small Business Owner',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'The allergen-free detergent is perfect for my sensitive skin. Never had any issues with Military Mama. Best laundry service in the area!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Michael Chen',
    title: 'Marketing Executive',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Their 24-hour express service got my clothes ready for an important meeting. Fantastic turnaround time and impeccable quality.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Angela Rodriguez',
    title: 'Healthcare Worker',
    image: 'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Working long shifts means laundry piles up fast. Military Mama handles everything with such care. They understand how busy life gets.',
    rating: 5,
  },
  {
    id: 5,
    name: 'David Thompson',
    title: 'Attorney',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Professional service from start to finish. The pickup and delivery is convenient, and my clothing is always handled with precision.',
    rating: 5,
  },
];

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  const goToRandom = () => {
    setCurrentIndex(Math.floor(Math.random() * reviews.length));
  };

  const currentReview = reviews[currentIndex];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-500 font-bold dark:text-yellow-300 text-2xl">★</span>
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="py-20 bg-neutral-00">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mt-7 mb-10">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-amber-400 font-body uppercase mb-4">
            Reviews
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-gradient-to-br from-sky-100 via-sky-200 to-sky-300 dark:from-indigo-400 dark:via-violet-600 dark:to-indigo-400 rounded-3xl p-12 quote-box">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="relative w-40 h-40">
                <img
                  src={currentReview.image}
                  alt={currentReview.name}
                  className="w-40 h-40 rounded-full object-cover shadow-xl border-4 border-white"
                />
                <div className="absolute -bottom-2 -right-2 bg-stone-800 text-yellow-400 p-3 rounded-full shadow-lg">
                  <Quote className="w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="flex-1">
              {renderStars(currentReview.rating)}
              <p className="dark:text-gray-50 text-2xl font-custom mb-6 italic me-10">
                "{currentReview.text}"
              </p>
              <div>
                <h3 className="text-2xl font-custom font-bold uppercase dark:text-yellow-400">
                  {currentReview.name}
                </h3>
                <p className="dark:text-stone-50 font-custom uppercase text-lg font-medium">
                  {currentReview.title}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-10">
            <button
              onClick={goToPrevious}
              className="bg-amber-500 text-white p-3 rounded-full hover:bg-amber-600 transition-all transform hover:scale-110 shadow-md"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToRandom}
              className="px-6 py-3 bg-white text-stone-900 border-2 border-amber-400 rounded-full hover:bg-amber-400 transition-all font-custom text-lg"
            >
              Random
            </button>

            <button
              onClick={goToNext}
              className="bg-amber-500 text-white p-3 rounded-full hover:bg-amber-600 transition-all transform hover:scale-110 shadow-md"
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-stone-800 w-8' : 'dark:bg-gray-300 bg-stone-600 bg-opacity-50 w-2'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-stone-900 dark:text-gray-100 text-sm">
            {currentIndex + 1} of {reviews.length} reviews
          </p>
        </div>
      </div>
    </section>
  );
}