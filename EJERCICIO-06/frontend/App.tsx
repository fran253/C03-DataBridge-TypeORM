import { useEffect, useState } from 'react';
import { Alert, Button, FlatList, SafeAreaView, Text, View } from 'react-native';

type Libro = { id: number; titulo: string; autor: string; leido: boolean };
const API_URL = 'http://192.168.0.71:3000'; // Tu IP local

export default function App() {
  const [libros, setLibros] = useState<Libro[]>([]);

  async function cargar() {
    const r = await fetch(API_URL + '/libros');
    setLibros(await r.json());
  }

  useEffect(() => { cargar(); }, []);

  async function marcarLeido(id: number) {
    await fetch(`${API_URL}/libros/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ leido: true }),
    });
    cargar();
  }

  async function eliminar(id: number) {
    await fetch(`${API_URL}/libros/${id}`, { method: 'DELETE' });
    setLibros(actuales => actuales.filter(l => l.id !== id));
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>📚 My Library</Text>
      
      <FlatList 
        data={libros} 
        keyExtractor={x => String(x.id)} 
        renderItem={({ item }) => (
          <View style={{ marginBottom: 15, padding: 10, borderWidth: 1, borderColor: '#ccc' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.titulo}</Text>
            <Text>{item.autor} · {item.leido ? 'Leído ✓' : 'Pendiente'}</Text>
            
            {!item.leido && (
              <Button title="Marcar como leído" onPress={() => marcarLeido(item.id)} />
            )}
            
            <Button title="Eliminar" color="red" onPress={() => eliminar(item.id)} />
          </View>
        )} 
      />
    </SafeAreaView>
  );
}