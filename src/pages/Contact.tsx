import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Footer } from "@/components/Footer";
const Contact = () => {
  return <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Ready to transform your school's uniform program? We're here to help you every step of the way. If you are a customer and have a product or order related query please email support@kapesuniforms.com. </h1>
            <p className="text-lg text-muted-foreground">Ready to transform your school's uniform program? We're here to help you every step of the way. If you are a customer and have a product or order related query please email support@kapesuniforms.com </p>
          </div>

          <Card className="border-0 shadow-glass">
            <CardHeader>
              <CardTitle className="text-2xl font-medium text-center">Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="rounded-xl" />
                  <Input placeholder="Last Name" className="rounded-xl" />
                </div>
                <Input placeholder="School Name" className="rounded-xl" />
                <Input type="email" placeholder="Email Address" className="rounded-xl" />
                <Input placeholder="Phone Number" className="rounded-xl" />
                <Input placeholder="Subject" className="rounded-xl" />
                <Textarea placeholder="Tell us about your school's needs..." rows={6} className="rounded-xl" />
                <Button type="submit" className="w-full rounded-xl font-medium touch-manipulation">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>;
};
export default Contact;