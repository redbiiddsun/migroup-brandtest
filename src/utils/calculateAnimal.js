function calculateAnimal(areaScores) {
    const averageValue = 3.5;  // Threshold for considering an area as "great"

    // Map scores to boolean values indicating if they are "great"
    const greatAreas = areaScores.map(score => score > averageValue);

    // Condition to check if there are 4 or more great scores
    if (areaScores.filter(score => score >= 3.5).length >= 4) {
        return "Elephant";
    }

    // Mapping of animals to their associated great areas pattern
    const animals = {
        "Cheetah": [true, false, true, false, false],
        "Hawk": [true, false, false, false, true],
        "Labrador": [false, true, false, true, false],
        "Turtle": [false, true, false, false, true],
        "Lion": [true, true, false, false, false],
        "Dolphin": [false, false, true, false, true],
        "Butterfly": [false, false, true, true, false],
        "Swan": [true, false, false, true, false],
        "Horse": [false, true, true, false, false],
        "Panda": [false, false, false, true, true],
        "Fox": [false, false, false, false, false]
    };

    // Count occurrences of each score to identify peaks
    const scoreCounts = countOccurrences(areaScores);

    // Handling the scenario with three identical peak scores
    const threeSamePeakScores = Object.entries(scoreCounts).filter(([score, count]) => count === 3 && score > averageValue).map(([score]) => parseFloat(score));
    
    // if (threeSamePeakScores.length > 0) {
    //     const peakIndices = areaScores.map((score, index) => score === threeSamePeakScores[0] ? index : -1).filter(index => index !== -1);
    //     const combinations = [[peakIndices[0], peakIndices[1]], [peakIndices[0], peakIndices[2]], [peakIndices[1], peakIndices[2]]];
    //     let suggestions = new Set();
    //     combinations.forEach(combination => {
    //         const pattern = [0, 1, 2, 3, 4].map(i => combination.includes(i));
    //         Object.entries(animals).forEach(([animal, pat]) => {
    //             if (arraysEqual(pat, pattern)) {
    //                 suggestions.add(animal);
    //             }
    //         });
    //     });
    //     return `Based on your inputs, here are some suggestions: ${Array.from(suggestions).join(', ')}`;
    // }

    if (threeSamePeakScores.length > 0) {
        return "Elephant";
    }

    // Handling scenario with three distinct great areas
    if (greatAreas.filter(val => val).length === 3) {
        const topTwoScoresIndices = areaScores.map((score, index) => [score, index])
                                              .sort((a, b) => b[0] - a[0])
                                              .slice(0, 2)
                                              .map(pair => pair[1]);
        let suggestions = new Set();
        Object.entries(animals).forEach(([animal, pattern]) => {
            if (topTwoScoresIndices.reduce((sum, index) => sum + pattern[index], 0) === 2) {
                suggestions.add(animal);
            }
        });
        return `Based on your inputs, here are some suggestions: ${Array.from(suggestions).join(', ')}`;
    }

    // Check patterns for specific animals
    for (let [animal, pattern] of Object.entries(animals)) {
        if (arraysEqual(greatAreas, pattern)) {
            return animal;
        }
    }

    // Scenario where only one area is great, return "Fox"
    if (greatAreas.filter(val => val).length === 1) {
        return "Fox";
    }

    return "Unknown";  // Default return when no match is found
}

/**
 * Counts the occurrences of each unique item in an array.
 * @param {any[]} array - The array to count occurrences in.
 * @returns {Object} - An object with keys as array items and values as their counts.
 */
function countOccurrences(array) {
    const counts = {};
    array.forEach(item => {
        counts[item] = counts[item] ? counts[item] + 1 : 1;
    });
    return counts;
}

/**
 * Compares two arrays for equality.
 * @param {any[]} a - First array.
 * @param {any[]} b - Second array.
 * @returns {boolean} - True if arrays are equal, false otherwise.
 */
function arraysEqual(a, b) {
    return a.length === b.length && a.every((val, index) => val === b[index]);
}