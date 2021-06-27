import React, { FC } from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  FlatListProps,
} from 'react-native';

interface FlatListHeaderComponentProps {
  isEnabled: boolean;
}

const FlatListHeaderComponent: FC<FlatListHeaderComponentProps> = ({
  isEnabled,
}) => {
  return (
    <View>
      <Text
        style={[styles.header, { color: isEnabled ? '#FF79C6' : '#3D3D4D' }]}
      >
        Minhas tasks
      </Text>
    </View>
  );
};

interface MyTasksListProps {
  isEnabled: boolean;
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({
  isEnabled,
  tasks,
  onLongPress,
  onPress,
}: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            style={[
              item.done
                ? [
                    styles.taskButtonDone,
                    isEnabled
                      ? { backgroundColor: 'rgba(255, 121, 198, 0.1)' }
                      : { backgroundColor: 'rgba(25, 61, 223, 0.1)' },
                  ]
                : styles.taskButton,
            ]}
            //TODO - use onPress, onLongPress and style props
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
          >
            <View
              testID={`marker-${index}`}
              //TODO - use style prop
              style={[
                item.done
                  ? [
                      styles.taskMarkerDone,
                      isEnabled
                        ? { backgroundColor: '#FF79C6' }
                        : { backgroundColor: '#273FAD' },
                    ]
                  : [
                      styles.taskMarker,
                      isEnabled
                        ? { borderColor: '#FF79C6' }
                        : { borderColor: '#3D3D4D' },
                    ],
              ]}
            />
            <Text
              //TODO - use style prop
              style={[
                item.done
                  ? [
                      styles.taskTextDone,
                      isEnabled ? { color: '#E1E1E6' } : { color: '#A09CB1' },
                    ]
                  : isEnabled
                  ? { color: '#FF79C6' }
                  : { color: '#3D3D4D' },
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      }}
      ListHeaderComponent={<FlatListHeaderComponent isEnabled={isEnabled} />}
      ListHeaderComponentStyle={{
        marginBottom: 20,
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32,
      }}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginRight: 10,
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    marginRight: 10,
  },
  taskTextDone: {
    textDecorationLine: 'line-through',
  },
});
