// src/components/FinalReport/PDFReports/types.ts
export interface Material {
    id: string;
    name: string;
    type: string;
    score: number;
    rank: number;
    costPerUnit: number;
    carbonFootprint: number;
    sustainability: number;
    durability: number;
  }
  
  export interface FinancialData {
    id: string;
    name: string;
    rawCost: number;
    effectiveCost: number;
    taxImpact: number;
    lifetimeValue: number;
    carbonPerDollar: number;
  }
  
  export interface SustainabilityData {
    id: string;
    name: string;
    leedPoints: number;
    carbonFootprint: number;
    recycledContent: number;
    energyEfficiency: number;
    waterEfficiency: number;
  }
  
  export interface RegionalComparison {
    location: string;
    materialScores: {
      materialId: string;
      score: number;
      compliance: 'Full' | 'Partial' | 'None';
    }[];
  }
  
  export interface RegionalData {
    locations: string[];
    comparisons: RegionalComparison[];
  }