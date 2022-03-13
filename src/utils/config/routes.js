import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { useAuthState } from '../context'
import { ROUTES } from '../consts'

import { Login } from '../../pages/Login'
import { Dashboard } from '../../pages/Dashboard'
import { Create } from '../../pages/Create'
import { PageNotFound } from '../../pages/PageNotFound'

export function RoutesRedirect() {
  const { user } = useAuthState()

  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={user ? <Navigate to={ROUTES.DASHBOARD} replace /> : <Login />}
      />
      <Route
        path={ROUTES.LOGIN}
        element={user ? <Navigate to={ROUTES.DASHBOARD} replace /> : <Login />}
      />
      <Route element={<ProtectedRoute />}>
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.CREATE} element={<Create />} />
      </Route>
      <Route path={ROUTES.NOT_FOUND} element={<PageNotFound />} />
    </Routes>
  )
}

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthState()

  if (!user) {
    return <Navigate to={ROUTES.LOGIN} replace />
  }

  return children ? children : <Outlet />
}
