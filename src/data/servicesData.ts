import { IconType } from "react-icons";
import { 
    FaUsers, FaVolumeUp, FaHandshake, FaChalkboard, FaComments, FaLaptopCode,
    FaAws, FaGoogle, FaMicrosoft, FaCamera, FaServer, FaProjectDiagram, FaSitemap, FaWifi, FaFingerprint,
    FaCloud, FaDatabase, FaDesktop, FaEnvelope, FaHistory, FaCogs, FaEye, FaShieldAlt, FaLock,
    FaPhoneAlt, FaRegAddressBook, FaHeadset, FaVideo, FaNetworkWired, FaRocket, FaCheckCircle, FaBriefcase
} from "react-icons/fa";

export interface FAQ {
    question: string;
    answer: string;
}

export interface DetailedFeature {
    title: string;
    description: string;
    icon: IconType;
}

export interface BenefitTile {
    title: string;
    description: string;
    icon: IconType;
}

export interface ServiceDetail {
    slug: string;
    title: string;
    icon: IconType;
    description: string;
    problemStatement: string;
    solutionStatement: string;
    features: string[]; // Legacy for backward compatibility if needed, but we'll use detailedFeatures
    detailedFeatures: DetailedFeature[];
    benefits: string[]; // Legacy
    benefitTiles: BenefitTile[];
    faqs: FAQ[];
    industries: string[];
    image?: string;
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
        description: "Transform your executive meetings with state-of-the-art Audio/Video integration in Bangalore.",
        problemStatement: "Poor audio-visual setup in boardrooms leads to communication gaps and unprofessional executive meetings.",
        solutionStatement: "Terait provides high-definition AV integration, professional acoustic treatment, and seamless control systems.",
        features: ["Ultra-HD Video Conferencing Systems", "Professional Acoustic Treatment", "Integrated Control Systems", "Automated Lighting", "Superior Wireless Presentation Tech"],
        detailedFeatures: [
            { title: "HD Conferencing", description: "Crystal clear video and audio for global collaboration.", icon: FaVideo },
            { title: "Smart Control", description: "Intuitive iPad/Touch panel control for all room functions.", icon: FaCogs },
            { title: "Acoustics", description: "Professional sound treatment for noise-free meetings.", icon: FaVolumeUp }
        ],
        benefits: ["Enhanced Executive Decision Making", "Professional Global Collaboration", "Simplified Meeting Management"],
        benefitTiles: [
            { title: "Reliability", description: "Consistent performance for critical business meetings.", icon: FaShieldAlt },
            { title: "Scalability", description: "Easily upgrade your setup as your business grows.", icon: FaRocket }
        ],
        faqs: [
            { question: "Do you provide installation in Bangalore?", answer: "Yes, we provide end-to-end installation and support across Bangalore." }
        ],
        industries: ["Corporate", "Finance", "Legal", "Government"], image: "/images/services/av_hero.png"
    },
    // ... adding basic info to others to satisfy interface
    "auditorium-solutions": {
        slug: "auditorium-solutions", title: "Auditorium Solutions", icon: FaVolumeUp,
        description: "Scale your message with professional sound and visual systems in Bangalore.",
        problemStatement: "Large venues often suffer from poor sound coverage and low-quality visual displays.",
        solutionStatement: "We design high-performance AV systems featuring line array sound and large LED walls.",
        features: ["Line Array Sound Systems", "Large Format Projection / LED Walls", "Stage Lighting & Control", "Remote Broadcast Capabilities"],
        detailedFeatures: [{ title: "LED Walls", description: "High-brightness displays for large audiences.", icon: FaEye }],
        benefits: ["Crystal Clear Audio Performance", "Immersive Visual Experience"],
        benefitTiles: [{ title: "Impact", description: "Captivate your audience with stunning visuals.", icon: FaRocket }],
        faqs: [{ question: "Do you handle outdoor events?", answer: "Yes, we have specialized equipment for both indoor and outdoor venues." }],
        industries: ["Education", "Corporate", "Entertainment"], image: "/images/services/av_hero.png"
    },
    "conference-room-av": {
        slug: "conference-room-av", title: "Conference Room AV", icon: FaHandshake,
        description: "Standardize your meeting spaces with reliable AV setups in Bangalore.",
        problemStatement: "Technical glitches during meetings waste time and frustrate teams.",
        solutionStatement: "Terait provides standardized, easy-to-use conference room solutions that just work.",
        features: ["All-in-one Video Bars", "Table-top Connectivity", "Dual Display Setups", "Noise-cancelling Mics"],
        detailedFeatures: [{ title: "One-Touch Join", description: "Join meetings instantly with single-cable connectivity.", icon: FaHandshake }],
        benefits: ["Quick Meeting Starts", "Universal Compatibility"],
        benefitTiles: [{ title: "User Friendly", description: "Simple interfaces that require zero training.", icon: FaCheckCircle }],
        faqs: [{ question: "Is it compatible with Zoom?", answer: "Yes, our solutions work perfectly with Zoom, Teams, and Webex." }],
        industries: ["Corporate", "SaaS", "Real Estate"], image: "/images/services/av_hero.png"
    },
    "smart-classroom": {
        slug: "smart-classroom", title: "Smart Classroom", icon: FaChalkboard,
        description: "Revolutionize learning with interactive digital solutions in Bangalore.",
        problemStatement: "Traditional teaching methods often fail to engage modern students effectively.",
        solutionStatement: "We integrate interactive displays and smart boards to create engaging learning environments.",
        features: ["Interactive Flat Panels", "Student Feedback Systems", "Audio Reinforcement", "Digital Content Recording"],
        detailedFeatures: [{ title: "Interactive Panels", description: "Engage students with touch-enabled 4K displays.", icon: FaChalkboard }],
        benefits: ["Increased Student Engagement", "Facilitated Hybrid Learning"],
        benefitTiles: [{ title: "Innovation", description: "Lead the way in modern education technology.", icon: FaRocket }],
        faqs: [{ question: "Do you provide training?", answer: "Yes, we provide comprehensive training for teachers and staff." }],
        industries: ["Education", "Training Centers"], image: "/images/services/av_hero.png"
    },
    "huddle-room-solutions": {
        slug: "huddle-room-solutions", title: "Huddle Room Solutions", icon: FaComments,
        description: "Enable quick team collaborations in small spaces in Bangalore.",
        problemStatement: "Small teams often lack the right tools for quick, impromptu brainstorming.",
        solutionStatement: "Our huddle room solutions provide compact, professional AV tools for small spaces.",
        features: ["Wide-angle Cameras", "Compact Soundbars", "Single-cable Docking", "Room Booking Systems"],
        detailedFeatures: [{ title: "Compact Setup", description: "Professional AV quality in a small footprint.", icon: FaComments }],
        benefits: ["Spontaneous Collaboration", "Maximization of Small Spaces"],
        benefitTiles: [{ title: "Agility", description: "Enable fast-paced team collaboration any time.", icon: FaRocket }],
        faqs: [{ question: "Is it affordable for startups?", answer: "Yes, our huddle room packages are highly cost-effective." }],
        industries: ["Tech", "Marketing Agencies"], image: "/images/services/av_hero.png"
    },
    "virtual-classroom": {
        slug: "virtual-classroom", title: "Virtual Classroom", icon: FaLaptopCode,
        description: "Robust online teaching platforms with integrated hardware in Bangalore.",
        problemStatement: "Low-quality video and audio ruin the virtual learning experience for students.",
        solutionStatement: "Terait provides professional studio setups with high-quality streaming hardware.",
        features: ["Green Screen Setup", "Professional Studio Lighting", "Multi-camera Switching", "Dedicated Streaming PC"],
        detailedFeatures: [{ title: "Studio Quality", description: "Broadcast-grade video and audio for educators.", icon: FaLaptopCode }],
        benefits: ["Global Student Reach", "Professional Online Brand"],
        benefitTiles: [{ title: "Reach", description: "Expand your educational reach globally.", icon: FaVolumeUp }],
        faqs: [{ question: "Can we record sessions?", answer: "Yes, high-quality recording is built into the workflow." }],
        industries: ["Higher Ed", "EdTech", "Professional Development"], image: "/images/services/av_hero.png"
    },
    "aws-cloud": {
        slug: "aws-cloud", title: "AWS Cloud Services", icon: FaAws,
        description: "Architecting, migrating, and managing secure workloads on Amazon Web Services in Bangalore.",
        problemStatement: "Insecure and unoptimized cloud setups lead to data breaches and soaring monthly bills.",
        solutionStatement: "Terait provides secure AWS architecture design, cost optimization, and 24/7 managed cloud services.",
        features: ["EC2 & Lambda Management", "S3 Storage Optimization", "VPC Networking & Security", "Serverless Architecture Design"],
        detailedFeatures: [
            { title: "EC2 Management", description: "Optimized compute instances for high-performance workloads.", icon: FaServer },
            { title: "S3 Optimization", description: "Secure and cost-effective data storage solutions.", icon: FaDatabase },
            { title: "Cloud Security", description: "VPC and IAM configurations to protect your digital assets.", icon: FaShieldAlt }
        ],
        benefits: ["Infinite Scalability", "Pay-as-you-go Efficiency", "World-class Security"],
        benefitTiles: [
            { title: "Scalability", description: "Grow your infrastructure instantly with your business.", icon: FaRocket },
            { title: "Cost Control", description: "Reduce cloud spend with our expert optimization.", icon: FaDatabase }
        ],
        faqs: [{ question: "Can you help with AWS migration?", answer: "Yes, we handle seamless migration from on-premise or other clouds to AWS." }],
        industries: ["Startups", "Enterprise", "E-commerce"], image: "/images/services/cloud_hero.png"
    },
    "google-cloud": {
        slug: "google-cloud", title: "Google Cloud Platform", icon: FaGoogle,
        description: "Leverage Google's powerful infrastructure for data analytics and high-performance computing in Bangalore.",
        problemStatement: "Businesses often struggle to leverage data analytics and AI due to legacy infrastructure.",
        solutionStatement: "We specialize in GCP migrations and hybrid cloud strategies for data-driven innovation.",
        features: ["Google Kubernetes Engine (GKE)", "BigQuery Analytics", "Compute Engine Optimization", "Cloud Firestore Implementation"],
        detailedFeatures: [{ title: "BigQuery", description: "Fast, highly scalable data warehouse for analytics.", icon: FaDatabase }],
        benefits: ["Advanced AI/ML Integration", "Fast Network Speeds", "Innovate with Open Source"],
        benefitTiles: [{ title: "Data Power", description: "Unlock insights from your business data with GCP.", icon: FaProjectDiagram }],
        faqs: [{ question: "is GCP better than AWS?", answer: "It depends on your needs; GCP excels in data analytics and AI integration." }],
        industries: ["Data-driven Tech", "Retail", "Gaming"], image: "/images/services/cloud_hero.png"
    },
    "microsoft-azure": {
        slug: "microsoft-azure", title: "Microsoft Azure", icon: FaMicrosoft,
        description: "Powering enterprise productivity with Azure's integrated cloud services in Bangalore.",
        problemStatement: "Bridging on-premise systems with the cloud can be complex and cause downtime.",
        solutionStatement: "Terait ensures seamless integration of your Windows environment with Azure cloud services.",
        features: ["Azure Active Directory Sync", "SQL Database Managed Instances", "Virtual Desktop Infrastructure", "App Service Deployment"],
        detailedFeatures: [{ title: "Azure AD", description: "Centrally manage users and secure access across your apps.", icon: FaUsers }],
        benefits: ["Seamless Microsoft Integration", "Top-tier Compliance", "Robust Hybrid Capabilities"],
        benefitTiles: [{ title: "Hybrid Cloud", description: "The best of both on-premise and cloud worlds.", icon: FaCloud }],
        faqs: [{ question: "Do you support Azure Stack?", answer: "Yes, we provide support for both public and private Azure environments." }],
        industries: ["Healthcare", "Finance", "Government", "Manufacturing"], image: "/images/services/cloud_hero.png"
    },
    "cctv-solutions": {
        slug: "cctv-solutions", title: "CCTV & Surveillance", icon: FaCamera,
        description: "Advanced IP-based surveillance systems for 24/7 security in Bangalore.",
        problemStatement: "Poor quality surveillance leads to security blind spots and unusable evidence.",
        solutionStatement: "Our high-definition HD cameras and remote access software keep your assets protected 24/7.",
        features: ["4K IP Cameras", "Network Video Recorders (NVR)", "Remote Mobile Access", "AI Motion Detection & Alerts"],
        detailedFeatures: [
            { title: "HD Cameras", description: "Crystal clear 4K visuals for identification and evidence.", icon: FaCamera },
            { title: "Remote Access", description: "Monitor your premises from anywhere in the world on your phone.", icon: FaVideo },
            { title: "Night Vision", description: "Superior thermal and infrared imaging for total darkness.", icon: FaEye }
        ],
        benefits: ["Crime Deterrence", "Real-time Monitoring", "Evidence Collection"],
        benefitTiles: [
            { title: "Safety", description: "Protect your staff and assets with 24/7 monitoring.", icon: FaShieldAlt },
            { title: "AI Alerts", description: "Get instant alerts for any suspicious activities.", icon: FaRocket }
        ],
        faqs: [{ question: "Can I view cameras on my phone?", answer: "Yes, we provide a secure mobile app for 24/7 remote monitoring." }],
        industries: ["Retail", "Warehousing", "Residential", "Industrial"], image: "/images/services/networking_hero.png"
    },
    "data-center-setup": {
        slug: "data-center-setup", title: "Data Center Design", icon: FaServer,
        description: "End-to-end data center infrastructure from cabling to cooling in Bangalore.",
        problemStatement: "Improper data center planning leads to frequent downtime and inefficient energy usage.",
        solutionStatement: "We build reliable data centers focusing on maximum uptime and energy efficiency.",
        features: ["Rack Optimization", "UPS & Power Redundancy", "HVAC Cooling Solutions", "Environmental Monitoring"],
        detailedFeatures: [{ title: "Cooling", description: "Smart HVAC solutions to prevent equipment overheating.", icon: FaCogs }],
        benefits: ["99.99% Uptime Focus", "Operational Efficiency", "Secure Physical Infrastructure"],
        benefitTiles: [{ title: "Efficiency", description: "Optimized power and cooling for lower Opex.", icon: FaRocket }],
        faqs: [{ question: "Do you handle relocations?", answer: "Yes, we provide professional data center relocation services." }],
        industries: ["Banks", "IT Services", "Government Agencies"], image: "/images/services/networking_hero.png"
    },
    "it-networking": {
        slug: "it-networking", title: "Enterprise Networking", icon: FaProjectDiagram,
        description: "Building fast, reliable, and secure corporate networks in Bangalore.",
        problemStatement: "Unstable networks lead to slow application performance and lost productivity.",
        solutionStatement: "Terait designs secure, high-bandwidth netwoks featuring cabling, router setup, and security.",
        features: ["Core Switching & Routing", "Fiber Optic Terminations", "VLAN Segmentation", "Network Performance Monitoring"],
        detailedFeatures: [
            { title: "Cabling", description: "Organized, high-speed fiber and Cat6 structural cabling.", icon: FaNetworkWired },
            { title: "Router Setup", description: "Professional configuration for secure and fast routing.", icon: FaSitemap },
            { title: "WiFi Solutions", description: "Seamless, high-density wireless coverage for your office.", icon: FaWifi }
        ],
        benefits: ["Zero Connectivity Downtime", "Optimized Data Flow", "Enhanced Internal Security"],
        benefitTiles: [
            { title: "High Speed", description: "Experience lag-free connectivity across your facility.", icon: FaRocket },
            { title: "Security", description: "Built-in protection for all your network traffic.", icon: FaShieldAlt }
        ],
        faqs: [{ question: "Do you offer wireless audits?", answer: "Yes, we perform heatmap surveys to eliminate dead zones." }],
        industries: ["Corporate", "Logistics", "Hospitality"], image: "/images/services/networking_hero.png"
    },
    "lan-wan-setup": {
        slug: "lan-wan-setup", title: "LAN/WAN Connectivity", icon: FaSitemap,
        description: "Connecting your local offices and remote branches securely in Bangalore.",
        problemStatement: "Insecure inter-branch traffic is a major target for cyberattacks.",
        solutionStatement: "We provide secure VPN and SD-WAN solutions for optimized multi-site communications.",
        features: ["SD-WAN Deployment", "VPN Point-to-Point", "Leased Line Integration", "Firewall Router Management"],
        detailedFeatures: [{ title: "SD-WAN", description: "Intelligent traffic steering for multi-branch efficiency.", icon: FaSitemap }],
        benefits: ["Secure Inter-branch Traffic", "Centralized Management", "Lower Bandwidth Costs"],
        benefitTiles: [{ title: "Global Reach", description: "Connect your branches securely across the globe.", icon: FaShieldAlt }],
        faqs: [{ question: "Is SD-WAN better than MPLS?", answer: "Yes, it offers more flexibility and cost savings for most setups." }],
        industries: ["Retail Chains", "Multi-office Firms"], image: "/images/services/networking_hero.png"
    },
    "wifi-solutions": {
        slug: "wifi-solutions", title: "Enterprise WiFi", icon: FaWifi,
        description: "High-density wireless solutions for offices and hotels in Bangalore.",
        problemStatement: "Dead zones and slow WiFi hinder employee productivity and guest satisfaction.",
        solutionStatement: "Terait eliminates dead zones and provides secure guest and staff access.",
        features: ["Heatmap Site Surveys", "Mesh Networking", "Guest Captive Portals", "WPA3 Enterprise Security"],
        detailedFeatures: [{ title: "Mesh WiFi", description: "Seamless switching between access points without drops.", icon: FaWifi }],
        benefits: ["Seamless Mobile Productivity", "Enhanced Guest Experience", "Simplified Network Policy"],
        benefitTiles: [{ title: "Mobility", description: "Work from anywhere in your office with total freedom.", icon: FaRocket }],
        faqs: [{ question: "Do you manage the WiFi?", answer: "Yes, we offer fully managed WiFi as a service." }],
        industries: ["Hospitality", "Education", "Offices"], image: "/images/services/networking_hero.png"
    },
    "biometric-systems": {
        slug: "biometric-systems", title: "Biometric Access Control", icon: FaFingerprint,
        description: "Modern facility security with fingerprint and facial recognition in Bangalore.",
        problemStatement: "Traditional keys and cards are prone to loss and unauthorized sharing.",
        solutionStatement: "We replace old keys with secure, trackable facial recognition and biometric entries.",
        features: ["Facial Recognition Terminals", "Attendance Tracking Software", "Card & Pin Integration", "Cloud-based User Management"],
        detailedFeatures: [{ title: "Facial ID", description: "Contactless and secure access for employees.", icon: FaFingerprint }],
        benefits: ["Enhanced Facility Security", "Automated Payroll Integration", "Contactless Entry"],
        benefitTiles: [{ title: "Security", description: "Know exactly who is entering your facility and when.", icon: FaLock }],
        faqs: [{ question: "Can it integrate with payroll?", answer: "Yes, our systems sync directly with most popular HR software." }],
        industries: ["Corporate", "Healthcare", "Factories"], image: "/images/services/networking_hero.png"
    },
    "cloud-management": {
        slug: "cloud-management", title: "Managed Cloud Services", icon: FaCloud,
        description: "24/7 monitoring and optimization of your cloud environment in Bangalore.",
        problemStatement: "Managing complex cloud environments is a burden on internal IT teams.",
        solutionStatement: "Terait takes over your cloud maintenance so you can focus on innovation.",
        features: ["Cost Optimization Reports", "Auto-scaling Policies", "Compliance Monitoring", "Dispatch patches & Updates"],
        detailedFeatures: [{ title: "Cloud Ops", description: "Expert management of your infrastructure around the clock.", icon: FaCloud }],
        benefits: ["Reduced Monthly Bills", "Continuous Security Compliance", "Peace of Mind"],
        benefitTiles: [{ title: "Optimization", description: "Ensure you only pay for what you actually use.", icon: FaDatabase }],
        faqs: [{ question: "Do you handle daily backups?", answer: "Yes, automated database and file backups are part of the service." }],
        industries: ["SaaS", "E-commerce", "Enterprise"], image: "/images/services/managed_hero.png"
    },
    "data-backup": {
        slug: "data-backup", title: "Data Protection & Backup", icon: FaDatabase,
        description: "Automated, redundant backups to ensure you never lose a file in Bangalore.",
        problemStatement: "Ransomware and hardware failure can permanently delete years of business data.",
        solutionStatement: "We provide encrypted on-site and cloud backups with instant recovery testing.",
        features: ["Incremental Background Backups", "End-to-end Encryption", "Versioning & Archiving", "Fast Recovery Testing"],
        detailedFeatures: [{ title: "Encryption", description: "Your data is encrypted both at rest and in transit.", icon: FaLock }],
        benefits: ["Protection from Ransomware", "Regulatory Data Compliance", "Instant Business Continuity"],
        benefitTiles: [{ title: "Continuity", description: "Recover from any data loss within minutes.", icon: FaHistory }],
        faqs: [{ question: "How often are backups taken?", answer: "We can schedule backups as frequently as every 15 minutes." }],
        industries: ["Legal", "Medical", "Finance"], image: "/images/services/managed_hero.png"
    },
    "desktop-support": {
        slug: "desktop-support", title: "Managed Desktop Support", icon: FaDesktop,
        description: "Keeping your employees productive with reliable IT helpdesk support in Bangalore.",
        problemStatement: "Recurring PC issues and slow hardware kill employee morale and output.",
        solutionStatement: "We manage your entire desktop fleet, from setup to proactive troubleshooting.",
        features: ["Remote Helpdesk Support", "OS Patch Management", "Software Deployment", "Endpoint Security Monitoring"],
        detailedFeatures: [{ title: "Helpdesk", description: "Rapid remote and on-site support for your team.", icon: FaHeadset }],
        benefits: ["Zero Productivity Hits", "Consistent Employee Experience", "Proactive Trouble Identification"],
        benefitTiles: [{ title: "Support", description: "Always-on help for every member of your team.", icon: FaUsers }],
        faqs: [{ question: "Do you provide on-site visits?", answer: "Yes, we combine remote helpdesk with periodic on-site visits." }],
        industries: ["All Office-based Businesses"], image: "/images/services/managed_hero.png"
    },
    "email-management": {
        slug: "email-management", title: "Enterprise Email Services", icon: FaEnvelope,
        description: "Secure, collaborative email solutions for teams in Bangalore.",
        problemStatement: "Phishing attacks and server down-time disrupt critical business communication.",
        solutionStatement: "Terait manages your M365 or Google Workspace with advanced anti-spam protection.",
        features: ["M365/Google Workspace Sync", "Email Security & Anti-spam", "Archive & E-discovery", "Alias & Forwarding Management"],
        detailedFeatures: [{ title: "Security", description: "Protect your team from advanced email threats.", icon: FaShieldAlt }],
        benefits: ["Professional Communication", "Unified Security Polices", "Effortless Collaboration"],
        benefitTiles: [{ title: "Professional", description: "Build trust with customized corporate email IDs.", icon: FaEnvelope }],
        faqs: [{ question: "Can you migrate our old emails?", answer: "Yes, we handle the full migration of your legacy email data." }],
        industries: ["Corporate", "Agencies"], image: "/images/services/managed_hero.png"
    },
    "disaster-recovery": {
        slug: "disaster-recovery", title: "Disaster Recovery Planning", icon: FaHistory,
        description: "Business continuity solutions for the worst-case scenarios in Bangalore.",
        problemStatement: "Natural disasters or core server failure can bankrupt a business overnight.",
        solutionStatement: "We ensure your critical systems failover to the cloud within minutes of an outage.",
        features: ["Failover Testing", "RTO/RPO Strategy Design", "Cloud Site Replication", "Standardized DR Runbooks"],
        detailedFeatures: [{ title: "Failover", description: "Automatic switching to backup servers during a disaster.", icon: FaHistory }],
        benefits: ["Minimum Revenue Loss", "Client Trust & Continuity", "Resilience to Local Disasters"],
        benefitTiles: [{ title: "Resilience", description: "Be prepared for the unexpected with robust DR.", icon: FaShieldAlt }],
        faqs: [{ question: "How often do you test DR?", answer: "We perform quarterly failover tests to ensure readiness." }],
        industries: ["Banking", "Healthcare", "E-commerce"], image: "/images/services/managed_hero.png"
    },
    "server-management": {
        slug: "server-management", title: "Server Administration", icon: FaCogs,
        description: "Professional management of Windows and Linux servers in Bangalore.",
        problemStatement: "Unpatched servers are the primary entry point for hackers and malware.",
        solutionStatement: "Terait provides setup, backup, and virtualization for secure and patched servers.",
        features: ["OS Hardening & Security", "Performance Tuning", "Automated System Backups", "User Access Permissions"],
        detailedFeatures: [
            { title: "Server Setup", description: "Professional installation of Windows and Linux server environments.", icon: FaServer },
            { title: "Backup & Restore", description: "Automated, reliable backups to prevent data loss.", icon: FaDatabase },
            { title: "Virtualization", description: "Maximize hardware usage with VMware and Hyper-V setup.", icon: FaProjectDiagram }
        ],
        benefits: ["Maximized Application Performance", "Secure Data Storage", "Long-term Server Health"],
        benefitTiles: [
            { title: "Peak Performance", description: "Optimized server resources for your applications.", icon: FaRocket },
            { title: "Hardened Security", description: "Regular patching and hardening against threats.", icon: FaLock }
        ],
        faqs: [{ question: "Do you support cloud servers?", answer: "Yes, we manage servers on AWS, Azure, GCP, and on-premise." }],
        industries: ["IT", "Corporate", "Financial Services"], image: "/images/services/managed_hero.png"
    },
    "security-surveillance": {
        slug: "security-surveillance", title: "Smart Security Monitoring", icon: FaEye,
        description: "AI-powered monitoring that detects threats before they happen in Bangalore.",
        problemStatement: "Standard CCTV often records crimes but does nothing to prevent them.",
        solutionStatement: "We combine traditional CCTV with AI to proactively detect and alert suspicious behavior.",
        features: ["Behavioral Analytics", "License Plate Recognition", "Integrated Alarm Systems", "Centralized Command Centers"],
        detailedFeatures: [{ title: "Vision AI", description: "Detect unauthorized entry or suspicious bags automatically.", icon: FaEye }],
        benefits: ["Proactive Threat Detection", "Reduced False Alarms", "One-view Remote Management"],
        benefitTiles: [{ title: "Intelligence", description: "Get smarter security that acts before trouble starts.", icon: FaRocket }],
        faqs: [{ question: "Is the AI accurate?", answer: "Yes, our AI algorithms are trained to differentiate people from animals." }],
        industries: ["VIP Residential", "Logistics", "Smart Cities"], image: "/images/services/security_hero.png"
    },
    "network-security": {
        slug: "network-security", title: "Cybersecurity & Firewalls", icon: FaShieldAlt,
        description: "Protecting your digital perimeter from cyber threats in Bangalore.",
        problemStatement: "Modern cyber threats can bypass traditional antivirus software easily.",
        solutionStatement: "We implement zero-trust architectures and next-gen firewalls to secure your network.",
        features: ["Next-Gen Firewall (NGFW)", "Intrusion Detection (IDS)", "DDoS Protection", "Regular Security Audits"],
        detailedFeatures: [{ title: "Zero Trust", description: "Never trust, always verify every device and user.", icon: FaShieldAlt }],
        benefits: ["Data Leakage Prevention", "Safe Remote Access (VPN)", "Protection from Hackers"],
        benefitTiles: [{ title: "Protection", description: "Sleep easy knowing your network is shielded 24/7.", icon: FaLock }],
        faqs: [{ question: "Do you perform pen-testing?", answer: "Yes, we offer regular vulnerability assessments and penetration testing." }],
        industries: ["Enterprise", "Banking", "Gov"], image: "/images/services/security_hero.png"
    },
    "firewall-setup": {
        slug: "firewall-setup", title: "Firewall Configuration", icon: FaLock,
        description: "Precise traffic rules to keep your business network secure in Bangalore.",
        problemStatement: "Misconfigured firewalls create hidden holes in your network security.",
        solutionStatement: "Terait specializes in precise, professional firewall setup for Fortinet and Cisco.",
        features: ["Deep Packet Inspection", "Web Filtering Polices", "Log & Traffic Reports", "Firmware Cycle Management"],
        detailedFeatures: [{ title: "Traffic Filter", description: "Control exactly which websites and apps can be accessed.", icon: FaLock }],
        benefits: ["Controlled Internet Usage", "Secure Network Borders", "Simplified Compliance Logging"],
        benefitTiles: [{ title: "Control", description: "Complete visibility into your business internet traffic.", icon: FaShieldAlt }],
        faqs: [{ question: "Do you support Fortinet?", answer: "Yes, we are experts in Fortinet, Sophos, and Cisco Meraki." }],
        industries: ["Small Biz", "Large Corporate"], image: "/images/services/security_hero.png"
    },
    "voip-systems": {
        slug: "voip-systems", title: "Managed VoIP Systems", icon: FaPhoneAlt,
        description: "Crystal clear, cloud-based voice communication in Bangalore.",
        problemStatement: "Traditional landlines are rigid, expensive, and tied to a single location.",
        solutionStatement: "Our cloud-based VoIP solutions enable flexible, feature-rich internet calling.",
        features: ["Cloud PBX Management", "Softphone Mobile Apps", "Call Recording & Queues", "CRM Integration"],
        detailedFeatures: [{ title: "Cloud PBX", description: "Manage your entire phone system from a simple web portal.", icon: FaPhoneAlt }],
        benefits: ["Lower Communication Costs", "Flexibility for Remote Work", "Advanced Call Analytics"],
        benefitTiles: [{ title: "Modernize", description: "Take your business communication into the cloud era.", icon: FaRocket }],
        faqs: [{ question: "Can I keep my old number?", answer: "Yes, we help you port your existing numbers to VoIP." }],
        industries: ["Sales Teams", "Customer Support"], image: "/images/services/voip_hero.png"
    },
    "epabx-systems": {
        slug: "epabx-systems", title: "EPABX Infrastructure", icon: FaRegAddressBook,
        description: "Reliable internal communication for large facilities and offices in Bangalore.",
        problemStatement: "Internal communication breakdowns lead to poor customer service and inefficiency.",
        solutionStatement: "We provide reliable intercom systems and auto-attendants for large offices.",
        features: ["Internal Extension Mapping", "Auto-attendant setup", "Intercom System Integration", "Voicemail to Email"],
        detailedFeatures: [{ title: "Auto-Attendant", description: "Professional greeting and call routing for your business.", icon: FaRegAddressBook }],
        benefits: ["Fast Internal Transfer", "Professional Front Office", "Proven Reliability"],
        benefitTiles: [{ title: "Service", description: "Deliver a premium caller experience to every client.", icon: FaCheckCircle }],
        faqs: [{ question: "Do you repair old PABX?", answer: "Yes, we provide maintenance for both analog and digital PABX." }],
        industries: ["Hospitals", "Hotels", "Large Offices"], image: "/images/services/voip_hero.png"
    },
    "phone-management": {
        slug: "phone-management", title: "Corporate Phone Support", icon: FaHeadset,
        description: "End-to-end management of your corporate telephony. We handle everything from vendor management to handset troubleshooting.",
        problemStatement: "Poorly managed phone systems can lead to high costs and missed customer calls.",
        solutionStatement: "Terait provides scalable phone management with 24/7 support to keep your business connected.",
        features: ["Handset Provisioning", "billing Audits", "Troubleshooting Support", "Number Portability Handling"],
        detailedFeatures: [
            { title: "Handset Provisioning", description: "Professional setup and configuration of corporate handsets.", icon: FaHeadset },
            { title: "Billing Audits", description: "Regular analysis of telecom bills to identify cost-saving opportunities.", icon: FaDatabase },
            { title: "Troubleshooting", description: "Rapid response to any telephony or connectivity issues.", icon: FaCogs }
        ],
        benefits: ["Simplified Vendor Relations", "Predictable Telecom Bills", "Maintained Fleet Health"],
        benefitTiles: [
            { title: "Cost Savings", description: "Identified billing errors and optimized plans.", icon: FaDatabase },
            { title: "High Uptime", description: "Ensure your lines are always open for business.", icon: FaShieldAlt }
        ],
        faqs: [
            { question: "Do you support remote work setups?", answer: "Yes, we integrate mobile apps and softphones for remote employees." }
        ],
        industries: ["Corporate", "Government Agencies"], image: "/images/services/voip_hero.png"
    },
    "it-hardware": {
        slug: "it-hardware", title: "IT Hardware Solutions", icon: FaDesktop,
        description: "Premium IT hardware procurement and deployment services in Bangalore.",
        problemStatement: "Procuring reliable hardware at scale can be complex and expensive for growing businesses.",
        solutionStatement: "Terait offers bulk supply of branded systems with professional setup and warranty support.",
        features: ["Bulk Supply", "Branded Systems", "Custom Configurations", "On-site Installation"],
        detailedFeatures: [
            { title: "Bulk Supply", description: "Volume procurement from leading brands at competitive prices.", icon: FaLaptopCode },
            { title: "Branded Systems", description: "Laptops, desktops, and workstations from Dell, HP, and Lenovo.", icon: FaDesktop },
            { title: "Custom Build", description: "Specialized workstations for high-performance computing needs.", icon: FaCogs }
        ],
        benefits: ["Cost Efficiency", "Standardized Hardware", "Professional Setup"],
        benefitTiles: [
            { title: "Better Pricing", description: "Leverage our vendor relationships for best-in-class pricing.", icon: FaDatabase },
            { title: "Full Warranty", description: "Authorized service support and genuine parts warranty.", icon: FaShieldAlt }
        ],
        faqs: [
            { question: "Do you provide AMC for hardware?", answer: "Yes, we offer comprehensive AMC packages for all hardware supplied." }
        ],
        industries: ["IT", "Corporate", "Startups"], image: "/images/hero_bg.png"
    },
    "ups-solutions": {
        slug: "ups-solutions", title: "UPS & Power Backup", icon: FaCogs,
        description: "Reliable power protection and backup solutions for uninterrupted operations.",
        problemStatement: "Frequent power cuts and surges can damage hardware and cause critical data loss.",
        solutionStatement: "We provide enterprise-grade UPS systems with professional installation and monitoring.",
        features: ["Power Protection", "Battery Backup", "Voltage Regulation", "Remote Monitoring"],
        detailedFeatures: [
            { title: "Power Protection", description: "Shield your equipment from surges and voltage spikes.", icon: FaShieldAlt },
            { title: "Battery Backup", description: "Seamless transition to battery power during outages.", icon: FaHistory },
            { title: "System Monitoring", description: "Real-time tracking of battery health and power load.", icon: FaEye }
        ],
        benefits: ["Zero Downtime", "Equipment Longevity", "Data Integrity"],
        benefitTiles: [
            { title: "Maximum Uptime", description: "Keep your critical servers running 24/7.", icon: FaRocket },
            { title: "Safe Shutdown", description: "Provide enough time for graceful system shutdowns.", icon: FaLock }
        ],
        faqs: [
            { question: "What UPS capacity do I need?", answer: "Our experts perform a load audit to recommend the perfect capacity for your office." }
        ],
        industries: ["Data Centers", "Hospitals", "Corporate"], image: "/images/hero_bg.png"
    },
    "amc-services": {
        slug: "amc-services", title: "IT AMC Services", icon: FaHandshake,
        description: "Comprehensive Annual Maintenance Contracts for worry-free IT management in Bangalore.",
        problemStatement: "Unpredictable IT breakdowns can disrupt business and lead to expensive emergency repairs.",
        solutionStatement: "Our AMC services provide proactive maintenance, monitoring, and priority support.",
        features: ["Preventive Maintenance", "24/7 Monitoring", "Unlimited Support", "Inventory Management"],
        detailedFeatures: [
            { title: "Maintenance", description: "Regular check-ups to prevent hardware and software issues.", icon: FaCogs },
            { title: "Fast Support", description: "Priority response for all your technical support needs.", icon: FaRegAddressBook },
            { title: "System Monitoring", description: "Continuous health tracking of your IT infrastructure.", icon: FaEye }
        ],
        benefits: ["Predictable Costs", "Reduced Breakdown Rate", "Expert Consultation"],
        benefitTiles: [
            { title: "Peace of Mind", description: "Focus on your business while we handle your IT.", icon: FaShieldAlt },
            { title: "Certified Team", description: "Access to a multi-skilled team of IT professionals.", icon: FaUsers }
        ],
        faqs: [
            { question: "What is covered in the AMC?", answer: "We cover servers, networks, desktops, and security systems." }
        ],
        industries: ["All SME", "Corporate", "Healthcare"], image: "/images/hero_bg.png"
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
        items: ["cctv-solutions", "data-center-setup", "it-networking", "lan-wan-setup", "wifi-solutions", "biometric-systems", "it-hardware", "ups-solutions"]
    },
    {
        title: "IT Managed Services", icon: FaHeadset, color: "bg-orange-50 text-orange-600",
        description: "Full-range managed services from backup solutions to server and desktop support.",
        items: ["cloud-management", "data-backup", "desktop-support", "email-management", "disaster-recovery", "server-management", "amc-services"]
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
