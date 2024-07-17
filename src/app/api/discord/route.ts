import { promises as fs } from "fs";
import path from "path";
const channelDataPath = path.join(process.cwd(), "src/lib/formData.json");
const recentMsgPath = path.join(process.cwd(), "src/logs/recentMsg.json");

const updateStatus = async (value: Boolean, updateData: any) => {
  const isrecentMsgPath = await fs
    .stat(recentMsgPath)
    .then(() => true)
    .catch(() => false);

  if (!isrecentMsgPath)
    return await fs.writeFile(
      recentMsgPath,
      JSON.stringify([updateData]),
      "utf-8"
    );
  else {
    const prevData = await fs.readFile(recentMsgPath, "utf-8");
    let prevDataJson;

    if (prevData) {
      prevDataJson = JSON.parse(prevData);
      prevDataJson.push(updateData);
    } else {
      prevDataJson = [updateData];
    }
    await fs.writeFile(
      recentMsgPath,
      JSON.stringify(prevDataJson, null, 2),
      "utf-8"
    );
  }
};
export const POST = async (request: Request) => {
  var channelData = await fs.readFile(channelDataPath, "utf8");
  const { discordId }: { discordId: string } = JSON.parse(channelData);
  const { msgId, msgData } = await request.json();
  const updateData = { msgId, msgData };
  try {
    await fetch(discordId, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: msgData,
      }),
    });

    await updateStatus(true, updateData);
  } catch {
    await updateStatus(false, updateData);
  }
  return new Response("Discord Bot Running", { status: 200 });
};
