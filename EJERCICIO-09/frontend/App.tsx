import { useEffect, useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

type Evento = { id: number; nombre: string; ciudad: string; categoria: string; fecha: string };
const API_URL = 'http://TU_IP_LOCAL:3000';

export default function App() {
 const [eventos, setEventos] = useState<Evento[]>([]);

 async function filtrar() {
   const url = API_URL + '/eventos?ciudad=Zaragoza&categoria=Tecnología';
   const r = await fetch(url);
   setEventos(await r.json());
 }

 useEffect(() => { filtrar(); }, []);

 return (
   <SafeAreaView style={styles.container}>
     <Text style={styles.title}>Event Radar</Text>
     
     <View style={styles.filterBox}>
       <Text style={styles.filterText}>📍 Zaragoza</Text>
       <Text style={styles.filterText}>Categoría: Tecnología</Text>
     </View>

     <Button title="Zaragoza · Tech" onPress={filtrar} />

     <FlatList 
       data={eventos} 
       keyExtractor={x => String(x.id)} 
       renderItem={({ item }) => (
         <View style={styles.card}>
           <Text style={styles.eventName}>🎟️ {item.nombre}</Text>
           <Text style={styles.eventDetails}>{item.ciudad} · {item.categoria}</Text>
         </View>
       )} 
     />
   </SafeAreaView>
 );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#F8FAFC' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, color: '#0F172A' },
  filterBox: { backgroundColor: '#FFFFFF', padding: 12, borderRadius: 8, marginBottom: 12, borderWidth: 1, borderColor: '#E2E8F0' },
  filterText: { fontSize: 15, color: '#334155', marginBottom: 2 },
  card: { backgroundColor: '#FFFFFF', padding: 16, borderRadius: 10, marginTop: 10, borderWidth: 1, borderColor: '#E2E8F0' },
  eventName: { fontSize: 18, fontWeight: 'bold', color: '#1E293B' },
  eventDetails: { fontSize: 14, color: '#64748B', marginTop: 4 }
});