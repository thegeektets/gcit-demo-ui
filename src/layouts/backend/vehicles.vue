<template>
  <div>
    <el-container style="height: 300">
      <el-col :span="3" :xs="8" :sm="6" :md="4" :lg="4">
        <form >
          <el-input placeholder="Type to search" style="display;block;margin:1rem auto" />
          <input type="submit" class="btn btn-primary" style="display;block;margin:1rem auto">
        </form>
      </el-col>
      <el-row>

        <!-- {{vehicles}} -->

        <el-col v-for="(vehicle) in vehicles" :key="vehicle" :span="6" :xs="12" :sm="8" :md="4" :lg="4">
          <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <div style="padding: 0px">
              <img :src="getPhoto(vehicle['photos'])" class="image white--text align-end" />
            </div>

            <div class="content" style="padding: 14px">
              <div class="title">{{ vehicle['make'] }} {{ vehicle['model'] }}</div>
              <div class="cost">
                <Icon name="fa fa-money" size="13" />
                {{ vehicle['currency'] }} {{ vehicle['cost'] }}
                </div>
              <div class="plate_number">
                <Icon name="fa fa-dot-circle-o" size="13" />
                {{ vehicle['plate_number'] }}
              </div>
              <div class="location">
                <Icon name="fa fa-map-marker" size="13" />
                {{ vehicle['location_name'] }}
              </div>
              <!-- <div class="days">
                <Icon name="fa fa-calendar" size="13" />
                {{ vehicle.days }}
              </div> -->
              <div class="seats">
                <Icon name="fa fa-person-seat" size="13" />
                {{ vehicle['seats_number'] }} seats
                </div>
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
      vehicles: [],
    };
  },

  methods: {
    getVehicles() {
      axios.post("search").then((response) => {
        this.vehicles = response.data.vehicles;
        console.log(response.data.vehicles);
      });
    },
    getPhoto(photoArray: string) {
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

<script lang="ts" setup>

</script>

<style scoped>
.image {
  width: 150px;
  height: 130px;
  /* background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
}

.el-container {
  margin: 90px 30px 30px 30px;
}

.el-card {
  margin: 10px;
  max-width: 150px;
  height: 270px;
  box-shadow: 0 5px 3px grey;
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