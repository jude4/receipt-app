<template>
  <main>
    <div class="hero grid md:grid-cols-4 gap-10 md:mt-0 mt-16">
      <div class="md:col-span-2 col-span-4 my-auto">
        <h1 class="md:text-5xl text-3xl text-center">Welcome to CookBook</h1>
        <p class="md:mt-2 md:text-xl text-center text-gray-600 hover:text-base">
          We offer all types of food receipt
        </p>
      </div>
      <div class="hero-img md:col-span-2 col-span-4">
        <img src="/assets/hero-bg.png" class="object-cover" />
      </div>
    </div>

    <div class="search">
      <vs-input
        icon="search"
        class="hidden sm:flex"
        placeholder="Search"
        v-model="search"
        style="width: 400px"
      />
      <vs-input
        icon="search"
        class="flex sm:hidden"
        placeholder="Search"
        v-model="search"
        style="width: 310px"
      />
    </div>

    <div class="grid md:grid-cols-3 gap-16 mt-10">
      <receipt-card v-for="receipt in receipts" :key="receipt.id">
        <template v-slot:title>
          <p class="text-lg">{{ receipt.title }}</p>
        </template>
        <template v-slot:image>
          <img :src="receipt.image" />
        </template>
        <template v-slot:description>
          <div>
            <p>Description</p>
            <p class="text-gray-500">
              {{ receipt.description.slice(0, 50) }}...
            </p>
            <hr class="my-2" />
            <router-link :to="{ name: 'receipt', params: { id: receipt.id } }">
              <vs-button>Read more</vs-button>
            </router-link>
          </div>
        </template>
      </receipt-card>
    </div>
  </main>
</template>

<script>
import ReceiptCard from "../components/ReceiptCard.vue";

export default {
  components: { ReceiptCard },
  data() {
    return {
      receipts: {},
    };
  },
  created() {
    this.getReceipt();
  },
  methods: {
    async getReceipt() {
      await this.axios
        .get("http://localhost:8080/receipts/")
        .then((res) => {
          this.receipts = res.data.data.receipts;
        })
        .catch((err) => {
          console.log("Error" + err);
        });
    },
  },
};
</script>

<style></style>
