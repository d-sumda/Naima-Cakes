import { Camera } from 'lucide-react';
import { HeroSection } from '../components/home/HeroSection';
import { CategoryGrid } from '../components/home/CategoryGrid';
import { HowToOrderSection } from '../components/home/HowToOrderSection';
import { FeaturesSection } from '../components/home/FeaturesSection';

export const Home = () => {
    return (
        <main className="flex-1">
            <HeroSection />
            <CategoryGrid />
            <HowToOrderSection />
            <FeaturesSection />
            <section className="bg-background-light dark:bg-background-dark py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center mb-10">
                    <h2 className="text-4xl font-serif font-bold tracking-tight text-text-main dark:text-white sm:text-5xl mb-4">
                        Follow Our Journey @NaimaCakes
                    </h2>
                    <a href="https://www.instagram.com/naima_cakes16" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-medium">
                        <Camera size={20} />
                        <span>Join our community of cake lovers</span>
                    </a>
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="elfsight-app-41c967b7-fbf7-452f-b7f1-01afe069d09f" data-elfsight-app-lazy></div>
                </div>
            </section>
        </main>
    );
};
