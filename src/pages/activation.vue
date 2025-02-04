<template>
  <div class="page">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          class="text-center"
        >
          <h3 class="text-h5 font-weight-bold my-3">
            {{ $t('Activation.MainTitle') }}
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
          <h3 class="text-h5 font-weight-bold my-3">
            {{ $t('ResetPassword.MainTitle') }}
          </h3>
          <v-form>
            <v-text-field
              v-model="email"
              :label="$t('LabelForm.Email')"
              required
            />
            <v-text-field
              :append-inner-icon="visibleConfirm ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visibleConfirm ? 'text' : 'password'"
              :label="$t('LabelForm.Password')"
              @click:append-inner="visibleConfirm = !visibleConfirm"
            />
            <v-text-field
              :append-inner-icon="visiblePass ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visiblePass ? 'text' : 'password'"
              :label="$t('LabelForm.PasswordConfirm')"
              @click:append-inner="visiblePass = !visiblePass"
            />

            <v-btn
              :loading="loading"
              flat
              class="mt-2 font-weight-bold"
              :text="$t('Button.Save')"
              type="submit"
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
</template>
<script lang="ts">
  export default {
    data: () => ({
      email: '',
      password: '',
      passwordConfirm: '',
      visiblePass: false,
      visibleConfirm: false,
      loading: false,
    }),
  };
</script>
