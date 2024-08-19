import { MetaProvider } from '@solidjs/meta'
import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { Suspense } from 'solid-js'
import { AppContextProvider } from './AppContext'
import Nav from '~/components/Nav'
import './styles/app.css'

export default function App() {
  return (
    <MetaProvider>
      <Router
        root={(props) => (
          <AppContextProvider>
            <div class="bg-kun-blue0-light dark:bg-kun-blue0-dark text-kun-font-light dark:text-kun-font-dark min-h-lvh">
              <Nav />
              <Suspense>{props.children}</Suspense>
            </div>
          </AppContextProvider>
        )}
      >
        <FileRoutes />
      </Router>
    </MetaProvider>
  )
}
