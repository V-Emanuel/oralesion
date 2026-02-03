import { Slot } from "expo-router";
import { useEffect, useState } from "react";
import Footer from "./components/footer";
import LoadingPage from "./loadingPage";

export default function Layout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <Slot />
      <Footer />
    </>
  );
}
