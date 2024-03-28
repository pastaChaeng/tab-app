import { View, Text, ScrollView, StyleSheet } from 'react-native';

const Page = () => {
  return (
    <View style={styles.mainScreen}>
      <ScrollView>
        <View style={[styles.deliveryTruckTile]}>
          <Text style={{ textAlign: 'center' }}>No Deliveries In Transit.</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#DEDBDB',
  },
  deliveryTruckTile: {
    padding: 10,
    marginTop: 30,
    paddingHorizontal: 10,
    justifyContent: 'center',
    gap: 20,
  },
  statsCard: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    height: 180,
    borderRadius: 20,
    paddingLeft: 10,
  },
  miniCard: {
    backgroundColor: '#78CFDC',
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: 90,
  },
  miniIconDescription: {
    marginLeft: 10,
    color: 'black',
    fontSize: 15,
    top: 15,
  },
  packageIcon: {
    fontSize: 100,
    marginLeft: 10,
    top: 20,
    color: '#78CFDC',
    height: '100%',
  },
  packageNumber: {
    color: 'black',
    marginHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'roboto',
  },
  truckNumber: {
    color: '#78CFDC',
    marginLeft: 'auto',
    paddingHorizontal: 12,
    fontSize: 20,
    fontWeight: 'normal',
    backgroundColor: '#F0F0F0',
    borderRadius: 100,
    padding: 1,
  },
  packageTitle: {
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  packageDetails: {
    flexDirection: 'row',
    marginHorizontal: 5,
    elevation: 20,
  },
  packageDetailsContainer: {
    flexDirection: 'row',
    marginHorizontal: 5,
    elevation: 20,
  },
  miniIcon: {
    color: '#78CFDC',
    fontSize: 20,
    top: 15,
  },
  packageContainer: {
    flexDirection: 'column',
    marginHorizontal: 5,
    gap: 6,
  },
  navIcon: {
    fontSize: 30,
    color: '#FFFFFF',
    marginLeft: 20,
    transform: [{ scaleX: -1 }],
  },
});

export default Page;
