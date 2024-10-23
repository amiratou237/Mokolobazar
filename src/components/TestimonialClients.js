import React from 'react';

// Composant Testimonials avec défilement horizontal
const TestimonialClients = ({ testimonials }) => {
  return (
    <section className="px-5 my-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Témoignages Clients</h2>
      <div className="flex justify-center">
            <div className="flex overflow-x-auto space-x-6 snap-x snap-mandatory">
                {testimonials.map((testimonial, index) => (
                <a
                    key={index}
                    href=""
                    className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 snap-center flex-shrink-0 w-[300px]"
                >
                    <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-orange-400 via-blue-500 to-orange-500"></span>

                    <div className="sm:flex sm:justify-between sm:gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                        {testimonial.name}
                        </h3>
                    </div>
                    </div>

                    <div className="mt-4">
                    <p className="text-pretty text-sm text-gray-500">
                        {testimonial.feedback}
                    </p>
                    </div>
                </a>
                ))}
            </div>
        </div>
    </section>
  );
};

export default TestimonialClients;
