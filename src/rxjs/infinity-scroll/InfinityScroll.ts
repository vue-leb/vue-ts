import {Component, Vue} from 'vue-property-decorator';

@Component
export default class InfinityScroll extends Vue {

    private created() {
        console.log('InfinityScroll');
    }
}
