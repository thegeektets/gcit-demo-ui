<template>
  <div class="owners">
    <div class="content">
      <el-table
        fixed
        v-loading="loading"
        :data="owners"
        @expand-change="ownerRowExpanded"
        style="width: 100%"
        :header-cell-style="{ background: '#2856B8' }"
        :header-row-style="{ color: 'white' }"
      >
        <el-table-column type="expand" fixed>
          <template #default="props">
            <div class="owner-info--wrap">
              <div class="owner-statement--table">
                <div class="owner-info--title">Owner Statement</div>
                <el-table
                  border="true"
                  stripe="true"
                  v-loading="loadingStatement"
                  :data="ownerStatements[props.$index]"
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
              <div class="owner-actions">
                <div class="owner-actions--title">
                  Created On : {{ formatDate(props.row.owner_created_at) }}
                </div>
                <div class="owner-actions--title">
                  Updated On : {{ formatDate(props.row.owner_updated_at) }}
                </div>

                <el-button
                  @click="ownerAction(4, props.row.owner_id)"
                  color="#DD0E34"
                  size="large"
                >
                  Deactivate Owner
                </el-button>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="Owner Name" />
        <el-table-column prop="phone" label="Phone No" />
        <el-table-column prop="email" label="Email" />
        <el-table-column prop="id_number" label="Id Number" />
        <el-table-column prop="tax_identity_number" label="Tax Pin" />

        <el-table-column
          prop="location_name"
          label="owner Location"
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
      owners: [],
      ownerStatements: [],
      userId: 4,
      userType: 2,
      token:
        "Y2w2bTFqajJtMDAwMHczeGQzeWpkNWJpaQ.2G4Ntk-QqD8lUrtYuw0eg5dembtJKkQnE0XRcKwJ5aTcLfK_07YA84vGT2-F",
    };
  },
  mounted() {
    this.getUsers(this.userType);
  },
  methods: {
    ownerRowExpanded(row) {
      let userId = row.id;
      console.log("userId", userId);
      this.getOwnerStatement(userId, row);
    },
    async getOwnerStatement(userId, row) {
      let that = this;
      this.loadingStatement = true;
      let _ownerStatements = [];
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
            _ownerStatements = _statement;
            console.log("row", row);
            const index = that.owners.findIndex((object) => {
              return object.id === row.id;
            });
            console.log("index", index);
            that.ownerStatements[index] = _ownerStatements;
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
.owner-info--wrap {
  padding: 15px;
}
.owner-statement--table {
  width: 70%;
  float: left;
}
.owner-info--details {
  width: 30%;
  float: left;
}
.owner-actions {
  width: 25%;
  float: right;
}
.owner-actions--title {
  color: #2856b8;
  margin-bottom: 25px;
}
.owner-info--title {
  color: #dd0e34;
  font-size: 14px;
  margin-bottom: 25px;
  font-weight: 400;
    text-align: center;

}
.owner-info-owner--item {
  margin-bottom: 10px;
}
.owner-info-car--title {
  color: #dd0e34;
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 400;
}
.owner-info-car--item {
  margin-bottom: 10px;
}
</style>

