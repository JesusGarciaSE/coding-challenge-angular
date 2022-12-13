export class Food {
    constructor(
    public description: string,
    public foodCategory: string,
    public ingredients: string,
    public lowerCaseDescription: string,
    public foodNutrients: Nutrient[],
    public marketCountry: string,
    public servingSize: number,
    public servingSizeUnit: string
    ) {}
}

export class Nutrient {
    constructor(
    public derivationCode: string,
    public name: string,
    public value: number,
    public unit: string
    ) {}
}
