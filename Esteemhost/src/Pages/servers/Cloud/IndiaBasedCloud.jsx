import { useState } from "react"

const pricingPlans = [
  {
    id: 0,
    title: "Basic Cloud",
    price: { USD: 15, INR: 1200, EUR: 13, GBP: 11 },
    cores: "2 CPU Cores",
    ram: "2 GB RAM",
    storage: "30 GB SSD",
    bandwidth: "1 TB",
    ip: "1 IP Address",
    setup: "FREE Set Up!!",
    description: "web hosting within budget for beginners and small websites",
    url: "#",
  },
  {
    id: 1,
    title: "Professional Cloud",
    price: { USD: 25, INR: 2000, EUR: 22, GBP: 19 },
    cores: "4 CPU Cores",
    ram: "4 GB RAM",
    storage: "60 GB SSD",
    bandwidth: "1 TB",
    ip: "1 IP Address",
    setup: "FREE Set Up!!",
    description: "Unlimited Resources for one heavy traffic and big websites",
    url: "#",
    popular: true,
  },
  {
    id: 2,
    title: "Business Cloud",
    price: { USD: 40, INR: 3200, EUR: 35, GBP: 30 },
    cores: "4 CPU Cores",
    ram: "8 GB RAM",
    storage: "80 GB SSD",
    bandwidth: "2 TB",
    ip: "1 IP Address",
    setup: "FREE Set Up!!",
    description: "If you have multiple websites than we have solution for you",
    url: "#",
  },
  {
    id: 3,
    title: "Enterprise Cloud",
    price: { USD: 60, INR: 4800, EUR: 52, GBP: 45 },
    cores: "8 CPU Cores",
    ram: "8 GB RAM",
    storage: "120 GB SSD",
    bandwidth: "2 TB",
    ip: "1 IP Address",
    setup: "FREE Set Up!!",
    description: "You may required everything unlimited that you will get here",
    url: "#",
  },
]

const currencySymbols = {
  USD: "$",
  INR: "₹",
  EUR: "€",
  GBP: "£",
}

// Custom SVG Icons
const ClockIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12,6 12,12 16,14"></polyline>
  </svg>
)

const GaugeIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M12 2v4m6.364.636l-2.828 2.828m4.95 5.272H16.5m-.636 6.364l-2.828-2.828M12 20v4m-6.364-.636l2.828-2.828m-4.95-5.272H7.5m.636-6.364l2.828 2.828"></path>
  </svg>
)

const BarChartIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="12" y1="20" x2="12" y2="10"></line>
    <line x1="18" y1="20" x2="18" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="16"></line>
  </svg>
)

const ShieldIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
)

const CheckSquareIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="9,11 12,14 22,4"></polyline>
    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
  </svg>
)

const DollarIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path>
  </svg>
)

const HardDriveIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="22" y1="12" x2="2" y2="12"></line>
    <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"></path>
    <line x1="6" y1="16" x2="6.01" y2="16"></line>
    <line x1="10" y1="16" x2="10.01" y2="16"></line>
  </svg>
)

const HeadphonesIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M3 18v-6a9 9 0 0118 0v6"></path>
    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
  </svg>
)

const ChevronDownIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="6,9 12,15 18,9"></polyline>
  </svg>
)

const ChevronUpIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="18,15 12,9 6,15"></polyline>
  </svg>
)

const ServerIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="2" y="3" width="20" height="4" rx="1"></rect>
    <rect x="2" y="9" width="20" height="4" rx="1"></rect>
    <rect x="2" y="15" width="20" height="4" rx="1"></rect>
    <line x1="6" y1="5" x2="6.01" y2="5"></line>
    <line x1="6" y1="11" x2="6.01" y2="11"></line>
    <line x1="6" y1="17" x2="6.01" y2="17"></line>
  </svg>
)

const features = [
  {
    icon: ClockIcon,
    title: "Hourly Billing Model",
    description:
      "Our hourly billing model makes you win-all situation for your website or application traffic. You need to pay which you use only, With efficient tracking mechanisms, our clients are required to pay only for the services they use on an hourly basis, resulting in significant cost savings.",
  },
  {
    icon: GaugeIcon,
    title: "Complete Usage Control",
    description:
      "We EsteemHost Provide customized control panel there you will manage cloud usage. With our trademark cloud platform - EsteemHost – clients get complete control over their resources and can customize it according to their changing business needs.",
  },
  {
    icon: BarChartIcon,
    title: "Highly Elasticity of Resources",
    description:
      "Yes, Cloud means you will be charged only for your used resources, Our cloud hosting service is highly flexible. Users can scale up or down their resources in a matter of few minutes reducing their time to market significantly. That will save your time and money according to usage.",
  },
  {
    icon: ShieldIcon,
    title: "Advanced Security",
    description:
      "EsteemHost's every server will be behind the firewall that make your server secure, DDoS Protection up to 20 GBPS. We provide broadest server security levels – built in the core as well as via Atomicorp ModSecurity Rules, CloudFlare Server Shield and outbound antispam.",
  },
  {
    icon: CheckSquareIcon,
    title: "Full Root Access",
    description:
      "EsteemHost's VPS hosting comes with full root access along with the ability to install custom software on the server environment based on your needs. Our Server Management Panel gives you complete control of the server with actions as Start, Stop, Rebuild and much more.",
  },
  {
    icon: DollarIcon,
    title: "Money Back Guarantee",
    description:
      "Well, this is only to gain your trust that you will never face any service issue & ask for a refund as we are referred by 99% by our clients as we are a best hosting solution provider. But even after if you are ever dissatisfied with our service, we have 100% money-back for 30 days!",
  },
  {
    icon: HardDriveIcon,
    title: "SSD Storage With Raid10",
    description:
      "We only use the latest and thoroughly tested Blade servers To take the best care of your data, every one of our servers accompanies two hard drives as a matter of course with RAID. Ensuring, if one hard drives totally failure or separates, data is safe and your server will stay on the web.",
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Support 24/7",
    description:
      "Esteemhost provides a fast, friendly and straight-forward response with the help of our experts. Esteemhost understands clients issue and solving it in the most efficient manner. We are reachable to you anytime and every time (24/7/365) by live chat, phone or ticket support.",
  },
]

const faqData = [
  {
    question: "What is Cloud Hosting?",
    answer:
      "In straightforward terms, cloud hosting is a web-driven, on-request registering innovation that depends on the standards of shared stockpiling and handling of all hidden processing equipment. It depends on a system of multiple web servers connected to each other in an unpredictable and wide system to convey required processing capacities. Distributed computing advances can be considered as a propelled adaptation of network processing which worked on a comparable idea of multiple figuring assets cooperating to play out a typical capacity.",
  },
  {
    question: "What is The Benefits of Cloud Hosting",
    answer:
      "Cloud Hosting is conveyed as an administrations model to clients. Contrasted with customary hosting models wherein customers needed to purchase server space forthright relying upon their business needs, customers profit these administrations from cloud facilitating specialist organizations on a 'pay as you go' display which fundamentally diminishes their forthright capital costs on IT framework.",
  },
  {
    question: "Which Cloud Hosting Service Models Do You Use",
    answer:
      "We Are Working on Below Cloud Hosting Service Models: Software as a Service (SaaS), Platform as a Service (PaaS), and Infrastructure as a Service (IaaS). Each model provides different levels of control and management for your cloud infrastructure needs.",
  },
  {
    question: "What features can I expect with a cloud server from EsteemHost?",
    answer:
      "Cloud servers from EsteemHost offer many powerful features to help you enjoy the very best in web hosting. All of our packages come with super-fast SSD storage standard, shared storage, SAN storage, integrated load balancing, a KVM console, integrated backups, and a comprehensive user and rights management system.",
  },
  {
    question: "Can I choose the location of my cloud server?",
    answer:
      "Yes, thanks to the multitude of EsteemHost Data Centers you can choose where exactly you would like your cloud server to be hosted. Especially in regard to optimizing loading time, it is beneficial for the server to be located as close to you as possible.",
  },
]

export default function IndiaBasedCloud() {
  const [selectedPlan, setSelectedPlan] = useState(0)
  const [currency, setCurrency] = useState("USD")
  const [openFaq, setOpenFaq] = useState(0)

  const currentPlan = pricingPlans[selectedPlan]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">India based linux cloud server</h1>
            <p className="text-xl text-blue-100">Flexible & Ultimate Cloud Based Solution.</p>
          </div>

          {/* VPS Slider */}
          <div className="max-w-6xl mx-auto">
            {/* Discount Badge */}
            <div className="flex justify-center mb-8">
              <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">10% off</div>
            </div>

            {/* Server Images */}
            <div className="flex justify-center items-center mb-8 space-x-4 md:space-x-8 overflow-x-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={plan.id}
                  className={`text-center cursor-pointer transition-all duration-300 flex-shrink-0 ${
                    selectedPlan === index ? "scale-110" : "scale-90 opacity-60"
                  }`}
                  onClick={() => setSelectedPlan(index)}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-2 flex items-center justify-center">
                    <ServerIcon />
                  </div>
                  <h4 className="text-sm font-medium">{plan.title}</h4>
                </div>
              ))}
            </div>

            {/* Slider */}
            <div className="mb-8">
              <input
                type="range"
                min="0"
                max="3"
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(Number.parseInt(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Current Plan Features */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
              <div className="text-center">
                <div className="text-sm text-blue-200 mb-1">Core</div>
                <div className="font-semibold">{currentPlan.cores}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-blue-200 mb-1">RAM</div>
                <div className="font-semibold">{currentPlan.ram}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-blue-200 mb-1">Hard Drive</div>
                <div className="font-semibold">{currentPlan.storage}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-blue-200 mb-1">Bandwidth</div>
                <div className="font-semibold">{currentPlan.bandwidth}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-blue-200 mb-1">IP Address</div>
                <div className="font-semibold">{currentPlan.ip}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-blue-200 mb-1">Setup</div>
                <div className="font-semibold text-green-400">{currentPlan.setup}</div>
              </div>
            </div>

            {/* Price and Action */}
            <div className="text-center">
              <div className="text-4xl font-bold mb-6">
                {currencySymbols[currency]}
                {currentPlan.price[currency]}/m
              </div>
              <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Linux Cloud Hosting</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-blue-600 mb-4">
                    <IconComponent />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-blue-400">Linux cloud hosting</span> pricing table
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan) => (
              <div key={plan.id} className="relative">
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold z-10">
                    Popular
                  </div>
                )}
                <div className="bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden h-full">
                  <div className="p-6 text-center border-b">
                    <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                    <div className="text-3xl font-bold text-blue-600">
                      <div className="text-sm text-gray-500">Start at</div>
                      <div>
                        {currencySymbols[currency]}
                        {plan.price[currency]}/m
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center text-sm">
                        <div className="text-green-500 mr-2">
                          <CheckSquareIcon />
                        </div>
                        {plan.cores}
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="text-green-500 mr-2">
                          <CheckSquareIcon />
                        </div>
                        {plan.ram}
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="text-green-500 mr-2">
                          <CheckSquareIcon />
                        </div>
                        {plan.storage}
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="text-green-500 mr-2">
                          <CheckSquareIcon />
                        </div>
                        {plan.bandwidth}
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="text-green-500 mr-2">
                          <CheckSquareIcon />
                        </div>
                        {plan.ip}
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="text-green-500 mr-2">
                          <CheckSquareIcon />
                        </div>
                        Free CentOS WP-Cpanel
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="text-green-500 mr-2">
                          <CheckSquareIcon />
                        </div>
                        {plan.setup}
                      </li>
                    </ul>
                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              <span className="text-blue-600">Linux hosting</span> frequently asked questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h4 className="font-semibold text-gray-800">{faq.question}</h4>
                  <div className="text-gray-600">{openFaq === index ? <ChevronUpIcon /> : <ChevronDownIcon />}</div>
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Content */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Cloud server hosting and its parts</h2>
            <div className="prose prose-invert max-w-none">
              <p className="mb-6 leading-relaxed">
                Dividing a single physical server into multiple <strong>virtual hosting solutions</strong> is provided
                by cloud hosting. By using specific software, the <strong>cloud hosting</strong> surrounds a network
                infrastructure that offers web hosting, application software development, full accessible work
                environments, and so on much more. The <strong>cloud server hosting services</strong> come in easy
                accessibility and budget-friendly packages; maybe this is why so many companies are adopting this
                server.
              </p>

              <h3 className="text-xl font-semibold mb-4">What does cloud server hosting do?</h3>
              <p className="mb-6 leading-relaxed">
                A cloud server gives you support that was never so easily affordable. The{" "}
                <strong>cloud server solution</strong> works in a way that it is encompassed a group of workstations
                built together to bring on a single resource bed. The <strong>cloud hosting server</strong> disconnects
                the client from the customs of the physical server, which gives them the kind of flexibility they want
                in the making of their business website.
              </p>

              <h3 className="text-xl font-semibold mb-4">Why cloud server over any other server hosting types</h3>
              <p className="mb-4 leading-relaxed">
                The <strong>cloud hosting platform</strong> gives the best benefits compared to the{" "}
                <strong>shared hosting</strong> platform or <strong>dedicated hosting</strong> one. Because of the pool
                of IT resources the hosting platform holds has covered up the companies with its vast level of services
                that range in different prices, which do not try to dig more holes in customers' pockets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}