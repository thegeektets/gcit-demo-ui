<template>
  <div class="customers">
    <div class="content">
      <el-table
        fixed
        v-loading="loading"
        :data="customers"
        style="width: 100%"
        :header-cell-style="{ background: '#0d62a4' }"
        :header-row-style="{ color: 'white' }"
      >
        <el-table-column :align="right" label="Customers">
          <template #header>
            <div class="customers-details-table--title">
              <el-input
                v-model="search"
                size="large"
                placeholder="Type to search"
                class="customers-details-search--input"
              />
            </div>
          </template>
          <el-table-column prop="Message" label="Name" />
          <el-table-column prop="Age" label="Age" />

          <el-table-column label="Action">
            <template #default="props">
              <el-button class="ml-2" type="default"> Edit </el-button>
            </template>
          </el-table-column>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      loading: false,
      token: "ALDJAK23423JKSLAJAF23423J23SAD3",
      customers: [
        {
          ID: 0,
          Message: "Tama Fetzer",
          Age: 14,
        },
        {
          ID: 1,
          Message: "Becki Wrona",
          Age: 9,
        },
        {
          ID: 2,
          Message: "Larisa Byron",
          Age: 6,
        },
        {
          ID: 3,
          Message: "Tama Wiers",
          Age: 16,
        },
        {
          ID: 4,
          Message: "Clora Kazmierczak",
          Age: 10,
        },
        {
          ID: 5,
          Message: "Lloyd Schildgen",
          Age: 15,
        },
      ],
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers(userType) {
      let that = this;
      this.loading = true;
      await axios
        .get("items/", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then(function (response) {
          let _users = response.data;
          console.log("_users");
          if (_users) {
            this.customers = users;
            that.loading = false;
          }
        })
        .catch(function (error) {
          console.log("error", error);
          that.loading = false;
        });
    },
  },
};
</script>

<style scoped>
.nav {
  padding: 15px;
  background-color: #ecf5ff;
}
.customer-info--wrap {
  padding: 15px;
}
.el-input.el-input--large.customers-details-search--input {
  width: 30%;
  float: right;
  margin: 15px;
}
</style>

