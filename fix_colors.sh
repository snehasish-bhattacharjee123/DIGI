#!/bin/bash

# Fix Statistics section heading
sed -i '395s/mb-4">/mb-4 text-brand-blue-900">/' client/src/pages/OurWork.tsx

# Fix Portfolio heading  
sed -i '559s/mb-4">/mb-4 text-brand-blue-900">/' client/src/pages/OurWork.tsx

# Fix item title colors in portfolio
sed -i 's/font-serif italic">/font-serif italic text-brand-blue-900">/g' client/src/pages/OurWork.tsx

# Fix description text color
sed -i 's/truncate w-full text-muted-foreground/truncate w-full text-brand-blue-900\/70/g' client/src/pages/OurWork.tsx

# Fix statistic description colors
sed -i 's/text-base lg:text-lg text-muted-foreground/text-base lg:text-lg text-brand-blue-900\/70/g' client/src/pages/OurWork.tsx

# Fix link colors  
sed -i 's/text-foreground hover:text-brand-green/text-brand-blue-900 hover:text-brand-green/g' client/src/pages/OurWork.tsx

# Fix Portfolio grid background
sed -i '552s/bg-white"/bg-gray-50"/' client/src/pages/OurWork.tsx

# Fix Accelerate section colors
sed -i '623s/from-brand-beige-50 to-white/bg-brand-blue-900/' client/src/pages/OurWork.tsx
sed -i '635s/text-4xl md:text-5xl lg:text-6xl font-bold">/text-4xl md:text-5xl lg:text-6xl font-bold text-white">/' client/src/pages/OurWork.tsx  
sed -i '636s/text-brand-orange/text-brand-green/' client/src/pages/OurWork.tsx
sed -i '641s/text-muted-foreground font-medium/text-white\/90 font-medium/' client/src/pages/OurWork.tsx
sed -i '644s/text-muted-foreground leading-relaxed/text-white\/80 leading-relaxed/' client/src/pages/OurWork.tsx

# Fix Stats section
sed -i '849s/py-20 bg-brand-blue-900"/py-16 md:py-20 lg:py-24 bg-brand-blue-900"/' client/src/pages/OurWork.tsx
sed -i '851s/gap-8"/gap-6 md:gap-8 lg:gap-12"/' client/src/pages/OurWork.tsx  
sed -i '867s/text-4xl md:text-5xl lg:text-6xl/text-3xl sm:text-4xl md:text-5xl lg:text-6xl/' client/src/pages/OurWork.tsx
sed -i '870s/text-brand-gray-400 text-sm md:text-base/text-white\/80 text-xs sm:text-sm md:text-base/' client/src/pages/OurWork.tsx

# Fix Testimonial section
sed -i '880s/py-24 bg-brand-beige-100/py-20 md:py-24 lg:py-28 bg-white/' client/src/pages/OurWork.tsx
sed -i '889s/text-6xl text-brand-orange/text-5xl md:text-6xl text-brand-green/' client/src/pages/OurWork.tsx
sed -i '890s/text-2xl md:text-3xl/text-xl md:text-2xl lg:text-3xl/' client/src/pages/OurWork.tsx  
sed -i '895s/text-brand-gray-700/text-brand-blue-900\/70/' client/src/pages/OurWork.tsx
sed -i '899s/text-sm/text-sm md:text-base/' client/src/pages/OurWork.tsx

# Fix CTA section
sed -i '905s/py-24 bg-gradient-to-b from-brand-beige-50 to-brand-beige-100/py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white/' client/src/pages/OurWork.tsx
sed -i '912s/border-brand-orange\/30 rounded-3xl p-12 md:p-16/border-brand-green\/30 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16/' client/src/pages/OurWork.tsx  
sed -i '914s/rgba(255,117,31,0.1)/rgba(139,195,74,0.1)/' client/src/pages/OurWork.tsx
sed -i '916s/text-3xl sm:text-4xl md:text-5xl font-bold text-brand-beige-100 mb-6/text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6/' client/src/pages/OurWork.tsx
sed -i '918s/text-brand-orange/text-brand-green/' client/src/pages/OurWork.tsx  
sed -i '920s/text-xl text-brand-gray-400 mb-8/text-lg md:text-xl text-white\/80 mb-6 md:mb-8/' client/src/pages/OurWork.tsx
sed -i '931s/text-lg px-8/text-base md:text-lg px-6 md:px-8 w-full sm:w-auto/' client/src/pages/OurWork.tsx
sed -i '937s/border-brand-beige-100 text-brand-beige-100 hover:bg-brand-beige-100 hover:text-brand-blue-900 text-lg px-8/border-white text-white hover:bg-white hover:text-brand-blue-900 text-base md:text-lg px-6 md:px-8 w-full sm:w-auto/' client/src/pages/OurWork.tsx

