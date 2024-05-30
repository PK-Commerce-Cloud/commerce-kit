"use client";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactNode, createContext } from "react";
import { guestLogin } from "./actions";

const AuthContext = createContext(null);

function AuthProvider({ children }: { children: ReactNode }) {
  useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      const data = await guestLogin();
      return data;
    },
  });

  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
}

export default function CommerceProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  );
}
