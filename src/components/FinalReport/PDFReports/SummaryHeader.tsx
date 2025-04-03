// /src/components/FinalReport/PDFReports/SummaryHeader.tsx

import { View, Text, Image } from '@react-pdf/renderer';
import './reportStyles.css';

interface SummaryHeaderProps {
  clientName: string;
  projectName: string;
  reportDate: string;
}

const SummaryHeader = ({ clientName, projectName, reportDate }: SummaryHeaderProps) => {
  return (
    <View style={{ padding: 40 }}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 }}>
        {/* Logo placeholder - replace with actual logo */}
        <View style={{ width: 120, height: 40, backgroundColor: '#3182CE', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>OptoMat</Text>
        </View>
        
        <View style={{ textAlign: 'right' }}>
          <Text style={{ fontSize: 10, color: '#718096' }}>Prepared for:</Text>
          <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{clientName}</Text>
          <Text style={{ fontSize: 10, color: '#718096', marginTop: 4 }}>{reportDate}</Text>
        </View>
      </View>
      
      <View style={{ marginBottom: 24 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#1A202C' }}>Material Evaluation Report</Text>
        <Text style={{ fontSize: 14, color: '#718096', marginTop: 4 }}>Project: {projectName}</Text>
      </View>
      
      <View style={{ height: 1, backgroundColor: '#E2E8F0', marginBottom: 24 }} />
    </View>
  );
};

export default SummaryHeader;