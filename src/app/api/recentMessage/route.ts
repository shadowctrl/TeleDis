import path from "path";
import { promises as fs } from "fs";

const recentMsgPath = path.join(process.cwd(), "src/logs/recentMsg.json");
const monthLogPath = path.join(process.cwd(), "src/logs/monthLog.json");

export const GET = async (request: Request) => {
  const recentMsg = await fs.readFile(recentMsgPath, "utf8");
  const monthData = await fs.readFile(monthLogPath, "utf8");
  const recentMsgJson = JSON.parse(recentMsg);
  const monthDataJson = JSON.parse(monthData);

  const responseData = {
    recentMsg: recentMsgJson,
    monthData: monthDataJson,
  };

  return new Response(JSON.stringify(responseData), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
