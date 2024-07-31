import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");

  const features = [
    "Streamlined workflow automation",
    "Advanced analytics dashboard",
    "Seamless third-party integrations",
    "24/7 customer support",
  ];

  const pricingPlans = [
    { name: "Starter", price: "$29", features: ["Basic features", "Up to 5 users", "5GB storage"] },
    { name: "Pro", price: "$79", features: ["All Starter features", "Up to 20 users", "25GB storage", "Priority support"] },
    { name: "Enterprise", price: "Custom", features: ["All Pro features", "Unlimited users", "Dedicated account manager", "Custom integrations"] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Revolutionize Your Workflow</h1>
          <p className="text-xl mb-8">Empower your team with our cutting-edge SaaS platform</p>
          <div className="flex justify-center space-x-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="max-w-xs"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button>Get Started</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-green-500 mt-1" />
                <p className="text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-3xl font-bold mb-4">{plan.price}</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="text-green-500 h-4 w-4" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <Button className="mt-4">Choose Plan</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers and take your productivity to the next level.</p>
          <Button variant="secondary" size="lg" className="font-semibold">
            Start Your Free Trial <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
