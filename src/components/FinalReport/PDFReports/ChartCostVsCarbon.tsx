import { View, Text } from '@react-pdf/renderer';
import { Svg, Circle, Line, G } from '@react-pdf/renderer';
import { FinancialData } from './Types';
import './reportStyles.css';

interface ChartCostVsCarbonProps {
  financialData: FinancialData[];
}

const ChartCostVsCarbon = ({ financialData }: ChartCostVsCarbonProps) => {
  const maxCost = Math.max(...financialData.map(d => d.effectiveCost));
  const maxCarbon = Math.max(...financialData.map(d => d.carbonPerDollar));
  
  return (
    <View style={{ height: 200, marginTop: 16 }}>
      <Svg width="100%" height="100%">
        {/* Axes */}
        <Line x1="40" y1="20" x2="40" y2="180" stroke="#E2E8F0" strokeWidth={1} />
        <Line x1="40" y1="180" x2="90%" y2="180" stroke="#E2E8F0" strokeWidth={1} />
        
        {/* Data points */}
        {financialData.map((item, index) => {
          const x = 40 + ((item.effectiveCost / maxCost) * 200);
          const y = 180 - ((item.carbonPerDollar / maxCarbon) * 160);
          const radius = 5 + (item.lifetimeValue / 1000);
          
          return (
            <G key={`point-${item.id}`}>
              <Circle
                cx={x}
                cy={y}
                r={radius}
                fill={index === 0 ? '#3182CE' : index === 1 ? '#38A169' : '#DD6B20'}
              />
              <Text
                x={x}
                y={y - radius - 5}
                style={{ fontSize: 8 }}
                textAnchor="middle"
              >
                {item.name}
              </Text>
            </G>
          );
        })}
      </Svg>
    </View>
  );
};

export default ChartCostVsCarbon;