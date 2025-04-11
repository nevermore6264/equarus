<template>
  <div class="contact">
    <p class="title">Contact</p>
    <div class="underline-container">
      <div class="underline" style="background-color: #00dbf4"></div>
      <i class="pi pi-arrow-down-left arrow-icon" style="color: black"></i>
    </div>
    <p class="subtitle">Lets Work Together</p>

    <!-- Form thay thế cho join-us -->
    <div class="contact-form">
      <div class="form-row">
        <div class="form-group">
          <label for="name">Tên</label>
          <InputText
            id="name"
            v-model="form.name"
            class="form-input"
            placeholder="Quynh Huy"
            :disabled="loading"
          />
        </div>
        <div class="form-group">
          <label for="phone">Số điện thoại</label>
          <InputText
            id="phone"
            v-model="form.phone"
            class="form-input"
            placeholder="+84"
            :disabled="loading"
          />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="email">Email</label>
          <InputText
            id="email"
            v-model="form.email"
            class="form-input"
            placeholder="email@gmail.com"
            :disabled="loading"
          />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="message">Lời nhắn</label>
          <Textarea
            id="message"
            v-model="form.message"
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
        class="submit-button"
        @click="handleSubmit"
        :loading="loading"
        :disabled="loading"
      />
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  name: "Contact",
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        message: "",
      },
      loading: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true;

        // Gửi email sử dụng EmailJS
        const response = await emailjs.send(
          "service_yqaxztl", // Thay thế bằng Service ID của bạn
          "template_rx0k4oq", // Thay thế bằng Template ID của bạn
          {
            from_name: this.form.name,
            from_email: this.form.email,
            phone: this.form.phone,
            message: this.form.message,
            to_email: "info@equarus.com",
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
          "xB2z-u2__AP3SA4QW" // Thay thế bằng Public Key của bạn
        );

        if (response.status === 200) {
          alert("Email sent successfully!");
          // Reset form
          this.form = {
            name: "",
            phone: "",
            email: "",
            message: "",
          };
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
}

.underline-container {
  display: flex;
  align-items: center;
  margin-top: 7px;
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
    align-items: center;
  }

  .subtitle {
    font-size: 20px;
    margin-bottom: 80px;
  }

  .arrow-icon {
    font-size: 32px; /* Giảm kích thước icon */
    margin-left: 40px; /* Giảm khoảng cách */
    margin-right: 10px; /* Giảm khoảng cách */
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

  .arrow-icon {
    font-size: 24px; /* Giảm kích thước icon */
    margin-left: 20px; /* Giảm khoảng cách */
    margin-right: 5px; /* Giảm khoảng cách */
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

  .arrow-icon {
    font-size: 20px; /* Giảm kích thước icon */
    margin-left: 10px; /* Giảm khoảng cách */
    margin-right: 5px; /* Giảm khoảng cách */
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
</style>
