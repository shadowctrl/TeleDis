import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
interface RequestData {
  telegramId: string;
  discordId: string;
}
const saveSettings = async (data: RequestData): Promise<void> => {
  const filePath = path.join(process.cwd(), "src/lib/formData.json");
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
};

export const POST = async (request: Request) => {
  const res = await request.json();
  await saveSettings(res);
  return new Response("successful", { status: 200 });
};
