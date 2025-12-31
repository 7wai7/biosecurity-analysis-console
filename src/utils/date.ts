export const formatDateInput = (date?: string) => {
  return date? new Date(date).toLocaleDateString() : ""
}

export const toDateInputValue = (value?: string | Date | null) => {
  if (!value) return "";
  const d = new Date(value);
  if (isNaN(d.getTime())) return "";
  return d.toISOString().slice(0, 10);
}

export const formatTimeInput = (date?: string | number) => {
  if (!date) return "";

  const d = new Date(date);

  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  const ss = String(d.getSeconds()).padStart(2, "0");

  return `${hh}:${mm}:${ss}`;
};
