import axios from 'axios';
import {BASE_API_URL} from './config';
import type {
  EventResponseDto,
  ExtendedEventResponseDto,
  NominationResponseDto,
} from './dto';

const events = {
  getList: () =>
    axios
      .get<EventResponseDto[]>(`${BASE_API_URL}/v1/events`)
      .then(x => x.data),
  getDetails: (id: string) =>
    axios
      .get<ExtendedEventResponseDto>(`${BASE_API_URL}/v1/events?id=${id}`)
      .then(x => x.data),
};

const nominations = {
  // getList: async (params: type) => {},
  getById: (id: string) =>
    axios
      .get<NominationResponseDto>(`${BASE_API_URL}/v1/nominations/${id}`)
      .then(x => x.data),
};

export const API = {
  events,
  nominations,
};
