import Header from "./Header";
import Home from "./Home";
import SplashScreen from "./SplashScreen";

export default function Main() {
  return (
    <main className="min-h-full min-w-full">
      <SplashScreen />
      <Header />
      <Home />
    </main>
  );
}
