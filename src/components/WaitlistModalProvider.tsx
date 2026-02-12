"use client";

import React, { createContext, useCallback, useContext, useState } from "react";
import WaitlistModal from "./WaitlistModal";

type WaitlistModalContextType = {
  openModal: () => void;
  closeModal: () => void;
};

const WaitlistModalContext = createContext<WaitlistModalContextType | null>(
  null
);

export function useWaitlistModal() {
  const ctx = useContext(WaitlistModalContext);
  if (!ctx) {
    return {
      openModal: () => {
        window.location.href = "/waitlist";
      },
      closeModal: () => {},
    };
  }
  return ctx;
}

export default function WaitlistModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  return (
    <WaitlistModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <WaitlistModal
        isOpen={open}
        onClose={closeModal}
        onSuccess={() => {
          setOpen(false);
          window.location.href = "/waitlist?success=1";
        }}
      />
    </WaitlistModalContext.Provider>
  );
}
