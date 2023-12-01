export function objToArrayValue(json: result) {
    var resultArray = [];

    for (const [key, value] of Object.entries(json)) {
        resultArray.push(value);
    }

    return resultArray;
}

export function objToArrayKey(json: result) {
    var resultArray = [];

    for (const [key, value] of Object.entries(json)) {
		
        resultArray.push(key);
    }

    return resultArray;
}
