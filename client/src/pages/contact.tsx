import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: (data: ContactForm) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message! We will get back to you soon.",
      });
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        interest: "",
        message: ""
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(form);
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const socialLinks = [
    { icon: Facebook, name: "Facebook", color: "bg-[#3b5998]" },
    { icon: Linkedin, name: "LinkedIn", color: "bg-[#0077b5]" },
    { icon: Instagram, name: "Instagram", color: "bg-[#e4405f]" },
    { icon: MessageCircle, name: "WhatsApp", color: "bg-[#25d366]" }
  ];

  return (
    <div className="py-20 bg-neutral-custom-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-neutral-custom-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-neutral-custom-900 max-w-4xl mx-auto leading-relaxed">
            Ready to join our mission? We're here to walk with you—building one month at a time. 
            Reach out today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-neutral-custom-900 mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={form.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={form.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="interest">How can we help you?</Label>
                  <Select value={form.interest} onValueChange={(value) => handleInputChange("interest", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                      <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                      <SelectItem value="programs">Program Information</SelectItem>
                      <SelectItem value="donation">Donation & Support</SelectItem>
                      <SelectItem value="media">Media & Press</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us more about your interest in ThriveBridge Malawi..."
                    value={form.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary-custom hover:bg-primary-custom/90 text-white py-4"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Location */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-neutral-custom-900 mb-6">Visit Our Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary-custom rounded-lg flex items-center justify-center mr-4 mt-1">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-custom-900">Lilongwe Office</h4>
                      <p className="text-neutral-custom-900">
                        Area 47, Sector 3<br />
                        Lilongwe, Malawi
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-secondary-custom rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-custom-900">Phone</h4>
                      <p className="text-neutral-custom-900">+265 1 123 4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-accent-custom rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-custom-900">Email</h4>
                      <p className="text-neutral-custom-900">info@thrivebridgemalawi.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary-custom rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-custom-900">Office Hours</h4>
                      <p className="text-neutral-custom-900">
                        Monday - Friday: 8:00 AM - 5:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-neutral-custom-900 mb-6">Follow Our Journey</h3>
                <p className="text-neutral-custom-900 mb-6">
                  Stay connected with our daily activities and community impact through our social media channels.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href="#"
                        className={`flex items-center justify-center p-4 ${social.color} text-white rounded-lg hover:opacity-90 transition-opacity duration-200`}
                      >
                        <IconComponent className="w-5 h-5 mr-3" />
                        <span className="font-medium">{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
