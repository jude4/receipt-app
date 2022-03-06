<template>
  <div>
    <router-link to="/">
      <vs-button color="danger" type="border"> Back </vs-button>
    </router-link>
    <div class="mt-2 grid md:grid-cols-3 gap-4">
      <div class="receipt-img md:col-span-2 col-span-3">
        <vs-card>
          <p class="text-2xl">{{ receipt.title }}</p>
          <img :src="receipt.image" class="w-96" />
        </vs-card>
        <hr class="my-4" />
        <vs-card>
          <p class="text-lg">Description</p>
          <p class="mt-3 text-sm">
            {{ receipt.description }}
          </p>
        </vs-card>
        <hr class="my-4" />

        <vs-card>
          <p class="text-lg">Direction</p>
          <ul>
            <li
              class="my-5"
              v-for="(item, index) in receipt.directions"
              :key="item"
            >
              <p class="font-bold text-gray-700">Step {{ ++index }}</p>
              <p>{{ item }}</p>
            </li>
          </ul>
        </vs-card>
      </div>

      <div class="col-span-3 md:col-span-1">
        <vs-card>
          <p class="text-lg">Ingredients</p>
          <ul class="mt-3">
            <li
              class="text-sm my-3"
              v-for="item in receipt.ingredients"
              :key="item"
            >
              {{ item }}
            </li>
          </ul>
        </vs-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      receipt: {},
    };
  },

  created() {
    this.getReciept();
  },

  methods: {
    getReciept() {
      this.axios
        .get("http://localhost:8080/receipts/" + this.$route.params.id)
        .then((res) => {
          this.receipt = res.data.receipt[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
