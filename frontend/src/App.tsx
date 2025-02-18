// React imports
import { FC } from 'react'
// FS imports
import Navbar from './layout/other/Navbar'
import { DefaultStyleProvider } from './style'

const App: FC = () => {
  return (
    <>
      <DefaultStyleProvider />
      <div style={{ background: '#0B0205', height: '100vh' }}>
        <Navbar />
      </div>
    </>
  )
}

export default App