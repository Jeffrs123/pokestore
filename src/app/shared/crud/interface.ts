import { Observable } from 'rxjs';

export interface IBaseService<T> {
  get(id: string, path2?: string): Observable<T>;
  list(path2?: string): Observable<T[]>;
//   add(item: T, path2?: string): Promise<T>;
//   update(item: T, path2?: string): Promise<T>;
//   delete(id: string, path2?: string): void;
}
