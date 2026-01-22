import { useState } from "react"
import {
  CheckSquare,
  Gauge,
  HardDrive,
  Laptop,
  RefreshCw,
  DollarSign,
  Mail,
  Headphones,
  Server,
  Cpu,
  Database,
  Wifi,
  MapPin,
  Settings,
  ChevronDown,
} from "lucide-react"
import React from "react"

// Button Component
function Button({ variant = "default", size = "md", className = "", children, ...props }) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500",
  }

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}

// Card Components
function Card({ children, className = "" }) {
  return <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}>{children}</div>
}

function CardHeader({ children, className = "" }) {
  return <div className={`p-6 pb-4 ${className}`}>{children}</div>
}

function CardContent({ children, className = "" }) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>
}

function CardTitle({ children, className = "" }) {
  return <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`}>{children}</h3>
}

function CardDescription({ children, className = "" }) {
  return <p className={`text-sm text-gray-600 ${className}`}>{children}</p>
}

// Badge Component
function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 ${className}`}
    >
      {children}
    </span>
  )
}

// Accordion Components
const AccordionContext = React.createContext({
  openItems: [],
  toggleItem: () => {},
})

const AccordionItemContext = React.createContext("")

function Accordion({ children, type = "single", className = "" }) {
  const [openItems, setOpenItems] = useState([])

  const toggleItem = (value) => {
    if (type === "single") {
      setOpenItems(openItems.includes(value) ? [] : [value])
    } else {
      setOpenItems(openItems.includes(value) ? openItems.filter((item) => item !== value) : [...openItems, value])
    }
  }

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  )
}

function AccordionItem({ children, value }) {
  return (
    <AccordionItemContext.Provider value={value}>
      <div className="border-b border-gray-200">{children}</div>
    </AccordionItemContext.Provider>
  )
}

function AccordionTrigger({ children, className = "" }) {
  const { openItems, toggleItem } = React.useContext(AccordionContext)
  const value = React.useContext(AccordionItemContext)
  const isOpen = openItems.includes(value)

  return (
    <button
      className={`flex w-full items-center justify-between py-4 text-left font-medium hover:underline ${className}`}
      onClick={() => toggleItem(value)}
    >
      {children}
      <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
    </button>
  )
}

function AccordionContent({ children }) {
  const { openItems } = React.useContext(AccordionContext)
  const value = React.useContext(AccordionItemContext)
  const isOpen = openItems.includes(value)

  if (!isOpen) return null

  return <div className="pb-4 pt-0">{children}</div>
}

// Mock data to replace PHP config values
const vpsPlans = [
  {
    title: "VPS Basic",
    cores: "2 CPU Cores",
    ram: "2 GB RAM",
    storage: "30 GB SSD",
    bandwidth: "1 TB",
    ip: "1 IP Address",
    price: "₹999",
    url: "#",
    features: [
      "2 CPU Cores",
      "2 GB RAM",
      "30 GB Hard Disk - SSD",
      "1TB Bandwidth",
      "1 IP Addresses",
      "Free CentOS WP-Cpanel",
      "FREE Set Up!!",
    ],
  },
  {
    title: "VPS Standard",
    cores: "2 CPU Cores",
    ram: "4 GB RAM",
    storage: "80 GB SSD",
    bandwidth: "2 TB",
    ip: "1 IP Address",
    price: "₹1999",
    url: "#",
    popular: true,
    features: [
      "2 CPU Cores",
      "4 GB RAM",
      "80 GB Hard Disk - SSD",
      "2TB Bandwidth",
      "1 IP Addresses",
      "Free CentOS WP-Cpanel",
      "FREE Set Up!!",
    ],
  },
  {
    title: "VPS Professional",
    cores: "4 CPU Cores",
    ram: "6 GB RAM",
    storage: "100 GB SSD",
    bandwidth: "2 TB",
    ip: "1 IP Address",
    price: "₹2999",
    url: "#",
    features: [
      "4 CPU Cores",
      "6 GB RAM",
      "100 GB Hard Disk - SSD",
      "2TB Bandwidth",
      "1 IP Addresses",
      "Free CentOS WP-Cpanel",
      "FREE Set Up!!",
    ],
  },
  {
    title: "VPS Enterprise",
    cores: "4 CPU Cores",
    ram: "8 GB RAM",
    storage: "100 GB SSD",
    bandwidth: "2 TB",
    ip: "1 IP Address",
    price: "₹3999",
    url: "#",
    features: [
      "4 CPU Cores",
      "8 GB RAM",
      "100 GB Hard Disk - SSD",
      "2TB Bandwidth",
      "1 IP Addresses",
      "Free CentOS WP-Cpanel",
      "FREE Set Up!!",
    ],
  },
]

const features = [
  {
    icon: CheckSquare,
    title: "Full Root Access",
    description:
      "EsteemHost's VPS hosting comes with full root access along with the ability to install custom software, which allows you to fully customize the server environment based on your needs. Our Server Management Panel gives you complete control of the server with actions as Start, Stop, Rebuild and much more.",
  },
  {
    icon: Gauge,
    title: "Management Tools",
    description:
      "Esteemhost provides an easy control panel to manage a VPS, there you will not face difficulty to manage. Our support team also will help you to manage your server 24X7: Reboot/Boot/Shutdown VPS, Check the status of the server, View Memory & Hard Disk Usage, View CPU Utilization, View Network Usage, View Traffic Usage.",
  },
  {
    icon: HardDrive,
    title: "Raid 10 Storage",
    description:
      "We are offering RAID10 Storage for VPS, that's a technology that provides increased storage functions and reliability through redundancy. This is achieved by combining multiple disk drive components into a logical unit to distribute the data, it mean your back up is safe with mirror discs.",
  },
  {
    icon: Laptop,
    title: "E-Commerce Features",
    description:
      "EsteemHost Support you in bringing your offline business to an online setup with the help of its e-commerce Service. Shopping carts like nopCommerce Shopping Cart, eCommerce Framework Shopping Cart, OS Commerce Shopping Cart and Zen Cart Shopping Cart can be installed with just a click, via Fantastico.",
  },
  {
    icon: RefreshCw,
    title: "Free Website migration",
    description:
      "If you are not technically sound or don't have time to migrate your server from one host to other than we are here to assist you by experts. Migration from any host can be a tedious task for you. When you are not satisfied with your current host then we are always there for your rescue.",
  },
  {
    icon: DollarSign,
    title: "Money Back Guarantee",
    description:
      "Well, this is only to gain your trust that you will never face any service issue & ask for a refund as we are referred by 99% by our clients as we are a best hosting solution provider. But even after if you are ever dissatisfied with our service, we have 100% money-back for 30 days!",
  },
  {
    icon: Mail,
    title: "Email Features",
    description:
      "Esteemhost provides you the power to create as unlimited email accounts as you need on your main domain as well as any domain pointers and subdomains. You can access your email through POP/IMAP as Mobile, Outlook, etc., or the pre-installed Webmail systems we provide as well.",
  },
  {
    icon: Headphones,
    title: "Customer Support 24/7",
    description:
      "Esteemhost provides a fast, friendly and straight-forward response with the help of our experts. Esteemhost understands clients issue and solving it in the most efficient manner. We are reachable to you anytime and every time (24/7/365) by live chat, phone or ticket support.",
  },
]

const faqData = [
  {
    question: "What is Linux VPS Hosting?",
    answer:
      "With VPS Hosting, you have finish disengagement. This implies regardless of what different clients may do on the server, your VPS hosting will be unaffected. With root access get to, you can introduce whatever applications you require. VPS likewise gives you ensured resources, so regardless, the CPU, RAM, HDD and Bandwidth designated to your VPS hosting will dependably be accessible for your applications only. It gives all of you the highlights and elements of a Dedicated server, without the extra cost. A VPS Hosting condition imitates a devoted server inside a common facilitating condition. The resources committed to the VPS design are not imparted to alternate has on the physical server, which offers an awesome measure of unwavering quality and execution. So buy Linux VPS Hosting in India and boost your website and business.",
  },
  {
    question: "What are the advantages of Linux VPS Hosting?",
    answer:
      "With EsteemHost's VPS Hosting, your site and applications stay unaffected by the exercises did by another client on a similar server. Full root gets to encourages you to introduce any custom programming without confinements. Alongside total self-sufficiency, VPS hosting gives you ensured assets like CPU, RAM, HDD, and bandwidth. There are four primary preferences of SSD Cloud VPS facilitating: Complete Isolation: Your VPS Hosting and its applications stay unaffected with activities of different clients on the server. Root Access: You get root access get to that enables you to introduce any good use of your decision. Ensured Resources: Unlike in shared facilitating, regardless of any circumstance, the assets (CPU, RAM, HDD, and data transmission) designated to you will dependably be accessible for your applications. Quick preparing with SSD: With SSD stockpiling, your sites and applications will run ordinarily speedier on your VPS.",
  },
  {
    question: "Is Additional Dedicated IP available?",
    answer:
      "Yes, at an additional cost. You can raise a support ticket to get a dedicated IP on your VPS server. You get 1 free default Dedicated IP with every VPS Hosting Plan. And For additional IPs, kindly get in touch with the support team.",
  },
  {
    question: "Can I install Any Kind of Software and Control Panel on my VPS?",
    answer:
      "You will get CPanel and Plesk 17.8 as a default option for installing on your VPS, but you can also choose to install Other on your VPS. We have an automated installation process configured to help make your control panel setup easy. We have an automated installation process configured on our VPS servers. When you buy a VPS, Cpanel will be installed on your package. This is inclusive of any package that you choose to buy. Since you have the root access on your VPS, you can install any software that is compatible with your VPS hosting plan. However, any software that violates their Acceptable Usage Policy or has any kind of objection to install on VPS will not be allowed.",
  },
  {
    question: "Do You Provide Managed vps? And What About Support?",
    answer:
      "We offer Fully Managed VPS Hosting solutions. We provide complete assistance for the issues that are related to Boot, Network, Hardware, Login and Re-installation of the VPS. This also includes basic firewall setup and preliminary investigation of any system exploits. We provide 24x7 support via three methods – LiveChat, Phone support and Email tickets. You can contact us anytime to get a resolution for any issues related to your VPS.",
  },
]

// Main Component
export default function IndiaVPSHostingPage() {
  const [selectedPlan, setSelectedPlan] = useState(0)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with VPS Pricing */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">India based vps server</h1>
            <p className="text-xl text-gray-600">Get Very Fast Performance Server</p>
          </div>

          {/* VPS Slider */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative bg-white rounded-lg shadow-lg p-8">
              <Badge className="absolute -top-3 left-6 bg-green-500 text-white">10% off</Badge>

              {/* Server Images */}
              <div className="flex justify-center items-center mb-8 space-x-8">
                {vpsPlans.map((plan, index) => (
                  <div
                    key={index}
                    className={`text-center cursor-pointer transition-all ${
                      selectedPlan === index ? "scale-110" : "opacity-60"
                    }`}
                    onClick={() => setSelectedPlan(index)}
                  >
                    <Server className="w-16 h-16 mx-auto mb-2 text-blue-600" />
                    <h4 className="text-sm font-medium">{plan.title}</h4>
                  </div>
                ))}
              </div>

              {/* Plan Details */}
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Cpu className="w-5 h-5 text-gray-600 mr-1" />
                    <span className="text-sm font-medium text-gray-600">Core</span>
                  </div>
                  <span className="text-lg font-semibold">{vpsPlans[selectedPlan].cores}</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Database className="w-5 h-5 text-gray-600 mr-1" />
                    <span className="text-sm font-medium text-gray-600">RAM</span>
                  </div>
                  <span className="text-lg font-semibold">{vpsPlans[selectedPlan].ram}</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <HardDrive className="w-5 h-5 text-gray-600 mr-1" />
                    <span className="text-sm font-medium text-gray-600">Hard Drive</span>
                  </div>
                  <span className="text-lg font-semibold">{vpsPlans[selectedPlan].storage}</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Wifi className="w-5 h-5 text-gray-600 mr-1" />
                    <span className="text-sm font-medium text-gray-600">Bandwidth</span>
                  </div>
                  <span className="text-lg font-semibold">{vpsPlans[selectedPlan].bandwidth}</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <MapPin className="w-5 h-5 text-gray-600 mr-1" />
                    <span className="text-sm font-medium text-gray-600">IP Address</span>
                  </div>
                  <span className="text-lg font-semibold">{vpsPlans[selectedPlan].ip}</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Settings className="w-5 h-5 text-gray-600 mr-1" />
                    <span className="text-sm font-medium text-gray-600">Setup</span>
                  </div>
                  <span className="text-lg font-semibold">FREE Set Up!!</span>
                </div>
              </div>

              {/* Price and Action */}
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-4">
                  {vpsPlans[selectedPlan].price}
                  <span className="text-lg">/m</span>
                </div>
                <Button size="lg">Buy Now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Linux Vps Server Hosting</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">India Based Linux VPS Hosting</span> pricing table
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vpsPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? "border-2 border-green-500" : ""}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white">
                    Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="mb-2">{plan.title}</CardTitle>
                  <CardDescription className="mb-4">
                    {index === 0 && "web hosting within budget for beginners and small websites"}
                    {index === 1 && "Unlimited Resources for one heavy traffic and big websites"}
                    {index === 2 && "If you have multiple websites than we have solution for you"}
                    {index === 3 && "You may required everything unlimited that you will get here"}
                  </CardDescription>
                  <div className="text-center">
                    <div className="text-sm text-gray-500">Start at</div>
                    <div className="text-3xl font-bold text-blue-600">
                      {plan.price}
                      <span className="text-lg">/m</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Buy Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">India Based Linux VPS hosting</span> frequently asked questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer Content */}
      <section className="py-16 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">A VPS hosting platform</h2>
            <p className="text-gray-600 mb-6">
              It is necessary for us to know what is actually a <strong>Virtual private server</strong> and why is it
              gaining so much acceptance from the audience before looking at the features the latter holds.
            </p>
            <p className="text-gray-600 mb-6">
              A <strong>virtual private server hosting service</strong> is a platform that serves multiple virtual
              servers, with each having its different operating system, which is being a cost-effective model that
              obliges to give flexibility and privacy within a managed shared environment.{" "}
              <strong>This hosting server</strong> is like any other hosting server, which aims in bringing a
              user-friendly approach alongside meeting the end-user demands efficiently.
            </p>

            <h3 className="text-xl font-bold mb-4">The Working of VPS hosting</h3>
            <p className="text-gray-600 mb-6">
              The mechanism these virtual machines work depends upon the computer infrastructure system. The more robust
              the computer infrastructure, the more potent the functionality of a physical server will be. With a
              virtual private server machine, clients construct the software application by their own choice.
            </p>

            <h3 className="text-xl font-bold mb-4">Importance of having VPS over other Dedicated or Shared Hosting</h3>
            <p className="text-gray-600 mb-4">
              Depending on the business priority, every business supports a different form of{" "}
              <strong>hosting services</strong>, whether <strong>dedicated hosting</strong>,{" "}
              <strong>shared hosting</strong> or <strong>VPS hosting servers</strong>. Such services consist of
              dichotomy, which suggests that:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>
                Shared hosting is based on the sole purpose of saving the cost and helping the small scale websites to
                moderately enhance the user experience by the side giving a low level of CPU requirements.
              </li>
              <li>
                A dedicated hosting server is based on a robust solution of providing a high traffic website that gives
                strict security compliance. Still, the fact here is that quality comes with a high price, so dedicated
                hosting is quite expensive.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}