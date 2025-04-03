// src/components/FinalReport/PDFReports/Page2_FinancialBreakdown.tsx
import { View, Text } from '@react-pdf/renderer';
import ChartCostVsCarbon from './ChartCostVsCarbon';
import { FinancialData } from './Types';
import './reportStyles.css';

interface Page2_FinancialBreakdownProps {
  financialData: FinancialData[];
}

const Page2_FinancialBreakdown = ({ financialData }: Page2_FinancialBreakdownProps) => {
  return (
    <View style={{ padding: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>Financial Analysis</Text>
      
      {/* Cost Comparison Table */}
      <View style={{ marginBottom: 24 }}>
        <Text style={{ fontSize: 14, fontWeight: 'semibold', marginBottom: 8 }}>Cost Breakdown</Text>
        
        <View style={{ display: 'flex', flexDirection: 'row', borderBottom: '1px solid #E2E8F0', paddingBottom: 8 }}>
          <Text style={{ width: '30%', fontWeight: 'bold' }}>Material</Text>
          <Text style={{ width: '20%', fontWeight: 'bold' }}>Raw Cost</Text>
          <Text style={{ width: '20%', fontWeight: 'bold' }}>Effective Cost</Text>
          <Text style={{ width: '15%', fontWeight: 'bold' }}>Tax Impact</Text>
          <Text style={{ width: '15%', fontWeight: 'bold' }}>LTV</Text>
        </View>
        
        {financialData.map((item) => (
          <View key={item.id} style={{ display: 'flex', flexDirection: 'row', padding: '8px 0', borderBottom: '1px solid #EDF2F7' }}>
            <Text style={{ width: '30%' }}>{item.name}</Text>
            <Text style={{ width: '20%' }}>${item.rawCost.toFixed(2)}</Text>
            <Text style={{ width: '20%', color: item.effectiveCost < item.rawCost ? '#38A169' : '#E53E3E' }}>
              ${item.effectiveCost.toFixed(2)}
            </Text>
            <Text style={{ width: '15%' }}>${item.taxImpact.toFixed(2)}</Text>
            <Text style={{ width: '15%' }}>${item.lifetimeValue.toFixed(2)}</Text>
          </View>
        ))}
      </View>
      
      {/* Cost vs Carbon Chart */}
      <View style={{ marginTop: 24 }}>
        <Text style={{ fontSize: 14, fontWeight: 'semibold', marginBottom: 8 }}>Cost vs Carbon Efficiency</Text>
        <ChartCostVsCarbon financialData={financialData} />
      </View>
      
      <View style={{ position: 'absolute', bottom: 20, left: 40, right: 40, fontSize: 10, color: '#A0AEC0', borderTop: '1px solid #E2E8F0', paddingTop: 8 }}>
        <Text>OptoMat Material Evaluation Report • Page 2 of 5</Text>
      </View>
    </View>
  );
};

export default Page2_FinancialBreakdown;