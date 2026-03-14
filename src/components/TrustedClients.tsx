import Image from "next/image";

const logos = [
    { src: "/clients/client1.png", name: "Enterprise Partner 1" },
    { src: "/clients/client2.png", name: "Enterprise Partner 2" },
    { src: "/clients/client3.png", name: "Enterprise Partner 3" },
    { src: "/clients/client4.png", name: "Enterprise Partner 4" },
    { src: "/clients/client5.png", name: "Enterprise Partner 5" },
    { src: "/clients/client6.png", name: "Enterprise Partner 6" },
];

export default function TrustedClients() {
    return (
        <section className="py-12 bg-white overflow-hidden border-b border-slate-50">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                        Global Enterprise Partners
                    </span>
                </div>

                <div className="relative w-full overflow-hidden">
                    {/* Gradient fade */}
                    <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

                    {/* Scrolling container */}
                    <div className="flex animate-marquee gap-16 items-center">
                        {[...logos, ...logos].map((logo, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center min-w-[120px] opacity-40 hover:opacity-100 transition duration-500"
                            >
                                <Image
                                    src={logo.src}
                                    alt={`${logo.name} - Terait Technologies Partner`}
                                    width={100}
                                    height={40}
                                    className="object-contain grayscale"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
