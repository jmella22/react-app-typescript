export interface Sub {
  firstname: string;
  age: number;
  avatar: string;
  description?: string;
}

export interface SubsResponseFromApi {
  char_id: number;
  name: string;
  birthday: string;
  occupation: Array;
  img: string;
  status: string;
  nickname: string;
  appearance: Array;
  portrayed: string;
  category: string;
  better_call_saul_appearance: Array;
}
