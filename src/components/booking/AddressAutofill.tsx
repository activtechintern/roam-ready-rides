
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Map, Home, Building, Briefcase } from "lucide-react";

interface AddressAutofillProps {
  onSelect: (address: string) => void;
  label: string;
}

const AddressAutofill: React.FC<AddressAutofillProps> = ({ onSelect, label }) => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const commonAddresses = [
    { icon: Home, label: 'Home', address: '123 Home Street, Mumbai, Maharashtra' },
    { icon: Building, label: 'Work', address: '456 Office Park, Bangalore, Karnataka' },
    { icon: Briefcase, label: 'Business', address: '789 Corporate Hub, Delhi, Delhi' },
  ];

  const handleSelect = (address: string) => {
    setQuery(address);
    onSelect(address);
    setShowSuggestions(false);
  };

  return (
    <div className="relative">
      <div className="flex items-center space-x-2">
        <MapPin className="h-4 w-4 text-gray-500" />
        <Input
          type="text"
          placeholder={label}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
        />
      </div>

      {showSuggestions && (
        <Card className="absolute z-10 w-full mt-1 shadow-lg">
          <div className="p-2 space-y-2">
            {commonAddresses.map((item, index) => {
              const Icon = item.icon;
              return (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => handleSelect(item.address)}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  <div className="flex flex-col items-start">
                    <span className="font-medium">{item.label}</span>
                    <span className="text-xs text-gray-500">{item.address}</span>
                  </div>
                </Button>
              );
            })}
          </div>
        </Card>
      )}
    </div>
  );
};

export default AddressAutofill;
