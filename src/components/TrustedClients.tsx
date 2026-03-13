"use client";

const logos = [
    "/clients/client1.png",
    "/clients/client2.png",
    "/clients/client3.png",
    "/clients/client4.png",
    "/clients/client5.png",
    "/clients/client6.png",
];

export default function TrustedClients() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-center text-3xl font-bold text-slate-900 mb-12">
                    Trusted By Businesses
                </h2>

                <div className="relative w-full overflow-hidden">

                    {/* Gradient fade */}
                    <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

                    {/* Scrolling container */}
                    <div className="flex animate-marquee gap-16 items-center">

                        {[...logos, ...logos].map((logo, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center min-w-[160px] opacity-70 hover:opacity-100 transition"
                            >
                                <img
                                    src={logo}
                                    alt="Client Logo"
                                    width={140}
                                    height={60}
                                    className="object-contain grayscale hover:grayscale-0 transition duration-300"
                                />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
}
