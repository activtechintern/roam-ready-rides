
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScanQrCode, Loader2, QrCode } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const QRScanner = () => {
  const [scanning, setScanning] = useState(false);
  const [qrDisplayed, setQrDisplayed] = useState(false);
  const { toast } = useToast();

  const handleScan = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setQrDisplayed(true);
      toast({
        title: "QR Code Generated",
        description: "Scan this QR code with your UPI app to make the payment.",
      });
    }, 2000);
  };

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-64 h-64 border-2 border-dashed rounded-lg flex items-center justify-center bg-gray-50">
            {scanning ? (
              <Loader2 className="h-8 w-8 animate-spin text-car-blue" />
            ) : qrDisplayed ? (
              <div className="text-center">
                <QrCode className="h-32 w-32 mx-auto mb-4 text-car-blue" />
                <p className="text-sm text-gray-600">Scan with any UPI app</p>
              </div>
            ) : (
              <ScanQrCode className="h-8 w-8 text-gray-400" />
            )}
          </div>
          {!qrDisplayed && (
            <Button 
              className="w-full" 
              onClick={handleScan} 
              disabled={scanning}
            >
              {scanning ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating QR Code...
                </>
              ) : (
                <>
                  <QrCode className="mr-2 h-4 w-4" />
                  Generate QR Code
                </>
              )}
            </Button>
          )}
          {qrDisplayed && (
            <div className="text-center space-y-2">
              <p className="font-medium">Payment Options:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Google Pay', 'PhonePe', 'Paytm', 'BHIM'].map((app) => (
                  <span key={app} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {app}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default QRScanner;
