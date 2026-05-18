import { useState } from 'react'

export default function Tabs({ tabs, defaultId }) {
  const [active, setActive] = useState(defaultId ?? tabs[0]?.id)
  const current = tabs.find((t) => t.id === active) ?? tabs[0]

  return (
    <div className="w-full">
      <div className="flex justify-center">
        <div
          role="tablist"
          className="inline-flex rounded-full border border-line bg-card p-1"
        >
        {tabs.map((t) => {
          const isActive = t.id === active
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(t.id)}
              className={
                'rounded-full px-5 py-2 text-sm font-medium transition ' +
                (isActive
                  ? 'bg-ink text-page'
                  : 'text-ink-soft hover:text-ink')
              }
            >
              {t.label}
            </button>
          )
        })}
        </div>
      </div>

      <div role="tabpanel" className="mt-10">
        {current?.render()}
      </div>
    </div>
  )
}
