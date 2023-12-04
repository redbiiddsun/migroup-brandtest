type summaryData = {
    animal: string;
    animalDetail: animalDetail;
    chartData: ChartData;
};

type ChartData = {
    labels: string[];
    datasets: dataset;
};

type dataset = {
    id: number;
    label: string;
    data: number[];
};

type animalDetail = {
    name: string;
    image: string;
    logo: string;
    color: string;
    bgColor: string;
    shortdescription: string;
    brandChart: string;
    A: A;
    B: B;
    C: C;
    D: D;
};

type A = {
    description: string;
    example: string;
    metaphor: string;
    strengths: string;
    weaknesses: string;
};

type B = {
    shortdescription: string;
    description: string;
    marketingStrategy: string[];
    avoidMarketingStrategy: string[];
    trendsToCapture: string[];
    trendsToAvoid: string[];
};

type C = {
    communicationStrategy: string;
    mediaStrategy: string;
    mediaStrategyToAvoid: string;
    mediaSelections: string;
};

type D = {
    strength: string;
    MIGrouptoStrength: MigrouptoStrength;
    weakness: string;
    MIGrouptoWeakness: MigrouptoWeakness;
};

type MigrouptoStrength = {
    leverage: string;
    implementation: string;
};

type MigrouptoWeakness = {
    implementation: string;
};
