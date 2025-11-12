// App.jsx
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import MyFiles from "./pages/MyFiles";
import Subscription from "./pages/Subscription";
import Transactions from "./pages/Transactions";
import { RedirectToSignIn, SignedOut, SignedIn } from "@clerk/clerk-react";

// Small wrapper to protect routes
function ProtectedRoute({ children }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/upload"
          element={
            <ProtectedRoute>
              <Upload />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-files"
          element={
            <ProtectedRoute>
              <MyFiles />
            </ProtectedRoute>
          }
        />

        <Route
          path="/subscriptions"
          element={
            <ProtectedRoute>
              <Subscription />
            </ProtectedRoute>
          }
        />

        <Route
          path="/transactions"
          element={
            <ProtectedRoute>
              <Transactions />
            </ProtectedRoute>
          }
        />

        {/* fallback: change to Navigate to "/" or a 404 page if you prefer */}
        <Route path="/*" element={<RedirectToSignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
