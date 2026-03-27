import { IconType } from "react-icons";
import {
    FaLaptopCode, FaCamera, FaServer, FaSitemap, FaWifi,
    FaCloud, FaDatabase, FaDesktop, FaHistory, FaCogs, FaShieldAlt, FaLock,
    FaPhoneAlt, FaHeadset, FaNetworkWired, FaRocket, FaCheckCircle, FaBriefcase,
    FaUsers, FaPrint, FaEnvelope, FaGamepad, FaVolumeUp, FaMobileAlt, FaIdCard
} from "react-icons/fa";

export interface FAQ {
    question: string;
    answer: string;
}

export interface DetailedFeature {
    title: string;
    description: string;
    icon: IconType;
    image?: string;
    impact?: string;
}

export interface BenefitTile {
    title: string;
    description: string;
    icon: IconType;
}

export interface ProcessStep {
    title: string;
    description: string;
}

export interface CaseStudy {
    title: string;
    description: string;
    result: string;
}

export interface ServiceDetail {
    slug: string;
    title: string;
    icon: IconType;
    description: string;
    problemStatement: string;
    solutionStatement: string;
    features: string[]; // Legacy
    detailedFeatures: DetailedFeature[];
    benefits: string[]; // Legacy
    benefitTiles: BenefitTile[];
    faqs: FAQ[];
    industries: string[];
    processFlow: ProcessStep[];
    caseStudy?: CaseStudy;
    image?: string;
    techStack: string[];
}

export type ServiceData = ServiceDetail;

export const servicesData: Record<string, ServiceDetail> = {
    "prof-it-services": {
        slug: "prof-it-services", title: "Professional IT Services", icon: FaBriefcase,
        description: "Comprehensive IT consulting, deployment, and managed support for enterprise infrastructure.",
        problemStatement: "Complexity in implementing and maintaining robust IT infrastructure while facilitating cloud growth.",
        solutionStatement: "Strategic consulting and proactive managed services to ensure seamless IT operations and cloud enablement.",
        features: ["IT Consulting", "Implementation & Deployment", "IT Support Services", "Managed IT Services", "Cloud Enablement"],
        detailedFeatures: [
            { title: "IT Consulting", description: "Strategic technology roadmaps to align IT with business goals.", icon: FaBriefcase },
            { title: "Managed Services", description: "Proactive monitoring and maintenance of your entire IT stack.", icon: FaCogs },
            { title: "IT Support", description: "Responsive helpdesk and on-site technical assistance.", icon: FaHeadset }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Enterprise", "Mid-market"], processFlow: [], benefits: []
    },
    "cloud-enablement": {
        slug: "cloud-enablement", title: "Cloud Enablement Services", icon: FaCloud,
        description: "Expert cloud migration, security, and automation to leverage the full power of the cloud.",
        problemStatement: "Organizations struggling to fully utilize cloud benefits due to migration risks and security gaps.",
        solutionStatement: "Specialized migration and security frameworks to accelerate cloud transformation.",
        features: ["Cloud Migration", "Cloud Security", "Cloud Automation", "Hybrid Cloud Strategy"],
        detailedFeatures: [
            { title: "Cloud Migration", description: "Seamless transition of workloads to AWS, Azure, or GCP.", icon: FaCloud },
            { title: "Cloud Security", description: "Multi-layered protection for your cloud resources.", icon: FaShieldAlt },
            { title: "Automation", description: "Automating cloud workflows for operational efficiency.", icon: FaRocket }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Tech", "Finance"], processFlow: [], benefits: []
    },
    "backup-recovery": {
        slug: "backup-recovery", title: "Backup & Disaster Recovery", icon: FaHistory,
        description: "Safeguarding business data with comprehensive backup and rapid disaster recovery strategies.",
        problemStatement: "Risk of critical data loss due to unforeseen outages or cyber threats.",
        solutionStatement: "Automated backup solutions and proven DR protocols to ensure business continuity.",
        features: ["Data Backup", "Disaster Recovery Strategy", "Data Protection Services", "RPO/RTO Optimization"],
        detailedFeatures: [
            { title: "Data Backup", description: "Secure, off-site and on-premise data redundancy.", icon: FaDatabase },
            { title: "Disaster Recovery", description: "Automated failover and rapid restoration systems.", icon: FaHistory }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Legal", "Healthcare", "Finance"], processFlow: [], benefits: []
    },
    "collaboration-productivity": {
        slug: "collaboration-productivity", title: "Collaboration & Productivity", icon: FaUsers,
        description: "Empowering teams with secure email, video conferencing, and file-sharing tools.",
        problemStatement: "Communication silos and inefficient workflows in distributed teams.",
        solutionStatement: "Unified communication platforms that bridge the gap for hybrid workforces.",
        features: ["Productivity Tools", "Communication Tools", "Secure File Sharing", "Remote Collaboration"],
        detailedFeatures: [
            { title: "Modern Workplace", description: "M365 and Google Workspace implementation.", icon: FaCheckCircle },
            { title: "Video Solutions", description: "Enterprise video conferencing and team chat.", icon: FaPhoneAlt }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Remote-first", "Corporate"], processFlow: [], benefits: []
    },
    "business-apps": {
        slug: "business-apps", title: "Business Applications", icon: FaLaptopCode,
        description: "Streamlining operations with integrated CRM, ERP, and digital signature workflows.",
        problemStatement: "Manual processes and disconnected systems leading to operational inefficiencies.",
        solutionStatement: "Unified platforms for customer relationships and resource management.",
        features: ["CRM Systems", "ERP Solutions", "Digital Signatures", "Document Management"],
        detailedFeatures: [
            { title: "ERP & CRM", description: "Integrated management for sales, finance, and HR.", icon: FaCogs },
            { title: "eSignatures", description: "Secure, compliant digital document signing.", icon: FaCheckCircle }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Real Estate", "Professional Services"], processFlow: [], benefits: []
    },
    "automation-devops": {
        slug: "automation-devops", title: "Automation & DevOps", icon: FaRocket,
        description: "Accelerating innovation with RPA, CI/CD, and streamlined developer workflows.",
        problemStatement: "Slow release cycles and repetitive manual tasks slowing down growth.",
        solutionStatement: "Robotic automation and modern DevOps practices for speed and efficiency.",
        features: ["RPA & Workflow Automation", "CI/CD Platforms", "Version Control Tools", "GitOps Implementation"],
        detailedFeatures: [
            { title: "RPA", description: "Automating high-volume repetitive tasks with bots.", icon: FaCogs },
            { title: "CI/CD", description: "Automated build and deployment pipelines.", icon: FaSitemap }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Software Dev", "Banking"], processFlow: [], benefits: []
    },
    "office-equipment": {
        slug: "office-equipment", title: "Office Equipment & Peripherals", icon: FaIdCard,
        description: "Enhancing workplace security and efficiency with specialized office machinery.",
        problemStatement: "Need for secure document disposal and efficient physical record management.",
        solutionStatement: "High-quality shredders, laminators, and attendance systems for modern offices.",
        features: ["Attendance Machines", "Paper Shredders", "Laminators", "Binding Machines", "Safes"],
        detailedFeatures: [
            { title: "Workplace Security", description: "Attendance and safe storage solutions.", icon: FaLock },
            { title: "Document Care", description: "Laminating and binding for professional output.", icon: FaDesktop }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Schools", "SMEs", "Corporate"], processFlow: [], benefits: []
    },
    "printing-imaging": {
        slug: "printing-imaging", title: "Printers & Imaging", icon: FaPrint,
        description: "Comprehensive selection of printers for home, office, and industrial applications.",
        problemStatement: "Finding the right printing solution for diverse volume and quality needs.",
        solutionStatement: "A full range from inkjet and laser to 3D and large format industrial printers.",
        features: ["Inkjet & Laser Printers", "Large Format Printers", "Multifunction Printers", "3D Printers"],
        detailedFeatures: [
            { title: "Enterprise Print", description: "High-volume MFPs and managed print services.", icon: FaPrint },
            { title: "Specialized Imaging", description: "Large format and 3D printing solutions.", icon: FaDesktop }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Marketing", "Architecture", "Education"], processFlow: [], benefits: []
    },
    "mailing-solutions": {
        slug: "mailing-solutions", title: "Mailing Solutions", icon: FaEnvelope,
        description: "Streamlining email communication and marketing automation for business growth.",
        problemStatement: "Complexity in managing mass emails and ensuring marketing deliverability.",
        solutionStatement: "Dedicated email hosting and marketing automation tools.",
        features: ["Email Hosting", "Mailing Lists", "Mass Email Services", "Marketing Automation"],
        detailedFeatures: [
            { title: "Email Hosting", description: "Secure, professional email for your domain.", icon: FaEnvelope },
            { title: "Marketing Automation", description: "Automated email campaigns and tracking.", icon: FaRocket }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Retail", "Services"], processFlow: [], benefits: []
    },
    "audio-video": {
        slug: "audio-video", title: "Audio & Video Solutions", icon: FaVolumeUp,
        description: "Advanced AV solutions to foster better team communication and collaboration.",
        problemStatement: "Poor audio/video quality in meetings hindering communication.",
        solutionStatement: "Professional displays, IP phones, and video conferencing systems.",
        features: ["Displays & Projectors", "IP Phones", "Video Conferencing Systems", "Audio Peripherals"],
        detailedFeatures: [
            { title: "Conferencing", description: "HD video and audio systems for boardrooms.", icon: FaUsers },
            { title: "Displays", description: "Digital signage and interactive displays.", icon: FaDesktop }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Hospitality", "Corporate"], processFlow: [], benefits: []
    },
    "computer-systems": {
        slug: "computer-systems", title: "Computer Components & Systems", icon: FaLaptopCode,
        description: "Essential components and complete computing systems to power your workforce.",
        problemStatement: "Finding reliable hardware that matches specific workload requirements.",
        solutionStatement: "Procurement of high-end CPUs, SSDs, Laptops, and graphical Workstations.",
        features: ["Desktops & Laptops", "Workstations & Gaming PCs", "CPUs & Motherboards", "Graphic Cards & SSDs"],
        detailedFeatures: [
            { title: "Full Systems", description: "Business laptops and high-end workstations.", icon: FaLaptopCode },
            { title: "Components", description: "High-performance internal hardware upgrades.", icon: FaDatabase }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Developers", "Gamers", "Corporate"], processFlow: [], benefits: []
    },
    "networking-solutions": {
        slug: "networking-solutions", title: "Networking Solutions", icon: FaNetworkWired,
        description: "Smooth and reliable connectivity for modern high-performance organizations.",
        problemStatement: "Network dead zones and latency impacting office productivity.",
        solutionStatement: "Enterprise-grade routers, switches, and WAN optimization solutions.",
        features: ["Routers & Switches", "Access Points", "WAN Optimization", "Structured Cabling"],
        detailedFeatures: [
            { title: "Core Networking", description: "Enterprise routers and L3 switches.", icon: FaNetworkWired },
            { title: "Wireless Hub", description: "High-density WiFi 6/7 access points.", icon: FaWifi }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Education", "Retail", "Hospitality"], processFlow: [], benefits: []
    },
    "cloud-products": {
        slug: "cloud-products", title: "Cloud & SaaS Solutions", icon: FaCloud,
        description: "Scalable cloud business applications for CRM, ERP, and document management.",
        problemStatement: "Managing diverse SaaS applications and cloud storage efficiently.",
        solutionStatement: "Centralized cloud ecosystems for CRM, ERP, and file sharing.",
        features: ["Hosting & SaaS", "IaaS & PaaS", "Cloud Backup", "Document Management"],
        detailedFeatures: [
            { title: "SaaS Apps", description: "Cloud-based CRM and ERP implementations.", icon: FaCheckCircle },
            { title: "Cloud Hosting", description: "Scalable and secure web and app hosting.", icon: FaServer }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Startups", "Finance", "E-commerce"], processFlow: [], benefits: []
    },
    "aidc-pos": {
        slug: "aidc-pos", title: "AIDC / POS Solutions", icon: FaSitemap,
        description: "Innovative tracking and inventory management with RFID and barcode technology.",
        problemStatement: "Errors in manual tracking and slow checkout processes.",
        solutionStatement: "Integrated barcode scanners, RFID printers, and POS terminals.",
        features: ["Barcode Devices", "RFID Printers & Scanners", "POS Terminals", "Thermal Printers"],
        detailedFeatures: [
            { title: "Retail Solutions", description: "Fast and reliable POS terminal systems.", icon: FaDesktop },
            { title: "Tracking", description: "Contactless RFID and barcode scanners.", icon: FaSitemap }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Logistics", "Retail"], processFlow: [], benefits: []
    },
    "security-surveillance": {
        slug: "security-surveillance", title: "Security & Surveillance", icon: FaCamera,
        description: "Robust physical security with AI-powered CCTV and access control systems.",
        problemStatement: "Physical security vulnerabilities and lack of verifiable evidence.",
        solutionStatement: "IP camera arrays and biometric systems for total facility protection.",
        features: ["CCTV & IP Cameras", "Access Control Systems", "Video Management Systems", "VMS Solutions"],
        detailedFeatures: [
            { title: "Surveillance", description: "High-definition AI-powered camera networks.", icon: FaCamera },
            { title: "Access Control", description: "Biometric and RFID entry management.", icon: FaLock }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Manufacturing", "Corporate"], processFlow: [], benefits: []
    },
    "cybersecurity-products": {
        slug: "cybersecurity-products", title: "Cybersecurity Solutions", icon: FaShieldAlt,
        description: "Protecting businesses from cyber threats with multi-layered defense solutions.",
        problemStatement: "Increasing frequency of ransomware and sophisticated data breaches.",
        solutionStatement: "Next-gen firewalls, encryption, and proactive endpoint protection.",
        features: ["Firewalls & UTM", "Antivirus & EDR", "Endpoint Protection", "Encryption & Identity"],
        detailedFeatures: [
            { title: "Perimeter Defense", description: "AI-driven firewalls and UTM gateways.", icon: FaShieldAlt },
            { title: "Device Security", description: "Advanced EDR and malware protection.", icon: FaLaptopCode }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Finance", "Legal", "Government"], processFlow: [], benefits: []
    },
    "power-backup": {
        slug: "power-backup", title: "Power & Backup Solutions", icon: FaLock,
        description: "Ensuring continuous operation and protection against power failures.",
        problemStatement: "Sudden power outages causing equipment damage and data loss.",
        solutionStatement: "Reliable online UPS systems, cooling systems, and server racks.",
        features: ["Online UPS Systems", "Power Management", "Cooling Systems", "Racks & Cabinets"],
        detailedFeatures: [
            { title: "Critical Power", description: "Zero-latency UPS systems for server rooms.", icon: FaLock },
            { title: "Facility Infrastructure", description: "Precision cooling and server rack management.", icon: FaServer }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Data Centers", "Healthcare"], processFlow: [], benefits: []
    },
    "mobility-smart": {
        slug: "mobility-smart", title: "Mobility & Smart Devices", icon: FaMobileAlt,
        description: "Staying connected and productive on the go with smartphones and wearables.",
        problemStatement: "Enabling a productive mobile workforce with secure and reliable devices.",
        solutionStatement: "Provisioning high-performance smartphones, tablets, and smart devices.",
        features: ["Smartphones & Tablets", "Wearables & Fitness Trackers", "Smartwatches", "Mobile Productivity"],
        detailedFeatures: [
            { title: "Mobile Workspace", description: "Enterprise-grade mobile devices for teams.", icon: FaMobileAlt },
            { title: "Smart Systems", description: "Wearables and ecosystem integration.", icon: FaCheckCircle }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Logistics", "Sales", "Consumer"], processFlow: [], benefits: []
    },
    "iot-solutions": {
        slug: "iot-solutions", title: "IoT & Smart Solutions", icon: FaCogs,
        description: "Advanced IoT solutions for smart cities, industrial monitoring, and AI automation.",
        problemStatement: "Inefficient manual monitoring of large-scale industrial assets.",
        solutionStatement: "Building smart, connected ecosystems with video analytics and AI.",
        features: ["Smart Cities", "Industrial IoT", "Plant Monitoring", "Video Analytics"],
        detailedFeatures: [
            { title: "Industrial IoT", description: "Real-time telemetry for factory floors.", icon: FaCogs },
            { title: "Smart Automation", description: "AI-based facility and city management.", icon: FaSitemap }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Manufacturing", "Urban Planning"], processFlow: [], benefits: []
    },
    "gaming-electronics": {
        slug: "gaming-electronics", title: "Gaming & Consumer Electronics", icon: FaGamepad,
        description: "High-performance gaming hardware and consoles for the entertainment industry.",
        problemStatement: "Finding specialized hardware that can handle modern high-end gaming.",
        solutionStatement: "Premium gaming laptops, monitors, peripherals, and AR/VR devices.",
        features: ["Gaming Laptops", "Consoles & AR/VR", "Gaming Monitors", "Peripherals"],
        detailedFeatures: [
            { title: "Gaming Hub", description: "Highest spec laptops and console systems.", icon: FaGamepad },
            { title: "Immersive Tech", description: "AR/VR devices and high-refresh monitors.", icon: FaDesktop }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Gaming", "Individuals"], processFlow: [], benefits: []
    }
};
