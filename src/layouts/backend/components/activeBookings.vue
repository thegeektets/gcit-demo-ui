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
                    Car Location : {{ props.row.location_name }}
                  </div>
                </div>
              </div>
              <div class="booking-actions">
                <el-button
                  @click="confirmBooking()"
                  color="#2856b8"
                  size="large">
                  Confirm Booking
                </el-button>

                 <el-button
                  @click="confirmBooking()"
                  color="#DD0E34"
                  size="large">
                  Reject Booking
                </el-button>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="Customer Name" />
        <el-table-column prop="phone" label="Customer Phone" />
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

        <el-table-column prop="plate_number" label="Plate Number" width="130" />
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
import axios from "axios";
import formatters from "../../../mixins/formatters";

export default {
  mixins: [formatters],

  data() {
    return {
      loading: false,
      bookings: [],
      ownerDetails: [],
      token:
        "Y2w1ajl3bzJ6MDAwMTQzMXE5ZmFxMTIwNQ.4H4qS9wsVrjF8zWjgMlKKI9lK1KHJQYTq1Bi8bPE60CKqoFsjiO6lgsHKh4E",
    };
  },

  mounted() {
    let that = this;
    this.loading = true;
    axios
      .get("bookings", {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
        params: {
          status: 1,
        },
      })
      .then(function (response) {
        let _bookings = response.data.bookings;
        if (_bookings) {
          that.bookings = _bookings;
          that.loading = false;
        }
      });
  },
  methods: {
    rowExpanded(row) {
      let ownerId = row.owner_id;
      console.log("ownerId", ownerId);
      this.getOwnerDetails(ownerId, row);
    },
    getOwnerDetails(ownerId, row) {
      let that = this;

      let _ownerDetails = {};
      axios
        .get(`user/${ownerId}`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
          params: {
            id: ownerId,
          },
        })
        .then(function (response) {
          let _user = response.data.user;
          if (_user) {
            _ownerDetails = _user;
            console.log("row", row);
            const index = that.bookings.findIndex((object) => {
              return object.booking_id === row.booking_id;
            });
            console.log("index", index);
            that.ownerDetails[index] = _ownerDetails;
          }
        });
    },
  },
};
</script>

<style scoped>
/* .el-table {
  border: 1px solid #c0c4cc;
  margin-top: 50px;
} */
/* .bookings {
   margin:70px 5px 5px 5px;
} */
.nav {
  padding: 15px;
  background-color: #ecf5ff;
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
  width: 30%;
  float: right;
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
