<template>
<div class="bookings">
<div class="content">
      
  <!-- <el-input v-model="search" placeholder="Type to search" style="display;block;margin:1rem auto; width: 200px;"/> -->
  

  <!-- <el-button  plain @click="sortBy('booking_status')">
      Sort Status
    </el-button> -->
  
  
    <!-- {{ bookings }} -->
    
    <el-table :data="bookings" style="width: 100%" :header-cell-style="{background: '#409eff'}" :header-row-style="{color: 'white'}">
    <el-table-column type="expand">
      <template #default="props">
        <div>
          <p m="t-0 b-2">Pickup Location: {{ props.row.pickup_location_coord }}</p>
          <p m="t-0 b-2">Booking ID: {{ props.row.booking_id }}</p>
          <p m="t-0 b-2">Customer ID: {{ props.row.customer_id }}</p>
          <p m="t-0 b-2">Owner ID: {{ props.row.owner_id }}</p>

        </div>
      </template>
      </el-table-column>
        <!-- <el-table-column prop="booking_id" label="Booking ID" width="130"/>
        <el-table-column prop="customer_id" label="Customer ID" width="130"/> -->
        <el-table-column prop="name" label="Name" width="170"/>
        <!-- <el-table-column prop="owner_id" label="Owner ID" width="130"/> -->
        <el-table-column prop="pickup_date" label="Pickup Date" width="130" class="pick"/>
        <el-table-column prop="return_date" label="Return Date" width="130" class="v"/>
        <el-table-column prop="pickup_location_name" label="Pickup Location" width="200"/>
        <!-- <el-table-column prop="pickup_location_coord" label="Pickup Location" width="170"/> -->
        <el-table-column prop="make" label="Make" width="130"/>
        <el-table-column prop="model" label="Model" width="130"/>
        <el-table-column prop="plate_number" label="Plate Number" width="130"/>
        <el-table-column prop="booking_status" label="Booking Status" width="130">
            <!-- <div :prop.booking_status="1">Active</div>
            <div :prop.booking_status="2">Accepted</div>
            <div>Rejected</div> -->
        </el-table-column>
        <el-table-column prop="cost" label="Amount Paid" width="130"/>
        <!-- <el-t le-column> -->
    </el-table>
</div>
</div>
</template>


<script setup lang="ts">
import axios from "axios";
import { computed, ref } from 'vue';

const bookings = ref([]);

const token = 'Y2w1ajl3bzJ6MDAwMTQzMXE5ZmFxMTIwNQ.4H4qS9wsVrjF8zWjgMlKKI9lK1KHJQYTq1Bi8bPE60CKqoFsjiO6lgsHKh4E';
axios.get('http://167.172.1.174/bookings',
{
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        status: 2,

      }
    })
    .then(function(response) {
      bookings.value = response.data.bookings;
      // console.log(response.data.bookings)
    });
    
    
// function sortBy(prop: string) {
//   bookings.value.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
// };

// const search = ref('')
// const filterBookings = computed(() =>
//   bookings.value.filter(
//     (data) =>
//       !search.value ||
//       data.model.toLowerCase().includes(search.value.toLowerCase())
//   )
// );

</script>

<style scoped>
.nav {
  padding: 15px;
  background-color: #ecf5ff;
}

</style>

