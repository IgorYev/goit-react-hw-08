import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import AppBar from "../AppBar/AppBar";
import Loader from "../Loader/Loader";

export default function Layout({ children }) {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
