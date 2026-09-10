import { describe, expect, it } from 'vitest';
import { formatPhone, validateAppointment } from './appointment';
import type { AppointmentPayload } from '../types';

const validPayload: AppointmentPayload = { name: 'Алия', phone: '+7 777 123 45 67', service: '', doctor: '', comment: '', consent: true, website: '' };

describe('formatPhone', () => {
  it('normalizes a Kazakhstan phone number', () => {
    expect(formatPhone('87771234567')).toBe('+7 777 123 45 67');
  });

  it('limits input to eleven digits', () => {
    expect(formatPhone('+7 777 123 45 67 999')).toBe('+7 777 123 45 67');
  });
});

describe('validateAppointment', () => {
  it('accepts valid required fields', () => {
    expect(validateAppointment(validPayload)).toEqual({});
  });

  it('returns field-specific errors', () => {
    expect(validateAppointment({ ...validPayload, name: '', phone: '123', consent: false })).toEqual({
      name: 'Укажите имя.',
      phone: 'Введите корректный номер телефона.',
      consent: 'Подтвердите согласие на обработку данных.',
    });
  });
});
