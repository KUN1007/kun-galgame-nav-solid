import { MetaProvider } from '@solidjs/meta'
import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { Suspense } from 'solid-js'
import { AppContextProvider } from './AppContext'
import Nav from '~/components/Nav'
import './app.css'

export default function App() {
  return (
    <MetaProvider>
      <Router
        root={(props) => (
          <AppContextProvider>
            <div>
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
