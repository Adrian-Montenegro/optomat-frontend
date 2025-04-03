import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { Material } from './Types';
import './reportStyles.css';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Times-Roman',
    fontSize: 12,
    padding: 40,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottom: '1px solid #333',
    paddingBottom: 4,
  },
  table: {
    width: '100%',
    marginVertical: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottom: '1px solid #ddd',
  },
  tableHeader: {
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
    padding: 5,
  },
  tableCell: {
    padding: 5,
  },
  rankCell: {
    width: '10%',
  },
  nameCell: {
    width: '30%',
  },
  scoreCell: {
    width: '20%',
    textAlign: 'right',
  },
  costCell: {
    width: '20%',
    textAlign: 'right',
  },
  typeCell: {
    width: '20%',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 40,
    right: 40,
    fontSize: 10,
    color: '#888',
    borderTop: '1px solid #eee',
    paddingTop: 8,
  },
});

interface Page1_MaterialSelectionProps {
  materialData: Material[];
}

const Page1_MaterialSelection = ({ materialData }: Page1_MaterialSelectionProps) => {
  return (
    <View style={styles.page}>
      <Text style={styles.header}>Material Selection Summary</Text>
      
      <View style={styles.table}>
        {/* Table Header */}
        <View style={styles.tableRow}>
          <Text style={[styles.tableHeader, styles.rankCell]}>Rank</Text>
          <Text style={[styles.tableHeader, styles.nameCell]}>Material</Text>
          <Text style={[styles.tableHeader, styles.typeCell]}>Type</Text>
          <Text style={[styles.tableHeader, styles.scoreCell]}>Score</Text>
          <Text style={[styles.tableHeader, styles.costCell]}>Cost/Unit</Text>
        </View>
        
        {/* Table Rows */}
        {materialData.map((material) => (
          <View key={material.id} style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.rankCell]}>{material.rank}</Text>
            <Text style={[styles.tableCell, styles.nameCell]}>{material.name}</Text>
            <Text style={[styles.tableCell, styles.typeCell]}>{material.type}</Text>
            <Text style={[styles.tableCell, styles.scoreCell]}>{material.score.toFixed(1)}</Text>
            <Text style={[styles.tableCell, styles.costCell]}>${material.costPerUnit.toFixed(2)}</Text>
          </View>
        ))}
      </View>
      
      <Text style={styles.footer}>OptoMat Material Evaluation Report • Page 1 of 5</Text>
    </View>
  );
};

export default Page1_MaterialSelection;