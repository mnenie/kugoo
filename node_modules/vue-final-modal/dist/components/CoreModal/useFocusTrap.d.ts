import type { Ref } from 'vue';
import type CoreModal from './CoreModal.vue';
export declare function useFocusTrap(props: InstanceType<typeof CoreModal>['$props'], options: {
    focusEl: Ref<undefined | HTMLDivElement>;
}): {
    focus(): void;
    blur(): void;
};
