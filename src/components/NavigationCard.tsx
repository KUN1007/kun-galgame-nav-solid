import { Component } from 'solid-js'
import type { KunCard } from '../types/card'

export const NavigationCard: Component<KunCard> = (props) => (
  <a href={props.link} rel="noreferrer" target="_blank">
    <article class="border border-kun-font-dark dark:border-kun-font-light hover:border-kun-blue5-light hover:dark:border-kun-blue0-light transition duration-300 flex flex-col p-6 h-full rounded-2xl">
      <h2 class="text-lg font-semibold leading-6" innerHTML={props.title}></h2>
      {props.details && (
        <p
          class="flex-grow pt-2 text-sm leading-6 font-medium"
          innerHTML={props.details}
        />
      )}
      {props.linkText && (
        <div class="pt-2">
          <p class="flex items-center text-sm font-medium">{props.linkText}</p>
        </div>
      )}
    </article>
  </a>
)
