
  <template #default="props">
  <div class="details--form-wrap">
    <el-form ref="formRef" :model="customerDetailsForm" @submit="submitDetails(formRef)" >
      <el-form-item
        prop="name"
        :rules="[
          {
            required: true,
            message: 'Please input full name',
            trigger: 'blur',
          },
        ]"
      >
        <el-input
          v-model="customerDetailsForm.name"
          size="large"
          placeholder="Full Name"
          :required="true"
          class="customers-details-search--input"
        />
      </el-form-item>
      <el-form-item
        prop="email"
        :rules="[
          {
            required: true,
            message: 'Please input email address',
            trigger: 'blur',
          },
          {
            type: 'email',
            message: 'Please input correct email address',
            trigger: ['blur', 'change'],
          },
        ]"
      >
        <el-input
          v-model="customerDetailsForm.email"
          type="email"
          size="large"
          :required="true"
          placeholder="Email Address"
          class="customers-details-search--input"
        />
      </el-form-item>
      <el-form-item
        prop="phone"
        :rules="[
          {
            required: true,
            message: 'Please input phone number',
            trigger: 'blur',
          },
        ]"
      >
        <el-input
          v-model="customerDetailsForm.phone"
          size="large"
          :required="true"
          placeholder="Phone"
          class="customers-details-search--input"
        />
      </el-form-item>

      <el-form-item
        prop="address"
        :rules="[
          {
            required: true,
            message: 'Please input address',
            trigger: 'blur',
          },
        ]"
      >
        <el-input
          v-model="customerDetailsForm.address"
          size="large"
          :required="true"
          placeholder="Address"
          class="customers-details-search--input"
        />
      </el-form-item>

      <el-button @click="submitDetails(formRef)" color="#0d62a4" size="large">
        Submit Details
      </el-button>
    </el-form>
  </div>
</template>
       

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { ElNotification, FormInstance } from "element-plus";
import axios from "axios";

const formRef = ref<FormInstance>();
const customerDetailsForm = reactive<{
  email: string;
  name: string;
  address: string;
  phone: string;
}>({
  email: "",
  name: "",
  address: "",
  phone: "",
});

const submitDetails = (formEl: FormInstance | undefined) => {
  if (!formEl) {
    ElNotification({
      title: "Invalid details",
      type: "error",
    });
    return;
  }
  formEl.validate((valid) => {
    if (valid) {
      axios
        .post(
          `submit/`,
          {
            ...customerDetailsForm,
          },
          {
            headers: {
              Authorization: "Bearer " + "ALDJAK23423JKSLAJAF23423J23SAD3",
            },
          }
        )
        .then(function (response) {
          ElNotification({
            title: "Submit",
            message: response.data.message,
            type: "success",
          });
        })
        .catch(function (error) {
          console.log("error", error);
          ElNotification({
            title: "Network Error",
            message: error,
            type: "error",
          });
        });
    } else {
      console.log("error submit!", valid);
      ElNotification({
            title: "Validation Error",
            type: "error",
          });
      return false;
    }
  });
};
</script>
<style scoped>
button.el-button {
  display: block;
  width: 100%;
}

.el-form-item {
  padding-bottom: 10px;
}
.el-input {
  margin-bottom: 10px;
}
.details--form-wrap {
  width: 50vw;
  margin: auto;
  padding: 30px;
}
</style>
