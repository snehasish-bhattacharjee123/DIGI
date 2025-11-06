#!/bin/bash

FILE="client/src/pages/OurWork.tsx"

# Hero Section
sed -i 's/relative bg-white text-foreground pt-16 md:pt-20 lg:pt-32 pb-6 md:pb-6 lg:pb-8/relative bg-brand-blue-900 text-white pt-16 md:pt-20 lg:pt-32 pb-12 md:pb-16 lg:pb-20/' "$FILE"
sed -i 's/tracking-widest font-semibold uppercase text-muted-foreground">/tracking-widest font-semibold uppercase text-brand-green">/' "$FILE"
sed -i 's/tracking-tight leading-tight">/tracking-tight leading-tight text-white">/' "$FILE"

# Fix subtitle that still has opacity-80
sed -i 's/tracking-tight leading-relaxed lg:max-w-\[600px\] max-w-xl opacity-80">/tracking-tight leading-relaxed lg:max-w-[600px] max-w-xl text-white\/90">/' "$FILE"

# Stats section
sed -i 's/<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">/<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-brand-blue-900">/g' "$FILE"
sed -i 's/text-base lg:text-lg text-muted-foreground">/text-base lg:text-lg text-brand-blue-900\/70">/g' "$FILE"
sed -i 's/text-sm font-medium text-foreground hover:text-brand-green/text-sm font-medium text-brand-blue-900 hover:text-brand-green/g' "$FILE"

# Portfolio section
sed -i 's/py-16 md:py-20 lg:py-28 bg-white">/py-16 md:py-20 lg:py-28 bg-gray-50">/g' "$FILE"
sed -i 's/tracking-\[0.1px\] text-2xl md:text-3xl lg:text-4xl font-serif italic">/tracking-[0.1px] text-2xl md:text-3xl lg:text-4xl font-serif italic text-brand-blue-900">/' "$FILE"
sed -i 's/w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" \/>/w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-brand-blue-900" \/>/' "$FILE"
sed -i 's/text-sm md:text-sm lg:text-base truncate w-full text-muted-foreground">/text-sm md:text-sm lg:text-base truncate w-full text-brand-blue-900\/70">/g' "$FILE"

# Accelerate Section
sed -i 's/py-16 md:py-20 lg:py-28 bg-gradient-to-b from-brand-beige-50 to-white">/py-16 md:py-20 lg:py-28 bg-brand-blue-900">/g' "$FILE"
sed -i 's/text-4xl md:text-5xl lg:text-6xl font-bold">/text-4xl md:text-5xl lg:text-6xl font-bold text-white">/g' "$FILE"
sed -i 's/font-serif italic text-brand-orange">/font-serif italic text-brand-green">/g' "$FILE"
sed -i 's/text-xl md:text-2xl text-muted-foreground font-medium">/text-xl md:text-2xl text-white\/90 font-medium">/g' "$FILE"
sed -i 's/text-base md:text-lg text-muted-foreground leading-relaxed">/text-base md:text-lg text-white\/80 leading-relaxed">/g' "$FILE"

# Stats bottom section
sed -i 's/py-20 bg-brand-blue-900">/py-16 md:py-20 lg:py-24 bg-brand-blue-900">/g' "$FILE"
sed -i 's/grid-cols-2 md:grid-cols-4 gap-8">/grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">/g' "$FILE"
sed -i 's/text-4xl md:text-5xl lg:text-6xl font-bold text-brand-green/text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-green/g' "$FILE"
sed -i 's/text-brand-gray-400 text-sm md:text-base">/text-white\/80 text-xs sm:text-sm md:text-base">/g' "$FILE"

# Testimonial Section
sed -i 's/py-24 bg-brand-beige-100">/py-20 md:py-24 lg:py-28 bg-white">/g' "$FILE"
sed -i 's/text-6xl text-brand-orange mb-6">/text-5xl md:text-6xl text-brand-green mb-6">/g' "$FILE"
sed -i 's/text-2xl md:text-3xl text-brand-blue-900 font-light mb-8/text-xl md:text-2xl lg:text-3xl text-brand-blue-900 font-light mb-8/g' "$FILE"
sed -i 's/<div className="text-brand-gray-700">/<div className="text-brand-blue-900\/70">/g' "$FILE"

# CTA Section
sed -i 's/py-24 bg-gradient-to-b from-brand-beige-50 to-brand-beige-100">/py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">/g' "$FILE"
sed -i 's/border-brand-orange\/30 rounded-3xl p-12 md:p-16/border-brand-green\/30 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16/g' "$FILE"
sed -i 's/rgba(255,117,31,0.1)/rgba(139,195,74,0.1)/g' "$FILE"
sed -i 's/text-3xl sm:text-4xl md:text-5xl font-bold text-brand-beige-100 mb-6">/text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">/g' "$FILE"
sed -i 's/<span className="text-brand-orange">Success Story?<\/span>/<span className="text-brand-green">Success Story?<\/span>/g' "$FILE"
sed -i 's/text-xl text-brand-gray-400 mb-8/text-lg md:text-xl text-white\/80 mb-6 md:mb-8/g' "$FILE"
sed -i 's/Button variant="cta" size="lg" className="text-lg px-8"/Button variant="cta" size="lg" className="text-base md:text-lg px-6 md:px-8 w-full sm:w-auto"/g' "$FILE"
sed -i 's/border-2 border-brand-beige-100 text-brand-beige-100 hover:bg-brand-beige-100 hover:text-brand-blue-900 text-lg px-8"/border-2 border-white text-white hover:bg-white hover:text-brand-blue-900 text-base md:text-lg px-6 md:px-8 w-full sm:w-auto"/g' "$FILE"

echo "All fixes applied to $FILE"
