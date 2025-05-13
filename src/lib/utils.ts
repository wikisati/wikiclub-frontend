export function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
export function logout() {
  document.cookie = 'token=; Max-Age=0; path=/;';
  window.location.href = '/';
}
