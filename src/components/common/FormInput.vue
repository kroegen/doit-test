<template>
    <div :class="['field form-field', value && clearIcon ? 'value' : '']">
        <label v-if="label" class="label">{{label}}</label>
        <div :class="{ 'control': true, 'has-icons-left': fieldIcon, 'has-icons-right': error || success }">
            <input
                :class="['input', error ? 'is-danger' : '', success ? 'is-success' : '', value ? 'value' : '']"
                :id="name"
                :name="name"
                :type="type"
                :autocomplete="autocompleteType"
                :placeholder="placeholder"
                :value="value"
                :disabled="disabled"
                @input="updateValue($event.target.value, $event.target.name)"
            >
            <span v-if="fieldIcon" class="icon is-small is-left"><fa-icon :icon="fieldIcon" /></span>
            <span v-if="error" class="icon is-small is-right"><fa-icon icon="exclamation-triangle" /></span>
            <span v-else-if="success" class="icon is-small is-right"><fa-icon icon="check" /></span>
            <a v-if="value && clearIcon" class="delete" @click.prevent="updateValue('', $event.target.name)"></a>
        </div>
        <p v-if="error" class="help is-danger">{{error}}</p>
        <p v-else-if="success" class="help is-success">{{success}}</p>
    </div>
</template>

<script>

export default {
    name: 'form-input',

    props: {
        label: {
            type    : String,
            default : null,
        },
        disabled: {
            type    : Boolean,
            default : false,
        },
        error: {
            type    : String,
            default : null,
        },
        success: {
            type    : String,
            default : null,
        },
        name: {
            type     : String,
            required : true,
        },
        placeholder: {
            type    : String,
            default : '',
        },
        className: {
            type    : String,
            default : '',
        },
        value: {
            default : '',
        },
        type: {
            type    : String,
            default : 'text',
        },
        autocompleteType: {
            type    : String,
            default : '',
        },
        fieldIcon: {
            type    : String,
            default : '',
        },
        clearIcon: {
            type    : Boolean,
            default : false,
        },
    },

    methods: {
        updateValue(value, name) {
            this.$emit('input', value);
            this.$emit('keydown', name);
        },
    },
}

</script>
