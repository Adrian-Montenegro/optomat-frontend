// src/components/FinalReport/PDFReports/Page5_Conclusion.tsx
import { View, Text } from '@react-pdf/renderer';
import { Material, RegionalData } from './Types';
import './reportStyles.css';

interface Page5_ConclusionProps {
  materialData: Material[];
  regionalData: RegionalData;
}

const Page5_Conclusion = ({ materialData, regionalData }: Page5_ConclusionProps) => {
  const topMaterial = materialData[0];
  const primaryLocation = regionalData.locations[0];

  return (
    <View style={{ padding: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>Final Recommendation</Text>
      
      {/* Recommendation Card */}
      <View style={{ 
        border: '1px solid #E2E8F0',
        borderRadius: 8,
        padding: 24,
        marginBottom: 24,
        backgroundColor: '#F7FAFC'
      }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#3182CE', marginBottom: 8 }}>
          Recommended Material
        </Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>
          {topMaterial.name}
        </Text>
        <Text style={{ fontSize: 14, color: '#4A5568', marginBottom: 16 }}>
          {topMaterial.type} • Overall Score: {topMaterial.score.toFixed(1)}/100
        </Text>
        
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ width: '48%' }}>
            <Text style={{ fontWeight: 'bold', marginBottom: 4 }}>Key Advantages</Text>
            <Text style={{ fontSize: 10, color: '#718096' }}>
              • Best cost-to-performance ratio\n• Highest regional compliance ({primaryLocation})\n• Top sustainability metrics
            </Text>
          </View>
          <View style={{ width: '48%' }}>
            <Text style={{ fontWeight: 'bold', marginBottom: 4 }}>Projected Savings</Text>
            <Text style={{ fontSize: 10, color: '#718096' }}>
              • 12-18% material cost savings\n• 22% carbon reduction\n• $3.2k tax incentives
            </Text>
          </View>
        </View>
      </View>
      
      {/* Implementation Notes */}
      <View style={{ marginBottom: 24 }}>
        <Text style={{ fontSize: 14, fontWeight: 'semibold', marginBottom: 8 }}>Implementation Guidance</Text>
        <Text style={{ fontSize: 10, color: '#718096', marginBottom: 4 }}>
          • Order lead time: 2-3 weeks\n• Recommended vendors: ACME Supplies, BuildRight Materials\n• Installation notes: Requires standard framing techniques
        </Text>
      </View>
      
      {/* Next Steps */}
      <View>
        <Text style={{ fontSize: 14, fontWeight: 'semibold', marginBottom: 8 }}>Next Steps</Text>
        <Text style={{ fontSize: 10, color: '#718096', marginBottom: 4 }}>
          1. Confirm material selection with project team\n
          2. Submit incentive applications by 10/15/2023\n
          3. Schedule vendor consultation\n
          4. Review regional compliance documentation
        </Text>
      </View>
      
      <View style={{ position: 'absolute', bottom: 20, left: 40, right: 40, fontSize: 10, color: '#A0AEC0', borderTop: '1px solid #E2E8F0', paddingTop: 8 }}>
        <Text>OptoMat Material Evaluation Report • Page 5 of 5</Text>
      </View>
    </View>
  );
};

export default Page5_Conclusion;