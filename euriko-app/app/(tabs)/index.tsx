import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
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

      {/* Cards Section */}
      <View style={styles.cardsContainer}>
        {/* Card 1 */}
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }}
            style={styles.cardImage}
          />
        </View>

        {/* Card 2 */}
        <TouchableOpacity style={[styles.card, styles.cardInvest]}>
          <Text style={styles.cardText}>Invest</Text>
          <Text style={styles.cardPlus}>+</Text>
        </TouchableOpacity>

        {/* Card 3 */}
        <TouchableOpacity style={[styles.card, styles.cardCommunity]}>
          <Text style={styles.cardText}>Join the community</Text>
          <Text style={styles.cardPlus}>+</Text>
        </TouchableOpacity>

        {/* Card 4 */}
        <View style={[styles.card, styles.cardProfit]}>
          <Text style={styles.cardProfitText}>+32%</Text>
          <Text style={styles.cardProfitSubtext}>Goal achieving</Text>
        </View>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/40' }}
          style={styles.footerIcon}
        />
        <View>
          <Text style={styles.footerText}>Tesla</Text>
          <Text style={styles.footerSubText}>NASDAQ: TSLA</Text>
        </View>
        <View>
          <Text style={styles.footerText}>244,14 USD</Text>
          <Text style={styles.footerSubText}>+2.58 (1.05%)</Text>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flex: 1,
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
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  card: {
    width: '48%',
    height: 150,
    backgroundColor: '#222',
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  cardInvest: {
    backgroundColor: '#C59D91',
  },
  cardCommunity: {
    backgroundColor: '#6A706E',
  },
  cardProfit: {
    backgroundColor: '#333',
  },
  cardText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
  cardPlus: {
    color: '#FFF',
    fontSize: 24,
    marginTop: 10,
  },
  cardProfitText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: '600',
  },
  cardProfitSubtext: {
    color: '#AAA',
    fontSize: 12,
    marginTop: 5,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#444',
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  footerIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  footerText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
  footerSubText: {
    color: '#888',
    fontSize: 12,
  },
});
