"use client";

import { useSyncExternalStore } from "react";

interface ObfuscatedEmailProps {
  className?: string;
  showIcon?: boolean;
  label?: string;
  showAddress?: boolean;
}

function emptySubscribe() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export function ObfuscatedEmail({
  className = "",
  showIcon = false,
  label,
  showAddress = false,
}: ObfuscatedEmailProps) {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    getClientSnapshot,
    getServerSnapshot
  );

  const u = "syyedaaamna682";
  const d = "gmail.com";
  const email = isMounted ? `${u}@${d}` : "";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!email) {
      e.preventDefault();
      window.location.href = `mailto:${u}@${d}`;
    }
  };

  const displayText = showAddress
    ? email || "syyedaaamna682 [at] gmail [dot] com"
    : label || email || "Email";

  return (
    <a
      href={email ? `mailto:${email}` : `mailto:${u}@${d}`}
      onClick={handleClick}
      className={className}
      aria-label="Send email to Syyeda Aamna"
    >
      {showIcon && (
        <svg
          className="w-4 h-4 stroke-current shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      )}
      <span>{displayText}</span>
    </a>
  );
}
