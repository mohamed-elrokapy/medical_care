import { z } from 'zod';
import { SERVICES, TIME_SLOTS } from '@/lib/site';

export function todayISO(now: Date = new Date()): string {
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export const appointmentSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Enter your full name (at least 2 characters).')
    .max(80, 'Name is too long.'),
  email: z
    .string()
    .trim()
    .min(1, 'Enter your email address.')
    .email('Enter a valid email address, like name@example.com.'),
  phone: z
    .string()
    .trim()
    .min(1, 'Enter a phone number.')
    .regex(
      /^\+?[0-9 ()-]{7,20}$/,
      'Use digits, spaces, dashes or brackets, 7 to 20 characters.'
    ),
  service: z.enum(SERVICES, {
    errorMap: () => ({ message: 'Choose a service.' }),
  }),
  date: z
    .string()
    .min(1, 'Choose a date.')
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Choose a valid date.')
    .refine((v) => v >= todayISO(), 'Choose today or a future date.'),
  time: z.enum(TIME_SLOTS, {
    errorMap: () => ({ message: 'Choose a time.' }),
  }),
  message: z.string().max(500, 'Keep notes under 500 characters.').optional(),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;
