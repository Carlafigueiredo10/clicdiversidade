export default function FormField({
  id,
  label,
  type = 'text',
  value,
  onChange,
  required,
  placeholder,
}) {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder || label}
        aria-label={label}
        className="w-full bg-card border border-line rounded-xl px-4 py-3.5 text-ink placeholder:text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
      />
    </div>
  )
}
