import { useState } from "react";
import { Check, X, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const plans = [
    {
      name: "Free",
      price: { monthly: 0, annual: 0 },
      description: "For individuals getting started with AI automation",
      features: [
        "1,000 credits/month",
        "Visual workflow builder",
        "100+ app integrations",
        "Basic support",
        "15-minute intervals",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Core",
      price: { monthly: 9, annual: 7.65 },
      description: "For freelancers and solopreneurs",
      features: [
        "10,000 credits/month",
        "Unlimited active scenarios",
        "Scheduled scenarios",
        "API access",
        "Email support",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: { monthly: 16, annual: 13.60 },
      description: "For individuals with advanced needs",
      features: [
        "25,000 credits/month",
        "Priority execution",
        "Custom variables",
        "Full-text search",
        "Priority support",
      ],
      cta: "Get Started",
      highlighted: true,
    },
    {
      name: "Teams",
      price: { monthly: 29, annual: 24.65 },
      description: "For SMB teams automating workflows",
      features: [
        "50,000 credits/month",
        "Team roles & permissions",
        "Shared templates",
        "Analytics dashboard",
        "Dedicated support",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Enterprise",
      price: { monthly: "Custom", annual: "Custom" },
      description: "For organizations with complex needs",
      features: [
        "Unlimited credits",
        "Custom integrations",
        "24/7 support",
        "Security compliance",
        "Dedicated success manager",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  const comparisonFeatures = [
    {
      category: "AI & Automation",
      features: [
        { name: "AI Applications", free: true, core: true, pro: true, teams: true, enterprise: true },
        { name: "Visual Workflow Builder", free: true, core: true, pro: true, teams: true, enterprise: true },
        { name: "Custom Variables", free: false, core: false, pro: true, teams: true, enterprise: true },
        { name: "AI Agents", free: false, core: true, pro: true, teams: true, enterprise: true },
      ],
    },
    {
      category: "Integrations",
      features: [
        { name: "Standard Apps (100+)", free: true, core: true, pro: true, teams: true, enterprise: true },
        { name: "Premium Apps", free: false, core: true, pro: true, teams: true, enterprise: true },
        { name: "Custom Apps", free: false, core: false, pro: true, teams: true, enterprise: true },
        { name: "Enterprise Apps", free: false, core: false, pro: false, teams: false, enterprise: true },
      ],
    },
    {
      category: "Execution",
      features: [
        { name: "Max Active Scenarios", free: "2", core: "Unlimited", pro: "Unlimited", teams: "Unlimited", enterprise: "Unlimited" },
        { name: "Min Interval", free: "15 min", core: "1 min", pro: "1 min", teams: "1 min", enterprise: "1 min" },
        { name: "Priority Execution", free: false, core: false, pro: true, teams: true, enterprise: true },
        { name: "Parallel Execution", free: false, core: false, pro: true, teams: true, enterprise: true },
      ],
    },
    {
      category: "Support",
      features: [
        { name: "Community Support", free: true, core: true, pro: true, teams: true, enterprise: true },
        { name: "Email Support", free: false, core: true, pro: true, teams: true, enterprise: true },
        { name: "Priority Support", free: false, core: false, pro: true, teams: true, enterprise: true },
        { name: "24/7 Support", free: false, core: false, pro: false, teams: false, enterprise: true },
      ],
    },
  ];

  const faqs = [
    {
      question: "What are credits?",
      answer: "Credits are the unit of measurement for actions in your workflows. Each action (like sending an email, fetching data, or processing information) consumes one credit.",
    },
    {
      question: "What happens if I run out of credits?",
      answer: "When you run out of credits, your scenarios will pause until your credits reset at the start of your next billing cycle or you purchase additional credits.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the change takes effect at the end of your current billing period.",
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 14-day money-back guarantee for new subscriptions. If you're not satisfied, contact our support team for a full refund.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for Enterprise plans.",
    },
  ];

  const renderFeatureValue = (value) => {
    if (value === true) {
      return <Check className="w-5 h-5 text-green-500" />;
    }
    if (value === false) {
      return <X className="w-5 h-5 text-gray-600" />;
    }
    return <span className="text-gray-300 font-sans text-sm">{value}</span>;
  };

  return (
    <div className="min-h-screen bg-[#0f0f10]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 
            className="font-heading text-5xl md:text-7xl font-bold text-white tracking-tight leading-none mb-6"
            data-testid="pricing-hero-title"
          >
            Plans that grow
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              with you
            </span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Whether you're new to AI automation or using it to run your entire business, there's a plan for you.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`font-sans text-sm ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              data-testid="billing-toggle"
              className="data-[state=checked]:bg-indigo-600"
            />
            <span className={`font-sans text-sm ${isAnnual ? 'text-white' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <Badge className="bg-green-600/20 text-green-400 border-green-500/30 font-sans text-xs">
                Save 15%
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-white/5 backdrop-blur-md border ${
                  plan.highlighted 
                    ? 'border-indigo-500 shadow-[0_0_30px_rgba(79,70,229,0.2)]' 
                    : 'border-white/10'
                } transition-all duration-300 hover:border-indigo-500/50`}
                data-testid={`pricing-card-${plan.name.toLowerCase()}`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-indigo-600 text-white font-sans text-xs px-3">
                      Recommended
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="font-heading text-xl font-semibold text-white">
                    {plan.name}
                  </CardTitle>
                  <p className="font-sans text-gray-400 text-sm mt-2 min-h-[40px]">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    {typeof plan.price.monthly === 'number' ? (
                      <>
                        <span className="font-heading text-4xl font-bold text-white">
                          ${isAnnual ? plan.price.annual : plan.price.monthly}
                        </span>
                        <span className="text-gray-400 font-sans text-sm">/mo</span>
                      </>
                    ) : (
                      <span className="font-heading text-2xl font-bold text-white">
                        {plan.price.monthly}
                      </span>
                    )}
                  </div>

                  <a
                    href={plan.name === 'Enterprise' ? 'mailto:sales@growthxailabs.com' : '#'}
                    className={`block w-full text-center py-3 rounded-full font-sans text-sm font-medium transition-colors duration-200 mb-6 ${
                      plan.highlighted
                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                    data-testid={`pricing-cta-${plan.name.toLowerCase()}`}
                  >
                    {plan.cta}
                  </a>

                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span className="font-sans text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 md:py-32 bg-[#0f0f10]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Compare all features
            </h2>
            <p className="font-sans text-gray-400 text-lg">
              Choose the perfect plan for your needs
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]" data-testid="pricing-comparison-table">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 font-heading text-white text-sm font-semibold w-1/4">
                    Features
                  </th>
                  <th className="text-center py-4 px-4 font-heading text-white text-sm font-semibold">Free</th>
                  <th className="text-center py-4 px-4 font-heading text-white text-sm font-semibold">Core</th>
                  <th className="text-center py-4 px-4 font-heading text-white text-sm font-semibold bg-indigo-600/10 rounded-t-lg">Pro</th>
                  <th className="text-center py-4 px-4 font-heading text-white text-sm font-semibold">Teams</th>
                  <th className="text-center py-4 px-4 font-heading text-white text-sm font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category, catIndex) => (
                  <>
                    <tr key={`cat-${catIndex}`} className="border-b border-white/5">
                      <td colSpan={6} className="py-4 px-4">
                        <span className="font-mono text-xs uppercase tracking-widest text-indigo-400">
                          {category.category}
                        </span>
                      </td>
                    </tr>
                    {category.features.map((feature, featIndex) => (
                      <tr 
                        key={`feat-${catIndex}-${featIndex}`} 
                        className="border-b border-white/5 hover:bg-white/5 transition-colors"
                      >
                        <td className="py-4 px-4 font-sans text-gray-300 text-sm">
                          {feature.name}
                        </td>
                        <td className="text-center py-4 px-4">{renderFeatureValue(feature.free)}</td>
                        <td className="text-center py-4 px-4">{renderFeatureValue(feature.core)}</td>
                        <td className="text-center py-4 px-4 bg-indigo-600/5">{renderFeatureValue(feature.pro)}</td>
                        <td className="text-center py-4 px-4">{renderFeatureValue(feature.teams)}</td>
                        <td className="text-center py-4 px-4">{renderFeatureValue(feature.enterprise)}</td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-[#0f0f10]">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden"
                data-testid={`faq-item-${index}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  data-testid={`faq-toggle-${index}`}
                >
                  <span className="font-heading text-white text-lg font-medium pr-4">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="font-sans text-gray-400 text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
