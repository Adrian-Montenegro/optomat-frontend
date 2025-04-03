// /src/components/FinalReport/PDFReports/ChartMaterialRanking.tsx

import { View, Text } from '@react-pdf/renderer';
import { Svg, Rect } from '@react-pdf/renderer';
import './reportStyles.css';

interface Material {
  id: string;
  name: string;
  score: number;
  rank: number;
}

interface ChartMaterialRankingProps {
  materials: Material[];
}

const ChartMaterialRanking = ({ materials }: ChartMaterialRankingProps) => {
  const maxScore = Math.max(...materials.map(m => m.score)) * 1.1; // Add 10% padding
  
  return (
    <View style={{ height: 200, marginTop: 16 }}>
      <Svg width="100%" height="100%">
        {/* X-axis */}
        <Rect x={40} y={160} width="90%" height={1} fill="#E2E8F0" />
        
        {/* Y-axis labels */}
        {[0, 25, 50, 75, 100].map((value) => (
          <Text
            key={`y-label-${value}`}
            x={35}
            y={160 - (value / maxScore * 140)}
            style={{ fontSize: 8 }}
            textAnchor="end"
          >
            {value}
          </Text>
        ))}
        
        {/* Bars */}
        {materials.map((material, index) => {
          const barHeight = (material.score / maxScore) * 140;
          const barY = 160 - barHeight;
          const barX = 50 + (index * 80);
          const color = index === 0 ? '#3182CE' : index === 1 ? '#38A169' : index === 2 ? '#DD6B20' : '#A0AEC0';
          
          return (
            <View key={`bar-${material.id}`}>
              <Rect
                x={barX}
                y={barY}
                width={40}
                height={barHeight}
                fill={color}
              />
              <Text
                x={barX + 20}
                y={170}
                style={{ fontSize: 8 }}
                textAnchor="middle"
              >
                {material.name}
              </Text>
              <Text
                x={barX + 20}
                y={barY - 8}
                style={{ fontSize: 8 }}
                textAnchor="middle"
              >
                {material.score.toFixed(1)}
              </Text>
            </View>
          );
        })}
      </Svg>
      
      <Text style={{ fontSize: 10, color: '#718096', marginTop: 8 }}>
        Material scores are calculated based on performance across cost, sustainability, and regional compliance metrics.
      </Text>
    </View>
  );
};

export default ChartMaterialRanking;