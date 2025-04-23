
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScanQrCode, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const QRScanner = () => {
  const [scanning, setScanning] = useState(false);
  const { toast } = useToast();

  const handleScan = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      toast({
        title: "QR Code Scanned",
        description: "Payment information has been captured successfully.",
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
            ) : (
              <ScanQrCode className="h-8 w-8 text-gray-400" />
            )}
          </div>
          <Button 
            className="w-full" 
            onClick={handleScan} 
            disabled={scanning}
          >
            {scanning ? "Scanning..." : "Scan QR Code"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QRScanner;
