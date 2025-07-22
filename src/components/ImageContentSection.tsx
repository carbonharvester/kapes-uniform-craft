import React from 'react';

interface ContentItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ImageContentSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  items: ContentItem[];
  bottomText?: string;
  imagePosition?: 'left' | 'right';
  iconColorScheme?: 'orange' | 'purple' | 'blue' | 'green';
  className?: string;
}

export const ImageContentSection: React.FC<ImageContentSectionProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  items,
  bottomText,
  imagePosition = 'left',
  iconColorScheme = 'orange',
  className = ''
}) => {
  const getIconColors = (scheme: string) => {
    switch (scheme) {
      case 'purple':
        return {
          bg: 'bg-purple-50 dark:bg-purple-900/20',
          border: 'border-purple-200 dark:border-purple-800',
          hoverBg: 'group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30',
          iconColor: 'text-purple-600 dark:text-purple-400'
        };
      case 'blue':
        return {
          bg: 'bg-blue-50 dark:bg-blue-900/20',
          border: 'border-blue-200 dark:border-blue-800',
          hoverBg: 'group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30',
          iconColor: 'text-blue-600 dark:text-blue-400'
        };
      case 'green':
        return {
          bg: 'bg-green-50 dark:bg-green-900/20',
          border: 'border-green-200 dark:border-green-800',
          hoverBg: 'group-hover:bg-green-100 dark:group-hover:bg-green-900/30',
          iconColor: 'text-green-600 dark:text-green-400'
        };
      default: // orange
        return {
          bg: 'bg-orange-50 dark:bg-orange-900/20',
          border: 'border-orange-200 dark:border-orange-800',
          hoverBg: 'group-hover:bg-orange-100 dark:group-hover:bg-orange-900/30',
          iconColor: 'text-orange-600 dark:text-orange-400'
        };
    }
  };

  const iconColors = getIconColors(iconColorScheme);
  const imageOrder = imagePosition === 'left' ? 'order-1' : 'order-2';
  const contentOrder = imagePosition === 'left' ? 'order-2' : 'order-1';
  const decorativeLeft = imagePosition === 'left' ? '-left-4' : '-right-4';
  const decorativeRight = imagePosition === 'left' ? '-right-4' : '-left-4';

  return (
    <section className={`py-20 lg:py-32 ${className}`}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light tracking-tight mb-6" style={{ color: '#030063' }}>
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className={`relative ${imageOrder}`}>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={imageSrc} 
                alt={imageAlt} 
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
            </div>
            
            {/* Decorative elements */}
            <div className={`absolute -top-4 ${decorativeLeft} w-20 h-20 bg-primary/10 rounded-full blur-xl`}></div>
            <div className={`absolute -bottom-4 ${decorativeRight} w-16 h-16 bg-accent/10 rounded-full blur-xl`}></div>
          </div>

          {/* Content Section */}
          <div className={`space-y-8 ${contentOrder}`}>
            <div className="grid gap-8">
              {items.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex gap-4 items-start group">
                    <div className="flex-shrink-0 mt-1">
                      <div className={`w-10 h-10 ${iconColors.bg} border ${iconColors.border} rounded-xl flex items-center justify-center ${iconColors.hoverBg} transition-colors`}>
                        <IconComponent className={`w-5 h-5 ${iconColors.iconColor}`} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold" style={{ color: '#030063' }}>
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {bottomText && (
              <div className="pt-4 border-t border-border/50">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {bottomText}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};