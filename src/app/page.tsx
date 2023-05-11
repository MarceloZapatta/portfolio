import Header from "./Header";
import Home from "./Home";
import SplashScreen from "./SplashScreen";

export default function Main() {
  return (
    <main className="min-h-full min-w-full bg-night">
      <SplashScreen />
      <Header />
      <div className="container mx-auto px-11 bg-night min-w-screen">
        <Home />
      </div>
    </main>
  );
}
