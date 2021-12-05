import {createContext} from 'react';
import {makeAutoObservable} from 'mobx';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API} from '@/api';
import {SignUpRequestDto} from '@/api/dto';

interface AuthData {
  email: string;
  password: string;
}

class AuthStore {
  token: string = '';

  constructor() {
    makeAutoObservable(this);
    this.tryLoadSession();
  }

  private setToken = (value: string) => (this.token = value);

  tryLoadSession = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token !== null) {
      this.setToken(token);
      this.setupAxios(token);
    }
  };

  public signIn = async (data: AuthData) => {
    try {
      const response = await API.auth.signIn(data);
      const {token} = response.data;
      this.setToken(token);
      AsyncStorage.setItem('token', token);
      this.setupAxios(token);
    } catch (error) {
      console.error(error);
    }
  };

  public signUp = async (data: SignUpRequestDto) => {
    try {
      await API.auth.signUp(data);
      this.signIn(data);
    } catch (error) {
      console.error(error);
    }
  };

  public logout = () => {
    this.setToken('');
    AsyncStorage.removeItem('token');
    axios.defaults.headers.common.Authorization = undefined;
  };

  private setupAxios = (token: string) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    axios.interceptors.response.use(undefined, err => {
      if (err?.response?.status === 401) {
        this.logout();
      }
    });
  };
}

export default createContext(new AuthStore());
