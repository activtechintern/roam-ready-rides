
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface Location {
  id: string;
  city: string;
  state: string;
  is_popular: boolean;
}

export function useLocations(searchQuery: string = '') {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocations = async () => {
      setLoading(true);
      try {
        let query = supabase.from('locations').select('*');
        
        if (searchQuery) {
          query = query.ilike('city', `%${searchQuery}%`);
        }
        
        const { data, error } = await query;
        
        if (error) throw error;
        setLocations(data || []);
        setError(null);
      } catch (err) {
        console.error('Error fetching locations:', err);
        setError('Failed to fetch locations');
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, [searchQuery]);

  return { locations, loading, error };
}
