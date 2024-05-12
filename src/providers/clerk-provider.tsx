import { ClerkProvider } from '@clerk/nextjs'
import type { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const AuthClerkProvider: FC<Props> = ({ children }) => {
  return <ClerkProvider>{children}</ClerkProvider>
}
