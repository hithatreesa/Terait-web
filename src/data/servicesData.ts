import { IconType } from "react-icons";
import {
    FaLaptopCode, FaCamera, FaServer, FaSitemap, FaWifi,
    FaCloud, FaDatabase, FaDesktop, FaHistory, FaCogs, FaShieldAlt, FaLock,
    FaPhoneAlt, FaHeadset, FaNetworkWired, FaRocket, FaCheckCircle, FaBriefcase,
    FaHandshake, FaUsers
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

export interface ServiceCategory {
    title: string;
    icon: IconType;
    color: string;
    description: string;
    items: string[];
}

export const servicesData: Record<string, ServiceDetail> = {
    "it-infra": {
        slug: "it-infra", title: "IT Infrastructure", icon: FaServer,
        description: "Enterprise-grade IT design, deployment, and managed support in Bangalore.",
        problemStatement: "Fragmented IT systems and poor infrastructure planning leading to frequent downtime.",
        solutionStatement: "Terait provides unified infrastructure design and proactive managed services to ensure business continuity.",
        features: ["IT Consulting", "Infrastructure Deployment", "Managed IT Services", "Professional IT Support"],
        detailedFeatures: [
            {
                title: "IT Consulting",
                description: "Strategic IT planning designed to align your technology infrastructure with your long-term business goals. We provide comprehensive roadmaps for scalable, secure, and cost-effective IT growth.",
                icon: FaBriefcase,
                impact: "Reduce IT spend by 25% while improving operational efficiency."
            },
            {
                title: "Managed Services",
                description: "Proactive, comprehensive monitoring and maintenance of your entire IT stack. We anticipate and resolve issues before they can impact your daily operations.",
                icon: FaCogs,
                impact: "Achieve 99.99% infrastructure uptime with zero unplanned disruptions."
            },
            {
                title: "IT Support",
                description: "Responsive on-site and remote helpdesk support tailored for enterprise needs. Our certified engineers guarantee rapid resolution times to keep your workforce productive.",
                icon: FaHeadset,
                impact: "Decrease average ticket resolution time by over 60%."
            }
        ],
        benefitTiles: [
            { title: "Scalability", description: "Infrastructure that grows with your business needs.", icon: FaRocket },
            { title: "Reliability", description: "99.9% uptime for all managed systems.", icon: FaShieldAlt }
        ],
        faqs: [
            { question: "What level of support do you offer?", answer: "We provide comprehensive monitoring and emergency on-site support during business hours and for critical incidents." }
        ],
        industries: ["Corporate", "Healthcare", "Manufacturing"],
        processFlow: [
            { title: "Audit", description: "Comprehensive assessment of current infrastructure." },
            { title: "Plan", description: "Designing a robust and scalable roadmap." },
            { title: "Deploy", description: "Professional setup and configuration." },
            { title: "Manage", description: "Continuous monitoring and priority support." }
        ],
        techStack: ["Dell EMC", "HPE", "VMware", "APC"],
        benefits: ["Proactive Management", "Cost Optimization", "Expert Support"]
    },
    "cloud-solutions": {
        slug: "cloud-solutions", title: "Cloud & Data", icon: FaCloud,
        description: "Scalable cloud migrations and high-performance data center architecture in Bangalore.",
        problemStatement: "High costs and scalability limits of on-premise legacy hardware.",
        solutionStatement: "Public, Private, and Hybrid cloud solutions using AWS, Azure, and Google Cloud.",
        features: ["AWS / Azure / GCP", "Cloud Migration", "Virtualization", "Hosting Services"],
        detailedFeatures: [
            {
                title: "Cloud Migration",
                description: "Seamless, risk-free transition of your legacy workloads to modern cloud architectures. Our expert engineers ensure zero data loss and minimal downtime during the entire migration process.",
                icon: FaCloud,
                impact: "Accelerate deployment times by 40% with automated cloud provisioning."
            },
            {
                title: "Data Center",
                description: "Modern, secure, and energy-efficient data center design and deployment. We build highly resilient physical infrastructures to support your most critical enterprise applications.",
                icon: FaServer,
                impact: "Reduce power and cooling costs by up to 30% with optimized layouts."
            },
            {
                title: "Virtualization",
                description: "Advanced hardware consolidation integrating VMware and Hyper-V solutions. Optimize your physical server resources for maximum efficiency, easier backups, and rapid disaster recovery.",
                icon: FaCogs,
                impact: "Consolidate hardware footprint by 70% while boosting performance."
            }
        ],
        benefitTiles: [
            { title: "Agility", description: "Deploy resources instantly to meet market demands.", icon: FaRocket },
            { title: "Security", description: "Enterprise-grade encryption and access controls.", icon: FaLock }
        ],
        faqs: [
            { question: "Which cloud provider do you recommend?", answer: "We evaluate your specific needs to recommend AWS, Azure, or GCP." }
        ],
        industries: ["Startups", "E-commerce", "Finance"],
        processFlow: [
            { title: "Assessment", description: "Workload analysis and cloud readiness check." },
            { title: "Strategy", description: "Choosing the right cloud model (Public/Hybrid)." },
            { title: "Migration", description: "Secure transfer of data and applications." },
            { title: "Optimization", description: "Right-sizing resources for cost efficiency." }
        ],
        techStack: ["AWS", "Azure", "GCP", "VMware"],
        benefits: ["Global Scale", "Disaster Recovery", "Reduced Capex"]
    },
    "cybersecurity": {
        slug: "cybersecurity", title: "Cybersecurity Services", icon: FaLock,
        description: "Multi-layered defense against evolving digital threats and data breaches for Bangalore businesses.",
        problemStatement: "Increasing frequency of ransomware and sophisticated cyber-attacks.",
        solutionStatement: "Next-gen firewalls, endpoint security, and robust disaster recovery plans.",
        features: ["Firewalls & EDR", "Endpoint Security", "Backup Solutions", "Disaster Recovery"],
        detailedFeatures: [
            {
                title: "Firewalls",
                description: "Next-generation perimeter defense equipped with AI-driven threat intelligence. We actively filter and block malicious traffic before it ever reaches your internal enterprise network.",
                icon: FaShieldAlt,
                impact: "Block 99.9% of unauthorized access attempts automatically."
            },
            {
                title: "DR Planning",
                description: "Comprehensive Disaster Recovery protocols to guarantee business continuity. Our automated backup systems ensure rapid restoration of your critical data after any unexpected incident or outage.",
                icon: FaHistory,
                impact: "Achieve a Recovery Time Objective (RTO) of less than 15 minutes."
            },
            {
                title: "Endpoint Security",
                description: "Advanced malware protection covering every device on your corporate network. We secure laptops, mobile phones, and servers against zero-day exploits and sophisticated ransomware attacks.",
                icon: FaLaptopCode,
                impact: "Eliminate endpoint vulnerabilities with active threat hunting."
            }
        ],
        benefitTiles: [
            { title: "Protection", description: "Zero-trust architecture for total digital safety.", icon: FaShieldAlt },
            { title: "Compliance", description: "Meeting global standards like GDPR and ISO 27001.", icon: FaCheckCircle }
        ],
        faqs: [
            { question: "How often should we backup?", answer: "We implement real-time or daily backups based on your RPO/RTO." }
        ],
        industries: ["Legal", "Finance", "Government"],
        processFlow: [
            { title: "Scanning", description: "Identifying vulnerabilities across your network." },
            { title: "Hardening", description: "Applying patches and security policies." },
            { title: "Protection", description: "Deploying active defense layers." },
            { title: "Monitoring", description: "Proactive threat detection and response." }
        ],
        techStack: ["Sophos", "Fortinet", "CrowdStrike", "Veeam"],
        benefits: ["Peace of Mind", "Data Integrity", "Brand Trust"]
    },
    "networking": {
        slug: "networking", title: "Networking Solutions", icon: FaNetworkWired,
        description: "High-speed, redundant network architecture for seamless communication in Bangalore.",
        problemStatement: "Network latency and dead zones impacting office productivity.",
        solutionStatement: "Fiber optic backbones, SD-WAN, and enterprise-grade WiFi 6/7.",
        features: ["Routers & Switches", "Enterprise Wireless", "SD-WAN", "Structured Cabling"],
        detailedFeatures: [
            {
                title: "Routers & Switches",
                description: "Enterprise-grade networking hardware specifically optimized for high-capacity branch and core deployments. We establish secure, resilient transit paths to ensure seamless and rapid data flow.",
                icon: FaNetworkWired,
                image: "/images/services/router.jpg",
                impact: "Reduced overall network latency by 60% with edge-optimized routing."
            },
            {
                title: "SD-WAN",
                description: "Centralized network control and intelligent traffic steering across multiple corporate locations. Eliminate bandwidth constraints while ensuring priority routing for critical VoIP and video applications.",
                icon: FaSitemap,
                image: "/images/services/sdwan.jpg",
                impact: "Saved 30% on annual bandwidth costs utilizing smart path selection."
            },
            {
                title: "Wireless",
                description: "High-density WiFi 6/7 solutions built for high-performance, mobile-first workplaces. We perform rigorous predictive RF surveys to guarantee uninterrupted connection speeds and total campus coverage.",
                icon: FaWifi,
                image: "/images/services/wireless.jpg",
                impact: "Eliminated 95% of WiFi coverage dead zones in large office campus."
            }
        ],
        benefitTiles: [
            { title: "Speed", description: "10Gbps+ ready backbones for lag-free work.", icon: FaRocket },
            { title: "Stability", description: "Redundant links to eliminate single points of failure.", icon: FaShieldAlt }
        ],
        faqs: [
            { question: "Can you fix our slow WiFi?", answer: "Yes, we perform heatmap audits to eliminate dead zones." }
        ],
        industries: ["Hospitality", "Education", "Retail"],
        processFlow: [
            { title: "Survey", description: "Physical and logical site audit." },
            { title: "Topology", description: "Designing secure and fast network maps." },
            { title: "Installation", description: "Certified cabling and hardware setup." },
            { title: "Testing", description: "Signal strength and throughput validation." }
        ],
        techStack: ["Cisco", "Aruba", "Ubiquiti", "CommScope"],
        benefits: ["Seamless Roaming", "Traffic Shaping", "Future-ready"]
    },
    "business-apps": {
        slug: "business-apps", title: "Business Applications", icon: FaLaptopCode,
        description: "Streamlining operations with integrated CRM, ERP, and digital workflows.",
        problemStatement: "Disconnected business processes and manual data entry errors.",
        solutionStatement: "Unified platforms for managing customers, resources, and documentation.",
        features: ["CRM & ERP", "Digital Signatures", "Document Management", "Custom Workflows"],
        detailedFeatures: [
            {
                title: "ERP Systems",
                description: "Centralized operational management integrating your finance, HR, and supply chain into a single pane of glass. Maximize resource visibility and eliminate frustrating departmental data silos.",
                icon: FaCogs,
                impact: "Increase gross operational efficiency by 35% through centralized data."
            },
            {
                title: "Digital Docs",
                description: "Secure, fully compliant paperless document workflows and e-signing platforms. We automate your tedious approval cycles and guarantee strict regulatory audit trails.",
                icon: FaCheckCircle,
                impact: "Accelerate contract turnaround times from weeks to mere hours."
            },
            {
                title: "Custom Apps",
                description: "Tailored software applications built exclusively for your unique business logic and requirements. We develop highly scalable web and mobile infrastructure to give you a true competitive advantage.",
                icon: FaLaptopCode,
                impact: "Automate 100% of legacy manual data-entry workflows."
            }
        ],
        benefitTiles: [
            { title: "Integrity", description: "Single source of truth for all business data.", icon: FaDatabase },
            { title: "Visibility", description: "Real-time dashboards for better decision making.", icon: FaDesktop }
        ],
        faqs: [
            { question: "Can we integrate with existing apps?", answer: "Yes, we specialize in API-led integrations for seamless data flow." }
        ],
        industries: ["Logistics", "Real Estate", "Professional Services"],
        processFlow: [
            { title: "Logic Audit", description: "Mapping your current business processes." },
            { title: "Selection", description: "Choosing the right platform or custom build." },
            { title: "Development", description: "Integration and customization of tools." },
            { title: "Training", description: "Ensuring high adoption rates across your team." }
        ],
        techStack: ["Microsoft Dynamics", "Odoo", "Docusign", "SharePoint"],
        benefits: ["Automation", "Efficiency", "Process Control"]
    },
    "collaboration": {
        slug: "collaboration", title: "Collaboration", icon: FaUsers,
        description: "Empowering teams with secure email, video, and file sharing tools.",
        problemStatement: "Poor communication silos and insecure file sharing habits.",
        solutionStatement: "Unified communication platforms that bridge the gap between remote and on-site teams.",
        features: ["Email Solutions", "Video Conferencing", "Team Collaboration", "Secure File Sharing"],
        detailedFeatures: [
            {
                title: "Unified Comms",
                description: "Combining enterprise voice, HD video conferencing, and instant chat into a single resilient platform. We break down corporate communication silos and empower rapid decision making across regions.",
                icon: FaPhoneAlt,
                impact: "Reduce internal communication friction by 50% across departments."
            },
            {
                title: "Cloud Email",
                description: "Professional, encrypted cloud email suites protected by advanced ML-driven spam and phishing filters. Guarantee total data sovereignty and 99.9% uptime for your most critical business communications.",
                icon: FaCloud,
                impact: "Prevent 99.9% of targeted phishing attempts with proactive filters."
            },
            {
                title: "File Sync",
                description: "Secure, granular access to corporate documentation from any device, anywhere in the world. Enforce strict data-loss prevention policies while empowering your remote workforce seamlessly.",
                icon: FaSitemap,
                impact: "Enable 100% secure resource access for hybrid and remote teams."
            }
        ],
        benefitTiles: [
            { title: "Productivity", description: "Reducing meeting friction and email clutter.", icon: FaRocket },
            { title: "Unity", description: "Keeping hybrid teams connected and aligned.", icon: FaHandshake }
        ],
        faqs: [
            { question: "Is Google Workspace or M365 better?", answer: "We analyze your usage patterns to suggest the best fit." }
        ],
        industries: ["Marketing", "HR", "Remote-first Companies"],
        processFlow: [
            { title: "Audit", description: "Analyzing current communication gaps." },
            { title: "Deployment", description: "Setting up tenant and security policies." },
            { title: "Migration", description: "Moving legacy mailboxes to the cloud." },
            { title: "Onboarding", description: "Training staff on collaboration features." }
        ],
        techStack: ["Google Workspace", "Microsoft 365", "Zoom", "Slack"],
        benefits: ["Modern Workplace", "Secure Sharing", "Better Teamwork"]
    },
    "automation": {
        slug: "automation", title: "Automation", icon: FaRocket,
        description: "Accelerating innovation with RPA, CI/CD, and streamlined workflows.",
        problemStatement: "Slow software release cycles and repetitive manual tasks.",
        solutionStatement: "Implementing robotic automation and modern DevOps practices.",
        features: ["RPA / Automation", "Workflow Design", "CI/CD Pipelines", "Version Control"],
        detailedFeatures: [
            {
                title: "RPA",
                description: "Robotic Process Automation deploying intelligent software 'bots' to handle your high-volume, rules-based office tasks. We liberate your human workforce to focus on high-value, creative problem-solving.",
                icon: FaCogs,
                impact: "Save over 1,000 manual administrative hours per quarter."
            },
            {
                title: "Pipeline Setup",
                description: "Automating rigorous code builds, regression testing, and production deployments via modern CI/CD. Ship robust software faster and drastically reduce the risk of critical downtime.",
                icon: FaSitemap,
                impact: "Accelerate software release velocity by an incredible 400%."
            },
            {
                title: "GitOps",
                description: "Managing entire infrastructure fleets through declarative version control methodologies. Enforce strict configuration standards and immediately roll back failing environments with a single click.",
                icon: FaShieldAlt,
                impact: "Eliminate configuration drift and achieve 100% infrastructure parity."
            }
        ],
        benefitTiles: [
            { title: "Velocity", description: "Releasing features faster with fewer errors.", icon: FaRocket },
            { title: "Efficiency", description: "Freeing up humans for creative, high-value work.", icon: FaUsers }
        ],
        faqs: [
            { question: "What is RPA?", answer: "Robotic Process Automation uses 'bots' to handle repetitive UI tasks." }
        ],
        industries: ["Software Dev", "BPO", "Banking"],
        processFlow: [
            { title: "Logic Mapping", description: "Finding bottlenecks in dev/ops cycles." },
            { title: "Pilot", description: "Testing automation on a small use case." },
            { title: "Scaling", description: "Rolling out automation across departments." },
            { title: "Refining", description: "Continuous improvements to the pipelines." }
        ],
        techStack: ["Jenkins", "UiPath", "Docker", "Terraform"],
        benefits: ["Speed to Market", "Error Reduction", "Developer Joy"]
    },
    "smart-solutions": {
        slug: "smart-solutions", title: "CCTV & Smart IT Solutions Bangalore", icon: FaDesktop,
        description: "Premium IT hardware and AI-powered surveillance systems in Bangalore.",
        problemStatement: "Dealing with multiple hardware vendors and outdated IoT systems.",
        solutionStatement: "End-to-end procurement and integration of smart devices and core hardware.",
        features: ["Computers & Printers", "CCTV & Surveillance", "POS / RFID", "IoT & Smart Devices"],
        detailedFeatures: [
            {
                title: "Computing",
                description: "Provisioning high-performance laptops, powerful desktops, and intensive graphical workstations. We meticulously match optimal hardware specifications to your team's specific demanding workloads.",
                icon: FaDesktop,
                impact: "Boost individual workstation performance and speed by 40%."
            },
            {
                title: "Surveillance",
                description: "AI-powered, ultra-HD IP camera arrays featuring deep physical analytics and biometric access controls. Monitor, record, and secure your expansive facilities from anywhere in the world, in real-time.",
                icon: FaCamera,
                impact: "Provide 360-degree verifiable campus security around the clock."
            },
            {
                title: "Smart IoT",
                description: "Deploying integrated industrial sensors and smart office automation across diverse environments. Harvest continuous real-time telemetry to drastically optimize your facility's energy utilization.",
                icon: FaCogs,
                impact: "Decrease annual commercial facility power consumption by 25%."
            }
        ],
        benefitTiles: [
            { title: "Authorized", description: "Genuine products with priority warranty support.", icon: FaShieldAlt },
            { title: "Integrated", description: "Hardware that 'talks' to your software ecosystem.", icon: FaSitemap }
        ],
        faqs: [
            { question: "Do you offer hardware leasing?", answer: "Yes, we provide flexible leasing for corporate equipment fleets." }
        ],
        industries: ["Logistics", "Retail", "Residential Estates"],
        processFlow: [
            { title: "Selection", description: "Helping you choose the right specs for your team." },
            { title: "Procurement", description: "Authorized sourcing at competitive prices." },
            { title: "Setup", description: "On-site imaging, installation, and testing." },
            { title: "Lifecycle", description: "Maintenance, upgrades, and secure disposal." }
        ],
        techStack: ["Dell", "Hikvision", "Honeywell", "Zebra"],
        benefits: ["Unified Fleet", "Smart Security", "Fast Deployment"]
    }
};

