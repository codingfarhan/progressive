"use client";
import { clientID } from "@/client";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
export default function ThirdwebProviderV4({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThirdwebProvider clientId={clientID}>{children}</ThirdwebProvider>
    </QueryClientProvider>
  );
}
