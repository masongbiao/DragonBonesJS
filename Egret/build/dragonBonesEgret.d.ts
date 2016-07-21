declare namespace dragonBones {
    /**
     * @language zh_CN
     * Egret 事件。
     * @version DragonBones 4.5
     */
    class EgretEvent extends egret.Event {
        /**
         * @language zh_CN
         * 事件对象。
         * @version DragonBones 4.5
         */
        eventObject: EventObject;
        /**
         * @private
         */
        constructor(type: EventStringType, bubbles?: boolean, cancelable?: boolean, data?: any);
        /**
         * @see dragonBones.EventObject#name
         */
        frameLabel: string;
        /**
         * @see dragonBones.EventObject#name
         */
        sound: string;
        /**
         * @see dragonBones.EventObject#animationName
         */
        animationName: string;
        /**
         * @see dragonBones.EventObject#armature
         */
        armature: Armature;
        /**
         * @see dragonBones.EventObject#bone
         */
        bone: Bone;
        /**
         * @see dragonBones.EventObject#slot
         */
        slot: Slot;
        /**
         * @see dragonBones.EventObject#animationState
         */
        animationState: AnimationState;
        /**
         * @deprecated
         * @see #animationName
         */
        movementID: string;
        /**
         * @see dragonBones.EventObject.START
         */
        static START: string;
        /**
         * @see dragonBones.EventObject.LOOP_COMPLETE
         */
        static LOOP_COMPLETE: string;
        /**
         * @see dragonBones.EventObject.COMPLETE
         */
        static COMPLETE: string;
        /**
         * @see dragonBones.EventObject.FADE_IN
         */
        static FADE_IN: string;
        /**
         * @see dragonBones.EventObject.FADE_IN_COMPLETE
         */
        static FADE_IN_COMPLETE: string;
        /**
         * @see dragonBones.EventObject.FADE_OUT
         */
        static FADE_OUT: string;
        /**
         * @see dragonBones.EventObject.FADE_OUT_COMPLETE
         */
        static FADE_OUT_COMPLETE: string;
        /**
         * @see dragonBones.EventObject.FRAME_EVENT
         */
        static FRAME_EVENT: string;
        /**
         * @see dragonBones.EventObject.SOUND_EVENT
         */
        static SOUND_EVENT: string;
        /**
         * @deprecated
         * @see dragonBones.EventObject.FRAME_EVENT
         */
        static ANIMATION_FRAME_EVENT: string;
        /**
         * @deprecated
         * @see dragonBones.EventObject.FRAME_EVENT
         */
        static BONE_FRAME_EVENT: string;
        /**
         * @deprecated
         * @see dragonBones.EventObject.FRAME_EVENT
         */
        static MOVEMENT_FRAME_EVENT: string;
    }
    /**
     * @inheritDoc
     */
    class EgretArmatureDisplay extends egret.DisplayObjectContainer implements IArmatureDisplay {
        private static _clock;
        private static _clockHandler(time);
        /**
         * @private
         */
        _armature: Armature;
        /**
         * @private
         */
        constructor();
        /**
         * @inheritDoc
         */
        _onClear(): void;
        /**
         * @inheritDoc
         */
        _dispatchEvent(eventObject: EventObject): void;
        /**
         * @inheritDoc
         */
        advanceTime(passedTime: number): void;
        /**
         * @inheritDoc
         */
        hasEvent(type: EventStringType): boolean;
        /**
         * @inheritDoc
         */
        addEvent(type: EventStringType, listener: (event: EgretEvent) => void, target: any): void;
        /**
         * @inheritDoc
         */
        removeEvent(type: EventStringType, listener: (event: EgretEvent) => void, target: any): void;
        /**
         * @inheritDoc
         */
        advanceTimeBySelf(on: Boolean): void;
        /**
         * @inheritDoc
         */
        dispose(): void;
        /**
         * @inheritDoc
         */
        armature: Armature;
        /**
         * @inheritDoc
         */
        animation: Animation;
    }
    /**
     * @deprecated
     * @see dragonBones.Armature
     */
    type FastArmature = Armature;
    /**
     * @deprecated
     * @see dragonBones.Bone
     */
    type FastBone = Bone;
    /**
     * @deprecated
     * @see dragonBones.Slot
     */
    type FastSlot = Slot;
    /**
     * @deprecated
     * @see dragonBones.Animation
     */
    type FastAnimation = Animation;
    /**
     * @deprecated
     * @see dragonBones.AnimationState
     */
    type FastAnimationState = AnimationState;
    /**
     * @deprecated
     * @see dragonBones.EgretEvent
     */
    class AnimationEvent extends EgretEvent {
    }
    /**
     * @deprecated
     * @see dragonBones.EgretEvent
     */
    class FrameEvent extends EgretEvent {
    }
    /**
     * @deprecated
     * @see dragonBones.EgretEvent
     */
    class SoundEvent extends EgretEvent {
    }
    /**
     * @deprecated
     * @see dragonBones.EgretTextureAtlasData
     */
    class EgretTextureAtlas extends EgretTextureAtlasData {
        /**
         * @private
         */
        static toString(): string;
        constructor(texture: egret.Texture, rawData: any, scale?: number);
    }
    /**
     * @deprecated
     * @see dragonBones.EgretTextureAtlasData
     */
    class EgretSheetAtlas extends EgretTextureAtlas {
    }
    /**
     * @deprecated
     * @see dragonBones.EgretFactory#soundEventManater
     */
    class SoundEventManager {
        /**
         * @deprecated
         * @see dragonBones.EgretFactory#soundEventManater
         */
        static getInstance(): EgretArmatureDisplay;
    }
    /**
     * @deprecated
     * @see dragonBones.Armature#cacheFrameRate
     * @see dragonBones.Armature#enableAnimationCache()
     */
    class AnimationCacheManager {
    }
}
declare namespace dragonBones {
    /**
     * @language zh_CN
     * Egret 工厂。
     * @version DragonBones 3.0
     */
    class EgretFactory extends BaseFactory {
        /**
         * @language zh_CN
         * 创建一个工厂。
         * @version DragonBones 3.0
         */
        constructor();
        /**
         * @private
         */
        protected _generateTextureAtlasData(textureAtlasData: EgretTextureAtlasData, textureAtlas: egret.Texture): EgretTextureAtlasData;
        /**
         * @private
         */
        protected _generateArmature(dataPackage: BuildArmaturePackage): Armature;
        /**
         * @private
         */
        protected _generateSlot(dataPackage: BuildArmaturePackage, slotDisplayDataSet: SlotDisplayDataSet): Slot;
        /**
         * @language zh_CN
         * 创建一个指定名称的骨架，并使用骨架的显示容器来更新骨架动画。
         * @param armatureName 骨架数据名称。
         * @param dragonBonesName 龙骨数据名称，如果未设置，将检索所有的龙骨数据，如果多个数据中包含同名的骨架数据，可能无法创建出准确的骨架。
         * @param skinName 皮肤名称，如果未设置，则使用默认皮肤。
         * @returns 骨架的显示容器。
         * @see dragonBones.IArmatureDisplayContainer
         * @version DragonBones 4.5
         */
        buildArmatureDisplay(armatureName: string, dragonBonesName?: string, skinName?: string): EgretArmatureDisplay;
        /**
         * @language zh_CN
         * 获取带有指定贴图的显示对象。
         * @param textureName 指定的贴图名称。
         * @param dragonBonesName 指定的龙骨数据名称，如果未设置，将检索所有的龙骨数据。
         * @version DragonBones 3.0
         */
        getTextureDisplay(textureName: string, dragonBonesName?: string): egret.Bitmap;
        /**
         * @language zh_CN
         * 获取全局声音事件管理器。
         * @version DragonBones 4.5
         */
        soundEventManater: EgretArmatureDisplay;
        /**
         * @deprecated
         * @see dragonBones.BaseFactory#addDragonBonesData()
         */
        addSkeletonData(dragonBonesData: DragonBonesData, dragonBonesName?: string): void;
        /**
         * @deprecated
         * @see dragonBones.BaseFactory#getDragonBonesData()
         */
        getSkeletonData(dragonBonesName: string): DragonBonesData;
        /**
         * @deprecated
         * @see dragonBones.BaseFactory#removeSkeletonData()
         */
        removeSkeletonData(dragonBonesName: string): void;
        /**
         * @deprecated
         * @see dragonBones.BaseFactory#addTextureAtlasData()
         */
        addTextureAtlas(textureAtlasData: TextureAtlasData, dragonBonesName?: string): void;
        /**
         * @deprecated
         * @see dragonBones.BaseFactory#getTextureAtlasData()
         */
        getTextureAtlas(dragonBonesName: string): TextureAtlasData[];
        /**
         * @deprecated
         * @see dragonBones.BaseFactory#removeTextureAtlasData()
         */
        removeTextureAtlas(dragonBonesName: string): void;
        /**
         * @deprecated
         * @see dragonBones.BaseFactory#buildArmature()
         */
        buildFastArmature(armatureName: string, dragonBonesName?: string, skinName?: string): FastArmature;
    }
}
declare namespace dragonBones {
    /**
     * @language zh_CN
     * Egret 插槽。
     * @version DragonBones 3.0
     */
    class EgretSlot extends Slot {
        /**
         * @private
         */
        static toString(): string;
        /**
         * @language zh_CN
         * 是否更新显示对象的变换属性。
         * 为了更好的性能, 并不会更新 display 的变换属性 (x, y, rotation, scaleX, scaleX), 如果需要正确访问这些属性, 则需要设置为 true 。
         * @default false
         * @version DragonBones 3.0
         */
        transformUpdateEnabled: boolean;
        private _renderDisplay;
        private _colorFilter;
        /**
         * @language zh_CN
         * 创建一个空的插槽。
         * @version DragonBones 3.0
         */
        constructor();
        /**
         * @inheritDoc
         */
        protected _onClear(): void;
        /**
         * @private
         */
        protected _onUpdateDisplay(): void;
        /**
         * @private
         */
        protected _initDisplay(value: Object): void;
        /**
         * @private
         */
        protected _addDisplay(): void;
        /**
         * @private
         */
        protected _replaceDisplay(value: Object): void;
        /**
         * @private
         */
        protected _removeDisplay(): void;
        /**
         * @private
         */
        protected _disposeDisplay(value: Object): void;
        /**
         * @private
         */
        _updateVisible(): void;
        /**
         * @private
         */
        private static BLEND_MODE_LIST;
        /**
         * @private
         */
        protected _updateBlendMode(): void;
        /**
         * @private
         */
        protected _updateColor(): void;
        /**
         * @private
         */
        protected _updateFilters(): void;
        /**
         * @private
         */
        protected _updateFrame(): void;
        /**
         * @private
         */
        protected _updateMesh(): void;
        /**
         * @private
         */
        protected _updateTransform(): void;
    }
}
declare namespace dragonBones {
    /**
     * @language zh_CN
     * Egret 贴图集数据。
     * @version DragonBones 3.0
     */
    class EgretTextureAtlasData extends TextureAtlasData {
        /**
         * @private
         */
        static toString(): string;
        /**
         * @language zh_CN
         * Egret 贴图。
         * @version DragonBones 3.0
         */
        texture: egret.Texture;
        /**
         * @private
         */
        constructor();
        /**
         * @inheritDoc
         */
        protected _onClear(): void;
        /**
         * @private
         */
        generateTextureData(): TextureData;
    }
    /**
     * @private
     */
    class EgretTextureData extends TextureData {
        static toString(): string;
        texture: egret.Texture;
        constructor();
        /**
         * @inheritDoc
         */
        protected _onClear(): void;
    }
}
