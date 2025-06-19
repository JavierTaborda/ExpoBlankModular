import { Link } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function CustomDrawerContent() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Mi App</Text>
      </View>

      {/* Section 1 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Principal</Text>
        
        <Link href="/(main)/(tabs)/(home)" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <Text>Inicio</Text>
          </TouchableOpacity>
        </Link>
        
        <Link href="/(main)/(tabs)/(tab1)" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <Text>Tab 1</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Section  2 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Opciones</Text>
        
        <Link href="/(main)/(tabs)/(tab2)" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <Text>Tab 2</Text>
          </TouchableOpacity>
        </Link>
        
        <Link href="/(auth)/login" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.logoutText}>Salir</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginVertical: 10,
  },
  menuItem: {
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
  },
  logoutText: {
    color: 'red',
  },
});