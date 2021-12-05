import {StyleSheet} from 'react-native';

export const startScreensStyles = StyleSheet.create({
  cover: {
    position: 'absolute',
    top: '22%',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 12,
  },
  wrapper: {
    flex: 1,
    paddingTop: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  buttons: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
  },
  greetingsButtons: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
  },
  secondaryBtn: {
    backgroundColor: '#f7f7f7',
  },
  transparentBtn: {
    backgroundColor: 'transparent',
  },
  secondaryBtnText: {
    color: 'rgb(47, 54, 106)',
  },
  label: {
    marginLeft: 6,
    marginBottom: 4,
    color: '#777',
  },
  input: {
    marginBottom: 14,
    borderColor: '#ddd',
    backgroundColor: '#f7f7f7',
  },
  unik: {
    fontSize: 48,
    fontWeight: '600',
    marginTop: 24,
    marginLeft: 8,
    marginBottom: 8,
  },
  secondaryText: {
    color: '#aaa',
  },
  center: {
    alignItems: 'center',
  },

  stepButtons: {flexDirection: 'row', justifyContent: 'space-between'},
  backBtn: {
    width: '30%',
    backgroundColor: '#f7f7f7',
    marginRight: '2%',
  },
  backBtnText: {color: 'grey'},
  btnDisabled: {backgroundColor: '#ccc'},
  flex: {flex: 1},
});
