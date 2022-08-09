<template>
  <div class="owners">

    <el-col :span="8">
      <el-input
        v-model="search"
        placeholder="Type to search"
        style="display;block;margin:1rem auto"
      />
    </el-col>
    <!-- <h3>Delete Owners by Rows</h3> -->
    <el-table :data="owners" style="width: 100%" :header-cell-style="{background: '#409eff'}" :header-row-style="{color: 'white'}">
      <el-table-column type="expand">
      <template #default>
        <div>

        </div>
      </template>
      </el-table-column>
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="contact_person_phone" label="Phone" />
      <el-table-column prop="location_name" label="Location" />
      <el-table-column prop="car_type" label="Car Type" />
      <el-table-column prop="amount" label="Account" />
      <el-table-column prop="plate_number" label="No Plate" />
      <el-table-column prop="id_number" label="ID Number" />
      <el-table-column fixed="right" label="Actions">
        <template #default="scope">
          <el-button
            type="primary"
            size="small"
            @click.prevent="deleteRow(scope.$index)"
          >
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

const owners = ref([
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "Toyota Premio",
    amount: "1200",
    plate_number: "KDK 127C",
    id_number: "234567",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kdd",
    id_number: "2234556",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kdk",
    id_number: "2344555",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kda",
    id_number: "234567",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kac",
    id_number: "987544",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kck",
    id_number: "234567",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kdk",
    id_number: "345678",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kbk",
    id_number: "234567",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kbb",
    id_number: "123456",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kdc",
    id_number: "234567",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kdk",
    id_number: "2234556",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "ked",
    id_number: "2344555",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kdk",
    id_number: "234567",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kab",
    id_number: "987544",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kdk",
    id_number: "234567",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kdd",
    id_number: "345678",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kdk",
    id_number: "234567",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kaz",
    id_number: "123456",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kdk",
    id_number: "234567",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kdk",
    id_number: "234567",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kdk",
    id_number: "234567",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kdd",
    id_number: "2234556",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kdk",
    id_number: "2344555",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kda",
    id_number: "234567",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kac",
    id_number: "987544",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kck",
    id_number: "234567",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kdk",
    id_number: "345678",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kbk",
    id_number: "234567",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kbb",
    id_number: "123456",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kdc",
    id_number: "234567",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kdk",
    id_number: "2234556",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "ked",
    id_number: "2344555",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kdk",
    id_number: "234567",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kab",
    id_number: "987544",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kdk",
    id_number: "234567",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kdd",
    id_number: "345678",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kdk",
    id_number: "234567",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kaz",
    id_number: "123456",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kdk",
    id_number: "234567",
  },
  {
    name: "hanna",
    location_name: "kilimali",
    contact_person_phone: "099987",
    car_type: "premio",
    amount: "1200",
    plate_number: "kdk",
    id_number: "234567",
  },
]);

const deleteRow = (index: number) => {
  owners.value.splice(index, 1);
  // console.log('hey')
};

const search = ref("");
const filterOwners = computed(() =>
  [...[owners]].filter(
    (data) =>
      !search.value ||
      search.plate_number.toLowerCase().includes(search.value.toLowerCase())
  )
);
</script>
 
<style scoped>
.el-table {
  border: 1px solid #c0c4cc;
}
.owners {
  margin:60px 5px 5px 5px;
}
</style>
