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
    <div className="max-w-4xl bg-white/30 dark:bg-black/30 backdrop-blur-md border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg shadow-black/20 dark:shadow-white/10 transition-colors duration-500">
      <h2 className="text-2xl font-extrabold text-black dark:text-white px-5 pt-5 select-none">
        Frequently Asked Questions
      </h2>

      <div>
        {items.map(({ id, icon: Icon, title, content }) => {
          const isOpen = openItem === id;

          return (
            <div
              key={id}
              className="border-t border-gray-300 dark:border-gray-700 last:border-b-0"
            >
              <button
                onClick={() => toggleItem(id)}
                aria-expanded={isOpen}
                className="flex items-center justify-between w-full px-5 py-4 text-black dark:text-white text-base font-medium cursor-pointer bg-transparent transition-colors duration-300 hover:bg-black/5 dark:hover:bg-white/10 select-none focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className="w-4 h-4 text-black dark:text-white"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  <span>{title}</span>
                </div>

                <div className="relative w-4 h-4 flex-shrink-0">
                  <Plus
                    className={`absolute inset-0 text-black dark:text-white transition-opacity duration-300 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  <Minus
                    className={`absolute inset-0 text-black dark:text-white transition-opacity duration-300 ${
                      isOpen ? "opacity-100" : "opacity-0"
                    }`}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <div
                  ref={(el) => {
                    contentRefs.current[id] = el;
                  }}
                  className="px-5 pb-5 text-gray-700 dark:text-gray-300 text-sm leading-relaxed select-text"
                >
                  {content}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};