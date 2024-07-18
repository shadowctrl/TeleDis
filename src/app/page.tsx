import dynamic from "next/dynamic";
import Charts from "@/components/charts";
import { useEffect } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
const Timer = dynamic(() => import("@/lib/timer"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const data = [
  { content: "Hello", status: "success" },
  { content: "hi", status: "success" },
  { content: "hello", status: "success" },
  { content: "hi", status: "failed" },
  { content: "hello", status: "success" },
];

export default async function Home() {
  // await fetch("http://localhost:3000/api/recentMessage");

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
            <div className="recents-item-head">
              <Avatar>
                <AvatarImage
                  style={{ scale: 1.3 }}
                  src="https://i.pinimg.com/originals/cc/6a/f2/cc6af2b47a62e61e1154a4726299ba46.jpg"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h2>Raghav</h2>
                <p>admin@shadowctrl.me</p>
              </div>
            </div>
            <div className="recents-item-head">
              <Avatar>
                <AvatarImage
                  style={{ scale: 1.3 }}
                  src="https://i.pinimg.com/originals/cc/6a/f2/cc6af2b47a62e61e1154a4726299ba46.jpg"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h2>Raghav</h2>
                <p>admin@shadowctrl.me</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
