import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './theme/globalStyle'
import { AuthProvider } from './utils/context'
import { RoutesRedirect } from './utils/config/routes'

function App() {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyle />
        <RoutesRedirect />
      </Router>
    </AuthProvider>
  )
}

export default App
