
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface UserData {
  school: string;
  country: string;
  firstName: string;
  lastName: string;
  email: string;
  students: string;
}

export const ScorecardAssessmentForm = () => {
  const [userData, setUserData] = useState<UserData>({ 
    school: '', 
    country: '', 
    firstName: '', 
    lastName: '', 
    email: '', 
    students: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleStartAssessment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userData.school || !userData.country || !userData.firstName || !userData.lastName || !userData.email || !userData.students) {
      alert('Please fill all fields to start.');
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
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Start Your Assessment
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleStartAssessment} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">School Name</label>
            <Input 
              placeholder="Your school name" 
              value={userData.school}
              onChange={(e) => setUserData(prev => ({ ...prev, school: e.target.value }))}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Country</label>
            <Input 
              placeholder="Your country" 
              value={userData.country}
              onChange={(e) => setUserData(prev => ({ ...prev, country: e.target.value }))}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">First Name</label>
            <Input 
              placeholder="Your first name" 
              value={userData.firstName}
              onChange={(e) => setUserData(prev => ({ ...prev, firstName: e.target.value }))}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Last Name</label>
            <Input 
              placeholder="Your last name" 
              value={userData.lastName}
              onChange={(e) => setUserData(prev => ({ ...prev, lastName: e.target.value }))}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Contact Email</label>
            <Input 
              type="email" 
              placeholder="your.email@school.edu" 
              value={userData.email}
              onChange={(e) => setUserData(prev => ({ ...prev, email: e.target.value }))}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Number of Students</label>
            <Input 
              type="number" 
              placeholder="e.g., 500" 
              value={userData.students}
              onChange={(e) => setUserData(prev => ({ ...prev, students: e.target.value }))}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Starting Assessment...' : 'Start Sustainability Assessment'}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Complete assessment • Get your sustainability score and recommendations
          </p>
        </form>
      </CardContent>
    </Card>
  );
};
