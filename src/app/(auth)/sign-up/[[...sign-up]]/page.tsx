import { SignUp, ClerkLoaded, ClerkLoading } from '@clerk/nextjs'

import { Logo } from '@/components/logo'
import { Loader2 } from 'lucide-react'
const SignUpPage = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full px-4 lg:flex flex-col items-center justify-center">
        <div className="space-y-4 pb-16 text-center">
          <h1 className="text-3xl font-bold text-[#2e2a47]">Bem vindo</h1>

          <p className="text-base text-[#7e8ca0]">
            Acesse sua conta ou cadastre-se para entrar na plataforma
          </p>
        </div>

        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignUp path="/sign-up" />
          </ClerkLoaded>

          <ClerkLoading>
            <Loader2 className="text-muted-foreground animate-spin" />
          </ClerkLoading>
        </div>
      </div>
      <div className="hidden h-full lg:flex items-center justify-center bg-blue-800">
        <Logo />
      </div>
    </div>
  )
}

export default SignUpPage
