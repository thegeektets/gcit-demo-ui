<template>
  <div class="customers">
    <div class="content">
      <el-table
        fixed
        v-loading="loading"
        :data="customers"
        @expand-change="customerRowExpanded"
        style="width: 100%"
        :header-cell-style="{ background: '#2856B8' }"
        :header-row-style="{ color: 'white' }"
      >
        <el-table-column type="expand" fixed>
          <template #default="props">
            <div class="customer-info--wrap">
              <div class="customer-statement--table">
                <div class="customer-info--title">Customer Statement</div>
                <el-table
                  border="true"
                  stripe="true"
                  v-loading="loadingStatement"
                  :data="customerStatements[props.$index]"
                >
                  <el-table-column prop="action" label="Action" />
                  <el-table-column prop="amount" label="Amount" />
                  <el-table-column prop="description" label="Description" />
                  <el-table-column prop="running_balance" label="Balance" />
                  <el-table-column prop="currency" label="Currency" />
                  <el-table-column label="Transaction Date">
                    <template #default="sprops">
                      {{ formatDate(sprops.row.statement_updated_at) }}
                    </template>
                  </el-table-column>
                </el-table>
              </div>
              <div class="customer-actions">
                <div class="customer-actions--title">
                  Created On : {{ formatDate(props.row.customer_created_at) }}
                </div>
                <div class="customer-actions--title">
                  Updated On : {{ formatDate(props.row.customer_updated_at) }}
                </div>

                <el-button
                  @click="customerAction(4, props.row.customer_id)"
                  color="#DD0E34"
                  size="large"
                >
                  Deactivate customer
                </el-button>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="Customer Name" />
        <el-table-column prop="phone" label="Phone No" />
        <el-table-column prop="email" label="Email" />
        <el-table-column prop="id_number" label="Id Number" />
        <el-table-column prop="tax_identity_number" label="Tax Pin" />

        <el-table-column
          prop="location_name"
          label="Customer Location"
          width="200"
        />
        <el-table-column label="Setup Status">
          <template #default="props">
            <el-tag
              class="ml-2"
              type="success"
              v-if="props.row.setup_status === 1"
            >
              Complete
            </el-tag>
            <el-tag
              class="ml-2"
              type="danger"
              v-if="props.row.setup_status === 0"
            >
              Pending
            </el-tag>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>


<script>
import formatters from "../../../mixins/formatters";
import users from "../../../mixins/users";
import axios from "axios";

export default {
  mixins: [formatters, users],

  data() {
    return {
      loading: false,
      loadingStatement: false,
      customers: [],
      customerStatements: [],
      userId: 4,
      userType: 1,
      token:
        "Y2w2bTFqajJtMDAwMHczeGQzeWpkNWJpaQ.2G4Ntk-QqD8lUrtYuw0eg5dembtJKkQnE0XRcKwJ5aTcLfK_07YA84vGT2-F",
    };
  },
  mounted() {
    this.getUsers(this.userType);
  },
  methods: {
    customerRowExpanded(row) {
      let userId = row.id;
      console.log("userId", userId);
      this.getCustomerStatement(userId, row);
    },
    async getCustomerStatement(userId, row) {
      let that = this;
      this.loadingStatement = true;
      let _customerStatements = [];
      await axios
        .get(`statements/`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
          params: {
            userId: userId,
          },
        })
        .then(function (response) {
          let _statement = response.data.statements;
          if (_statement) {
            _customerStatements = _statement;
            console.log("row", row);
            const index = that.customers.findIndex((object) => {
              return object.id === row.id;
            });
            console.log("index", index);
            that.customerStatements[index] = _customerStatements;
            that.loadingStatement = false;
          }
        })
        .catch(function (error) {
          console.log("error", error);
          that.loadingStatement = false;
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
.customer-statement--table {
  width: 70%;
  float: left;
}
.customer-info--details {
  width: 30%;
  float: left;
}
.customer-actions {
  width: 25%;
  float: right;
}
.customer-actions--title {
  color: #2856b8;
  margin-bottom: 25px;
}
.customer-info--title {
  color: #dd0e34;
  font-size: 14px;
  margin-bottom: 25px;
  font-weight: 400;
    text-align: center;

}
.customer-info-owner--item {
  margin-bottom: 10px;
}
.customer-info-car--title {
  color: #dd0e34;
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 400;
}
.customer-info-car--item {
  margin-bottom: 10px;
}
</style>

