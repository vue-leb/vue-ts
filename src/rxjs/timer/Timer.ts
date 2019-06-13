import {Component, Vue} from 'vue-property-decorator';
import {interval, merge, Subject} from 'rxjs';
import {map, scan, switchMap, takeUntil} from 'rxjs/operators';

@Component
export default class Timer extends Vue {
    private start$: Subject<Event> = new Subject();

    private stop$: Subject<Event> = new Subject();

    private reset$: Subject<Event> = new Subject();

    private created() {
        console.log('Timer');
    }

    private mounted() {
        const pointer: HTMLCollectionOf<HTMLElement> = this.$el.getElementsByClassName('pointer') as HTMLCollectionOf<HTMLElement>;

        merge(
            this.start$.pipe(
                switchMap(() => interval(1000).pipe(
                    takeUntil(this.stop$)
                )),
                map(() => 1)
            ),
            this.reset$.pipe(
                map(() => 0)
            )
        ).pipe(
            scan((acc: number, n: number) => n === 0 ? 0 : acc + n)
        ).subscribe((count: number) => {
            pointer[0].style.transform = `rotate(${(count % 60) * 6}deg)`;
        });

    }
}
