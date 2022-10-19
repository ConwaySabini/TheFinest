import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

export default function Wrapper(props) {
  const session = useSession();
  const router = useRouter();

  if (
    (session !== null && session?.status === 'authenticated') ||
    router.pathname === '/auth/login' ||
    router.pathname === '/auth/register'
  ) {
    return props.children;
  } else {
    return (
      <>
        <div className="flex flex-row min-h-screen justify-center items-center">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">You are not authenticated</h2>
              <div className="card-actions justify-end">
                <Link href="/auth/login">
                  <button className="btn btn-primary mt-4">
                    Back To Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
