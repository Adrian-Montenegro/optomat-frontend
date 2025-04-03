// src/components/FinalReport/PDFReports/Page3_Sustainability.tsx
import { View, Text } from '@react-pdf/renderer';
import ChartLEEDStack from './ChartLEEDStack';
import { SustainabilityData } from './Types';
import './reportStyles.css';

interface Page3_SustainabilityProps {
  sustainabilityData: SustainabilityData[];
}

const Page3_Sustainability = ({ sustainabilityData }: Page3_SustainabilityProps) => {
  const getLEEDRating = (points: number) => {
    if (points >= 80) return 'Platinum';
    if (points >= 60) return 'Gold';
    if (points >= 50) return 'Silver';
    return 'Certified';
  };

  return (
    <View style={{ padding: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>Sustainability Analysis</Text>
      
      {/* LEED Certification Summary */}
      <View style={{ marginBottom: 24 }}>
        <Text style={{ fontSize: 14, fontWeight: 'semibold', marginBottom: 8 }}>LEED Certification Potential</Text>
        
        {sustainabilityData.map((item) => (
          <View key={item.id} style={{ marginBottom: 16 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 }}>
              <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
              <Text>
                <Text style={{ color: '#3182CE' }}>{item.leedPoints} points</Text> • {getLEEDRating(item.leedPoints)}
              </Text>
            </View>
            <ChartLEEDStack data={item} />
          </View>
        ))}
      </View>
      
      {/* Environmental Metrics */}
      <View>
        <Text style={{ fontSize: 14, fontWeight: 'semibold', marginBottom: 8 }}>Environmental Metrics</Text>
        
        <View style={{ display: 'flex', flexDirection: 'row', borderBottom: '1px solid #E2E8F0', paddingBottom: 8 }}>
          <Text style={{ width: '30%', fontWeight: 'bold' }}>Material</Text>
          <Text style={{ width: '17.5%', fontWeight: 'bold' }}>Carbon</Text>
          <Text style={{ width: '17.5%', fontWeight: 'bold' }}>Recycled</Text>
          <Text style={{ width: '17.5%', fontWeight: 'bold' }}>Energy</Text>
          <Text style={{ width: '17.5%', fontWeight: 'bold' }}>Water</Text>
        </View>
        
        {sustainabilityData.map((item) => (
          <View key={item.id} style={{ display: 'flex', flexDirection: 'row', padding: '8px 0', borderBottom: '1px solid #EDF2F7' }}>
            <Text style={{ width: '30%' }}>{item.name}</Text>
            <Text style={{ width: '17.5%' }}>{item.carbonFootprint.toFixed(1)} kgCO₂</Text>
            <Text style={{ width: '17.5%' }}>{item.recycledContent}%</Text>
            <Text style={{ width: '17.5%' }}>{item.energyEfficiency}%</Text>
            <Text style={{ width: '17.5%' }}>{item.waterEfficiency}%</Text>
          </View>
        ))}
      </View>
      
      <View style={{ position: 'absolute', bottom: 20, left: 40, right: 40, fontSize: 10, color: '#A0AEC0', borderTop: '1px solid #E2E8F0', paddingTop: 8 }}>
        <Text>OptoMat Material Evaluation Report • Page 3 of 5</Text>
      </View>
    </View>
  );
};

export default Page3_Sustainability;