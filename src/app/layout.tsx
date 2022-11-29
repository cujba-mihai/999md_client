'use client';
import React from 'react';
import '@/styles/global.scss';
import MainLayout from '@/components/layout/_MainLayout';
import ErrorBoundary from '@/components/error/ErrorBoundary';

interface IProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: IProps) => {
  return (
        <html>
            <ErrorBoundary>
              <body>
                <MainLayout>
                  {children}
                </MainLayout>
              </body>
          </ErrorBoundary >
        </html>
  );
};

export default RootLayout;