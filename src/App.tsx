import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import GlobalStyle, { Container } from './styles'
import { ThemeProvider } from 'styled-components'
import Cores from './theme'

function App() {
  return (
    <ThemeProvider theme={Cores}>
      <GlobalStyle />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
