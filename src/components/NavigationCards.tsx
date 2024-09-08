import { Component, createMemo, For, JSX } from 'solid-js'
import { NavigationCard } from './NavigationCard'
import { useAppState } from '~/AppContext'
import { CardContainer } from './CardContainer'
import type { KunCard } from '~/types/card'
import '../styles/card.css'

export const NavigationCards: Component<{
  cards: KunCard[]
  title: JSX.Element
}> = (props) => {
  const context = useAppState()
  const { t } = context

  const grid = createMemo(() => {
    const length = props.cards.length

    if (!length) return ''
    if (length === 2) return 'grid-2'
    if (length === 3) return 'grid-3'
    if (length % 3 === 0) return 'grid-6'
    if (length > 3) return 'grid-4'
  })

  return (
    <CardContainer
      content={
        <>
          {props.title}
          <div class="items">
            <For each={props.cards}>
              {(feature) => (
                <div class={`item ${grid()}`}>
                  <NavigationCard
                    // TODO: any type
                    title={t(`kun.${feature.title}.title` as any) as string}
                    details={
                      t(`kun.${feature.details}.details` as any) as string
                    }
                    link={feature.link}
                    githubLink={feature.githubLink}
                    important={feature.important}
                  />
                </div>
              )}
            </For>
          </div>
        </>
      }
    />
  )
}
