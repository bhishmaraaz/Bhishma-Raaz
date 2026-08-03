onError={(e) => {
  const target = e.currentTarget;
  target.style.display = 'none';
  const next = target.nextElementSibling as HTMLElement | null;
  if (next) {
    next.style.display = 'flex';
  }
}}