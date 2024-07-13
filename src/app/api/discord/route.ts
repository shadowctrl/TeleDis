import { promises as fs } from "fs";
import path from "path";
const channelDataPath = path.join(process.cwd(), "src/lib/formData.json");

export const POST = async (request: Request) => {
  var channelData = await fs.readFile(channelDataPath, "utf8");
  const { discordId }: { discordId: string } = JSON.parse(channelData);
  const res = await request.json();
  await fetch(
    discordId,

    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: res,
      }),
    }
  );
  return new Response("Discord Bot Running", { status: 200 });
};
