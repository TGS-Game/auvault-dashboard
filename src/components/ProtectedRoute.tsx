import { useEffect, type ReactNode } from 'react'
import { useAuth } from '../hooks/useAuth'
import { navigate } from '../lib/navigation'

type Props = {
  children: ReactNode
}

export default function ProtectedRoute({ children }: Props) {
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (!isAuthenticated) navigate('/login')
  }, [isAuthenticated])

  if (!isAuthenticated) return null
  return <>{children}</>
}
