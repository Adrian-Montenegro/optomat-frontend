// src/components/FinalReport/PDFReports/ReportTemplate.tsx
import { Document, Page } from '@react-pdf/renderer';
import SummaryHeader from './SummaryHeader';
import Page1_MaterialSelection from './Page1_MaterialSelection';
import Page2_FinancialBreakdown from './Page2_FinancialBreakdown';
import Page3_Sustainability from './Page3_Sustainability';
import Page4_RegionalAnalysis from './Page4_RegionalAnalysis';
import Page5_Conclusion from './Page5_Conclusion';
import { Material, FinancialData, SustainabilityData, RegionalData } from './Types';
import './reportStyles.css';

interface ReportTemplateProps {
  clientName: string;
  projectName: string;
  reportDate: string;
  materialData: Material[];
  financialData: FinancialData[];
  sustainabilityData: SustainabilityData[];
  regionalData: RegionalData;
}

const ReportTemplate = ({
  clientName,
  projectName,
  reportDate,
  materialData,
  financialData,
  sustainabilityData,
  regionalData
}: ReportTemplateProps) => {
  return (
    <Document>
      <Page size="A4" style={{ padding: 0 }}>
        <SummaryHeader 
          clientName={clientName}
          projectName={projectName}
          reportDate={reportDate}
        />
        <Page1_MaterialSelection materialData={materialData} />
      </Page>
      
      <Page size="A4">
        <Page2_FinancialBreakdown financialData={financialData} />
      </Page>
      
      <Page size="A4">
        <Page3_Sustainability sustainabilityData={sustainabilityData} />
      </Page>
      
      <Page size="A4">
        <Page4_RegionalAnalysis regionalData={regionalData} />
      </Page>
      
      <Page size="A4">
        <Page5_Conclusion 
          materialData={materialData}
          regionalData={regionalData}
        />
      </Page>
    </Document>
  );
};

export default ReportTemplate;