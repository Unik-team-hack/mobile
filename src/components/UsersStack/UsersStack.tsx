import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const imageMock = require('@/mocks/avatar.jpg');

interface UsersStackProps {
  /**
   * Массив ссылок на аватарки. (На данный момент рендерятся заглушки. TODO)
   */
  avatars: (string | boolean)[];
  /**
   * Максимальное количество отоброжаемых аватарок
   */
  max: number;
}

export const UsersStack = ({avatars, max}: UsersStackProps) => {
  const [displayedAvatars, setDisplayedAvatars] = React.useState<
    (string | boolean)[]
  >([]);

  React.useEffect(() => {
    setDisplayedAvatars(avatars.slice(0, max));
  }, [avatars, max]);

  if (avatars.length === 0) {
    return (
      <View>
        <Text style={styles.empty}>Нет участников</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {displayedAvatars.map((avatar, ind) => (
        <Image
          source={avatar ? {uri: avatar} : imageMock}
          style={styles.userItem}
          key={`${avatar}_${ind}`}
        />

        // <View style={styles.userItem} key={`${avatar}_${ind}`} />
      ))}
      <Text style={styles.counter}>{`${avatars.length} уч.`}</Text>
    </View>
  );
};

UsersStack.defaultProps = {
  avatars: [],
  max: 5,
};

const SIZE = 32;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  userItem: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'white',
    borderRadius: SIZE / 2,
    borderColor: 'white',
    borderWidth: 1,
    marginLeft: -8,
  },
  empty: {
    color: 'grey',
  },
  counter: {
    marginLeft: 4,
  },
});
