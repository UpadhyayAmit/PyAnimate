import { SignUp } from '@clerk/nextjs';
import { clerkAppearance } from '@/lib/clerkAppearance';

export default function SignUpPage() {
  return (
    <main className="flex min-h-[calc(100vh-12rem)] items-center justify-center px-4 py-12">
      <SignUp appearance={clerkAppearance} fallbackRedirectUrl="/" signInUrl="/sign-in" />
    </main>
  );
}
