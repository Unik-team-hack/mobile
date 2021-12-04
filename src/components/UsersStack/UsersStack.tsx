import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

interface UsersStackProps {
  /**
   * Массив ссылок на аватарки. (На данный момент рендерятся заглушки. TODO)
   */
  avatars: string[];
  /**
   * Максимальное количество отоброжаемых аватарок
   */
  max: number;
}

export const UsersStack = ({avatars, max}: UsersStackProps) => {
  const [displayedAvatars, setDisplayedAvatars] = React.useState<string[]>([]);

  React.useEffect(() => {
    setDisplayedAvatars(avatars.slice(0, max));
  }, [avatars, max]);

  return (
    <View style={styles.container}>
      {displayedAvatars.map((avatar, ind) => (
        <Image
          source={{uri: avatar}}
          style={styles.userItem}
          key={`${avatar}_${ind}`}
        />

        // <View style={styles.userItem} key={`${avatar}_${ind}`} />
      ))}
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
});
