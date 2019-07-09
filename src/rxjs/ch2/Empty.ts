import {Component, Vue} from 'vue-property-decorator';
import {EMPTY, interval, NEVER, of, Subject, throwError} from 'rxjs';
import {mergeAll, mergeMap, switchMap, takeUntil} from 'rxjs/operators';

@Component
export default class Empty extends Vue {
    private subject$: Subject<any> = new Subject<any>();

    constructor() {
        super();
    }

    private mounted() {
        this.subject$.pipe(
            mergeAll()
        ).subscribe(
            (x) => console.log('et5 : ', x),
            (e) => console.log('e : ', e),
            () => console.log('complete')
        );
    }

    private emptyOnly() {
        EMPTY.subscribe(
            (val: number) => {
                console.log('emptyOnly : ', val);
            },
            (error) => {
                console.error('emptyOnly error : ', error);
            },
            () => {
                console.log('emptyOnly Complete');
            }
        );
    }

    private emptyTest() {
        // const source = of(1, -2, 3);
        //
        // const [num, empty] = partition(source, (target: number): any => target < 0 ? EMPTY : target);
        //
        // num.pipe(
        //     takeUntil(empty)
        // ).subscribe(
        //     (val: number) => {
        //         console.log('num : ', val);
        //     },
        //     (error) => {
        //         console.error('num : ', error);
        //     },
        //     () => {
        //         console.log('num Complete');
        //     }
        // );


        of(1, -2, 3).pipe(
            mergeMap((target: number): any => target < 0 ? EMPTY : of(target))
        ).subscribe(
            (val: any) => {
                console.log(val);
            },
            (error) => {
                console.error(error);
            },
            () => {
                console.log('Complete');
            }
        );
    }

    private emptyTest2() {
        const unsubscribe$: Subject<void> = new Subject<void>();

        const result = interval(1000).pipe(
            takeUntil(unsubscribe$)
        );
        result.subscribe(
            (x) => console.log('emptyTest2 : ', x),
            (e) => console.error('emptyTest2 error :', e),
            () => console.log('emptyTest2 complete....')
        );

        setTimeout(() => {
            console.log('call unsubscribe');
            unsubscribe$.next();
            unsubscribe$.complete();
        }, 3000);
    }


    private emptyTest3() {
        const unsubscribe$: Subject<number> = new Subject<number>();

        unsubscribe$.complete();

        const result = interval(1000).pipe(
            mergeMap((val: number) => val < 3 || val > 5 ? of(val) : unsubscribe$)
        );
        result.subscribe(
            (x) => console.log('emptyTest3 : ', x),
            (e) => console.error('emptyTest3 error : ', e),
            () => console.log('emptyTest3 complete....')
        );

    }

    private emptyTest4() {
        const interval$ = interval(1000);

        const result = interval$.pipe(
            switchMap((x) => x % 2 === 1 ? of('a', 'b', 'c') : EMPTY)
        );

        // const result = interval$.pipe(
        //     filter((x) => x % 2 === 1),
        //     mergeMap(() => of('a', 'b', 'c'))
        // );

        result.subscribe(
            (x) => console.log('et4 : ', x),
            (e) => console.log('e', e),
            () => console.log('complete')
        );
    }

    private emitNext() {
        this.subject$.next('test....');
    }

    private emitEmpty() {
        this.subject$.next(EMPTY);
    }

    private emitError() {
        this.subject$.next(throwError('test....'));
    }

    private emitNever() {
        this.subject$.next(NEVER);
    }

}
