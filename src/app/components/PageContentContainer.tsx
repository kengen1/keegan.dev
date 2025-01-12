'use client';

import PageTransition from './PageTransition';
import { ReactNode } from 'react';

interface PageContentContainerProps {
  children: ReactNode;
  onClose?: () => void;
}

export default function PageContentContainer({
  children,
  onClose,
}: PageContentContainerProps) {
  return (
    <PageTransition>
      <div className="relative flex items-center justify-center min-h-[90vh]">
        {/* Content Container */}
        <div className="container relative">
          {/* Close Button */}
          {onClose && (
            <button
              onClick={onClose}
              className="container-close-btn"
              aria-label="Close"
            >
              ✕
            </button>
          )}

          {/* Page Content */}
          {children}
        </div>
      </div>
    </PageTransition>
  );
}
