import { Component, createMemo, For } from 'solid-js'
import { NavigationCard } from './NavigationCard'
import type { KunCard } from '../types/card'
import '../styles/card.css'

export const NavigationCards: Component<KunCard[]> = (props) => {
  const grid = createMemo(() => {
    const length = props.length

    if (!length) return ''
    if (length === 2) return 'grid-2'
    if (length === 3) return 'grid-3'
    if (length % 3 === 0) return 'grid-6'
    if (length > 3) return 'grid-4'
  })

  return (
    <div class="kun-cards">
      <div class="container">
        <div class="items">
          <For each={props}>
            {(feature) => (
              <div class={`item ${grid()}`}>
                <NavigationCard
                  title={feature.title}
                  details={feature.details}
                  link={feature.link}
                  linkText={feature.linkText}
                />
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  )
}
