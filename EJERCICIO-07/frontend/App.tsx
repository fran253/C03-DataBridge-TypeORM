import { useEffect, useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

type Sneaker = { id: number; marca: string; modelo: string; precio: number; talla: number; stock: number };
const API_URL = 'http://localhost:3000'; // Tu IP local

export default function App() {
  const [items, setItems] = useState<Sneaker[]>([]);
  const [error, setError] = useState('');

  async function cargar() {
    try {
      const r = await fetch(API_URL + '/sneakers');
      if (!r.ok) throw new Error('Error al cargar');
      setItems(await r.json());
      setError('');
    } catch {
      setError('No se pudo conectar con la API.');
    }
  }

  useEffect(() => { cargar(); }, []);

  async function crear() {
    try {
      await fetch(API_URL + '/sneakers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          marca: 'Nike',
          modelo: 'Air Max 1',
          precio: 149.99,
          talla: 42,
          stock: 4,
        }),
      });
      await cargar();
    } catch { setError('Error al crear.'); }
  }

  async function eliminar(id: number) {
    try {
      await fetch(API_URL + '/sneakers/' + id, { method: 'DELETE' });
      await cargar();
    } catch { setError('Error al eliminar.'); }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sneaker Vault</Text>
      <Text style={styles.subtitle}>Inventario</Text>

      {error !== '' && <Text style={styles.error}>{error}</Text>}
      <Button title="Añadir Zapatilla" onPress={crear} />

      <FlatList
        data={items}
        keyExtractor={x => String(x.id)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>👟 {item.modelo}</Text>
            <Text style={styles.cardText}>
              {item.marca} · {item.stock === 0 ? <Text style={styles.agotado}>AGOTADO</Text> : `Stock ${item.stock}`}
            </Text>
            <Button title="Eliminar" color="#EF4444" onPress={() => eliminar(item.id)} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#F8FAFC' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#1E293B', marginBottom: 2 },
  subtitle: { fontSize: 24, fontWeight: '800', color: '#0F172A', marginBottom: 16 },
  card: { backgroundColor: '#FFFFFF', padding: 16, borderRadius: 12, marginBottom: 12, borderWidth: 1, borderColor: '#E2E8F0' },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#1E293B', marginBottom: 4 },
  cardText: { fontSize: 14, color: '#64748B', marginBottom: 12 },
  agotado: { fontWeight: 'bold', color: '#DC2626' },
  error: { color: 'red', marginBottom: 10 }
});