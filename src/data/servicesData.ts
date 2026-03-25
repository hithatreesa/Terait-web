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
    features: string[]; // High-level highlights
    detailedFeatures: DetailedFeature[]; // Modal subservices
    benefits: string[];
    benefitTiles: BenefitTile[];
    faqs: FAQ[];
    industries: string[];
    processFlow: ProcessStep[];
    caseStudy?: CaseStudy;
    image?: string;
    techStack: string[];
}

export const servicesData: Record<string, ServiceDetail> = {
    // Services (6)
    "prof-it-services": {
        slug: "prof-it-services", title: "Professional IT Services", icon: FaBriefcase,
        description: "IT consulting, deployment, support, and managed services to help businesses implement and maintain IT infrastructure.",
        problemStatement: "Organizations need robust infrastructure support to facilitate seamless cloud enablement and growth.",
        solutionStatement: "Strategic consulting and proactive managed services to ensure operational excellence and scalability.",
        features: ["IT Consulting & Roadmap", "Managed Support Services", "Cloud Enablement"],
        detailedFeatures: [
            { title: "IT Consulting", description: "Strategic technology planning and roadmaps.", icon: FaBriefcase },
            { title: "Deployment", description: "Seamless implementation of enterprise IT stacks.", icon: FaCheckCircle },
            { title: "IT Support", description: "Responsive maintenance and managed services.", icon: FaHeadset },
            { title: "Cloud Enablement", description: "Facilitating your journey to the cloud.", icon: FaCloud }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Enterprise", "SME"], processFlow: [], benefits: []
    },
    "cloud-enablement": {
        slug: "cloud-enablement", title: "Cloud Enablement Services", icon: FaCloud,
        description: "Specialized cloud migration, security, and automation to leverage the full power of the cloud.",
        problemStatement: "Complexity in cloud migration and security gaps hindering transformation.",
        solutionStatement: "Secure, automated frameworks for a cloud-first organization.",
        features: ["Cloud Migration", "Cloud Security", "Cloud Automation"],
        detailedFeatures: [
            { title: "Migration", description: "Seamless transition of workloads to cloud platforms.", icon: FaCloud },
            { title: "Security", description: "Advanced protection for cloud-based assets.", icon: FaShieldAlt },
            { title: "Automation", description: "Automating cloud operations for efficiency.", icon: FaRocket }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Tech", "Finance"], processFlow: [], benefits: []
    },
    "backup-recovery": {
        slug: "backup-recovery", title: "Backup & Disaster Recovery", icon: FaHistory,
        description: "Comprehensive backup solutions and disaster recovery strategies to safeguard against data loss.",
        problemStatement: "Risk of data loss due to unforeseen outages or cyber threats.",
        solutionStatement: "Automated data protection and rapid recovery protocols.",
        features: ["Data Backup", "Disaster Recovery", "Data Protection"],
        detailedFeatures: [
            { title: "Data Backup", description: "Secure on-premise and cloud data redundancy.", icon: FaDatabase },
            { title: "Disaster Recovery", description: "Rapid restoration and failover strategies.", icon: FaHistory },
            { title: "Data Protection", description: "Advanced security for sensitive business data.", icon: FaShieldAlt }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Legal", "Healthcare"], processFlow: [], benefits: []
    },
    "collaboration-productivity": {
        slug: "collaboration-productivity", title: "Collaboration & Productivity", icon: FaUsers,
        description: "Unified communication and collaboration tools for efficient in-office or remote work.",
        problemStatement: "Communication barriers in hybrid work environments.",
        solutionStatement: "Integrated platforms that bridge silos and boost team efficiency.",
        features: ["Communication Tools", "Collaboration Suits", "Secure File Sharing"],
        detailedFeatures: [
            { title: "Communication", description: "HD conferencing and team chat systems.", icon: FaPhoneAlt },
            { title: "Productivity", description: "Unified collaboration tools for teams.", icon: FaUsers },
            { title: "File Sharing", description: "Secure, compliant document sharing solutions.", icon: FaCheckCircle }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Remote-first", "Corporate"], processFlow: [], benefits: []
    },
    "business-apps": {
        slug: "business-apps", title: "Business Applications", icon: FaLaptopCode,
        description: "Integrated CRM, ERP, and digital signature services to streamline operations and document management.",
        problemStatement: "Disconnected business logic and manual document workflows.",
        solutionStatement: "Centralized platforms for customer management and resource planning.",
        features: ["CRM & ERP Systems", "Digital Signatures", "Document Management"],
        detailedFeatures: [
            { title: "CRM/ERP", description: "Customer relations and resource planning platforms.", icon: FaCogs },
            { title: "eSignatures", description: "Compliant digital signature workflows.", icon: FaCheckCircle },
            { title: "Doc Management", description: "Streamlined storage and retrieval of files.", icon: FaSitemap }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Real Estate", "Professional Services"], processFlow: [], benefits: []
    },
    "automation-devops": {
        slug: "automation-devops", title: "Automation & DevOps", icon: FaRocket,
        description: "RPA and workflow automation to optimize processes, with CI/CD platforms for smooth software development.",
        problemStatement: "Inefficient manual processes and slow software release cycles.",
        solutionStatement: "Modern DevOps pipelines and robotic process automation.",
        features: ["RPA & Workflow Automation", "CI/CD Platforms", "Version Control Tools"],
        detailedFeatures: [
            { title: "RPA", description: "Automating repetitive tasks with intelligent bots.", icon: FaCogs },
            { title: "CI/CD", description: "Automated development and deployment pipelines.", icon: FaSitemap },
            { title: "Version Control", description: "Secure and scalable code management tools.", icon: FaRocket }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Software Dev", "Banking"], processFlow: [], benefits: []
    },

    // Products (14)
    "office-equipment": {
        slug: "office-equipment", title: "Office Equipment & Peripherals", icon: FaIdCard,
        description: "Workplace efficiency and security through specialized shredders, laminators, and attendance systems.",
        problemStatement: "Need for better facility security and document hygiene in modern offices.",
        solutionStatement: "Providing safes, paper shredders, and biometrics to enhance the office environment.",
        features: ["Attendance Machines", "Paper Shredders", "Binding & Laminators", "Safes"],
        detailedFeatures: [
            { title: "Attendance", description: "Biometric and RFID attendance systems.", icon: FaIdCard },
            { title: "Security", description: "Safes and secure document disposal tools.", icon: FaLock },
            { title: "Efficiency", description: "Laminators and binding for pro documents.", icon: FaDesktop }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Corporate", "Education"], processFlow: [], benefits: []
    },
    "printing-imaging": {
        slug: "printing-imaging", title: "Printers & Imaging", icon: FaPrint,
        description: "A selection of inkjet, laser, and 3D printers for home, office, or industrial applications.",
        problemStatement: "Finding the balance between high-volume needs and precision quality.",
        solutionStatement: "Enterprise-grade laser, 3D, and large-format printing solutions.",
        features: ["Inkjet & Laser Printers", "Large Format Printers", "Multifunction Printers", "3D Printers"],
        detailedFeatures: [
            { title: "Laser & Inkjet", description: "Standard-setting home and office printers.", icon: FaPrint },
            { title: "3D Printing", description: "Advanced 3D printers for industrial needs.", icon: FaCogs },
            { title: "MFP", description: "Scanning and printing in a single device.", icon: FaDesktop }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Architects", "Designers"], processFlow: [], benefits: []
    },
    "mailing-solutions": {
        slug: "mailing-solutions", title: "Mailing Solutions", icon: FaEnvelope,
        description: "Email hosting and marketing automation to streamline email communication and marketing efforts.",
        problemStatement: "Unreliable email hosting and unmanaged marketing campaigns.",
        solutionStatement: "Secure email servers and mass email marketing automation platforms.",
        features: ["Email Hosting", "Mailing Lists", "Mass Email Services", "Marketing Automation"],
        detailedFeatures: [
            { title: "Hosting", description: "Secure, reliable email for your business.", icon: FaEnvelope },
            { title: "Marketing", description: "Mass email and marketing automation tools.", icon: FaRocket }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Retail", "Services"], processFlow: [], benefits: []
    },
    "audio-video": {
        slug: "audio-video", title: "Audio & Video Solutions", icon: FaVolumeUp,
        description: "Displays, IP phones, and conferencing systems to foster communication and collaboration.",
        problemStatement: "Sub-par AV quality in meeting spaces hindering global team work.",
        solutionStatement: "Professional HD displays, projectors, and video conferencing suites.",
        features: ["Displays & Projectors", "IP Phones", "Video Conferencing Systems"],
        detailedFeatures: [
            { title: "Visuals", description: "HD displays and boardroom projectors.", icon: FaDesktop },
            { title: "Audio", description: "IP phones and specialized team conferencing.", icon: FaPhoneAlt }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Hotels", "Corporate"], processFlow: [], benefits: []
    },
    "computer-systems": {
        slug: "computer-systems", title: "Computer Components & Systems", icon: FaLaptopCode,
        description: "CPUs, SSDs, and complete systems from laptops to high-end workstations.",
        problemStatement: "Sourcing reliable, high-performance computing for critical workflows.",
        solutionStatement: "Authorized supply of top-tier PCs, components, and workstations.",
        features: ["Desktops & Laptops", "Workstations & Gaming PCs", "Critical Components (CPU/SSD)"],
        detailedFeatures: [
            { title: "Systems", description: "Desktops, notebooks, and workstations.", icon: FaLaptopCode },
            { title: "Components", description: "CPUs, SSDs, GPUs, and Motherboards.", icon: FaDatabase }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Tech", "Individuals"], processFlow: [], benefits: []
    },
    "networking-solutions": {
        slug: "networking-solutions", title: "Networking Solutions", icon: FaNetworkWired,
        description: "Smooth and reliable connectivity with enterprise-grade routers, switches, and WAN optimization.",
        problemStatement: "Network bottlenecks and unreliable wireless coverage.",
        solutionStatement: "High-performance access points and industrial networking.",
        features: ["Routers & Switches", "Access Points", "WAN Optimization", "Industrial Networking"],
        detailedFeatures: [
            { title: "Connectivity", description: "Enterprise routers and L3 switches.", icon: FaNetworkWired },
            { title: "Optimization", description: "WAN and structured cabling solutions.", icon: FaSitemap }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Healthcare", "Logistics"], processFlow: [], benefits: []
    },
    "cloud-products": {
        slug: "cloud-products", title: "Cloud Solutions & Apps", icon: FaCloud,
        description: "Scalable and secure cloud hosting, SaaS, and business applications.",
        problemStatement: "Managing multiple disconnected cloud systems and high infrastructure costs.",
        solutionStatement: "Integrated IaaS, PaaS, and business productivity suites in the cloud.",
        features: ["Cloud Hosting & IaaS", "Global SaaS Apps", "Cloud Backup & DR"],
        detailedFeatures: [
            { title: "Solutions", description: "Hosting, IaaS, and PaaS architectures.", icon: FaServer },
            { title: "Biz Apps", description: "CRM, ERP, and doc management SaaS.", icon: FaCheckCircle }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Startups", "Enterprise"], processFlow: [], benefits: []
    },
    "aidc-pos": {
        slug: "aidc-pos", title: "AIDC / POS Solutions", icon: FaSitemap,
        description: "Barcode devices, RFID scanners, and POS terminals for seamless tracking and inventory.",
        problemStatement: "Inaccurate tracking and outdated point-of-sale systems.",
        solutionStatement: "State-of-the-art RFID and thermal printer solutions.",
        features: ["Barcode Devices", "RFID Printers & Scanners", "POS Terminals", "Thermal Printers"],
        detailedFeatures: [
            { title: "Retail", description: "POS terminals and fast thermal printers.", icon: FaDesktop },
            { title: "Tracking", description: "RFID scanners and barcode devices.", icon: FaSitemap }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Warehouse", "Retail"], processFlow: [], benefits: []
    },
    "security-surveillance": {
        slug: "security-surveillance", title: "Security & Surveillance", icon: FaCamera,
        description: "CCTV, IP cameras, and access control for robust premises and asset security.",
        problemStatement: "Physical safety concerns and lack of real-time monitoring.",
        solutionStatement: "Integrated IP camera networks and biometric management.",
        features: ["CCTV & IP Cameras", "Access Control Systems", "Video Management Systems"],
        detailedFeatures: [
            { title: "Monitoring", description: "CCTV and VMS cloud-based systems.", icon: FaCamera },
            { title: "Access", description: "Access control and biometric security.", icon: FaLock }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Pharma", "Logistics"], processFlow: [], benefits: []
    },
    "cybersecurity-products": {
        slug: "cybersecurity-products", title: "Cybersecurity Solutions", icon: FaShieldAlt,
        description: "Multi-layered protection with firewalls, antivirus, and identity management.",
        problemStatement: "Increasing cyber threats and risk of data breaches.",
        solutionStatement: "Advanced UTM, endpoint protection, and encryption gateways.",
        features: ["Firewalls & UTM", "Antivirus & EDR", "Identity Management"],
        detailedFeatures: [
            { title: "Defense", description: "Next-gen firewalls and identity management.", icon: FaShieldAlt },
            { title: "End-point", description: "Advanced antivirus and EDR solutions.", icon: FaLaptopCode }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Finance", "Legal"], processFlow: [], benefits: []
    },
    "power-backup": {
        slug: "power-backup", title: "Power & Backup Solutions", icon: FaLock,
        description: "Business continuity with reliable UPS systems, power management, and racks.",
        problemStatement: "Downtime caused by power fluctuations and facility cooling issues.",
        solutionStatement: "Online UPS, racks, cabinets, and precision cooling.",
        features: ["UPS Systems", "Power Management", "Cooling & Racks", "Precision Cooling"],
        detailedFeatures: [
            { title: "Critical Power", description: "Zero-latency UPS and power management.", icon: FaLock },
            { title: "Infrastructure", description: "Racks, cabinets, and cooling systems.", icon: FaServer }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["IT", "Healthcare"], processFlow: [], benefits: []
    },
    "mobility-smart": {
        slug: "mobility-smart", title: "Mobility & Smart Devices", icon: FaMobileAlt,
        description: "Connecting businesses with smartphones, tablets, and wearables for on-the-go productivity.",
        problemStatement: "Need for securely managed mobile devices in a hybrid workforce.",
        solutionStatement: "High-spec smartphones and fitness/smart trackers for business.",
        features: ["Smartphones & Tablets", "Wearables & Trackers", "Mobile Productivity"],
        detailedFeatures: [
            { title: "Mobility", description: "Smartphones and tablets for enterprise.", icon: FaMobileAlt },
            { title: "Smart Gear", description: "Wearables and smartwatches.", icon: FaCheckCircle }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Sales", "Individuals"], processFlow: [], benefits: []
    },
    "iot-solutions": {
        slug: "iot-solutions", title: "IoT & Smart Solutions", icon: FaCogs,
        description: "Industrial IoT, plant monitoring, and AI automation for advanced operational efficiency.",
        problemStatement: "Inefficient facility monitoring and lack of real-time telemetry.",
        solutionStatement: "Smart city technologies and industrial plant monitoring IoT.",
        features: ["Smart Cities & Automation", "Industrial IoT (IIoT)", "AI Video Analytics"],
        detailedFeatures: [
            { title: "Industrial", description: "IIoT and video analytics for plants.", icon: FaCogs },
            { title: "Automation", description: "Smart city and AI-based automation.", icon: FaSitemap }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Manufacturing", "Gov"], processFlow: [], benefits: []
    },
    "gaming-electronics": {
        slug: "gaming-electronics", title: "Gaming & Consumer Electronics", icon: FaGamepad,
        description: "High-performance gaming laptops, peripherals, and consoles for modern entertainment.",
        problemStatement: "General hardware failing to meet elite gaming performance standards.",
        solutionStatement: "Specialized ROG gaming PCs, AR/VR devices, and high-spec monitors.",
        features: ["Gaming Laptops & Monitors", "Consoles & AR/VR Gear", "High-End Peripherals"],
        detailedFeatures: [
            { title: "Gaming", description: "High-spec laptops and elite monitors.", icon: FaGamepad },
            { title: "Immersive", description: "AR/VR and immersive audio devices.", icon: FaDesktop }
        ],
        benefitTiles: [], faqs: [], techStack: [], industries: ["Individuals", "Creators"], processFlow: [], benefits: []
    }
};
