
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Building, User, Users, Globe, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  schoolName: string;
  country: string;
  students: string;
}

const countries = [
  'Afghanistan', 'Albania', 'Algeria', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan',
  'Bahrain', 'Bangladesh', 'Belarus', 'Belgium', 'Bolivia', 'Bosnia and Herzegovina', 'Brazil', 'Bulgaria',
  'Cambodia', 'Cameroon', 'Canada', 'Chile', 'China', 'Colombia', 'Costa Rica', 'Croatia', 'Czech Republic',
  'Denmark', 'Dominican Republic', 'Ecuador', 'Egypt', 'Estonia', 'Ethiopia', 'Finland', 'France',
  'Georgia', 'Germany', 'Ghana', 'Greece', 'Guatemala', 'Honduras', 'Hong Kong', 'Hungary',
  'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy',
  'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Latvia', 'Lebanon', 'Lithuania', 'Luxembourg',
  'Malaysia', 'Malta', 'Mexico', 'Morocco', 'Netherlands', 'New Zealand', 'Nigeria', 'Norway',
  'Pakistan', 'Panama', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar',
  'Romania', 'Russia', 'Saudi Arabia', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'Sweden', 'Switzerland',
  'Thailand', 'Turkey', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Venezuela', 'Vietnam'
];

export const ScorecardAssessmentForm = () => {
  const [userData, setUserData] = useState<UserData>({
    firstName: '',
    lastName: '',
    email: '',
    schoolName: '',
    country: '',
    students: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleStartAssessment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userData.firstName || !userData.lastName || !userData.email || !userData.schoolName || !userData.country || !userData.students) {
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                <User className="h-4 w-4" />
                First Name *
              </label>
              <Input 
                placeholder="Your first name" 
                value={userData.firstName}
                onChange={(e) => setUserData(prev => ({ ...prev, firstName: e.target.value }))}
                required
              />
            </div>
            
            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                <User className="h-4 w-4" />
                Last Name *
              </label>
              <Input 
                placeholder="Your last name" 
                value={userData.lastName}
                onChange={(e) => setUserData(prev => ({ ...prev, lastName: e.target.value }))}
                required
              />
            </div>
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
              <Building className="h-4 w-4" />
              School Name *
            </label>
            <Input 
              placeholder="Enter your school name" 
              value={userData.schoolName}
              onChange={(e) => setUserData(prev => ({ ...prev, schoolName: e.target.value }))}
              required
            />
          </div>
          
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <Globe className="h-4 w-4" />
              Country *
            </label>
            <Select value={userData.country} onValueChange={(value) => setUserData(prev => ({ ...prev, country: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent className="bg-background border shadow-md max-h-60 overflow-y-auto z-50">
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <Users className="h-4 w-4" />
              Number of Students *
            </label>
            <Input 
              type="number"
              placeholder="Enter number of students" 
              value={userData.students}
              onChange={(e) => setUserData(prev => ({ ...prev, students: e.target.value }))}
              required
              min="1"
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
