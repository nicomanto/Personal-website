'use client';

import { useState } from 'react';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (data: ContactFormData,token: string | null) => {
    setIsSubmitting(true);
    setSuccess(false);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: token, // <--- Ora inviamo il token vero!
          infoEmail: data,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setSuccess(true);
      return true;
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    sendMessage,
    isSubmitting,
    success,
    error,
  };
}