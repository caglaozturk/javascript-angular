import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  // ekle,getir,sil
  // {key:value}
  set(key: string, value: any) {
    localStorage.setItem(key, value);
  }
  get(key: string): string | null {
    return localStorage.getItem(key);
  }
  remove(key: string) {
    localStorage.removeItem(key);
  }
}