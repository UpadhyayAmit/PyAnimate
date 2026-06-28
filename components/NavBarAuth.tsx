'use client';

import { SignInButton, SignUpButton, UserButton, useAuth } from '@clerk/nextjs';
import { clerkAppearance } from '@/lib/clerkAppearance';
import { authReturnProps, getAuthReturnUrl } from '@/lib/auth-return-url';

const CLERK_CONFIGURED =
  typeof process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY === 'string' && process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith('pk_');

export function NavBarAuth({ mobile = false }: { mobile?: boolean }) {
  if (!CLERK_CONFIGURED) return null;

  return <NavBarAuthInner mobile={mobile} />;
}

function NavBarAuthInner({ mobile = false }: { mobile?: boolean }) {
  const { isLoaded, isSignedIn } = useAuth();
  const returnUrl = getAuthReturnUrl();

  if (isLoaded && isSignedIn) {
    return <UserButton appearance={{ elements: { avatarBox: 'w-8 h-8' } }} />;
  }

  return (
    <div className={`flex items-center gap-2 ${mobile ? 'flex-col w-full' : ''}`}>
      <SignInButton mode="modal" appearance={clerkAppearance} {...authReturnProps(returnUrl)}>
        <button
          className={`px-3 py-1.5 rounded-full text-xs font-semibold border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-colors ${
            mobile ? 'h-12 w-full px-5 text-center text-sm' : ''
          }`}
        >
          Sign in
        </button>
      </SignInButton>
      <SignUpButton mode="modal" appearance={clerkAppearance} {...authReturnProps(returnUrl)}>
        <button
          className={`px-3 py-1.5 rounded-full text-xs font-semibold bg-signal text-white shadow-[0_2px_12px_rgba(232,98,42,0.35)] hover:-translate-y-0.5 transition-all ${
            mobile ? 'h-12 w-full px-5 text-center text-sm' : ''
          }`}
        >
          Sign up free
        </button>
      </SignUpButton>
    </div>
  );
}
