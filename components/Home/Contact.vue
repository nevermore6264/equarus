<template>
  <div class="careers">
    <p class="title">Contact</p>
    <div class="underline-container">
      <div class="underline" style="background-color: #00dbf4"></div>
      <i class="pi pi-arrow-down-left" style="color: black"></i>
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
          />
        </div>
        <div class="form-group">
          <label for="phone">Số điện thoại</label>
          <InputText
            id="phone"
            v-model="form.phone"
            class="form-input"
            placeholder="+84"
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
            rows="5"
            class="form-input"
            placeholder="Enter your question or message"
          />
        </div>
      </div>

      <Button label="Submit" class="submit-button" @click="handleSubmit" />
    </div>
  </div>
</template>

<script>
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
    };
  },
  methods: {
    handleSubmit() {
      // Xử lý khi người dùng nhấn Submit
      console.log("Form submitted:", this.form);
      alert("Form submitted successfully!");
    },
  },
};
</script>

<style scoped>
.careers {
  padding: 89.5px;
}

.title {
  font-size: 53.91px;
  font-family: "Inter", sans-serif;
}

.subtitle {
  font-size: 25.78px;
  color: #343434;
  margin-bottom: 100px;
  font-family: "Inter", sans-serif;
}

.underline-container {
  display: flex;
  align-items: center;
}

.underline {
  flex: 1;
  height: 2px;
  background-color: #00dbf4;
}

.pi-arrow-down-left {
  margin-left: 0.5rem;
  font-size: 1.5rem;
}

.contact-form {
  max-width: 626px;
  margin: 0 auto;
  margin-top: 100px;
}

.form-row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.form-group {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-size: 16px;
  color: #828282;
  margin-bottom: 8px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
}

.form-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-family: "Inter", sans-serif;
}

.submit-button {
  width: 100%;
  padding: 25.5px 44px;
  font-size: 15px;
  font-family: "Lexend Zetta", sans-serif;
  color: #000000;
  background-color: #d9d9d9;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  text-transform: uppercase;
  margin-top: 20px;
}
</style>
