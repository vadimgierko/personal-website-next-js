import fs from "fs/promises";
import path from "path";

/**
 * Reads public/cms/v0/index.json and returns a JS object
 */
export async function readCMSJsonFile<T = unknown>({
	dir,
}: {
	/**
	 * path to file (after "public", "cms", "v0") => REMEMBER, that the last string should be a file name ended with .json
	 */
	dir: string[];
}): Promise<T> {
	const filePath = path.join(process.cwd(), "public", "cms", "v0", ...dir);

	try {
		const data = await fs.readFile(filePath, "utf-8");
		return JSON.parse(data) as T;
	} catch (error) {
		console.error(`❌ Failed to read CMS JSON file at ${filePath}`, error);
		throw new Error("Could not read CMS JSON file");
	}
}
