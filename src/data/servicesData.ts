import { IconType } from "react-icons";
import { 
    FaUsers, FaVolumeUp, FaHandshake, FaChalkboard, FaComments, FaLaptopCode,
    FaAws, FaGoogle, FaMicrosoft, FaCamera, FaServer, FaProjectDiagram, FaSitemap, FaWifi, FaFingerprint,
    FaCloud, FaDatabase, FaDesktop, FaEnvelope, FaHistory, FaCogs, FaEye, FaShieldAlt, FaLock,
    FaPhoneAlt, FaRegAddressBook, FaHeadset, FaVideo, FaNetworkWired
} from "react-icons/fa";

export interface ServiceDetail {
    slug: string; title: string; icon: IconType; description: string;
    features: string[]; benefits: string[]; industries: string[]; image?: string;
}
export interface ServiceCategory {
    title: string;
    icon: IconType;
    color: string;
    description: string;
    items: string[];
}

export const servicesData: Record<string, ServiceDetail> = {
    "av-enabled-board-rooms": {
        slug: "av-enabled-board-rooms", title: "AV Enabled Board Rooms", icon: FaUsers,
        description: "Transform your executive meetings with state-of-the-art Audio/Video integration. Our board room solutions are designed to provide seamless, high-definition communication and presentation capabilities for modern enterprises.",
        features: ["Ultra-HD Video Conferencing Systems", "Professional Acoustic Treatment", "Integrated Control Systems (iPad/Touch panel)", "Automated Lighting and Blind Control", "Superior Wireless Presentation Tech"],
        benefits: ["Enhanced Executive Decision Making", "Professional Global Collaboration", "Simplified Meeting Management", "Reduced Hardware Friction"],
        industries: ["Corporate", "Finance", "Legal", "Government"], image: "/images/services/av_hero.png"
    },
    "auditorium-solutions": {
        slug: "auditorium-solutions", title: "Auditorium Solutions", icon: FaVolumeUp,
        description: "Scale your message with professional sound and visual systems for large venues. We specialize in designing and installing high-performance AV systems for auditoriums and large event spaces.",
        features: ["Line Array Sound Systems", "Large Format Projection / LED Walls", "Stage Lighting & Control", "Remote Broadcast Capabilities"],
        benefits: ["Crystal Clear Audio Performance", "Immersive Visual Experience", "Reliable Large-scale Performance"],
        industries: ["Education", "Corporate", "Entertainment"], image: "/images/services/av_hero.png"
    },
    "conference-room-av": {
        slug: "conference-room-av", title: "Conference Room AV", icon: FaHandshake,
        description: "Standardize your meeting spaces with reliable AV setups that just work. Our conference room solutions focus on ease of use and consistent performance across your facility.",
        features: ["All-in-one Video Bars", "Table-top Charging & Connectivity", "Dual Display Setups", "Noise-cancelling Microphones"],
        benefits: ["Quick Meeting Starts", "Universal Compatibility (Teams/Zoom)", "Elegant Cables-free Look"],
        industries: ["Corporate", "SaaS", "Real Estate"], image: "/images/services/av_hero.png"
    },
    "smart-classroom": {
        slug: "smart-classroom", title: "Smart Classroom", icon: FaChalkboard,
        description: "Revolutionize learning with interactive digital solutions. We integrate interactive displays, smart boards, and classroom management software to enhance student engagement.",
        features: ["Interactive Flat Panels", "Student Feedback Systems", "Classroom Audio Reinforcement", "Digital Content Recording"],
        benefits: ["Increased Student Engagement", "Facilitated Hybrid Learning", "Interactive Teaching Tools"],
        industries: ["Education", "Training Centers"], image: "/images/services/av_hero.png"
    },
    "huddle-room-solutions": {
        slug: "huddle-room-solutions", title: "Huddle Room Solutions", icon: FaComments,
        description: "Enable quick team collaborations in small spaces. Our huddle room solutions provide everything needed for impromptu brainstorming and remote check-ins.",
        features: ["Wide-angle Cameras", "Compact Soundbars", "Single-cable Docking", "Room Booking Systems"],
        benefits: ["Maximization of Small Spaces", "Spontaneous Collaboration", "Budget-friendly Scalability"],
        industries: ["Tech", "Marketing Agencies"], image: "/images/services/av_hero.png"
    },
    "virtual-classroom": {
        slug: "virtual-classroom", title: "Virtual Classroom", icon: FaLaptopCode,
        description: "Robust online teaching platforms with integrated hardware. We provide the equipment and setup needed for professional-grade virtual instruction and webinars.",
        features: ["Green Screen Setup", "Professional Studio Lighting", "Multi-camera Switching", "Dedicated Streaming PC"],
        benefits: ["Global Student Reach", "Professional Online Brand", "High-quality Content Recording"],
        industries: ["Higher Ed", "EdTech", "Professional Development"], image: "/images/services/av_hero.png"
    },
    "aws-cloud": {
        slug: "aws-cloud", title: "AWS Cloud Services", icon: FaAws,
        description: "Architecting, migrating, and managing secure workloads on Amazon Web Services. We help you leverage the full power of the world's most comprehensive cloud platform.",
        features: ["EC2 & Lambda Management", "S3 Storage Optimization", "VPC Networking & Security", "Serverless Architecture Design"],
        benefits: ["Infinite Scalability", "Pay-as-you-go Efficiency", "World-class Security Compliance"],
        industries: ["Startups", "Enterprise", "E-commerce"], image: "/images/services/cloud_hero.png"
    },
    "google-cloud": {
        slug: "google-cloud", title: "Google Cloud Platform", icon: FaGoogle,
        description: "Leverage Google's powerful infrastructure for data analytics and high-performance computing. We specializ in GCP migrations and hybrid cloud strategies.",
        features: ["Google Kubernetes Engine (GKE)", "BigQuery Analytics", "Compute Engine Optimization", "Cloud Firestore Implementation"],
        benefits: ["Advanced AI/ML Integration", "Fast Network Speeds", "Innovate with Open Source Tech"],
        industries: ["Data-driven Tech", "Retail", "Gaming"], image: "/images/services/cloud_hero.png"
    },
    "microsoft-azure": {
        slug: "microsoft-azure", title: "Microsoft Azure", icon: FaMicrosoft,
        description: "Powering enterprise productivity with Azure's integrated cloud services. We bridge your on-premise Windows environment with the cloud seamlessly.",
        features: ["Azure Active Directory Sync", "SQL Database Managed Instances", "Virtual Desktop Infrastructure", "App Service Deployment"],
        benefits: ["Seamless Microsoft Integration", "Top-tier Compliance", "Robust Hybrid Capabilities"],
        industries: ["Healthcare", "Finance", "Government", "Manufacturing"], image: "/images/services/cloud_hero.png"
    },
    "cctv-solutions": {
        slug: "cctv-solutions", title: "CCTV & Surveillance", icon: FaCamera,
        description: "Advanced IP-based surveillance systems for 24/7 security. Our high-definition cameras and intelligent monitoring software keep your assets protected.",
        features: ["4K IP Cameras", "Network Video Recorders (NVR)", "Remote Mobile Access", "AI Motion Detection & Alerts"],
        benefits: ["Crime Deterrence", "Real-time Monitoring", "Evidence Collection & Playback"],
        industries: ["Retail", "Warehousing", "Residential", "Industrial"], image: "/images/services/networking_hero.png"
    },
    "data-center-setup": {
        slug: "data-center-setup", title: "Data Center Design", icon: FaServer,
        description: "End-to-end data center infrastructure from cabling to cooling. We build reliable hearts for your IT operations focusing on uptime and efficiency.",
        features: ["Rack Optimization", "UPS & Power Redundancy", "HVAC Cooling Solutions", "Environmental Monitoring"],
        benefits: ["99.99% Uptime Focus", "Operational Efficiency", "Secure Physical Infrastructure"],
        industries: ["Banks", "IT Services", "Government Agencies"], image: "/images/services/networking_hero.png"
    },
    "it-networking": {
        slug: "it-networking", title: "Enterprise Networking", icon: FaProjectDiagram,
        description: "Building fast, reliable, and secure corporate networks. We design the backbone of your business communication to handle high-bandwidth needs.",
        features: ["Core Switching & Routing", "Fiber Optic Terminations", "VLAN Segmentation", "Network Performance Monitoring"],
        benefits: ["Zero Connectivity Downtime", "Optimized Data Flow", "Enhanced Internal Security"],
        industries: ["Corporate", "Logistics", "Hospitality"], image: "/images/services/networking_hero.png"
    },
    "lan-wan-setup": {
        slug: "lan-wan-setup", title: "LAN/WAN Connectivity", icon: FaSitemap,
        description: "Connecting your local offices and remote branches securely. Our WAN solutions focus on SD-WAN and MPLS for optimized multi-site communications.",
        features: ["SD-WAN Deployment", "VPN Point-to-Point", "Leased Line Integration", "Firewall Router Management"],
        benefits: ["Secure Inter-branch Traffic", "Centralized Management", "Lower Bandwidth Costs"],
        industries: ["Retail Chains", "Multi-office Firms"], image: "/images/services/networking_hero.png"
    },
    "wifi-solutions": {
        slug: "wifi-solutions", title: "Enterprise WiFi", icon: FaWifi,
        description: "High-density wireless solutions for offices and hotels. We eliminate dead zones and provide secure guest and staff access with seamless roaming.",
        features: ["Heatmap Site Surveys", "Mesh Networking", "Guest Captive Portals", "WPA3 Enterprise Security"],
        benefits: ["Seamless Mobile Productivity", "Enhanced Guest Experience", "Simplified Network Policy"],
        industries: ["Hospitality", "Education", "Offices"], image: "/images/services/networking_hero.png"
    },
    "biometric-systems": {
        slug: "biometric-systems", title: "Biometric Access Control", icon: FaFingerprint,
        description: "Modern facility security with fingerprint and facial recognition. We replace traditional keys with secure, trackable biometric entries.",
        features: ["Facial Recognition Terminals", "Attendance Tracking Software", "Card & Pin Integration", "Cloud-based User Management"],
        benefits: ["Enhanced Facility Security", "Automated Payroll Integration", "Contactless Entry (Face ID)"],
        industries: ["Corporate", "Healthcare", "Factories"], image: "/images/services/networking_hero.png"
    },
    "cloud-management": {
        slug: "cloud-management", title: "Managed Cloud Services", icon: FaCloud,
        description: "24/7 monitoring and optimization of your cloud environment. We take the burden of cloud maintenance off your team so you can focus on innovation.",
        features: ["Cost Optimization Reports", "Auto-scaling Policies", "Compliance Monitoring", "Dispatch patches & Updates"],
        benefits: ["Reduced Monthly Bills", "Continuous Security Compliance", "Peace of Mind Management"],
        industries: ["SaaS", "E-commerce", "Enterprise"], image: "/images/services/managed_hero.png"
    },
    "data-backup": {
        slug: "data-backup", title: "Data Protection & Backup", icon: FaDatabase,
        description: "Automated, redundant backups to ensure you never lose a file. We provide both on-site and cloud-based backup strategies.",
        features: ["Incremental Background Backups", "End-to-end Encryption", "Versioning & Archiving", "Fast Recovery Testing"],
        benefits: ["Protection from Ransomware", "Regulatory Data Compliance", "Instant Business Continuity"],
        industries: ["Legal", "Medical", "Finance"], image: "/images/services/managed_hero.png"
    },
    "desktop-support": {
        slug: "desktop-support", title: "Managed Desktop Support", icon: FaDesktop,
        description: "Keeping your employees productive with reliable IT helpdesk support. We manage your entire desktop fleet, from setup to troubleshooting.",
        features: ["Remote Helpdesk Support", "OS Patch Management", "Software Deployment", "Endpoint Security Monitoring"],
        benefits: ["Zero Productivity Hits", "Consistent Employee Experience", "Proactive Trouble Identification"],
        industries: ["All Office-based Businesses"], image: "/images/services/managed_hero.png"
    },
    "email-management": {
        slug: "email-management", title: "Enterprise Email Services", icon: FaEnvelope,
        description: "Secure, collaborative email solutions for teams. We manage your migration to Microsoft 365 or Google Workspace and ensure high deliverability.",
        features: ["M365/Google Workspace Sync", "Email Security & Anti-spam", "Archive & E-discovery", "Alias & Forwarding Management"],
        benefits: ["Professional Communication", "Unified Security Polices", "Effortless Collaboration"],
        industries: ["Corporate", "Agencies"], image: "/images/services/managed_hero.png"
    },
    "disaster-recovery": {
        slug: "disaster-recovery", title: "Disaster Recovery Planning", icon: FaHistory,
        description: "Business continuity solutions for the worst-case scenarios. We ensure your critical systems can failover to the cloud within minutes of an outage.",
        features: ["Failover Testing", "RTO/RPO Strategy Design", "Cloud Site Replication", "Standardized DR Runbooks"],
        benefits: ["Minimum Revenue Loss", "Client Trust & Continuity", "Resilience to Local Disasters"],
        industries: ["Banking", "Healthcare", "E-commerce"], image: "/images/services/managed_hero.png"
    },
    "server-management": {
        slug: "server-management", title: "Server Administration", icon: FaCogs,
        description: "Professional management of Windows and Linux servers. We ensure your application servers and databases are always patched and performing optimally.",
        features: ["OS Hardening & Security", "Performance Tuning", "Automated System Backups", "User Access Permissions"],
        benefits: ["Maximized Application Performance", "Secure Data Storage", "Long-term Server Health"],
        industries: ["IT", "Corporate", "Financial Services"], image: "/images/services/managed_hero.png"
    },
    "security-surveillance": {
        slug: "security-surveillance", title: "Smart Security Monitoring", icon: FaEye,
        description: "AI-powered monitoring that detects threats before they happen. We combine traditional CCTV with cutting-edge vision AI for proactive security.",
        features: ["Behavioral Analytics", "License Plate Recognition", "Integrated Alarm Systems", "Centralized Command Centers"],
        benefits: ["Proactive Threat Detection", "Reduced False Alarms", "One-view Remote Management"],
        industries: ["VIP Residential", "Logistics", "Smart Cities"], image: "/images/services/security_hero.png"
    },
    "network-security": {
        slug: "network-security", title: "Cybersecurity & Firewalls", icon: FaShieldAlt,
        description: "Protecting your digital perimeter from cyber threats. We implement zero-trust architectures and next-gen firewalls to secure your data.",
        features: ["Next-Gen Firewall (NGFW)", "Intrusion Detection (IDS)", "DDoS Protection", "Regular Security Audits"],
        benefits: ["Data Leakage Prevention", "Safe Remote Access (VPN)", "Protection from Hackers"],
        industries: ["Enterprise", "Banking", "Gov"], image: "/images/services/security_hero.png"
    },
    "firewall-setup": {
        slug: "firewall-setup", title: "Firewall Configuration", icon: FaLock,
        description: "Precise traffic rules to keep your business network secure. We specialize in Fortinet, Sophos, and Cisco Meraki deployments.",
        features: ["Deep Packet Inspection", "Web Filtering Polices", "Log & Traffic Reports", "Firmware Cycle Management"],
        benefits: ["Controlled Internet Usage", "Secure Network Borders", "Simplified Compliance Logging"],
        industries: ["Small Biz", "Large Corporate"], image: "/images/services/security_hero.png"
    },
    "voip-systems": {
        slug: "voip-systems", title: "Managed VoIP Systems", icon: FaPhoneAlt,
        description: "Crystal clear, cloud-based voice communication. Our VoIP solutions replace old phone lines with flexible, feature-rich internet calling.",
        features: ["Cloud PBX Management", "Softphone Mobile Apps", "Call Recording & Queues", "CRM Integration"],
        benefits: ["Lower Communication Costs", "Flexibility for Remote Work", "Advanced Call Analytics"],
        industries: ["Sales Teams", "Customer Support"], image: "/images/services/voip_hero.png"
    },
    "epabx-systems": {
        slug: "epabx-systems", title: "EPABX Infrastructure", icon: FaRegAddressBook,
        description: "Reliable internal communication for large facilities and offices. We specialize in both digital and analog PABX installations.",
        features: ["Internal Extension Mapping", "Auto-attendant setup", "Intercom System Integration", "Voicemail to Email"],
        benefits: ["Fast Internal Transfer", "Professional Front Office", "Proven Reliability"],
        industries: ["Hospitals", "Hotels", "Large Offices"], image: "/images/services/voip_hero.png"
    },
    "phone-management": {
        slug: "phone-management", title: "Corporate Phone Support", icon: FaHeadset,
        description: "End-to-end management of your corporate telephony. We handle everything from vendor management to handset troubleshooting.",
        features: ["Handset Provisioning", "billing Audits", "Troubleshooting Support", "Number Portability Handling"],
        benefits: ["Simplified Vendor Relations", "Predictable Telecom Bills", "Maintained Fleet Health"],
        industries: ["Corporate", "Government Agencies"], image: "/images/services/voip_hero.png"
    }
};

export const servicesCategories = [
    {
        title: "Audio/Video System Integration", icon: FaVideo, color: "bg-orange-50 text-orange-600",
        description: "Specializing in AV enabled boardrooms, auditoriums, and smart classroom solutions.",
        items: ["av-enabled-board-rooms", "auditorium-solutions", "conference-room-av", "smart-classroom", "huddle-room-solutions", "virtual-classroom"]
    },
    {
        title: "Cloud Solutions", icon: FaCloud, color: "bg-orange-50 text-orange-600",
        description: "Seamless cloud migration and management for AWS, GCP, and Microsoft Azure.",
        items: ["aws-cloud", "google-cloud", "microsoft-azure"]
    },
    {
        title: "IT Infrastructure Services", icon: FaNetworkWired, color: "bg-orange-50 text-orange-600",
        description: "Comprehensive IT infrastructure including CCTV, Data Centers, and LAN/WAN solutions.",
        items: ["cctv-solutions", "data-center-setup", "it-networking", "lan-wan-setup", "wifi-solutions", "biometric-systems"]
    },
    {
        title: "IT Managed Services", icon: FaHeadset, color: "bg-orange-50 text-orange-600",
        description: "Full-range managed services from backup solutions to server and desktop support.",
        items: ["cloud-management", "data-backup", "desktop-support", "email-management", "disaster-recovery", "server-management"]
    },
    {
        title: "Network Security", icon: FaShieldAlt, color: "bg-orange-50 text-orange-600",
        description: "Ensuring your security with advanced surveillance, network protection, and firewalls.",
        items: ["security-surveillance", "network-security", "firewall-setup"]
    },
    {
        title: "VoIP & Phone Services", icon: FaPhoneAlt, color: "bg-orange-50 text-orange-600",
        description: "Reliable communication systems including VoIP, EPABX, and phone management.",
        items: ["voip-systems", "epabx-systems", "phone-management"]
    }
];
