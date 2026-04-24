import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h2>
            <p className="text-gray-600 mb-6 text-sm">
              An unexpected error has occurred. Please try refreshing the page or contact support if the problem persists.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-emerald-700 text-white rounded-lg text-sm font-semibold hover:bg-emerald-800 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
