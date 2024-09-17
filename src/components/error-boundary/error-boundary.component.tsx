import { Component, ReactNode } from 'react';

import { ApplicationCrash } from '../crash-screen/crash-screen.component';

interface IErrorBoundaryProps {
  children?: ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props);

    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(): IErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public render() {
    if (this.state.hasError) {
      return <ApplicationCrash />;
    }

    return this.props.children;
  }
}
