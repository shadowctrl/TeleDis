import dynamic from "next/dynamic";
import ToggleSwitch from "@/components/switch";

const Timer = dynamic(() => import("@/lib/timer"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <main>
      <div className="hero-head">
        <h1 className="hero-title">Dashboard</h1>
        <div>
          <h1 className="hero-time">
            <Timer />
          </h1>
          <ToggleSwitch />
        </div>
      </div>
    </main>
  );
}
