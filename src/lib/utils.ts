export default function buildUrl(path: string, params: object) {
	const query: any = { ...params };
	let interpolatedPath = path;
	for (const [param, value] of Object.entries(params)) {
		const replaced = interpolatedPath.replace(`[${param}]`, value);
		if (replaced !== interpolatedPath) {
			interpolatedPath = replaced;
			delete query[param as string];
		}
	}
	const search = new URLSearchParams(query).toString();
	return `${interpolatedPath}${search ? `?${search}` : ''}`;
}
