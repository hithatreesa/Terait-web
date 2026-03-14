import { Metadata } from 'next';
import { servicesData } from '@/data/servicesData';
import ServiceDetailClient from './ServiceDetailClient';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const slug = (await params).slug;
    const service = servicesData[slug];

    if (!service) {
        return {
            title: 'Service Not Found',
        };
    }

    return {
        title: service.title,
        description: service.description,
        alternates: {
            canonical: `/services/${slug}`,
        },
        openGraph: {
            title: `${service.title} | Terait Technologies`,
            description: service.description,
            url: `https://terait.com/services/${slug}`,
            images: [
                {
                    url: service.image || '/images/hero_bg.png',
                    width: 1200,
                    height: 630,
                    alt: service.title,
                },
            ],
        },
    };
}

export async function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({
        slug: slug,
    }));
}

export default async function Page({ params }: { params: { slug: string } }) {
    const slug = (await params).slug;
    const service = servicesData[slug];

    if (!service) {
        notFound();
    }

    return <ServiceDetailClient slug={slug} />;
}
