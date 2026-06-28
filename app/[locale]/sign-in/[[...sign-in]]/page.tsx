import { SignIn } from '@clerk/nextjs';
import { clerkAppearance } from '@/lib/clerkAppearance';

export default function SignInPage() {
  return (
    <main className="flex min-h-[calc(100vh-12rem)] items-center justify-center px-4 py-12">
      <SignIn appearance={clerkAppearance} fallbackRedirectUrl="/" signUpUrl="/sign-up" />
    </main>
  );
}
