export interface CoreModalEmits {
    (e: 'update:modelValue', modelValue: boolean): void;
    (e: 'beforeOpen'): void;
    (e: 'opened'): void;
    (e: 'beforeClose'): void;
    (e: 'closed'): void;
    /** onClickOutside will only be emitted when clickToClose equal to `false` */
    (e: 'clickOutside'): void;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    modalId: {
        readonly type: import("vue").PropType<import("../../Modal").ModalId>;
        readonly default: undefined;
    };
    modelValue: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: undefined;
    };
    displayDirective: {
        readonly type: import("vue").PropType<"if" | "show" | "visible">;
        readonly default: "if";
        readonly validator: (prop: any) => boolean;
    };
    hideOverlay: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: undefined;
    };
    overlayTransition: {
        readonly type: import("vue").PropType<((string & {}) | "vfm-fade" | "vfm-slide-down" | "vfm-slide-up" | "vfm-slide-right" | "vfm-slide-left") | import("vue").TransitionProps>;
        readonly default: undefined;
    };
    contentTransition: {
        readonly type: import("vue").PropType<((string & {}) | "vfm-fade" | "vfm-slide-down" | "vfm-slide-up" | "vfm-slide-right" | "vfm-slide-left") | import("vue").TransitionProps>;
        readonly default: undefined;
    };
    overlayClass: {
        readonly type: import("vue").PropType<any>;
        readonly default: undefined;
    };
    contentClass: {
        readonly type: import("vue").PropType<any>;
        readonly default: undefined;
    };
    overlayStyle: {
        readonly type: import("vue").PropType<import("../../Modal").StyleValue>;
        readonly default: undefined;
    };
    contentStyle: {
        readonly type: import("vue").PropType<import("../../Modal").StyleValue>;
        readonly default: undefined;
    };
    clickToClose: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: true;
    };
    escToClose: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: true;
    };
    background: {
        readonly type: import("vue").PropType<"interactive" | "non-interactive">;
        readonly default: "non-interactive";
        readonly validator: (prop: any) => boolean;
    };
    focusTrap: {
        readonly type: import("vue").PropType<false | import("focus-trap").Options>;
        readonly default: () => {
            allowOutsideClick: boolean;
        };
    };
    lockScroll: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: true;
    };
    reserveScrollBarGap: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: true;
    };
    zIndexFn: {
        readonly type: import("vue").PropType<(context: {
            index: number;
        }) => number | undefined>;
        readonly default: ({ index }: {
            index: number;
        }) => number;
    };
    swipeToClose: {
        readonly type: import("vue").PropType<"none" | "up" | "right" | "down" | "left">;
        readonly default: "none";
        readonly validator: (prop: any) => boolean;
    };
    threshold: {
        readonly type: import("vue").PropType<number>;
        readonly default: 0;
    };
    showSwipeBanner: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: undefined;
    };
    preventNavigationGestures: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: undefined;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (modelValue: boolean) => void;
    beforeOpen: () => void;
    opened: () => void;
    beforeClose: () => void;
    closed: () => void;
    clickOutside: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modalId: {
        readonly type: import("vue").PropType<import("../../Modal").ModalId>;
        readonly default: undefined;
    };
    modelValue: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: undefined;
    };
    displayDirective: {
        readonly type: import("vue").PropType<"if" | "show" | "visible">;
        readonly default: "if";
        readonly validator: (prop: any) => boolean;
    };
    hideOverlay: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: undefined;
    };
    overlayTransition: {
        readonly type: import("vue").PropType<((string & {}) | "vfm-fade" | "vfm-slide-down" | "vfm-slide-up" | "vfm-slide-right" | "vfm-slide-left") | import("vue").TransitionProps>;
        readonly default: undefined;
    };
    contentTransition: {
        readonly type: import("vue").PropType<((string & {}) | "vfm-fade" | "vfm-slide-down" | "vfm-slide-up" | "vfm-slide-right" | "vfm-slide-left") | import("vue").TransitionProps>;
        readonly default: undefined;
    };
    overlayClass: {
        readonly type: import("vue").PropType<any>;
        readonly default: undefined;
    };
    contentClass: {
        readonly type: import("vue").PropType<any>;
        readonly default: undefined;
    };
    overlayStyle: {
        readonly type: import("vue").PropType<import("../../Modal").StyleValue>;
        readonly default: undefined;
    };
    contentStyle: {
        readonly type: import("vue").PropType<import("../../Modal").StyleValue>;
        readonly default: undefined;
    };
    clickToClose: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: true;
    };
    escToClose: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: true;
    };
    background: {
        readonly type: import("vue").PropType<"interactive" | "non-interactive">;
        readonly default: "non-interactive";
        readonly validator: (prop: any) => boolean;
    };
    focusTrap: {
        readonly type: import("vue").PropType<false | import("focus-trap").Options>;
        readonly default: () => {
            allowOutsideClick: boolean;
        };
    };
    lockScroll: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: true;
    };
    reserveScrollBarGap: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: true;
    };
    zIndexFn: {
        readonly type: import("vue").PropType<(context: {
            index: number;
        }) => number | undefined>;
        readonly default: ({ index }: {
            index: number;
        }) => number;
    };
    swipeToClose: {
        readonly type: import("vue").PropType<"none" | "up" | "right" | "down" | "left">;
        readonly default: "none";
        readonly validator: (prop: any) => boolean;
    };
    threshold: {
        readonly type: import("vue").PropType<number>;
        readonly default: 0;
    };
    showSwipeBanner: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: undefined;
    };
    preventNavigationGestures: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: undefined;
    };
}>> & {
    "onUpdate:modelValue"?: ((modelValue: boolean) => any) | undefined;
    onBeforeOpen?: (() => any) | undefined;
    onOpened?: (() => any) | undefined;
    onBeforeClose?: (() => any) | undefined;
    onClosed?: (() => any) | undefined;
    onClickOutside?: (() => any) | undefined;
}, {
    modalId: import("../../Modal").ModalId;
    modelValue: boolean;
    displayDirective: "if" | "show" | "visible";
    hideOverlay: boolean;
    overlayTransition: ((string & {}) | "vfm-fade" | "vfm-slide-down" | "vfm-slide-up" | "vfm-slide-right" | "vfm-slide-left") | import("vue").TransitionProps;
    contentTransition: ((string & {}) | "vfm-fade" | "vfm-slide-down" | "vfm-slide-up" | "vfm-slide-right" | "vfm-slide-left") | import("vue").TransitionProps;
    overlayClass: any;
    contentClass: any;
    overlayStyle: import("../../Modal").StyleValue;
    contentStyle: import("../../Modal").StyleValue;
    clickToClose: boolean;
    escToClose: boolean;
    background: "interactive" | "non-interactive";
    focusTrap: false | import("focus-trap").Options;
    lockScroll: boolean;
    reserveScrollBarGap: boolean;
    zIndexFn: (context: {
        index: number;
    }) => number | undefined;
    swipeToClose: "none" | "up" | "right" | "down" | "left";
    threshold: number;
    showSwipeBanner: boolean;
    preventNavigationGestures: boolean;
}, {}>, {
    default?(_: {}): any;
    "swipe-banner"?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
