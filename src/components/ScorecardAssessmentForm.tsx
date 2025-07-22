
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, User, Mail, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface UserData {
  school: string;
  contactName: string;
  email: string;
  phone: string;
  location: string;
}

export const ScorecardAssessmentForm = () => {
  const [userData, setUserData] = useState<UserData>({ 
    school: '', 
    contactName: '', 
    email: '', 
    phone: '',
    location: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleStartAssessment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userData.school || !userData.contactName || !userData.email || !userData.location) {
      alert('Please fill all required fields to start.');
      return;
    }

    setIsSubmitting(true);
    
    // Store user data in localStorage for the assessment
    localStorage.setItem('scorecardUserData', JSON.stringify(userData));
    
    // Navigate to the scorecard page
    navigate('/sustainability-scorecard');
  };

  return (
    <Card className="shadow-glass">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-primary mb-2">
          School Uniforms Sustainability Scorecard
        </CardTitle>
        <p className="text-muted-foreground">
          Please provide your information to begin the assessment and receive your personalized sustainability report.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleStartAssessment} className="space-y-6">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <Building className="h-4 w-4" />
              School Name *
            </label>
            <Input 
              placeholder="Enter your school name" 
              value={userData.school}
              onChange={(e) => setUserData(prev => ({ ...prev, school: e.target.value }))}
              required
            />
          </div>
          
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <User className="h-4 w-4" />
              Contact Name *
            </label>
            <Input 
              placeholder="Your full name" 
              value={userData.contactName}
              onChange={(e) => setUserData(prev => ({ ...prev, contactName: e.target.value }))}
              required
            />
          </div>
          
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <Mail className="h-4 w-4" />
              Email Address *
            </label>
            <Input 
              type="email" 
              placeholder="your.email@school.edu" 
              value={userData.email}
              onChange={(e) => setUserData(prev => ({ ...prev, email: e.target.value }))}
              required
            />
          </div>
          
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <Phone className="h-4 w-4" />
              Phone Number
            </label>
            <Input 
              type="tel" 
              placeholder="Your phone number" 
              value={userData.phone}
              onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))}
            />
          </div>
          
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <MapPin className="h-4 w-4" />
              School Location
            </label>
            <Input 
              placeholder="City, Country" 
              value={userData.location}
              onChange={(e) => setUserData(prev => ({ ...prev, location: e.target.value }))}
              required
            />
          </div>
          <Button type="submit" className="w-full bg-coral hover:bg-coral/90" disabled={isSubmitting}>
            {isSubmitting ? 'Starting Assessment...' : 'Start Assessment'}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Complete assessment • Get your sustainability score and recommendations
          </p>
        </form>
      </CardContent>
    </Card>
  );
};
