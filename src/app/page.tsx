import dynamic from "next/dynamic";
import Charts from "@/components/charts";
import { useEffect } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
const Timer = dynamic(() => import("@/lib/timer"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/recentMessage", {
    cache: "no-cache",
  });
  const Data = await res.json();
  return (
    <div className="App-main">
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
      <div className="hero-section2">
        <div className="hero-chart">
          <h2> Overview</h2>
          <Charts />
        </div>
        <div className="hero-recents">
          <h2 className="recents-head">
            Recent Activity
            <span>Handled 265 messages Last month</span>
          </h2>
          <div className="recents-components">
            {Data.map((data: any, key: number) => (
              <div key={key} className="recents-item-container">
                <div className="recents-item-head">
                  <Avatar>
                    <AvatarImage
                      style={{ scale: 1.3 }}
                      src="https://i.pinimg.com/originals/cc/6a/f2/cc6af2b47a62e61e1154a4726299ba46.jpg"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2>{data.msgChannel}</h2>
                    <p>{data.dateLocale}</p>
                  </div>
                </div>
                <h2 className="recents-text">{data.text}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
