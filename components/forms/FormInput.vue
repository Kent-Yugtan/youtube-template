<template>
    <div class="form-group form-input-container w-100">
        <label v-if="hasInputLabel">
            <slot name="input-label">{{ inputLabel }}</slot>
        </label>

        <div class="input-group has-validation input-group-container" :class="{'is-invalid': hasFormError, 'border-pill': borderPill }">
            <span v-if="hasLeftGroupText" class="input-group-text left">
                <slot name="left-group-text"></slot>
            </span>

            <!-- INPUT TYPE TEXT -->
            <input
                :placeholder="placeholder"
                v-if="isInput"
                v-model="inputValue"
                class="form-control form-control-lg"
                type="text"
                :class="{ 'no-border-left': hasLeftGroupText, 'no-border-right': hasRightGroupText, 'is-invalid': hasFormError }"
                :maxlength="maxInput"
                :readonly="readonly"
                :disabled="disabled"
            >

            <span v-if="hasRightGroupText" class="input-group-text right">
                <slot name="right-group-text">
                    <template v-if="appendIcon && showAppendIcon">
                        <i style="cursor:pointer" @click.stop="$emit('click:append')" :class="appendIcon"></i>
                    </template>
                </slot>
            </span>

            <div v-if="hasFormError" class="invalid-feedback">
                <slot name="error-messages">{{ errorMessages }}</slot>
            </div>
            
        </div>
        <div v-if="!hasFormError && !hideDetails" class="text-success mt-1">
            <label><slot name="success-message"></slot></label>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

interface optionInterface {
    value?: any;
    text?: any;
}
@Component<FormInput>({
    name: 'FormInput'
})

export default class FormInput extends Vue {
    @Prop({ default: null }) readonly value!: any;

    @Prop({ default: () => {
        return []
    }}) readonly options!: Array<optionInterface>;

    @Prop({default: false}) readonly checkValue!: boolean;
    @Prop({ default: null }) readonly checkBoxValue: any;

    @Prop({ default: 'text' }) readonly type!: string;
    @Prop({ default: false }) readonly hasError!: boolean;
    @Prop({ default: true }) hasBorderTopBottomRadius!: boolean;
    @Prop({ default: null }) readonly errorMessages: any;
    @Prop({ default: null }) readonly inputLabel: any;
    @Prop({ default: '' }) readonly placeholder!: string;
    @Prop({ default: 5 }) readonly rows!: Number
    @Prop({ default: false }) readonly noResize!: boolean
    @Prop({ default: 500 }) readonly maxInput!: any
    @Prop({ default: false }) readonly readonly!: boolean
    @Prop({ default: false }) readonly disabled!: boolean
    @Prop({ default: '' }) defaultOptionText!: string;
    @Prop({ default: '0' }) defaultValue!: any;
    
    @Prop({ default: false }) readonly hasIconVariable!: boolean;
    @Prop({ default: 'password'}) inputType!:string;
    @Prop({ default: null }) readonly appendIcon!:any;
    
    @Prop({ default: null }) readonly minStartDate!: any;
    @Prop({ default: true }) readonly showAppendIcon!: boolean;
    @Prop({ default: false }) readonly hideDetails!: boolean;
    @Prop({ default: false }) readonly borderPill!: boolean;
    
    @Prop({ default: false }) readonly selectFirst!: boolean;
    @Prop({ default: '' }) defaultOptionFirstText!: string;


    public localInputType: string = this.inputType;

    get inputValue(){
        return this.value;
    }

    set inputValue(value){
        if (this.type === "number") {
            if (value < 0 || Object.is(value, -0)) {
                this.$emit('input', 0);
            } else {
                this.$emit('input', parseInt(value));
            }
        }else{
            this.$emit('input', value);
        }
    }

    get hasLeftGroupText(){
        return this.$slots['left-group-text'];
    }

    get hasRightGroupText(){
        return this.$slots['right-group-text'] || this.appendIcon;
    }

    get noBorderTopBottomRadius() {
        return this.hasBorderTopBottomRadius;
    }

    get isInput(){
        return this.type == 'text' || this.type == 'input'
    }

    get hasInputLabel(){
        return this.inputLabel || this.$slots['input-label'];
    }

    get hasFormError(){
        return (this.hasError && this.errorMessages) || (this.hasError && this.$slots['error-messages'])
    }

    get hasIcon(){
        return this.hasIconVariable ? true : false;
    }

    get toggleIconClass() {
        return this.inputType === 'password' ? 'fa fa-eye' : 'fa fa-eye-slash';
    }   

}
</script>
<style lang="scss" scoped>
.form-input-container{

    .input-group-container{
        &.border-pill{
            border-top-right-radius: 25px;
            border-bottom-right-radius: 25px;
            border-top-left-radius: 25px;
            border-bottom-left-radius: 25px;
            overflow: hidden;
        }
    }

    label{
        font-family: Poppins;
        font-size: 14px;
        font-weight: 600;
        line-height: 21px;
        letter-spacing: 0px;
        text-align: left;
    }

    .password-input-group {
        position: relative;
    }

    

    .password-toggle-btn {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        border: none;
        background: none;
        cursor: pointer;
        padding: 0;
        z-index: 9999;
    }

    .hasToggleError{
        right: 35px;
        top: 28%;
        transform: translateY(-35%);
    }

    .input-group{
        .form-control,.form-select{
            &.no-border-left{
                border-left: none!important;

            }
            &.no-border-right{
                border-right: none!important;
                border-top-right-radius: 0px!important;
                border-bottom-right-radius: 0px!important;
            }
            
            &.no-border-topBottom-right-radius{
                border-top-right-radius: 0px !important;
                border-bottom-right-radius: 0px !important;
            }
        }

        textarea{
            &.no-resize{
                resize: none;
            }
        }

        .input-group-text{
            background: #fff;

            &.left{
                border-right: none;
                border-top-right-radius: 0px;
                border-bottom-right-radius: 0px;
            }
            &.right{
                border-left: none;
                border-top-left-radius: 0px;
                border-bottom-left-radius: 0px;
            }
        }

        &.is-invalid{
            .input-group-text{
                color: #dc3545;
                border-top-color: #dc3545;
                border-bottom-color: #dc3545;

                &.left{
                    border-left-color: #dc3545;
                }
                &.right{
                    border-right-color: #dc3545;
                }
            }
        }
    }

    .choose-file-button {
        background-color: white;
        color: black;
        border: 1px solid #E5E5EA;
        border-radius: 10px;
        cursor: pointer;
        padding: 10px;

        &::file-selector-button {
            background-color: black;
            color: white;
            border: 1px solid black;
            border-radius: 8px;
            padding: 8px 16px;
            cursor: pointer;
            position: absolute;
            right: 0;
            margin-right: 0;
        }
    }

    .arrow-container {
        position: absolute;
        right: 10px; // Adjust the positioning as needed
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }
}
</style>