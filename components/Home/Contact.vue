<template>
  <div class="contact">
    <p class="title fade-in-up">Contact</p>
    <div class="underline-container fade-in-left">
      <div class="underline" style="background-color: #00dbf4"></div>
      <i
        class="pi pi-arrow-down-left"
        style="
          color: black;
          font-size: 40px;
          margin-left: 57px;
          margin-right: 17px;
        "
      ></i>
    </div>
    <p class="subtitle fade-in-up">Lets Work Together</p>

    <!-- Form thay thế cho join-us -->
    <div class="contact-form">
      <div class="form-row">
        <div class="form-group fade-in-left">
          <label for="name">Tên <span class="required">*</span></label>
          <InputText
            id="name"
            v-model="form.name"
            class="form-input"
            placeholder="Quynh Huy"
            :disabled="loading"
            :class="{
              'p-invalid': v$.form.name.$invalid && v$.form.name.$dirty,
            }"
          />
          <small
            class="p-error"
            v-if="v$.form.name.$invalid && v$.form.name.$dirty"
          >
            Tên là bắt buộc
          </small>
        </div>
        <div class="form-group fade-in-right">
          <label for="phone"
            >Số điện thoại <span class="required">*</span></label
          >
          <InputText
            id="phone"
            v-model="form.phone"
            class="form-input"
            placeholder="+84"
            :disabled="loading"
            :class="{
              'p-invalid': v$.form.phone.$invalid && v$.form.phone.$dirty,
            }"
          />
          <small
            class="p-error"
            v-if="v$.form.phone.$invalid && v$.form.phone.$dirty"
          >
            Số điện thoại là bắt buộc
          </small>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group fade-in-up">
          <label for="email">Email <span class="required">*</span></label>
          <InputText
            id="email"
            v-model="form.email"
            class="form-input"
            placeholder="email@gmail.com"
            :disabled="loading"
            :class="{
              'p-invalid': v$.form.email.$invalid && v$.form.email.$dirty,
            }"
          />
          <small
            class="p-error"
            v-if="v$.form.email.$invalid && v$.form.email.$dirty"
          >
            Email là bắt buộc và phải đúng định dạng
          </small>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group fade-in-up">
          <label for="content">Lời nhắn</label>
          <Textarea
            id="content"
            v-model="form.content"
            :autoResize="true"
            rows="7"
            class="form-input"
            placeholder="Enter your question or message"
            :disabled="loading"
          />
        </div>
      </div>

      <Button
        label="Submit"
        class="submit-button scale-in"
        @click="handleSubmit"
        :loading="loading"
        :disabled="loading || v$.form.$invalid"
      />
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  name: "Contact",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        content: "",
      },
      loading: false,
    };
  },
  validations() {
    return {
      form: {
        name: { required },
        phone: { required },
        email: { required, email },
        content: {},
      },
    };
  },
  methods: {
    async handleSubmit() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;

      try {
        this.loading = true;

        // Gửi email sử dụng EmailJS
        const response = await emailjs.send(
          "service_6j59u5y",
          "template_e36dehv",
          {
            from_name: this.form.name,
            from_email: this.form.email,
            phone: this.form.phone,
            content: this.form.content || "Không có nội dung",
            to_email: "info@equarus.com",
            title: `🛎️ New Support Request from ${this.form.name}`,
            time: new Date().toLocaleString("vi-VN", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: false,
            }),
          },
          "Zf3WoNIf04FFZlVWM"
        );

        if (response.status === 200) {
          alert("Email sent successfully!");
          // Reset form
          this.form = {
            name: "",
            phone: "",
            email: "",
            content: "",
          };
          this.v$.$reset();
        }
      } catch (error) {
        console.error("Error sending email:", error);
        alert("Failed to send email. Please try again later.");
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.contact {
  padding: 0 119px 129px 119px;
}

.title {
  font-size: 53.91px;
  font-family: "Inter", sans-serif;
}

.subtitle {
  font-size: 25.78px;
  color: #343434;
  margin-bottom: 127px;
  font-family: "Inter", sans-serif;
  margin-top: 25px;
}

.underline-container {
  display: flex;
  align-items: end;
}

.underline {
  flex: 1;
  height: 2px;
  background-color: #00dbf4;
}

.arrow-icon {
  font-size: 40px; /* Kích thước mặc định */
  margin-left: 57px; /* Khoảng cách mặc định */
  margin-right: 17px; /* Khoảng cách mặc định */
}

.contact-form {
  max-width: 834.67px;
  margin: 0 auto;
  margin-top: 100px;
}

.form-row {
  display: flex;
  gap: 42.5px;
  margin-bottom: 40px;
}

.form-group {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-size: 21.33px;
  color: #828282;
  margin-bottom: 8px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
}

.form-input {
  width: 100%;
  padding: 18px;
  font-size: 21.33px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-family: "Inter", sans-serif;
}

.submit-button {
  width: 100%;
  padding: 35.5px 44px;
  font-size: 20px;
  font-family: "Lexend Zetta", sans-serif;
  color: #000000;
  background-color: #d9d9d9;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  text-transform: uppercase;
}

/* Responsive styles */
@media (max-width: 1366px) {
  .contact {
    padding: 60px;
  }

  .title {
    font-size: 40px;
  }

  .underline-container {
    align-items: end;
  }

  .subtitle {
    font-size: 20px;
    margin-bottom: 80px;
  }

  .pi-arrow-down-left {
    font-size: 32px !important;
    margin-left: 40px !important;
    margin-right: 10px !important;
  }

  .contact-form {
    margin-top: 70px;
  }

  .form-row {
    flex-direction: column;
    gap: 40px;
  }

  .submit-button {
    padding: 20px 30px;
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .contact {
    padding: 40px;
  }

  .title {
    font-size: 32px;
  }

  .subtitle {
    font-size: 18px;
    margin-bottom: 50px;
  }

  .pi-arrow-down-left {
    font-size: 24px !important;
    margin-left: 20px !important;
    margin-right: 5px !important;
  }

  .contact-form {
    margin-top: 50px;
  }

  .form-group label {
    font-size: 14px;
  }

  .form-input {
    font-size: 14px;
    padding: 8px;
  }

  .submit-button {
    padding: 15px 25px;
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .contact {
    padding: 20px;
  }

  .title {
    font-size: 24px;
  }

  .subtitle {
    font-size: 16px;
    margin-bottom: 30px;
  }

  .pi-arrow-down-left {
    font-size: 20px !important;
    margin-left: 10px !important;
    margin-right: 5px !important;
  }

  .contact-form {
    margin-top: 30px;
  }

  .form-group label {
    font-size: 12px;
  }

  .form-input {
    font-size: 12px;
    padding: 6px;
  }

  .submit-button {
    padding: 10px 20px;
    font-size: 12px;
  }
}

.required {
  color: red;
  margin-left: 4px;
}

.p-error {
  color: #f44336;
  font-size: 12px;
  margin-top: 4px;
}

.p-invalid {
  border-color: #f44336 !important;
}
</style>
