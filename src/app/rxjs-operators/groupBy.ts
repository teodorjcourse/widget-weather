import { Observable, Subscriber } from 'rxjs';

/**
 * Takes an array of some data as an input and transforms it to a hash,
 * which values are arrays of elements grouped by <key> value that is a property of data.
 */
class GroupBy<T, R> extends Subscriber<Array<T>> {
  private readonly key!: string;

  public constructor(subscriber: Subscriber<{ [key: string]: T[] }>, key: string) {
    super(subscriber);

    this.key = key;
  }

  protected _next(value: Array<T>) {
    if (this.destination.next) {
      this.destination.next(this.transform(value));
    }
  }

  private transform(value: Array<T>): { [key: string]: Array<T> } {
    return value.reduce((acc: { [key: string]: Array<T> }, data: T) => {
      acc[data[this.key]] = acc[data[this.key]] || [];
      acc[data[this.key]].push(data);
      return acc;
    }, <{ [key: string]: T[] }>{});
  }
}

export const groupBy =  <T, R>(key: string) => (source: Observable<Array<T>>) => {
  return source.lift({
    call(subscriber: Subscriber<{ [key: string]: T[] }>) {
      return source.subscribe(new GroupBy(subscriber, key));
    }
  });
};
