<template>
<div>
  <el-container>
    <el-col 
        :span="3"  
        :xs="12"
        :sm="6"
        :md="4"
        :lg="4">
      <form @submit.prevent="getData">
        <el-input v-model="search" placeholder="Type to search" style="display;block;margin:1rem auto"/>
        <input type="submit" class="btn btn-primary" style="display;block;margin:1rem auto">
      </form>
    </el-col>
    <el-row>

        <!-- {{vehicles}} -->

      <el-col
        v-for="(vehicle) in vehicles"
        :key="vehicle"
        :span="6"
        :xs="8"
        :sm="6"
        :md="4"
        :lg="4"
      >
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
          <div style="padding: 0px">
            <img :src="getPhoto(vehicle.photos)" class="image white--text align-end" />
          </div>

          <div class="content" style="padding: 14px">
            <div class="title">{{ vehicle.make }} {{ vehicle.model }}</div>
              <div class="cost">{{ vehicle.currency }} {{ vehicle.cost }}</div>
              <div class="plate_number">
                {{ vehicle.plate_number }}
              </div>

              <div class="location">
                {{ vehicle.location_name }}
              </div>
              <div class="days">
                {{ vehicle.days }}
              </div>
              <div class="seats">{{ vehicle.seats_number }} seats</div>
            </div>
        </el-card>
      </el-col>
    </el-row>
  </el-container>
  </div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  data() {
    return {
        vehicles:[],
        };
  },

  methods: {
    getVehicles() {
      axios.post("http://167.172.1.174/search").then((response) => {
        this.vehicles = response.data.vehicles;
        console.log(response);
        console.log("response.data.Vehicles;", response.data.vehicles);
      });
    },
    getPhoto(photoArray){
        let photoArrayObject = JSON.parse(photoArray);
        // console.log(photoArrayObject);
        return photoArrayObject[0];

    }
  },
  async mounted() {
    await this.getVehicles();
  },
};
</script>

<style scoped>
.image { 
  width: 100%;
  height: 130px;
}
.el-container {
  margin: 40px;
}
.el-card {
  margin: 10px;
  padding: opx;
  max-width: 150px;
  height: 250px;
  border-radius: 6px;
}
.seats,
.location,
.days,
.plate_number {
  font-size: 10px;
  line-height: 1.5;
  font-weight: 500;
  color: black;
}
.cost {
  color: #ff5252;
}
</style>