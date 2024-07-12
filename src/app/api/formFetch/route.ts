import path from "path";
import { promises as fs } from "fs";

export const GET = async (request: Request) => {
  const filePath = path.join(process.cwd(), "src/lib/formData.json");

  try {
    await fs.access(filePath);
    const fileData = await fs.readFile(filePath, "utf-8");
    const jsonData = JSON.parse(fileData);
    return new Response(JSON.stringify(jsonData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "null" }), {
      status: 404,
    });
  }
};
