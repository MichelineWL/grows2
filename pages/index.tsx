import { Navbar, Score, Hero, Cardss } from "../components";
import Herobg from "./../public/Hero.jpg";
import Arrow from "./../public/arrow.png";

export default function Pages() {
    const handleClick = () => {
        console.log('Button clicked!');
    };

    const scrollToSection = () => {
        const section = document.getElementById('cards-section');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Navbar />
            <Hero scrollToSection={scrollToSection} homeImage={Herobg} arrowImage={Arrow} />
            
            <div id="cards-section" className="bg-primary-1 py-8">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pt-0 mt-0">
                    <div className="md:col-span-1 flex justify-center">
                        <Score />
                    </div>
                    <div className="md:col-span-2">
                        <Cardss />
                    </div>
                </div>
            </div>
        </>
    );
}
