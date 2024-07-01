import { Route, Routes, useLocation } from 'react-router-dom'
import { CustomCursor } from './common'
import { useEffect, useState } from 'react'
import { Loader } from './common/Loader/Loader'
import { Home, Presale } from './pages'

export const App = () => {
  const [loading, setLoading] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 0)
  }, [])

  return (
    <>
      {loading ? <Loader /> : null}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/presale' element={<Presale />} />
      </Routes>

      <CustomCursor />
    </>
  )
}
