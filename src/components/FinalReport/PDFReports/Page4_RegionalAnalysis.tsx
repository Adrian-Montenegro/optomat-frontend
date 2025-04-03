// src/components/FinalReport/PDFReports/Page4_RegionalAnalysis.tsx
import { View, Text } from '@react-pdf/renderer';
import { RegionalData } from './Types';
import './reportStyles.css';

interface Page4_RegionalAnalysisProps {
  regionalData: RegionalData;
}

const Page4_RegionalAnalysis = ({ regionalData }: Page4_RegionalAnalysisProps) => {
  return (
    <View style={{ padding: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>Regional Performance Analysis</Text>
      
      {/* Location Overview */}
      <View style={{ marginBottom: 24 }}>
        <Text style={{ fontSize: 14, fontWeight: 'semibold', marginBottom: 8 }}>
          Material Performance by Region
        </Text>
        <Text style={{ fontSize: 10, color: '#718096', marginBottom: 12 }}>
          Scores adjusted for regional policies, climate factors, and incentive availability
        </Text>
        
        {/* Regional Comparison Table */}
        <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 8 }}>
          <Text style={{ width: '30%', fontWeight: 'bold' }}>Material</Text>
          {regionalData.locations.map(location => (
            <Text key={location} style={{ width: `${70/regionalData.locations.length}%`, fontWeight: 'bold' }}>
              {location}
            </Text>
          ))}
        </View>
        
        {regionalData.comparisons[0].materialScores.map((materialScore, matIndex) => (
          <View key={`mat-${matIndex}`} style={{ display: 'flex', flexDirection: 'row', padding: '8px 0', borderBottom: '1px solid #EDF2F7' }}>
            <Text style={{ width: '30%' }}>{materialScore.materialId}</Text>
            {regionalData.comparisons.map((comparison, locIndex) => (
              <Text 
                key={`loc-${locIndex}`} 
                style={{ 
                  width: `${70/regionalData.locations.length}%`,
                  color: comparison.materialScores[matIndex].compliance === 'Full' ? '#38A169' : 
                        comparison.materialScores[matIndex].compliance === 'Partial' ? '#D69E2E' : '#E53E3E'
                }}
              >
                {comparison.materialScores[matIndex].score.toFixed(1)}
                {comparison.materialScores[matIndex].compliance === 'Full' ? ' ✓' : 
                 comparison.materialScores[matIndex].compliance === 'Partial' ? ' ~' : ' ✗'}
              </Text>
            ))}
          </View>
        ))}
      </View>
      
      {/* Regional Notes */}
      <View>
        <Text style={{ fontSize: 14, fontWeight: 'semibold', marginBottom: 8 }}>Key Regional Factors</Text>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', fontSize: 10 }}>
          <View style={{ width: '48%' }}>
            <Text style={{ fontWeight: 'bold', marginBottom: 4 }}>California (CA)</Text>
            <Text style={{ color: '#718096' }}>
              • Strict seismic requirements\n• High incentive availability\n• Stringent carbon limits
            </Text>
          </View>
          <View style={{ width: '48%' }}>
            <Text style={{ fontWeight: 'bold', marginBottom: 4 }}>Nevada (NV)</Text>
            <Text style={{ color: '#718096' }}>
              • Desert climate considerations\n• Water efficiency prioritized\n• Lower tax incentives
            </Text>
          </View>
        </View>
      </View>
      
      <View style={{ position: 'absolute', bottom: 20, left: 40, right: 40, fontSize: 10, color: '#A0AEC0', borderTop: '1px solid #E2E8F0', paddingTop: 8 }}>
        <Text>OptoMat Material Evaluation Report • Page 4 of 5</Text>
      </View>
    </View>
  );
};

export default Page4_RegionalAnalysis;