<template>
<div class="orders">
  <h3>Search orders by plate_number</h3>
  <el-col :span="8">
  <el-input v-model="search" placeholder="Type to search" style="display;block;margin:1rem auto"/>
  </el-col>
  <el-table :data="filterOrders" style="width: 100%" :scrollable="true" scrollHeight="400px" :header-cell-style="{background: '#409eff'}" :header-row-style="{color: 'white'}">
        <el-table-column type="index"/>
        <!-- <el-table-column prop="order_no" label="Order Number"/> -->
        <el-table-column prop="name" label="Name"/>
        <el-table-column prop="contact_person_phone" label="Phone"/>
        <!-- <el-table-column prop="destination" label="Destination"/> -->
        <el-table-column prop="car_type" label="Car Type"/>
        <el-table-column prop="plate_number" label="No Plate"/>
        <el-table-column prop="id_number" label="ID Number"/>
        <!-- <el-table-column prop="dl_number" label="DL Number"/> -->
        <!-- <el-table-column prop="date_taken" label="Date Taken"/> -->
       <!-- <el-table-column prop="returndate" label="Return_Date"/> -->
       <!-- <el-table-column prop="referal_phone" label="Referal Contact"/> -->
       <el-table-column prop="amount" label="Cash Paid"/>
     <el-table-column fixed="right" label="Action">
       <template #default="scope">
        <el-button  type="primary">
          Delete
        </el-button>
      </template>
     </el-table-column>
  </el-table>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';


const search = ref('')
const filterOrders = computed(() =>
  [...orders].filter(
    (data) =>
      !search.value ||
      data.plate_number.toLowerCase().includes(search.value.toLowerCase())
  )
)

const orders = [
            { name:"hanna", location_name:"kilimali", contact_person_phone:"099987", car_type:"premio", amount:"1200",plate_number:"kdk", id_number:"234567" },
            { name:"hanna", location_name:"kilimali", contact_person_phone:"099987", car_type:"premio", amount:"1200",plate_number:"kdk", id_number:"2234556" },
            { name:"hanna", location_name:"kilimali", contact_person_phone:"099987", car_type:"premio", amount:"1200",plate_number:"kdk 127F", id_number:"2344555" },
            { name:"hanna", location_name:"kilimali", contact_person_phone:"099987", car_type:"premio", amount:"1200",plate_number:"kda", id_number:"234567" },
            { name:"hanna", location_name:"kilimali", contact_person_phone:"099987", car_type:"premio", amount:"1200",plate_number:"kdk", id_number:"987544" },
            { name:"hanna", location_name:"kilimali", contact_person_phone:"099987", car_type:"premio", amount:"1200",plate_number:"kdk 678G", id_number:"234567" },
            { name:"hanna", location_name:"kilimali", contact_person_phone:"099987", car_type:"premio", amount:"1200",plate_number:"kac 098", id_number:"345678" },
            { name:"hanna", location_name:"kilimali", contact_person_phone:"099987", car_type:"premio", amount:"1200",plate_number:"kdk 234G", id_number:"234567" },
            { name:"hanna", location_name:"kilimali", contact_person_phone:"099987", car_type:"premio", amount:"1200",plate_number:"kdk 235D", id_number:"123456" },
            { name:"hanna", location_name:"kilimali", contact_person_phone:"099987", car_type:"premio", amount:"1200",plate_number:"kdk 567J", id_number:"234567" },
            { name:"hanna", location_name:"kilimali", contact_person_phone:"099987", car_type:"premio", amount:"1200",plate_number:"kcf 234D", id_number:"2234556" },
            { name:"hanna", location_name:"kilimali", contact_person_phone:"099987", car_type:"premio", amount:"1200",plate_number:"kdk 345H", id_number:"2344555" },
            { name:"hanna", location_name:"kilimali", contact_person_phone:"099987", car_type:"premio", amount:"1200",plate_number:"kdk", id_number:"234567" },
            { name:"hanna", location_name:"kilimali", contact_person_phone:"099987", car_type:"premio", amount:"1200",plate_number:"kbk", id_number:"987544" },
            { name:"hanna", location_name:"kilimali", contact_person_phone:"099987", car_type:"premio", amount:"1200",plate_number:"kdd 876H", id_number:"234567" },
            { name:"hanna", location_name:"kilimali", contact_person_phone:"099987", car_type:"premio", amount:"1200",plate_number:"kdk", id_number:"345678" },
            { name:"hanna", location_name:"kilimali", contact_person_phone:"099987", car_type:"premio", amount:"1200",plate_number:"kdk 865S", id_number:"234567" },
            { name:"hanna", location_name:"kilimali", contact_person_phone:"099987", car_type:"premio", amount:"1200",plate_number:"kdk", id_number:"123456" },
]

// const deleteRow = (index: number) => {
//   orders.values.splice(index, 1)
// }


</script>
<style scoped>
.el-table {
  border: 1px solid #c0c4cc;
}
.orders {
  margin:70px 5px 5px 5px;
}
</style>