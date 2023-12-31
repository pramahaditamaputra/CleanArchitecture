import React from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import ErrorFallbackComponent from './ErrorFallbackComponent';

export function withErrorBoundaryScreen<TProps>(Screen: React.FC<TProps>) {
  const BoundedScreen: React.FC<TProps> = (props: TProps) => {
    return (
      <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
        {/* @ts-ignore */}
        <Screen {...props} />
      </ErrorBoundary>
    );
  };
  return BoundedScreen;
}
