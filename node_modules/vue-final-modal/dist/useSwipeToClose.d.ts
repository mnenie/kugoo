import type { Ref } from 'vue';
import type CoreModal from './components/CoreModal/CoreModal.vue';
export declare function useSwipeToClose(props: InstanceType<typeof CoreModal>['$props'], options: {
    vfmContentEl: Ref<HTMLDivElement | undefined>;
    modelValueLocal: Ref<boolean>;
}): {
    vfmContentEl: Ref<HTMLDivElement | undefined>;
    swipeBannerEl: Ref<HTMLDivElement | undefined>;
    bindSwipe: import("vue").ComputedRef<{
        class: {
            'vfm-bounce-back': boolean;
        };
        style: {
            transform: string;
        };
    } | undefined>;
    onTouchStartSwipeBanner: (e: TouchEvent) => void;
};
