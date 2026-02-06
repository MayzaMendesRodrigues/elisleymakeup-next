export function isValidEmail(email: string) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  return regex.test(email);
}

export function isValidPhone(phone: string) {
  // Remove espaços, traços, parênteses
  const cleaned = phone.replace(/\D/g, "");

  // Aceita entre 8 e 15 dígitos
  return cleaned.length >= 8 && cleaned.length <= 15;
}

export function isFutureDate(date: string) {
  if (!date) return false;

  const selected = new Date(date);
  const today = new Date();

  // Zera horas para comparar só a data
  today.setHours(0, 0, 0, 0);

  return selected > today;
}

export function isValidTime(time: string) {
  if (!time) return false;
  return /^([01]\d|2[0-3]):([0-5]\d)$/.test(time);
}
