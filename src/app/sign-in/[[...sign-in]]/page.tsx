import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className='grid h-dvh place-content-center bg-black/80'>
      <SignIn />
    </div>
  )
}
