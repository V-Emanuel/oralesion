import { Slot } from "expo-router";
import Footer from "./components/footer";

export default function Layout() {
  return (
    <>
      <Slot />
      <Footer />
    </>
  );
}
