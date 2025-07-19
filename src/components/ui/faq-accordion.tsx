import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, HelpCircle, Users, Truck, ShieldCheck } from "lucide-react";

interface FAQItem {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  content: string;
}

interface FAQAccordionProps {
  items?: FAQItem[];
}

const defaultItems: FAQItem[] = [
  {
    id: "1",
    icon: HelpCircle,
    title: "What are the contract terms for partnership?",
    content:
      "Our partnership contracts are typically 2-3 years with flexible terms. We work with schools to create agreements that suit their specific needs and budget requirements.",
  },
  {
    id: "2",
    icon: Users,
    title: "How do you ensure ethical manufacturing practices?",
    content:
      "We maintain strict ethical standards through regular factory audits, fair labor practices, and transparent supply chain management. All our manufacturing partners are certified and monitored regularly.",
  },
  {
    id: "3",
    icon: Truck,
    title: "What are the delivery options available?",
    content:
      "We offer multiple delivery options including home delivery, school delivery, and collection points. Our logistics network ensures reliable and timely delivery across all regions.",
  },
  {
    id: "4",
    icon: ShieldCheck,
    title: "How do you handle quality assurance?",
    content:
      "Quality is our top priority. We conduct rigorous testing at every stage of production, from material sourcing to final product inspection, ensuring all uniforms meet our high standards.",
  },
];

export const FAQAccordion = ({ items = defaultItems }: FAQAccordionProps) => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const toggleItem = (id: string) => {
    setOpenItem((current) => (current === id ? null : id));
  };

  return (
    <div className="max-w-4xl w-full space-y-4">
      {items.map(({ id, icon: Icon, title, content }) => {
        const isOpen = openItem === id;

        return (
          <div
            key={id}
            className="border-0 shadow-glass rounded-2xl overflow-hidden bg-card hover-lift transition-smooth"
          >
            <button
              onClick={() => toggleItem(id)}
              aria-expanded={isOpen}
              className="flex items-center justify-between w-full p-6 text-foreground text-base font-medium cursor-pointer bg-transparent transition-smooth hover:bg-muted/50 focus:outline-none"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon
                    className="w-5 h-5 text-primary"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>
                <span className="text-left">{title}</span>
              </div>

              <div className="relative w-5 h-5 flex-shrink-0">
                <Plus
                  className={`absolute inset-0 text-muted-foreground transition-all duration-300 ${
                    isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                  }`}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <Minus
                  className={`absolute inset-0 text-primary transition-all duration-300 ${
                    isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                  }`}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </div>
            </button>

            <motion.div
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <div
                ref={(el) => {
                  contentRefs.current[id] = el;
                }}
                className="px-6 pb-6 text-muted-foreground leading-relaxed"
              >
                {content}
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};