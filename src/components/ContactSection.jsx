import { Mail,Phone,MapPin,Linkedin,Send } from "lucide-react";
import {cn} from "@/lib/utils";

export const ContactSection = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            alert("Message sent successfully!");
        }, 1500);
    }
    return (
        <section id = "contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I'm currently open to new opportunities and collaborations. Feel free to reach out to me via email or connect with me on LinkedIn.
                </p>

   
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6 max-w-md mx-auto translate-x-2 md:translate-x-6">
                            <div className="grid grid-cols-[48px_1fr] items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4>Email</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors" href="mailto:johnlman1@yahoo.com">
                                        Johnlman1@yahoo.com

                                    </a>
                                </div>
                            </div>
                            <div className="grid grid-cols-[48px_1fr] items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4>Phone</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors" href="tel:+17785128016">
                                        +1 (778) 512 8016

                                    </a>
                                </div>
                            </div>
                            <div className="grid grid-cols-[48px_1fr] items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4>Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors" >
                                        Greater Vancouver Area, BC, Canada  
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4>Connect With Me</h4>
                            <div className="flex space-x-4 justify-center"> 
                                <a href="https://www.linkedin.com/in/johnlman" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
                            </div>
                        </div>


                    </div>
                </div>

        </section>
    );};