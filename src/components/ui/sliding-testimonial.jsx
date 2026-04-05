import { useEffect } from 'react';
import { Hexagon, Triangle, CircleDashed, Diamond, Box, Sparkles } from 'lucide-react';

const testimonials = [
    {
        name: "Alena Zhukova",
        profession: "Software Engineer",
        description: "EmpowerAble is the perfect platform for fostering true accessibility. It's easy to use and has a lot of intuitive features for daily navigation.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&auto=format&fit=crop",
        Icon: Hexagon,
    },
    {
        name: "Aiko",
        profession: "Community Member",
        description: "This platform is a great tool for building inclusive communities. I've been using it for a while now and the real-time alerts are a game-changer.",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&auto=format&fit=crop",
        Icon: Triangle,
    },
    {
        name: "Ethan Smith",
        profession: "Accessibility Advocate",
        description: "The intelligent support systems are exactly what we needed. I'm really happy with the results and the seamless community integrations.",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&auto=format&fit=crop",
        Icon: CircleDashed,
    },
    {
        name: "Lisa Kemp",
        profession: "Caregiver",
        description: "EmpowerAble makes coordinating care so much simpler. It's easy to use, highly reliable, and brings peace of mind to everyone involved.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&auto=format&fit=crop",
        Icon: Diamond,
    },
    {
        name: "Saud",
        profession: "Therapist",
        description: "Finding resources tailored to sensory needs used to be a challenge. EmpowerAble brings it all together in one highly accessible platform.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&auto=format&fit=crop",
        Icon: Box,
    },
    {
        name: "Paula Rose",
        profession: "UX Designer",
        description: "The design caters wonderfully to neurodivergent individuals. It's a great tool for building user interfaces that truly work for everyone.",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&auto=format&fit=crop",
        Icon: Sparkles,
    },
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

const FUITestimonialWithSlide = () => {
    return (
        <div className="w-full mt-12 overflow-hidden mx-auto max-w-[100vw]">
            <div 
                style={{
                    maskImage: 'linear-gradient(to left, transparent 0%, black 15%, black 85%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to left, transparent 0%, black 15%, black 85%, transparent 100%)',
                }}  
                className="flex relative overflow-hidden shrink-0 max-w-full"
            >
                <div className="flex animate-x-slider gap-5 w-max hover:[animation-play-state:paused] py-4">
                    {duplicatedTestimonials.map((testimonial, indx) => {
                        const Icon = testimonial.Icon;
                        return (
                            <div key={indx} className="border border-white/20 bg-black/40 backdrop-blur-md rounded-xl shrink-0 grow-0 w-[400px] md:w-[500px] flex flex-col justify-between hover:border-white/40 transition-colors duration-300">
                                <p className="px-8 py-6 text-lg font-light text-white/90 md:text-xl tracking-wide leading-relaxed">
                                    &quot;{testimonial.description}&quot;
                                </p>
                                <div className="border-t border-white/20 w-full flex items-center justify-between px-8 py-4">
                                    <div className="flex gap-4 items-center">
                                        <img src={testimonial.avatar} alt='avatar' className="w-12 h-12 rounded-full object-cover border border-white/30" />
                                        <div className="flex flex-col justify-center">
                                            <h5 className="text-base font-medium text-white tracking-wide">{testimonial.name}</h5>
                                            <p className="text-white/60 text-sm">{testimonial.profession}</p>
                                        </div>
                                    </div>
                                    <div className="h-10 w-[1px] bg-white/20 hidden md:block"></div>
                                    <div className="hidden md:flex self-center items-center gap-2 text-white/50">
                                        <Icon className="w-6 h-6" strokeWidth={1.5} />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default FUITestimonialWithSlide;
