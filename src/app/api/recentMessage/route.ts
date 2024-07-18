import path from "path";
import { promises as fs } from "fs";

const recentMsgPath = path.join(process.cwd(), "src/logs/recentMsg.json");
export const GET = async (request: Request) => {
  const recentMsg = await fs.readFile(recentMsgPath, "utf8");
  const recentMsgJson = JSON.parse(recentMsg);
  console.log(recentMsg, recentMsgJson);
  return new Response("hello", { status: 200 });
};
