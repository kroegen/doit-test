<template>
    <div v-if="isInput" class="card">
        <div class="card-content">
            <h4 class="title is-4">New Task</h4>
            <form @submit.prevent="handleSubmit('input')">
                <form-input
                    label="Task name"
                    placeholder="Type name"
                    type="text"
                    name="name"
                    :error="errors.first('name')"
                    v-validate="'max:100'"
                    v-model="name"
                />
                <form-textarea
                    label="Task content"
                    placeholder="What is about"
                    name="content"
                    type="text"
                    :error="errors.first('content')"
                    v-validate="'max:300'"
                    v-model="content"
                />
                <div class="field is-grouped is-grouped-right">
                    <p class="control">
                        <button class="button is-primary" type="submit">
                            Add task
                        </button>
                    </p>
                </div>
            </form>
        </div>
    </div>
    <div v-else class="card">
        <div class="card-content">
            <form v-if="isEdit">
                <form-input
                    label="Task name"
                    placeholder="Type name"
                    type="text"
                    name="name"
                    :error="errors.first('name')"
                    v-validate="'max:100'"
                    v-model="name"
                />
                <form-textarea
                    label="Task content"
                    placeholder="What is about"
                    name="content"
                    type="text"
                    :error="errors.first('content')"
                    v-validate="'max:300'"
                    v-model="content"
                />
                <div class="field is-grouped is-grouped-right">
                    <p class="control">
                        <button class="button is-primary" @click.prevent="handleSubmit('edit')">
                            Update
                        </button>
                    </p>
                    <p class="control">
                        <button class="button is-danger" @click.prevent="handleEdit">
                            Close
                        </button>
                    </p>
                </div>
            </form>
            <div v-else class="media">
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>{{ name }}</strong>
                            <br>
                            {{content}}
                        </p>
                    </div>
                    <div class="field is-grouped is-grouped-right">
                        <p class="control">
                            <button class="button is-primary" @click.prevent="handleEdit">
                                Edit
                            </button>
                        </p>
                        <p class="control">
                            <button class="button is-danger" @click.prevent="handleRemove">
                                Remove
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FormInput      from '@/components/common/FormInput';
import FormTextArea   from '@/components/common/FormTextArea';

export default {
    name: 'task-card',

    components : {
        FormInput,
        'form-textarea': FormTextArea,
    },

    props: {
        isInput: {
            type    : Boolean,
            default : false,
        },
        task: {
            type: Object,
        },
    },

    data() {
        return {
            name    : '',
            content : '',
            isEdit  : false,
        };
    },

    mounted() {
        if (this.task && this.task.name) this.name = this.task.name;
        if (this.task && this.task.content) this.content = this.task.content;
    },

    methods: {
        handleEdit() {
            this.isEdit = !this.isEdit;
        },

        async handleSubmit() {
            const result = await this.$validator.validate();

            if (!result) {
                return;
            }

            const payload = {
                name    : this.name,
                content : this.content,
            }

            if (this.isEdit) {
                this.$emit('edit', { payload, id: this.task.id });
                this.handleEdit();
            } else {
                this.$emit('input', { payload });
                this.clearValues();
            }
        },

        handleRemove() {
            this.$emit('remove', this.task.id);
        },

        clearValues() {
            this.name = '';
            this.content = '';
        },
    },
};
</script>
