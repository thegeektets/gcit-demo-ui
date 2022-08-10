<template>
  <div class="orders">
    <div class="content">
      <el-table
        fixed
        v-loading="loading"
        :data="orders"
        @expand-change="rowExpanded"
        style="width: 100%"
        :header-cell-style="{ background: '#2856B8' }"
        :header-row-style="{ color: 'white' }"
      >
        <el-table-column type="expand" fixed>
          <template #default="props">
            <div class="order-info--wrap">
              <div class="order-info--images">
                <el-carousel>
                  <el-carousel-item
                    v-for="(photo, index) in formatJSON(props.row.photos)"
                    :key="index"
                  >
                    <img :src="photo" class="order-info--image" />
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div class="order-info--details">
                <div class="order-info-owner--details">
                  <div class="order-info-owner--title">Owner Details</div>
                  <div class="order-info-owner--item">
                    Owner Name : {{ ownerDetails[props.$index]["name"] }}
                  </div>
                  <div class="order-info-owner--item">
                    Owner Location :
                    {{ ownerDetails[props.$index]["location_name"] }}
                  </div>
                  <div class="order-info-owner--item">
                    Owner Email : {{ ownerDetails[props.$index]["email"] }}
                  </div>
                  <div class="order-info-owner--item">
                    Owner Phone : {{ ownerDetails[props.$index]["phone"] }}
                  </div>
                </div>
                <div class="order-info-car--details">
                  <div class="order-info-car--title">Car Details</div>
                  <div class="order-info-car--item">
                    Number Plate : {{ props.row.plate_number }}
                  </div>
                  <div class="order-info-car--item">
                    Car Location : {{ props.row.location_name }}
                  </div>
                </div>
              </div>
              <div class="order-actions">
                <el-button
                  @click="orderAction(3, props.row.order_id)"
                  color="#2856B8"
                  size="large"
                >
                  Complete Trip
                </el-button>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="order_no" label="Order No" :width="110" />
        <el-table-column prop="name" label="Customer" />
        <el-table-column prop="phone" label="Phone No" />
        <el-table-column label="Pickup Date">
          <template #default="props">
            {{ formatDate(props.row.pickup_date) }}
          </template>
        </el-table-column>
        <el-table-column label="Return Date">
          <template #default="props">
            {{ formatDate(props.row.return_date) }}
          </template>
        </el-table-column>

        <el-table-column
          prop="pickup_location_name"
          label="Pickup Location"
          width="200"
        />
        <el-table-column label="Car Type">
          <template #default="props">
            {{ props.row.make }} {{ props.row.model }}
          </template>
        </el-table-column>

        <el-table-column prop="order_amount" label="Amount">
          <template #default="props">
            {{ formatCurrency(props.row.order_amount) }}
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import formatters from "../../../mixins/formatters";
import orders from "../../../mixins/orders";

export default {
  mixins: [formatters, orders],

  data() {
    return {
      loading: false,
      orders: [],
      userId: 4,
      ownerDetails: [],
      orderStatus: 2,
      token:
        "Y2w2bTFqajJtMDAwMHczeGQzeWpkNWJpaQ.2G4Ntk-QqD8lUrtYuw0eg5dembtJKkQnE0XRcKwJ5aTcLfK_07YA84vGT2-F",
    };
  },

  mounted() {
    this.getOrders(this.orderStatus);
  },
};
</script>
<style scoped>
button.el-button.el-button--large {
  display: block;
  margin: 10px;
}
.order-info--wrap {
  padding: 15px;
}
.order-info--images {
  background: #f1f1f1;
  width: 40%;
  float: left;
  margin-right: 20px;
  height: 250px;
  margin-bottom: 20px;
}
.order-info--image {
  object-fit: contain;
  width: 100%;
  height: 250px;
}
.order-info--details {
  width: 30%;
  float: left;
}
.order-actions {
  width: 25%;
  float: right;
}
.order-actions--title {
  color: #2856b8;
  margin-bottom: 25px;
}
.order-info-owner--title {
  color: #dd0e34;
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 400;
}
.order-info-owner--item {
  margin-bottom: 10px;
}
.order-info-car--title {
  color: #dd0e34;
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 400;
}
.order-info-car--item {
  margin-bottom: 10px;
}
</style>
