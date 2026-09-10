import type { AppointmentPayload } from '../types';

export type AppointmentFieldErrors = Partial<Record<'name' | 'phone' | 'consent', string>>;

export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '').replace(/^8/, '7').slice(0, 11);
  if (!digits) return '';
  const normalized = digits.startsWith('7') ? digits : `7${digits}`.slice(0, 11);
  const groups = [normalized.slice(1, 4), normalized.slice(4, 7), normalized.slice(7, 9), normalized.slice(9, 11)];
  let result = '+7';
  if (groups[0]) result += ` ${groups[0]}`;
  if (groups[1]) result += ` ${groups[1]}`;
  if (groups[2]) result += ` ${groups[2]}`;
  if (groups[3]) result += ` ${groups[3]}`;
  return result;
}

export function validateAppointment(payload: AppointmentPayload): AppointmentFieldErrors {
  const errors: AppointmentFieldErrors = {};
  if (!payload.name.trim()) errors.name = 'Укажите имя.';
  const phoneDigits = payload.phone.replace(/\D/g, '');
  if (phoneDigits.length < 10 || phoneDigits.length > 15) errors.phone = 'Введите корректный номер телефона.';
  if (!payload.consent) errors.consent = 'Подтвердите согласие на обработку данных.';
  return errors;
}
