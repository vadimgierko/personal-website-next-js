import fs from "fs/promises";
import path from "path";

/**
 * Writes a JS object to public/cms/v0/index.json
 */
export async function writeCMSJsonFile({
	data,
	dir,
}: {
	data: unknown;
	/**
	 * path to file (after "public", "cms", "v0") => REMEMBER, that the last string should be a file name ended with .json
	 */
	dir: string[];
}): Promise<void> {
	const filePath = path.join(process.cwd(), "public", "cms", "v0", ...dir);

	try {
		// Ensure parent directory exists
		const parentDir = path.dirname(filePath);
		await fs.mkdir(parentDir, { recursive: true });

		const jsonString = JSON.stringify(data, null, 2); // pretty-print with 2 spaces
		await fs.writeFile(filePath, jsonString, "utf-8");
	} catch (error) {
		console.error(`❌ Failed to write CMS JSON file at ${filePath}`, error);
		throw new Error("Could not write CMS JSON file");
	}
}
