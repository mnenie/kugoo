import type CoreModal from './CoreModal.vue';
export declare function useZIndex(props: InstanceType<typeof CoreModal>['$props']): {
    zIndex: import("vue").Ref<number | undefined>;
    refreshZIndex: (index: number) => void;
    resetZIndex: () => void;
};
