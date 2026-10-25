import { useEffect, useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

type Cancion = { id: number; titulo: string; artista: string };
type Playlist = { id: number; nombre: string; canciones: Cancion[] };
const API_URL = 'http://localhost:3000'; 

export default function App() {
  const [playlist, setPlaylist] = useState<Playlist | null>(null);

  async function cargar() {
    const r = await fetch(API_URL + '/playlists/1');
    setPlaylist(await r.json());
  }

  useEffect(() => { cargar(); }, []);

  async function agregarCancion() {
    await fetch(API_URL + '/playlists/canciones', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        titulo: 'Midnight City',
        artista: 'M83',
        playlistId: playlist?.id,
      }),
    });
    cargar(); 
  }

  if (!playlist) return <Text style={{padding: 20}}>Cargando...</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{playlist.nombre}</Text>

      <Button title="+ Añadir canción" onPress={agregarCancion} />

      <FlatList 
        data={playlist.canciones} 
        keyExtractor={x => String(x.id)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.songTitle}>🎵 {item.titulo}</Text>
            <Text style={styles.artist}>{item.artista}</Text>
          </View>
        )} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F8FAFC' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15, color: '#0F172A' },
  card: { backgroundColor: '#FFFFFF', padding: 16, borderRadius: 10, marginBottom: 10, borderWidth: 1, borderColor: '#E2E8F0' },
  songTitle: { fontSize: 18, fontWeight: 'bold', color: '#1E293B' },
  artist: { fontSize: 14, color: '#64748B', marginTop: 2 }
});