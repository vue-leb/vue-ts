import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Rxjs extends Vue {

    private created() {
        console.log('rxjs');
    }
}
