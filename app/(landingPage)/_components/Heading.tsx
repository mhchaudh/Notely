"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton, useAuth } from "@clerk/nextjs";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const { isAuthenticated, isLoading } = useConvexAuth();
  const isLoadingAuth = !isLoaded || isLoading;
  const isSignedInAuth = isSignedIn || isAuthenticated;
  return (
    <div className="max-w-3xl space-y-4 text-center">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Note, Plan, Manage, Innovate. With{" "}
        <span className="text-blue-500 underline hover:decoration-wavy">
          Notely
        </span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Your connected workspace for seamless productivity and creativity.
      </h3>

      {isLoadingAuth && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isSignedInAuth && !isLoadingAuth && (
        <Button asChild>
          <Link href="/canvas">
            Get Started
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isSignedInAuth && !isLoadingAuth && (
        <SignInButton mode="modal">
          <Button>
            Get Started
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
