import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AddInvestmentScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');

  return (
    <ThemedView style={styles.container}>
      {/* Botão de Voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" size={28} color="white" />
      </TouchableOpacity>

      <Text style={styles.title}>Add New Investment</Text>

      {/* Formulário */}
      <View style={styles.form}>
        <Text style={styles.label}>Asset Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="e.g. Tesla"
          placeholderTextColor="#AAA"
        />

        <Text style={styles.label}>Quantity</Text>
        <TextInput
          style={styles.input}
          value={quantity}
          onChangeText={setQuantity}
          keyboardType="numeric"
          placeholder="e.g. 5"
          placeholderTextColor="#AAA"
        />

        <Text style={styles.label}>Purchase Price</Text>
        <TextInput
          style={styles.input}
          value={purchasePrice}
          onChangeText={setPurchasePrice}
          keyboardType="numeric"
          placeholder="e.g. $200.50"
          placeholderTextColor="#AAA"
        />

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveText}>Save Investment</Text>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  backButton: { position: 'absolute', top: 50, left: 20 },
  title: { color: 'white', fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginTop: 80 },
  form: { marginTop: 30 },
  label: { color: '#AAA', fontSize: 14, marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#444', padding: 10, borderRadius: 8, color: 'white', marginBottom: 15 },
  saveButton: { backgroundColor: '#C59D91', padding: 15, borderRadius: 8, alignItems: 'center' },
  saveText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});
