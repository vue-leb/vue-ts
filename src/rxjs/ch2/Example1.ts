import {Component, Vue} from 'vue-property-decorator';
import {interval, Observable} from 'rxjs';
import {map, take, tap} from 'rxjs/operators';

@Component
export default class Example1 extends Vue {

    constructor() {
        super();
    }

    public exam1() {
        const interval$ = new Observable(function subscribe(observer) {
            const id = setInterval(function () {
                observer.next(new Date().toString());
            }, 1000);
            // 자원을 해제하는 함수
            return function () {
                console.log('interval 제거');
                clearInterval(id);
            };
        });

        const subscription = interval$.subscribe(v => console.log(`origin:: ${v}`));

        // 5초 후 구독을 해제한다.
        setTimeout(function () {
            subscription.unsubscribe();
        }, 5000);
    }

    public exam2() {
        interval(1000).pipe(
            map(() => new Date().toString()),
            tap(() => console.log(111)),
            take(5)
        ).subscribe(
            (date: string) => {
                console.log(`new:: ${date}`);
            },
            (err) => {
                console.error(err);
            },
            () => {
                console.log('interval2 제거');
            }
        );

    }

    protected mounted() {
        // this.exam1();
        this.exam2();
    }

}