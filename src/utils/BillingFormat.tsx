import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

type PdfType = {
  name: string;
    email: string;
    number: string;
    plan: string;
    planPrice: number;
    addOns: {
        name: string;
        price: number;
    }[];
    total: number;
    type: "Monthly" | "Yearly";

}

type PdfProps={
  data: PdfType
}

export const BillPdf = ({data}: PdfProps) => (
   <Document>
    <Page size="A4" style={styles.body}>
      {/* Encabezado */}
      <Text style={styles.header} fixed>
        ~ Billing  ~
      </Text>

      {/* Cliente */}
      <Text style={styles.title}>Gaming App Bill</Text>
      <View style={styles.section}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.text}>{data.name}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.text}>{data.email}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Phone number:</Text>
        <Text style={styles.text}>{data.number}</Text>
      </View>

      {/* Plan + Add-ons */}
      <View style={styles.planBox}>
        <Text style={styles.subtitle}>Subscription summary</Text>

        <View style={styles.row}>
          <Text style={styles.text}>{data.plan}</Text>
          <Text style={styles.price}>
  {`$${data.planPrice}/${data.type === "Monthly" ? "mo" : "yr"}`}</Text>
        </View>

        {data.addOns.map((add, i) => (
          <View style={styles.row} key={i}>
            <Text style={styles.text}>{add.name}</Text>
            <Text style={styles.price}>
  {`$${add.price}/${data.type === "Monthly" ? "mo" : "yr"}`}</Text>
          </View>
        ))}
      </View>

      {/* Total */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Total</Text>
        <Text style={styles.total}>
  {`$${data.total}/${data.type === "Monthly" ? "mo" : "yr"}`}</Text>
      </View>


    </Page>
  </Document>
);

// Estilos
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 40,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  section: {
    marginBottom: 15,
  },
  label: {
    fontSize: 12,
    color: "grey",
  },
  text: {
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  price: {
    fontSize: 14,
  },
  planBox: {
    backgroundColor: "#f0f5ff",
    borderRadius: 8, // 0.5rem ≈ 8px
    padding: 10,
    marginVertical: 15,
  },
  total: {
    fontSize: 16,
    textAlign: "right",
    marginTop: 5,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});


