import {Component, Vue} from 'vue-property-decorator';
import {fromEvent, interval, Observable} from 'rxjs';
import {scan, startWith, switchMap, takeUntil} from 'rxjs/operators';

@Component
export default class Rolling extends Vue {
    protected noticeList: Array<{ title: string, htmlUrl: string }> = [];

    protected showNotice: { title: string, htmlUrl: string } = {title: '', htmlUrl: ''};

    private readonly autoPlayInterval: Observable<number> = interval(3000);

    protected created() {
        console.log('Rolling');

        this.noticeList = [
            {title: '공지사항1', htmlUrl: '공지사항1'},
            {title: '공지사항2', htmlUrl: '공지사항2'},
            {title: '공지사항3', htmlUrl: '공지사항3'},
            {title: '공지사항4', htmlUrl: '공지사항4'},
            {title: '공지사항5', htmlUrl: '공지사항5'}
        ];
        this.showNotice = this.noticeList[0];
    }

    protected mounted() {
        this.startRollingList();
    }

    protected startRollingList() {
        const mouseover$: Observable<Event> = fromEvent(this.$el, 'mouseover');
        const mouseout$: Observable<Event> = fromEvent(this.$el, 'mouseout');

        mouseout$.pipe(
            // 최초(페이지 진입시) interval 발생
            startWith(0),
            switchMap(() => this.autoPlayInterval.pipe(
                takeUntil(mouseover$))
            ),
            // 마우스 오버나 블러등에 의해 일시 정시후 다시 재개시 이전상태 유지
            scan((accumulate: number = 0, inputCount: number) => ++accumulate)
        ).subscribe((count: number) => {
            this.showNotice = this.noticeList[count % this.noticeList.length];
        });

    }

}
