<template>
  <div class="bookings">
    <div class="content">
      <el-table
        :data="bookings"
        style="width: 100%"
        :header-cell-style="{ background: '#2856B8' }"
        :header-row-style="{ color: 'white' }"
      >
        <el-table-column type="expand" fixed>
          <template #default="props">
            <div>
              <p m="t-0 b-2">
                Pickup Location: {{ props.row.pickup_location_coord }}
              </p>
              <p m="t-0 b-2">Booking ID: {{ props.row.booking_id }}</p>
              <p m="t-0 b-2">Customer ID: {{ props.row.customer_id }}</p>
              <p m="t-0 b-2">Owner ID: {{ props.row.owner_id }}</p>
            </div>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="booking_id" label="Booking ID" width="130"/> -->
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="phone" label="Customer Phone" />
        <el-table-column label="Pickup Date" :width="200">
          <template #default="props">
            {{
              formatDate(props.row.pickup_date)
            }}
          </template>
        </el-table-column>
        <el-table-column label="Return Date" :width="200">
            <template #default="props">
            {{
              formatDate(props.row.return_date)
            }}
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
        <!-- <el-table-column prop="booking_status" label="Booking Status" width="130"/> -->
        <el-table-column prop="cost" label="Amount" />
      </el-table>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import { format, parseISO } from 'date-fns'

// import moment from 'moment';
export default {
  data() {
    return {
      bookings: [],
      token:
        "Y2w1ajl3bzJ6MDAwMTQzMXE5ZmFxMTIwNQ.4H4qS9wsVrjF8zWjgMlKKI9lK1KHJQYTq1Bi8bPE60CKqoFsjiO6lgsHKh4E",
    };
  },
  methods: {
    formatDate(date) {
      return format(parseISO(date), "MMM do yyyy, h:mm a")
    }
  },

  mounted() {
    let that = this;
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
        }
      });
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
</style>

