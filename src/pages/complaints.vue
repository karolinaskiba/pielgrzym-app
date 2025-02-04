<template>
  <div class="page">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          class="text-center"
        >
          <h3 class="text-h5 font-weight-bold my-3">
            {{ $t('Complaint.MainTitle') }}
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
          <v-form>
            <v-text-field
              v-model="firstName"
              :label="$t('LabelForm.FirstName')"
              required
            />
            <v-text-field
              v-model="lastName"
              :label="$t('LabelForm.LastName')"
              required
            />
            <v-text-field
              v-model="phoneNumber"
              :label="$t('LabelForm.PhoneNumber')"
            />
            <v-text-field
              v-model="email"
              :label="$t('LabelForm.Email')"
              required
            />
            <v-text-field
              v-model="type"
              :label="$t('LabelForm.ComplaintType')"
              required
            />
            <v-textarea
              v-model="description"
              :label="$t('LabelForm.ComplaintDescription')"
              required
            />
            <v-btn
              :loading="loading"
              flat
              class="mt-2 font-weight-bold"
              :text="$t('Button.Send')"
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
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      description: '',
      type: '',
      loading: false,
    }),
  };
</script>
