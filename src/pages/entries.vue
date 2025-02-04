<template>
  <div class="page">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          class="text-center"
        >
          <h3 class="text-h5 font-weight-bold my-3">
            {{ $t('Entries.MainTitle') }}
          </h3>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row align="center">
        <v-col
          cols="12"
          md="6"
        >
          <v-form ref="form">
            <v-text-field
              v-model="formData.firstName"
              :label="$t('LabelForm.FirstName')"
              :rules="[validationRules.required]"
            />
            <v-text-field
              v-model="formData.lastName"
              :label="$t('LabelForm.LastName')"
              :rules="[validationRules.required]"
            />
            <v-text-field
              v-model="formData.phoneNumber"
              :label="$t('LabelForm.PhoneNumber')"
              :rules="[validationRules.required, validationRules.phoneNumber]"
            />
            <v-text-field
              v-model="formData.email"
              :label="$t('LabelForm.Email')"
              :rules="[validationRules.required, validationRules.email]"
            />
            <v-textarea
              v-model="formData.description"
              :label="$t('LabelForm.EventDescription')"
              :rules="[validationRules.required]"
            />
            <v-btn
              :loading="loading"
              flat
              class="mt-2 font-weight-bold"
              :text="$t('Button.Send')"
              @click="submit"
            />
          </v-form>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-img
            width="100%"
            height="70vh"
            src="../assets/cross.png"
            cover
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
  <v-snackbar
    :timeout="2000"
    v-model="snackbar"
  >
    {{ text }}
  </v-snackbar>
</template>
<script lang="ts" setup>
  import { ref, reactive } from 'vue';
  import { EntriesFormModel } from '../models/EntriesForm.model';
  import { validationRules } from '../models/validationRules';
  import { post } from '../apiClient/apiClient';

  const formData = reactive<EntriesFormModel>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    description: '',
  });

  const form = ref(null);
  const loading = ref(false);
  const snackbar = ref(false);
  const text = ref('');

  const submit = async () => {
    const { valid } = await form.value?.validate();

    if (valid) {
      try {
        console.log(formData);
        await post<EntriesFormModel>('/items', {
          formData,
        });
        snackbar.value = true;
        text.value = 'wysłano';
      } catch (error) {
        if (error instanceof Error) {
          snackbar.value = true;
          text.value = error.message;
        } else {
          snackbar.value = true;
          text.value = 'Nieznany błąd podczas dodawania elementu';
        }
      }
    }
  };
</script>
