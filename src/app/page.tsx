import Timer from "@/lib/timer";

export default function Home() {
  return (
    <main>
      <div className="hero-head">
        <h1 className="hero-title">Dashboard</h1>
        <h1 className="hero-time">
          <Timer />
        </h1>
      </div>
    </main>
  );
}
