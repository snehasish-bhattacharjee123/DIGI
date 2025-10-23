import { Component, ReactNode, ErrorInfo } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("Error caught by ErrorBoundary:", error);
      console.error("Error Info:", errorInfo);
    }

    // Update state with error info
    this.setState({
      errorInfo,
    });

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Send to error reporting service (e.g., Sentry)
    // Example: Sentry.captureException(error, { contexts: { react: { componentStack: errorInfo.componentStack } } });
  }

  handleReset = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      // If custom fallback is provided, use it
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div
          className="py-12 md:py-16 lg:py-20 px-4"
          role="alert"
          aria-live="assertive"
        >
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-6">
              <AlertCircle className="w-16 h-16 md:w-20 md:h-20 mx-auto text-destructive" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
              Oops! Something went wrong
            </h2>

            <p className="text-base md:text-lg text-muted-foreground mb-6">
              We encountered an unexpected error. Don't worry, our team has been
              notified and we're working on it.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button
                onClick={this.handleReset}
                className="gap-2"
                variant="default"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </Button>

              <Button
                onClick={() => window.location.reload()}
                variant="outline"
              >
                Reload Page
              </Button>
            </div>

            {/* Show error details in development */}
            {(process.env.NODE_ENV === "development" ||
              this.props.showDetails) &&
              this.state.error && (
                <details className="mt-8 text-left">
                  <summary className="cursor-pointer text-sm font-semibold text-muted-foreground hover:text-foreground mb-4">
                    Error Details (Development Only)
                  </summary>
                  <div className="bg-muted/50 rounded-lg p-4 border border-border">
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-destructive mb-2">
                        Error Message:
                      </h3>
                      <code className="text-xs text-foreground block bg-background p-3 rounded overflow-auto">
                        {this.state.error.toString()}
                      </code>
                    </div>

                    {this.state.errorInfo && (
                      <div>
                        <h3 className="text-sm font-semibold text-destructive mb-2">
                          Component Stack:
                        </h3>
                        <pre className="text-xs text-foreground bg-background p-3 rounded overflow-auto max-h-64">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </div>
                    )}
                  </div>
                </details>
              )}
          </div>
        </div>
      );
    }

    // No error, render children normally
    return this.props.children;
  }
}
