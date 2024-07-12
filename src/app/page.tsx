import dynamic from "next/dynamic";
const Timer = dynamic(() => import("@/lib/timer"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
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
