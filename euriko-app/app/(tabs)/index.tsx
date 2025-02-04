import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }} 
          style={styles.profileImage}
        />
        {/* Ícone de configurações */}
        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.settingsIcon}>⚙️</Text> 
        </TouchableOpacity>
      </View>

      {/* Balance Section */}
      <View style={styles.balanceContainer}>
        <Text style={styles.totalBalanceText}>Total balance</Text>
        <Text style={styles.balanceAmount}>$1032,32</Text>
        <View style={styles.balanceDetails}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Invested</Text>
            <Text style={styles.detailValue}>$16000,141</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Earned</Text>
            <Text style={styles.detailValue}>$600,786</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Goal</Text>
            <Text style={styles.detailValue}>$20000,586</Text>
          </View>
        </View>
      </View>

      {/* Restante do conteúdo */}
      <View style={styles.placeholder}>
        <Text style={{ color: '#FFF' }}>Outros conteúdos vão aqui...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  settingsButton: {
    padding: 10,
  },
  settingsIcon: {
    fontSize: 20,
    color: '#FFF',
  },
  balanceContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  totalBalanceText: {
    fontSize: 18,
    color: '#AAA',
    fontWeight: '400',
    marginBottom: 5,
  },
  balanceAmount: {
    fontSize: 48,
    color: '#FFF',
    fontWeight: '700',
    marginBottom: 20,
  },
  balanceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  detailItem: {
    alignItems: 'center',
    flex: 1, // Cada item ocupa espaço igual
  },
  detailLabel: {
    color: '#AAA',
    fontSize: 14,
    marginBottom: 5,
  },
  detailValue: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
