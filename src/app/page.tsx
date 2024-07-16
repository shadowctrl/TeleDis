import dynamic from "next/dynamic";
import Charts from "@/components/charts";
const Timer = dynamic(() => import("@/lib/timer"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <main className="App-main">
      <div className="hero-head">
        <h1 className="hero-title">Dashboard</h1>
        <h1 className="hero-time">
          <Timer />
        </h1>
      </div>
      <div className="hero-head-cards">
        <div>
          <h2 className="hero-card-title">Total Messages</h2>
          <p>10000</p>
        </div>
        <div>
          <h2 className="hero-card-title">Error Rates</h2>
          <p>0</p>
        </div>
        <div>
          <h2 className="hero-card-title">Last Message ID</h2>
          <p>0</p>
        </div>
        <div>
          <h2 className="hero-card-title">Logs</h2>
          <p>0</p>
        </div>
      </div>
      <div className="hero-chart">
        <h2> Overview</h2>
        <Charts />
      </div>
    </main>
  );
}
