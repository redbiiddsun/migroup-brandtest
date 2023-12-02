function extractKeys<T>(obj: result): Array<keyof T> {
    return Object.keys(obj) as Array<keyof T>;
}
function extractValues<T>(obj: result): Array<keyof T> {
    return Object.values(obj) as Array<keyof T>;
}
