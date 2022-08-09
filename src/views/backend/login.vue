<template>
  <div>
    <div class="switch-language">
      <!-- <el-dropdown size="large" :hide-timeout="50" placement="bottom-end" :hide-on-click="true">
                <Icon name="fa fa-globe" color="var(--color-secondary)" size="28" />
                <template #dropdown>
                    <el-dropdown-menu class="chang-lang">
                        <el-dropdown-item v-for="item in config.lang.langArray" :key="item.name"
                            @click="editDefaultLang(item.name)">
                            {{ item.value }}
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown> -->
    </div>
    <div @contextmenu.stop="" id="bubble" class="bubble">
      <canvas id="bubble-canvas" class="bubble-canvas"></canvas>
    </div>
    <div class="login">
      <div class="login-box">
        <div class="head">
          <img src="~assets/login-header.png" alt="" />
        </div>
        <div class="form">
          <img class="profile-avatar" src="~assets/avatar.png" alt="" />
          <div class="content">
            <el-form
              @keyup.enter="onSubmit(formRef)"
              ref="formRef"
              :rules="rules"
              size="large"
              :model="form"
            >
              <el-form-item prop="email">
                <el-input
                  ref="emailRef"
                  type="text"
                  clearable
                  v-model="form.email"
                  :placeholder="t('Please enter an email')"
                >
                  <template #prefix>
                    <Icon
                      name="fa fa-envelope"
                      class="form-item-icon"
                      size="16"
                      color="var(--el-input-icon-color)"
                    />
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  ref="passwordRef"
                  v-model="form.password"
                  type="password"
                  :placeholder="t('adminLogin.Please input a password')"
                  show-password
                >
                  <template #prefix>
                    <Icon
                      name="fa fa-unlock-alt"
                      class="form-item-icon"
                      size="16"
                      color="var(--el-input-icon-color)"
                    />
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  :loading="form.loading"
                  class="submit-button"
                  round
                  type="primary"
                  size="large"
                  @click="onSubmit(formRef)"
                >
                  {{ t("adminLogin.Sign in") }}
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, reactive, ref } from "vue";
import * as pageBubble from "/@/utils/pageBubble";
import type { ElForm, ElInput } from "element-plus";
import { useI18n } from "vue-i18n";
import { editDefaultLang } from "/@/lang/index";
import { useConfig } from "/@/stores/config";
import { useAdminInfo } from "/@/stores/adminInfo";
import {
  validatorPassword,
  validatorEmail,
  validatorAccount,
} from "/@/utils/validate";
import axios from "axios";
import { useRouter } from "vue-router";
import adminBookingsVue from "../adminBookings.vue";
var timer: NodeJS.Timer;

const config = useConfig();
const adminInfo = useAdminInfo();
const router = useRouter();

const formRef = ref<InstanceType<typeof ElForm>>();
const emailRef = ref<InstanceType<typeof ElInput>>();
const passwordRef = ref<InstanceType<typeof ElInput>>();

const form = reactive({
  email: "",
  password: "",
});

const { t } = useI18n();

const rules = reactive({
  email: [
    {
      required: true,
      message: t("Please enter an email"),
      trigger: "blur",
    },
    {
      validator: validatorEmail,
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: t("adminLogin.Please input a password"),
      trigger: "blur",
    },
    {
      validator: validatorPassword,
      trigger: "blur",
    },
  ],
});

const focusInput = () => {
  if (form.email === "") {
    emailRef.value!.focus();
  } else if (form.password === "") {
    passwordRef.value!.focus();
  }
};

onMounted(() => {
  timer = setTimeout(() => {
    pageBubble.init();
  }, 1000);
});

onBeforeUnmount(() => {
  clearTimeout(timer);
  pageBubble.removeListeners();
});

const onSubmit = (formEl: InstanceType<typeof ElForm> | undefined) => {
  try {
    if (!formEl) return;
    formEl.validate((valid) => {
      if (valid) {
        // router.push({ name: 'adminBookings' });
      } else {
        return false;
      }
    });
  } catch (err) {
    console.log(err);
  }
  axios
    .post("auth/password-login", form)
    .then((res) => {
      // alert('Login successful');
      router.push("/admin/bookings");
      console.log(res);
    })
    .catch((err) => {
      // alert('Please check email/password');
      console.log(err);
    });
};
</script>

<style scoped lang="scss">
.switch-language {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1;
}

.bubble {
  overflow: hidden;
  background: url(/@/assets/bg.jpg) repeat;
}

.form-item-icon {
  height: auto;
}

.login {
  position: absolute;
  top: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: flex-start;
  justify-content: center;

  .login-box {
    overflow: hidden;
    width: 430px;
    padding: 0;
    background: #fff;
    margin-top: 130px;
  }

  .head {
    background: #ccccff;

    img {
      display: block;
      width: 430px;
      margin: 0 auto;
      user-select: none;
    }
  }

  .form {
    position: relative;

    .profile-avatar {
      display: block;
      position: absolute;
      height: 100px;
      width: 100px;
      border-radius: 50%;
      border: 4px solid #fff;
      top: -50px;
      right: 175px;
      z-index: 2;
      user-select: none;
    }

    .content {
      padding: 100px 40px 40px 40px;
    }

    .submit-button {
      width: 100%;
      letter-spacing: 2px;
      font-weight: 300;
      margin-top: 15px;
    }
  }
}

@media screen and (max-width: 720px) {
  .login {
    display: flex;
    align-items: center;
    justify-content: center;

    .login-box {
      width: 340px;
      margin-top: 0;
    }
  }
}

.chang-lang :deep(.el-dropdown-menu__item) {
  justify-content: center;
}

.content :deep(.el-input__prefix) {
  display: flex;
  align-items: center;
}

.captcha-img {
  width: 100%;
}
</style>