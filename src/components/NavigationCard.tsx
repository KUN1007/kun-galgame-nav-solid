import { Component } from 'solid-js'
import { useAppState } from '~/AppContext'
import type { KunCard } from '~/types/card'

export const NavigationCard: Component<KunCard> = (props) => {
  const context = useAppState()
  const { t } = context

  const handleClickLink = (event: MouseEvent, link?: string) => {
    event.preventDefault()
    window.open(link, '_blank', 'noopener noreferrer')
  }

  return (
    <a href={props.link} rel="noreferrer" target="_blank">
      <article class="border border-kun-font-dark dark:border-kun-font-light hover:border-kun-blue5-light hover:dark:border-kun-blue0-light transition duration-300 flex flex-col p-6 h-full rounded-2xl">
        <h2 class="text-lg font-semibold leading-6" innerHTML={props.title} />
        {props.details && (
          <p
            class="flex-grow pt-2 text-sm leading-6 font-medium"
            innerHTML={props.details}
          />
        )}
        {props.githubLink && (
          <div class="pt-4">
            <span
              onClick={(event) => handleClickLink(event, props.githubLink)}
              class="underline underline-offset-2 decoration-kun-blue5-light dark:decoration-kun-blue5-dark"
            >
              {t('kun.github')}
            </span>
          </div>
        )}
      </article>
    </a>
  )
}
