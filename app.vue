<template>
  <Notivue v-slot="item">
    <Notification :item="item" />
  </Notivue>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup></script>

<style>
* {
  padding: 0 !important;
  margin: 0 !important;
}
body {
  margin: 0;
  font-family: "Lato", sans-serif !important;
  background: linear-gradient(to right, #d7f2fe, #ffffff);
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-thumb:hover {
  background: #2aabee;
}

::-webkit-scrollbar-thumb {
  background: #2aabee;
  border-radius: 8px;
  cursor: pointer;
}

::-webkit-scrollbar-track {
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0) 48%,
    rgba(174, 195, 249, 0.25) 0,
    rgba(174, 195, 249, 0.25) 52%,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0)
  );
  border-radius: 0;
}

h1 {
  color: #2c3e50;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

button:hover {
  transform: scale(1.05);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

table {
  width: 100%;
  border-collapse: unset;
  font-size: 14px;
  color: #333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

table th,
table td {
  padding: 12px 15px;
  text-align: left;
}

table th {
  background: #2f80ed;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
}

table tr:hover {
  cursor: pointer;
}

table {
  border-radius: 8px;
  overflow: hidden;
}

a:link {
  color: #2aabee;
}
</style>
