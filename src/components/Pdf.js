import React, { Component} from 'react'
import { Page, Text, View, Document, StyleSheet} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      marginTop: 100,
      padding: 10,
      flexGrow: 1
    },
    title: {
      textAlign: 'center',
      margin: 10,
      padding: 0,
      flexGrow: 1
    }
  });

export default class Pdf extends Component {
    render() {
        return (
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.title}>
                        <Text>Informe de tickets pendientes - Remavesa</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>Section #1</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>Section #2</Text>
                    </View>
                </Page>
            </Document>
        )  
    }
}

