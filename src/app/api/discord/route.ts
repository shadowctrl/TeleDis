import { promises as fs } from "fs";
import path from "path";
const channelDataPath = path.join(process.cwd(), "src/lib/formData.json");
const recentMsgPath = path.join(process.cwd(), "src/logs/recentMsg.json");
const monthLogPath = path.join(process.cwd(), "src/logs/monthLog.json");

const updateStatus = async (value: Boolean, updateData: any) => {
  const isrecentMsgPath = await fs
    .stat(recentMsgPath)
    .then(() => true)
    .catch(() => false);

  const currmonth = new Date().getMonth();
  const monthData = JSON.parse(await fs.readFile(monthLogPath, "utf-8"));
  monthData[currmonth].messages += 1;
  await fs.writeFile(monthLogPath, JSON.stringify(monthData, null, 1), "utf-8");

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
      if (prevDataJson.length > 4) {
        prevDataJson = prevDataJson.slice(-4);
      }
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
  const { text, date, msgChannel, msgId } = await request.json();
  const dateLocale = new Date(date * 1000).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const updateData = { msgId, text, dateLocale, msgChannel };
  try {
    await fetch(discordId, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: text,
      }),
    });

    await updateStatus(true, updateData);
  } catch {
    await updateStatus(false, updateData);
  }
  return new Response("Discord Bot Running", { status: 200 });
};
