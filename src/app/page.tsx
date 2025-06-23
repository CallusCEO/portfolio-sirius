import TabBar from "@/components/others/TabBar";
import Home from "@/components/others/Home";
import About from "@/components/others/About";
import Showcase from "@/components/others/Showcase";

export default function HomePage() {
  return (
    <div> 
      <TabBar />
      <Home />
      <About />
      <Showcase />
    </div>
  );
}
