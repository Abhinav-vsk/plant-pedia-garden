import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { HelpCircle, Phone, X } from 'lucide-react';

export const HelpButton = () => {
  const [showContact, setShowContact] = useState(false);

  const handleCall = () => {
    window.location.href = 'tel:+919876543210';
  };

  return (
    <>
      {/* Help Button */}
      <Button
        onClick={() => setShowContact(!showContact)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-help hover:bg-help-hover text-white shadow-elevated hover:shadow-elevated transition-all duration-300 hover:scale-110 z-50 font-poppins"
        size="icon"
      >
        {showContact ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <HelpCircle className="w-6 h-6 sm:w-7 sm:h-7" />}
      </Button>

      {/* Contact Info Card */}
      {showContact && (
        <Card className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 w-64 sm:w-72 bg-background border border-border shadow-elevated z-40 animate-fade-in">
          <CardContent className="p-4">
            <h3 className="font-poppins font-semibold text-lg text-foreground mb-3">
              Need Plant Help?
            </h3>
            <p className="font-poppins text-sm text-muted-foreground mb-4">
              Get expert advice from our plant specialists
            </p>
            <Button 
              onClick={handleCall}
              className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-poppins transition-colors duration-200 text-base py-3"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +91 98765 43210
            </Button>
          </CardContent>
        </Card>
      )}
    </>
  );
};