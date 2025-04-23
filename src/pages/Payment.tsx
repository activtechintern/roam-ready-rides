
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CreditCard, Loader2, IndianRupee } from "lucide-react";
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
  const bookingDetails = location.state?.bookingDetails || JSON.parse(localStorage.getItem('currentBooking') || 'null');

  const handlePayment = async () => {
    setLoading(true);
    try {
      toast({
        title: "Processing payment",
        description: "Please wait while we process your payment...",
      });
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Payment successful!",
        description: "Your booking has been confirmed.",
      });
      
      // Clear the stored booking after successful payment
      localStorage.removeItem('currentBooking');
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
            <Button onClick={() => navigate("/search")} className="w-full">
              Browse Cars
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const { totalPrice, basePrice, insuranceFee, serviceFee } = bookingDetails;

  // Convert prices to INR (assuming the prices are in USD)
  const exchangeRate = 83; // Example fixed exchange rate USD to INR
  const pricesInINR = {
    total: Math.round(totalPrice * exchangeRate),
    base: Math.round(basePrice * exchangeRate),
    insurance: Math.round(insuranceFee * exchangeRate),
    service: Math.round(serviceFee * exchangeRate)
  };

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

            {/* Price Details */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Price Details</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Base Price</span>
                  <div className="flex items-center">
                    <IndianRupee className="h-4 w-4 mr-1" />
                    <span>{pricesInINR.base.toLocaleString('en-IN')}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Insurance Fee</span>
                  <div className="flex items-center">
                    <IndianRupee className="h-4 w-4 mr-1" />
                    <span>{pricesInINR.insurance.toLocaleString('en-IN')}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Service Fee</span>
                  <div className="flex items-center">
                    <IndianRupee className="h-4 w-4 mr-1" />
                    <span>{pricesInINR.service.toLocaleString('en-IN')}</span>
                  </div>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total Amount</span>
                    <div className="flex items-center text-car-blue">
                      <IndianRupee className="h-5 w-5 mr-1" />
                      <span>{pricesInINR.total.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Button 
              onClick={handlePayment} 
              className="w-full mt-6" 
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
                  Pay ₹{pricesInINR.total.toLocaleString('en-IN')}
                </>
              )}
            </Button>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payment;
