import { ArrowRight, Code2, Brain, Zap, Users, ChevronRight, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Careers = () => {
  const techStack = [
    {
      category: "AI Stack",
      items: ["OpenAI", "Anthropic", "Google AI"],
      description: "Closed-source models only. Custom agentic framework for better control.",
      icon: Brain,
    },
    {
      category: "Modalities",
      items: ["Text", "Vision", "Audio"],
      description: "Multi-modal AI processing capabilities.",
      icon: Zap,
    },
    {
      category: "Dev Stack",
      items: ["Next.js", "Node.js", "Tailwind", "MongoDB"],
      description: "Classic JS ecosystem with modern tooling.",
      icon: Code2,
    },
  ];

  const openPositions = [
    {
      title: "Software Engineer",
      type: "Full-time",
      location: "On-site",
      description: "Join our engineering team to build AI-powered products.",
    },
  ];

  const interviewSteps = [
    {
      step: 1,
      title: "Application",
      description: "Complete our application with questions (30 mins)",
    },
    {
      step: 2,
      title: "Technical Interview",
      description: "1-hour technical interview",
    },
    {
      step: 3,
      title: "Offer",
      description: "Immediate offer if selected",
    },
  ];

  const idealCandidate = [
    "Max 2 years of working experience",
    "Genuinely fascinated by generative AI—not just because it's trendy",
    "Projects that prove your passion",
    "Prefer working from the office",
  ];

  return (
    <div className="min-h-screen bg-[#0f0f10]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1750969185331-e03829f72c7d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMGZ1dHVyaXN0aWMlMjBibHVlJTIwbmV0d29yayUyMGRhdGElMjBub2RlcyUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzcxMzAyMzE2fDA&ixlib=rb-4.1.0&q=85"
            alt="Abstract network background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f10] via-transparent to-[#0f0f10]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <Badge 
              variant="outline" 
              className="mb-6 bg-indigo-600/10 border-indigo-500/30 text-indigo-400 font-mono text-xs uppercase tracking-widest px-4 py-1.5"
              data-testid="careers-badge"
            >
              We are hiring
            </Badge>
            <h1 
              className="font-heading text-5xl md:text-7xl font-bold text-white tracking-tight leading-none mb-8"
              data-testid="careers-hero-title"
            >
              Join us on our
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                mission
              </span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
              Our mission is to bring about a paradigm shift in how businesses conduct processes in an AI-first world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 md:py-32 bg-[#0f0f10]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
                What we're building
              </h2>
            </div>
            <div className="space-y-6">
              <p className="font-sans text-base md:text-lg text-gray-400 leading-relaxed">
                We're building a suite of agentic workflows that, when combined, create end-to-end GenAI-managed processes. Collectively, we call this system as <span className="text-white font-medium">BusinessOS</span>.
              </p>
              <p className="font-sans text-base md:text-lg text-gray-400 leading-relaxed">
                We're targeting specific niches to maintain our competitive edge. Currently it's <span className="text-indigo-400 font-medium">research</span> and <span className="text-indigo-400 font-medium">sales</span>.
              </p>
              <p className="font-sans text-base text-gray-500 leading-relaxed">
                Simply put: we're stitching multiple models, building extensive tooling, and architecting context management systems that enable LLMs to run for hours to complete complex tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 md:py-32 bg-[#0f0f10]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Our Stack
            </h2>
            <p className="font-sans text-gray-400 text-lg">
              Technologies we use to build the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {techStack.map((stack, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-indigo-500/30 transition-colors duration-300"
                data-testid={`tech-stack-card-${index}`}
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/20 flex items-center justify-center mb-6">
                    <stack.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-3">
                    {stack.category}
                  </h3>
                  <p className="font-sans text-gray-400 text-sm mb-6 leading-relaxed">
                    {stack.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((item, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-white/10 text-white border-0 font-sans text-xs"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Candidate Section */}
      <section className="py-24 md:py-32 bg-[#0f0f10]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
                The Right Candidate
              </h2>
              <p className="font-sans text-gray-400 text-lg">
                Are you the one we're looking for?
              </p>
            </div>
            <div className="space-y-4">
              {idealCandidate.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                  data-testid={`candidate-requirement-${index}`}
                >
                  <div className="w-8 h-8 rounded-full bg-indigo-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ChevronRight className="w-4 h-4 text-indigo-400" />
                  </div>
                  <p className="font-sans text-gray-300 text-base leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-24 md:py-32 bg-[#0f0f10]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Open Positions
            </h2>
            <p className="font-sans text-gray-400 text-lg">
              Join our growing team of engineers.
            </p>
          </div>

          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-indigo-500/30 transition-colors duration-300"
                data-testid={`open-position-${index}`}
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-indigo-600/20 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-white mb-2">
                          {position.title}
                        </h3>
                        <p className="font-sans text-gray-400 text-sm mb-3">
                          {position.description}
                        </p>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="border-white/20 text-gray-300 font-sans text-xs">
                            {position.type}
                          </Badge>
                          <Badge variant="outline" className="border-white/20 text-gray-300 font-sans text-xs">
                            {position.location}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <a
                      href="mailto:careers@growthxailabs.com"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-sans text-sm font-medium rounded-full transition-colors duration-200"
                      data-testid={`apply-btn-${index}`}
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Process Section */}
      <section className="py-24 md:py-32 bg-[#0f0f10]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16 text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Interview Process
            </h2>
            <p className="font-sans text-gray-400 text-lg max-w-xl mx-auto">
              Our streamlined process to find the right fit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
            {interviewSteps.map((step, index) => (
              <div
                key={index}
                className="relative"
                data-testid={`interview-step-${index}`}
              >
                <Card className="bg-white/5 backdrop-blur-md border border-white/10 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-indigo-600/20 flex items-center justify-center mx-auto mb-6">
                      <span className="font-heading text-2xl font-bold text-indigo-400">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="font-sans text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {index < interviewSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-4 h-4 text-indigo-500" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="font-sans text-gray-500 text-sm mb-6">
              Note: You can only submit the application once and it will be auto submitted after 30 mins.
            </p>
            <a
              href="mailto:careers@growthxailabs.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-sans text-base font-medium rounded-full transition-colors duration-200"
              data-testid="careers-cta-btn"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
