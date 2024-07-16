import dynamic from "next/dynamic";
import Charts from "@/components/charts";
const Timer = dynamic(() => import("@/lib/timer"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const data = [
  {
    content: "Hello",
    status: "success",
  },
  { content: "hi", status: "success" },
  { content: "hello", status: "success" },
  { content: "hi", status: "failed" },
  { content: "hello", status: "success" },
  { content: "hi", status: "success" },
];

const status = [{ content: "hello" }, { content: "hi" }];
export default function Home() {
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
          <h2 className="recents-head">Recent Messages</h2>
          <div className="recents-components">
            <div className="recents-container">
              <h2>content</h2>
              <h2>status</h2>
            </div>
            <div className="recents-container1">
              {data.map((value, index) => (
                <div key={index} className="recent-item">
                  <p>{value.content}</p>
                  <p
                    className={
                      value.status == "success" ? "success" : "failure"
                    }
                  >
                    {value.status}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
