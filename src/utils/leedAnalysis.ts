// src/utils/leedAnalysis.ts
export const analyzeMaterials = async (file: File): Promise<string[]> => {
    // Simulate material detection
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(['Concrete', 'Steel', 'Glass']);
      }, 1000);
    });
  };
  
  export const checkLEEDCompliance = async (file: File): Promise<number> => {
    // Simulate LEED compliance check
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(85); // Example score
      }, 1000);
    });
  };