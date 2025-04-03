// Updated ChartLEEDStack.tsx
import { View } from '@react-pdf/renderer';
import { Svg, Rect, Text as SvgText } from '@react-pdf/renderer';
import { SustainabilityData } from './Types';
import './reportStyles.css';

interface ChartLEEDStackProps {
  data: SustainabilityData;
}

interface ChartElement {
  offset: number;
  elements: React.ReactElement[];
}

const ChartLEEDStack = ({ data }: ChartLEEDStackProps) => {
  const categories = [
    { name: 'Materials', value: data.leedPoints * 0.35, color: '#3182CE' },
    { name: 'Energy', value: data.leedPoints * 0.25, color: '#38A169' },
    { name: 'Water', value: data.leedPoints * 0.15, color: '#00B5D8' },
    { name: 'Innovation', value: data.leedPoints * 0.15, color: '#D69E2E' },
    { name: 'Location', value: data.leedPoints * 0.10, color: '#805AD5' },
  ];

  const chartElements = categories.reduce<ChartElement>((acc, category, index) => {
    const x = acc.offset;
    const width = (category.value / data.leedPoints) * 100;
    
    const elements = [
      ...acc.elements,
      <Rect
        key={`rect-${index}`}
        x={`${x}%`}
        y={0}
        width={`${width}%`}
        height={24}
        fill={category.color}
      />
    ];

    if (width > 10) {
      elements.push(
        <SvgText
          key={`text-${index}`}
          x={`${x + width/2}%`}
          y={12}
          fill="white"
          style={{ fontSize: 8 }}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {`${category.name} (${category.value.toFixed(0)})`}
        </SvgText>
      );
    }

    return {
      offset: acc.offset + width,
      elements
    };
  }, { offset: 0, elements: [] });

  return (
    <View style={{ height: 24, marginTop: 8 }}>
      <Svg width="100%" height="24">
        {chartElements.elements}
      </Svg>
    </View>
  );
};

export default ChartLEEDStack;