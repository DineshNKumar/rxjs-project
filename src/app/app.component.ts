import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable, of,} from 'rxjs';
import {zipAll,} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'rxjs-project';
  data$: Observable<Object[]>;

  constructor(private cdRef: ChangeDetectorRef) {
  }

  async ngOnInit() {
    // fromEvent(document, 'mouseenter').subscribe(c => console.log(c.type))

    // asyncScheduler.schedule(() => console.log("async"));
    // asapScheduler.schedule(() => console.log("asap"))

    // const result = generate(2, x => x < 21, x => x + 2, x => x);
    // result.subscribe(val => console.log(val))

    // let iAm: boolean = true;
    // iif(() => iAm, of(1,2,3,4), of(2,3,4,5,6)).subscribe(d => console.log(d))

    // console.log(isObservable({}));

    // const int = interval(1000);
    // int.pipe(take(5)).subscribe(val => console.log(val))

    // const int$ = interval(500);
    // const result = await lastValueFrom(int$)

    // const ob1 = of(1,2,3);
    // const ob2 = of(4,5,6);

    // const m = merge(ob1, ob2);
    // m.subscribe(val => console.log(val));

    // queueScheduler.schedule(function(state) {
    //   console.log("Outer ", state)
    //   if(state !== 0){
    //     console.log('Before', state);
    //     this.schedule(state - 1, 100)
    //   }
    // },0, 5)

    // race(of(1,2,3,4), of(5,6), of(7,8,9)).subscribe({
    //   next: (o) => console.log(o),
    //   complete: () => console.log("Complete")
    // })

    // range(1, 2, queueScheduler).subscribe({
    //   next: (o) => console.log(o),
    //   complete: () => console.log("Complete")
    // })

    // scheduled(of(1,2,3,4), asapScheduler).forEach((v) => console.log(v))

    // const subject = new Subject();
    // subject.subscribe({
    //   next: (val) => console.log(val),
    //   error: (err) => console.log(err),
    //   complete: () => console.log("Subject complete")
    // });
    // subject.next("Dinesh kumar");
    // subject.complete();
    // subject.error("Errors are there")

    // let age$ = of(27, 25, 29);
    // let name$ = of('Foo', 'Bar', 'Beer');
    // let isDev$ = of(true, true, false);
    // zip(age$, name$, isDev$).pipe(
    //   map(([age, name, isDev]) => ({ age, name, isDev }))
    // ).subscribe(m => console.log(m));

    // fromEvent(document, 'click').pipe(audit(i => interval(1000))).subscribe(v => console.log(v))

    // fromFetch(
    //   'http://www.mocky.io/v2/5ea172973100002d001eeada'
    // ).subscribe({
    //   next: (value : Response) => {
    //   return from(value.json()).subscribe(d => console.log(d))
    //   }
    // });

    // const clicks = fromEvent(document, 'click');
    // const result = clicks.pipe(auditTime(1000));
    // result.subscribe((x) => console.log(x));

    // const clicks = fromEvent(document, 'click');
    // const intervalEvents = interval(1000);
    // const buffered = intervalEvents.pipe(buffer(clicks));
    // buffered.subscribe((x) => console.log(x));

    // const clicks = fromEvent(document, 'click');
    // const buffered = clicks.pipe(bufferCount(2));
    // buffered.subscribe((x) => console.log(x));

    // const clicks = fromEvent(document, 'click');
    // const buffered = clicks.pipe(bufferTime(1000, 2000));
    // buffered.subscribe((x) => console.log(x));

    // const clicks = fromEvent(document, 'click');
    // const openings = interval(2000);
    // const buffered = clicks.pipe(
    //   bufferToggle(openings, (i) => (i % 2 ? interval(500) : EMPTY))

    // const ob1 = of(1, 2, 9);
    // const ob2 = of(1,2,3,4,5,6,7,8,9,10);
    // let ob3 = of(1,2);
    // const result = combineLatest([ob1, ob2]);
    // result.pipe(combineAll()).subscribe(val => console.log(val))

    // const clicks = fromEvent(window.document, 'mouseover');
    // const higherOrder = clicks.pipe(
    //   map(ev => interval(1000).pipe(take(4))),
    // );
    // higherOrder.subscribe(val => console.log(val));
    // higherOrder.pipe(concatAll()).subscribe(val => console.log(val))

    // const clicks = fromEvent(document, 'click');
    // const result = clicks.pipe(concatMap((ev) => interval(1000).pipe(take(4))));
    // result.subscribe((x) => console.log(x));

    // const clicks = fromEvent(document, 'click');
    // const result = clicks.pipe(concatMapTo(interval(1000).pipe(take(4))));
    // result.subscribe((x) => console.log(x));

    // const numbers = range(1, 100);
    // const result = numbers.pipe(count((i) => i % 2 === 0));
    // result.subscribe((x) => console.log(x));

    // const clicks = of(1, 2, 3, 4, 5, 6, 7);
    // const result = clicks.pipe(
    //   debounce(() => interval(10000)),
    //   count()
    // );
    // result.subscribe((x) => console.log(x));

    // const clicks = fromEvent(document, 'click');
    // const result = clicks.pipe(debounceTime(1000));
    // result.subscribe((x) => console.log(x.type));

    // of().pipe(defaultIfEmpty("of() is empty")).subscribe((val) => console.log(val));

    // of(1,2,3,4,5)
    //   .pipe(delayWhen((event) => {
    //     return interval(1000)
    //   }))
    //   .subscribe((val) => {
    //     console.log(val)
    //   });

    // const notifA = new Notification('N' , 'Dinesh')
    // const notifB = new Notification('C', 'Ram')
    // const notifE = new Notification('E', undefined, new TypeError("Type error is there"))
    // const materialized = of(notifA, notifB, notifE);
    // const upperCase = materialized.pipe(dematerialize());
    // upperCase.subscribe({
    //   next: (x) => console.log(x),
    //   error: (e) => console.error(e),
    //   complete: () => console.log("Complete")
    // });

    // of(1, 2, 3, 3, 4, 4, 4, 4, 5, 6, 6, 76, 5, 5, 4, 4, 3, 33, 4, 43, 3, 3, 2)
    //   .pipe(distinctUntilChanged((item) => item < 10))
    //   .subscribe((data) => {
    //     console.log(data);
    //   });

    // of<Person>(
    //   { age: 4, name: 'Deepak' },
    //   { age: 4, name: 'Deepak' },
    //   { age: 4, name: 'Manish' },
    //   { age: 4, name: 'Sunny' },
    //   { age: 5, name: 'Dinesh' },
    //   { age: 5, name: 'Deepak' }
    // ).pipe(distinctUntilKeyChanged('age')).subscribe(obs => console.log(obs))

    // of(1,2,3,4,4,5,6).pipe(elementAt(9, 4)).subscribe(val => console.log(val))

    // of('hi', 'how are you?', 'sorry, I have to go now')
    //   .pipe(endWith('goodbye!'))
    //   .subscribe((val) => console.log(val));

    // forkJoin({
    //   todos: fetch('https://jsonplaceholder.typicode.com/todos'),
    //   users: fetch('https://reqres.in/api/users')
    // }).subscribe((value) => {
    //   defer(() => value.users.text()).subscribe((val) => {
    //     this.data$ =  JSON.parse(val)['data'];
    //     this.cdRef.detectChanges()
    //   })
    // })

    // of(11, 22, 221, 221, 33, 21, 212)
    //   .pipe(
    //     map((val) => {
    //      return {
    //       number: val
    //      }
    //     }),
    //     every((num1) => {
    //       return num1.number > 30;
    //     })
    //   )
    //   .subscribe((value) => {
    //     console.log(value);
    //   });

    // const clicks = fromEvent(document, 'click');
    // const higherOrder = clicks.pipe(map((ev) => interval(1000).pipe(take(5))));
    // const result = higherOrder.pipe(exhaust());
    // result.subscribe((x) => console.log(x));

    // of([1,2,3,4,5,6,7,8,9,0], 2, 3, 4, 5, 6, 7)
    //   .pipe(exhaustMap((val, ind) => of(val)))
    //   .subscribe((val) => console.log(val));

    // of(1, 2, 3, 4,5,6,7,8)
    //   .pipe(
    //     expand((x) => of(2 * x)),
    //     take(5)
    //   )
    //   .subscribe((val) => console.log(val));

    // of(4, 3, 2, 5, 7, 1)
    //   .pipe(find((v, index, s) => s[]))
    //   .subscribe((val) => console.log(val));

    // of(1, 2, 3, 2, 3, 2, 1, 2, 3, 3)
    //   .pipe(findIndex((val) => val == 3))
    //   .subscribe((val) => console.log(val));
    //
    // of(
    //   { id: 1, name: 'JavaScript' },
    //   { id: 2, name: 'Parcel' },
    //   { id: 2, name: 'webpack' },
    //   { id: 1, name: 'TypeScript' },
    //   { id: 3, name: 'TSLint' }
    // )
    //   .pipe(
    //     groupBy((p) => p.id),
    //     map((m) => [{ m: m.pipe(reduce((acc, cur) => [...acc, cur], [`${m.key}`])) }])
    //   )
    //   .subscribe((m) => console.log(m));

    // of(1, 2, 3, 3, 4, 5).pipe(ignoreElements()).subscribe({
    //   next: (value) => console.log(value),
    //   complete: () => console.log('Elements are ignored')
    // });

    // const subject = new Subject<string>();
    // subject.pipe(isEmpty()).subscribe({
    //   next: value => console.log(value),
    //   error: err => console.log(err),
    //   complete: () => console.log('Complete')
    // });
    // subject.complete();

    // of(1, 2, 3, 4, 5, 6, 6).pipe(last(value => value < 9)).subscribe(value => console.log(value));

    // of(1, 2, 3, 4, 5, 6, 7).pipe(
    //   map((value, index) => [{Value: value}]), groupBy((value => value[0].Value))).subscribe(value => {
    //   value.subscribe(value1 => console.log(value1));
    // });

    // const letters = of('a', 'b', 13, 'd');
    // const upperCase = letters.pipe(map(x => x.toString().toUpperCase()));
    // const materialized = upperCase.pipe(materialize());
    // materialized.subscribe(x => {
    //   const obs = {
    //     error: x.error,
    //     value: x.value,
    //     kind: x.kind,
    //     hasValue: x.hasValue
    //   };
    //   console.log(obs)
    // });
    // const err = new Notification('E', '', throwError('Dineshkumar'));
    // of(err).subscribe(value => console.log(value.error))

    // of(1, 2, 13, 4, 5, 6).pipe(max()).subscribe(value => console.log(value));
    // of(1, 2, 13, 4, 5, 6).pipe(max((x, y) => x * y )).subscribe(value => console.log(value));

    // const clicks = fromEvent(document, 'click');
    // const higherOrder = clicks.pipe(map((ev) => interval(1000)));
    // const firstOrder = higherOrder.pipe(mergeAll());
    // firstOrder.subscribe(x => console.log(x));

    // const letters = of('a', 'b', 'c');
    // const result = letters.pipe(
    //   mergeMap(x => interval(1000).pipe(map(i => x + i), take(5))),
    // );
    // result.subscribe(x => console.log(x));

    // const clicks = fromEvent(document, 'click');
    // const result = clicks.pipe(mergeMapTo(interval(1000)));
    // result.subscribe(x => console.log(x));

    // const click$ = fromEvent(document, 'click');
    // const one$ = click$.pipe(mapTo(1));
    // const seed = 0;
    // const count$ = one$.pipe(
    //   mergeScan((acc, one) => of(acc + one), seed),
    // );
    // count$.subscribe(x => console.log(x));
    // of(0, 1)
    //   .pipe(mergeScan((acc, value) => of(acc + value), 0), take(5))
    //   .subscribe(value => console.log(value));
    // of(0, 1)
    //   .pipe(expand(value => of(value + 1)), take(4))
    //   .subscribe(value => console.log(value));

    // of(1, 2, 3, 4, 5, 0).pipe(min()).subscribe(value => console.log(value));

    // const source = interval(2000).pipe(take(5));
    // const example = source.pipe(
    //   tap(() => console.log('Side Effect #1')),
    //   mapTo('Result!')
    // );
    // const multi = example.pipe(multicast(() => new Subject()));
    // const subscriberOne = multi.subscribe(val => console.log(val));
    // const subscriberTwo = multi.subscribe(val => console.log(val));
    // console.log(subscriberTwo, subscriberTwo);
    // const multi = multicast(() => new Subject<number>());
    // const source = multi(of(1, 2, 3, 4, 5, 6));
    // source.subscribe(obs => console.log(obs));
    // source.connect();

    // const n1 = new Notification('N', 'Simple Notification');
    // const e1 = new Notification('E', 'Error', () => throwError('Notification error'));
    // of(n1, e1).pipe(observeOn(asapScheduler, 1000)).subscribe({
    //   next: value => console.log(value.error)
    // });

    // of(1, 2, 3, 4, 5, 6).pipe(pairwise()).subscribe(value => console.log(value));

    // of<Person>(
    //   {name: {firstName: 'Dinesh', lastName: 'kumar'}, age: 30, gender: 'M'},
    //   {name: {firstName: 'Deepika', lastName: 'kumari'}, age: 31, gender: 'F'},
    //   {name: {firstName: 'Rajesh', lastName: 'kumar'}, age: 35, gender: 'M'},
    //   {name: {firstName: 'Manisha', lastName: 'singh'}, age: 23, gender: 'F'},
    //   {name: {firstName: 'Riya', lastName: 'kumar'}, age: 30, gender: 'F'}
    // ).pipe(pluck('name', 'firstName')).subscribe(value => console.log(value));

    // const obs = of(1, 2, 3, 4, 5, 6, 7).pipe(publish(merged$ =>
    //   merge(merged$.pipe(tap(x => console.log(x))))
    // ));
    // obs.subscribe();
    // const source$ = of(1, 2, 3, 4, 5);
    // const publ = publish()(source$);
    // publ.subscribe(val =>
    //   console.log(`Subscriber One: ${val}`)
    // );
    // publ.subscribe(val =>
    //   console.log(`Subscriber Two: ${val}`)
    // );
    // publ.connect();

    // const source$ = of(1, 2, 3, 4, 5, 6);
    // const publishlast = publishLast()(source$);
    // publishlast.subscribe(value => console.log('First ', value));
    // publishlast.subscribe(value => console.log('Last ', value));
    // publishlast.connect();

    // const source$ = of(1, 2, 3, 4, 5, 6);
    // source$.pipe(reduce((acc, value, index) => acc + value),
    //   map((value) => ({index: value}))).subscribe(value => console.log(value));

    // const source$ = of(1, 2, 3, 4, 5, 5);
    // source$.pipe(publish()).subscribe(value => console.log(value));
    // source$.pipe(publish()).subscribe(value => console.log(value));
    // source$.pipe(publish()).subscribe(value => console.log(value));

    // of(1, 2, 3).pipe(repeat(4)).subscribe(value => console.log(value));

    // const source = of(1, 2, 3, 4, 4, 1, 2, 3, 2, 2, 3, 2);
    // const documentClick$ = fromEvent(document, 'click');
    // source.pipe(repeatWhen(() => documentClick$)
    // ).subscribe({
    //   next: value => console.log(value),
    //   complete: () => console.log('Complete')
    // });

    // of(0, 1).pipe(take(10), scan((acc, value) => acc + value, 5), distinct()).subscribe(value => console.log(value));

    // of(1, 2, 3, 4, 5, 6, 6, 7, 8, 9)
    //   .pipe(map(value => {
    //     if (value > 6) {
    //       throw value;
    //     }
    //     return value;
    //   }), retryWhen(errors => errors
    //     .pipe(tap((err) => console.log('Error', err)))))
    //   .subscribe(value => console.log(value));

    // const seconds = interval(1000);
    // const clicks = fromEvent(document, 'click');
    // const result = seconds.pipe(sample(clicks));
    // result.subscribe(x => console.log(x));

    // fromEvent(document, 'click').pipe(sampleTime(1000)).subscribe(value => console.log(value));

    // const numbers$ = of(1, 2, 3);
    // numbers$
    //   .pipe(
    //     scan((total, n) => total + n),
    //     map((sum, index) => sum / (index + 1))
    //   )
    //   .subscribe(console.log);
    // of(0, 1).pipe(repeat(5), scan((acc, value) => {
    //   const sum = acc + value;
    //   acc = sum;
    //   console.log('Number 1 = ', value, 'Number 2 = ', acc, ' = ', sum);
    //   return sum;
    // })).subscribe(value => console.log());

    // const obs1 = of(1, 2, 3, 4, 5, 6);
    // const obs2 = of(6, 5, 4, 3, 2, 1);
    // obs2.pipe(sequenceEqual(obs1)).subscribe(value => console.log(value));

    // const source = interval(1000)
    //   .pipe(
    //     map((x: number) => {
    //       console.log('Processing: ', x);
    //       return x * x;
    //     }), share(), take(2));
    // source.subscribe(x => console.log('subscription 1: ', x));
    // source.subscribe(x => console.log('subscription 2: ', x));

    // const log = <T>(source: Observable<T>, name: string) => defer(() => {
    //   return source.pipe(
    //     tap({
    //       next: value => console.log(`${name}: ${value}`),
    //       complete: () => console.log(`${name}: complete`)
    //     }),
    //     finalize(() => console.log(`${name}: unsubscribed`))
    //   );
    // });
    // const obs$ = log(interval(1000), 'source');
    // const shared$ = log(obs$.pipe(
    //   shareReplay({bufferSize: 1, refCount: true}),
    //   take(2),
    // ), 'shared');
    // shared$.subscribe(x => console.log('sub A: ', x));
    // shared$.subscribe(y => console.log('sub B: ', y));
    // const obs = of(1, 2, 3, 4, 5, 6);
    // obs.pipe(map(value => value * value * value), shareReplay({bufferSize: 1, refCount: true, scheduler: asapScheduler})).subscribe(value => console.log(value));
    // obs.pipe(map(value => value * value), shareReplay()).subscribe(value => console.log(value));

    // const source1 = of(
    //   {name: 'Ben'},
    //   {name: 'Tracy'},
    //   {name: 'Laney'},
    //   {name: 'Lily'}
    // );
    // source1.pipe(single(predicate => predicate.name.startsWith('La'))).subscribe(value => console.log(value));

    // of(1, 2, 3, 4, 5, 6).pipe(map(value => ({squre: value * value})),
    //   filter(value => value.squre % 2 === 0), skip(2))
    //   .subscribe(value => console.log(value));

    // of(1, 2, 3, 4, 5, 6).pipe(map(value => ({squre: value * value})), skipLast(2))
    //   .subscribe(value => console.log(value));

    // const intervalObservable = interval(1000);
    // const click = fromEvent(document, 'click');
    // intervalObservable.pipe(
    //   skipUntil(click)
    // ).subscribe(value => console.log(value));

    // of(1, 2, 3, 4, 5, 6, 7, 8, 9).pipe(skipWhile(value => value < 3)).subscribe(value => console.log(value));
  
    // of(of(1, 2, 3), of(5, 6, 7)).pipe(switchMap(value => value)).subscribe(value => console.log(value));

    // of(of(1, 2, 3, 4)).pipe(throttle(value => value, {leading: false, trailing: true}), switchMap(value => value))
    //   .subscribe(value => console.log(value));

    of(of(1, 2, 3, 4), of(4, 5, 6)).pipe(zipAll())
      .subscribe(value => console.log(value));

  }
}

export interface Person {
  name: {
    firstName: string;
    lastName: string;
  };
  age: number;
  gender: string;
}
