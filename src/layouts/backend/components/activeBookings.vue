<template>
  <div class="bookings">
    <div class="content">
      <el-table
        fixed
        v-loading="loading"
        :data="bookings"
        @expand-change="rowExpanded"
        style="width: 100%"
        :header-cell-style="{ background: '#2856B8' }"
        :header-row-style="{ color: 'white' }"
      >
        <el-table-column type="expand" fixed>
          <template #default="props">
            <div class="booking-info--wrap">
              <div class="booking-info--images">
                <el-carousel>
                  <el-carousel-item
                    v-for="(photo, index) in formatJSON(props.row.photos)"
                    :key="index"
                  >
                    <img :src="photo" class="booking-info--image" />
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div class="booking-info--details">
                <div class="booking-info-owner--details">
                  <div class="booking-info-owner--title">Owner Details</div>
                  <div class="booking-info-owner--item">
                    Owner Name : {{ ownerDetails[props.$index]["name"] }}
                  </div>
                  <div class="booking-info-owner--item">
                    Owner Location :
                    {{ ownerDetails[props.$index]["location_name"] }}
                  </div>
                  <div class="booking-info-owner--item">
                    Owner Email : {{ ownerDetails[props.$index]["email"] }}
                  </div>
                  <div class="booking-info-owner--item">
                    Owner Phone : {{ ownerDetails[props.$index]["phone"] }}
                  </div>
                </div>
                <div class="booking-info-car--details">
                  <div class="booking-info-car--title">Car Details</div>
                    <div class="booking-info-car--item">
                    Number Plate : {{ props.row.plate_number }}
                  </div>
                  <div class="booking-info-car--item">
                    Car Location : {{ props.row.location_name }}
                  </div>
                </div>
              </div>
              <div class="booking-actions">
                <div class="booking-actions--title">
                  Created On : {{ formatDate(props.row.booking_created_at) }}
                </div>
                <el-button
                  @click="bookingAction(2, props.row.booking_id)"
                  color="#2856b8"
                  size="large"
                >
                  Confirm Booking
                </el-button>

                <el-button
                  @click="bookingAction(3, props.row.booking_id)"
                  color="#DD0E34"
                  size="large"
                >
                  Reject Booking
                </el-button>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="Customer" />
        <el-table-column prop="phone" label="Phone No" />
        <el-table-column label="Pickup Date" :width="200">
          <template #default="props">
            {{ formatDate(props.row.pickup_date) }}
          </template>
        </el-table-column>
        <el-table-column label="Return Date" :width="200">
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

        <el-table-column prop="cost" label="Amount">
          <template #default="props">
            {{ formatCurrency(props.row.cost) }}
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import formatters from "../../../mixins/formatters";
import bookings from "../../../mixins/bookings";


export default {
  mixins: [formatters, bookings],

  data() {
    return {
      loading: false,
      bookings: [],
      userId: 4,
      ownerDetails: [],
      bookingStatus: 1,
      token:
        "Y2w2bTFqajJtMDAwMHczeGQzeWpkNWJpaQ.2G4Ntk-QqD8lUrtYuw0eg5dembtJKkQnE0XRcKwJ5aTcLfK_07YA84vGT2-F",
    };
  },

  mounted() {
    this.getBookings(this.bookingStatus);
  },
};
</script>
<style scoped>
button.el-button.el-button--large {
    display: block;
    margin: 10px;
}
.booking-info--wrap {
  padding: 15px;
}
.booking-info--images {
  background: #f1f1f1;
  width: 40%;
  float: left;
  margin-right: 20px;
  height: 250px;
  margin-bottom: 20px;
}
.booking-info--image {
  object-fit: contain;
  width: 100%;
  height: 250px;
}
.booking-info--details {
  width: 30%;
  float: left;
}
.booking-actions {
  width: 25%;
  float: right;
}
.booking-actions--title {
  color: #2856b8;
  margin-bottom: 25px;
}
.booking-info-owner--title {
  color: #dd0e34;
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 400;
}
.booking-info-owner--item {
  margin-bottom: 10px;
}
.booking-info-car--title {
  color: #dd0e34;
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 400;
}
.booking-info-car--item {
  margin-bottom: 10px;
}
</style>
