import { Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="The NewGen Kids Childcare Center" className="h-12 w-auto" />
              <span className="font-heading text-lg font-bold leading-tight">
                The NewGen Kids<br />
                <span className="text-sm font-semibold">Childcare Center</span>
              </span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              A licensed family child care providing loving, nurturing care 
              in a safe home environment. Where little ones blossom and grow.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-background/70 hover:text-background transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#programs" className="text-background/70 hover:text-background transition-colors">
                  Our Programs
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-background/70 hover:text-background transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-background transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Hours of Operation</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>7:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>Closed</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>
              © {new Date().getFullYear()} The NewGen Kids Childcare Center. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-coral fill-coral" /> for little ones
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
