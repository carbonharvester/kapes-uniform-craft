import * as React from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const queryClient = new QueryClient();

// Simple test component
const TestComponent = () => {
  return <div>Test Component</div>;
};

const App = () => {
  console.log('App rendering, React:', React);
  
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<TestComponent />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;