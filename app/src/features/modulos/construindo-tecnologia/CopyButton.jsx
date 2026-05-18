import { useState } from 'react'

export default function CopyButton({
  text,
  children,
  copiedChildren,
  className = '',
}) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch (e) {
      console.error('Copy failed:', e)
    }
  }

  return (
    <button type="button" onClick={handleCopy} className={className}>
      {copied ? (copiedChildren ?? '✓ Copiado') : children}
    </button>
  )
}
