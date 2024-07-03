import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import QuoteFetcher from './QuoteFetcher'
import QuoteFetcherLoader from './QuoteFetcherLoader'
import ProfileViewerWithSearch from './ProfileViewerWithSearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter/> */}
      {/* <QuoteFetcher/> */}
      {/* <QuoteFetcherLoader/> */}
      <ProfileViewerWithSearch/>
    </>
  )
}

export default App
