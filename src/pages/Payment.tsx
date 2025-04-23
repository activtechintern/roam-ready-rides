import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CreditCard, Loader2 } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import QRScanner from "@/components/payment/QRScanner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddressAutofill from "@/components/booking/AddressAutofill";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [billingAddress, setBillingAddress] = useState("");

  // Get the booking details from location state
  const bookingDetails = location.state?.bookingDetails;

  const handlePayment = async () => {
    setLoading(true);
    try {
      // Simulate payment processing
      toast({
        title: "Processing payment",
        description: "Please wait while we process your payment...",
      });
      
      // TODO: Integrate actual payment gateway here
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Payment successful!",
        description: "Your booking has been confirmed.",
      });
      
      navigate("/booking-confirmation");
    } catch (error) {
      toast({
        title: "Payment failed",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!bookingDetails) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Invalid Payment Request</CardTitle>
            <CardDescription>
              No booking details found. Please start your booking process again.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate("/")} className="w-full">
              Return to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Complete Your Payment</CardTitle>
          <CardDescription>Choose your preferred payment method</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="card" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="card">Card Payment</TabsTrigger>
              <TabsTrigger value="qr">QR Code</TabsTrigger>
            </TabsList>
            
            <TabsContent value="card" className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="cardHolder" className="text-sm font-medium">
                  Card Holder Name
                </label>
                <Input id="cardHolder" placeholder="Enter card holder name" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="cardNumber" className="text-sm font-medium">
                  Card Number
                </label>
                <Input 
                  id="cardNumber" 
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="expiry" className="text-sm font-medium">
                    Expiry Date
                  </label>
                  <Input id="expiry" placeholder="MM/YY" maxLength={5} />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="cvv" className="text-sm font-medium">
                    CVV
                  </label>
                  <Input id="cvv" placeholder="123" maxLength={3} type="password" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Billing Address</label>
                <AddressAutofill
                  label="Enter billing address"
                  onSelect={setBillingAddress}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="qr">
              <QRScanner />
            </TabsContent>

            <div className="mt-6">
              <Button 
                onClick={handlePayment} 
                className="w-full" 
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing
                  </>
                ) : (
                  <>
                    <CreditCard className="mr-2 h-4 w-4" />
                    Complete Payment
                  </>
                )}
              </Button>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payment;
