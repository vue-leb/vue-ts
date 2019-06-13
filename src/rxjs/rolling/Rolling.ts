import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Rolling extends Vue {

    private created() {
        console.log('Rolling');
    }
}
