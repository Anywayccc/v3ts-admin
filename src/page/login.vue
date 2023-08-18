<!--
 * new page-login.vue
 * @author: chenxiangyu
 * @since: 2023-07-13
 * login.vue
-->
<template>
  <div class="login_container">
    <div class="login_form">
      <div style="color: white; font-size: 40px; padding: 10px 0 0 10px">
        hello
      </div>
      <div style="color: white; font-size: 20px; padding: 10px">
        欢迎来到硅谷甄选
      </div>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        label-width="50"
        status-icon
        :rules="rules"
        class="demo-ruleForm"
      >
        <el-form-item prop="checkPass">
          <el-input
            v-model="ruleForm.username"
            autocomplete="off"
            :prefix-icon="User"
          />
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            v-model="ruleForm.password"
            type="password"
            autocomplete="off"
            :prefix-icon="Lock"
          />
        </el-form-item>

        <el-form-item>
          <el-button
            class="submitbtn"
            type="primary"
            @click="login(ruleFormRef)"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { ElNotification } from "element-plus";
import type { FormInstance, FormRules } from "element-plus";
import { User, Lock } from "@element-plus/icons-vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "@/store/modules/use";

const store = useStore();
// form 表单
const ruleForm = reactive({
  username: "admin",
  password: "123456",
});

// ref
const ruleFormRef = ref<FormInstance>();
let $router = useRouter();
// 密码校验
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("密码不能为空"));
  } else {
    callback();
  }
};

const rules = reactive<FormRules<typeof ruleForm>>({
  password: [{ validator: validatePass, trigger: "blur" }],
});
let route = useRoute();
// 登录
const login = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      try {
        await store.getToken(ruleForm);
        let redirect: any = route.query.redirect;
        // console.log("333333333!", route.query);
        $router.push({ path: redirect || "/" });
        // 获取用户信息
        store.getUserInfo();
        let hours = new Date().getHours();
        ElNotification({
          type: "Success",
          message: "欢迎回来",
          title: `Hi,${
            hours <= 8
              ? "早上好"
              : hours <= 10
              ? "上午好"
              : hours <= 12
              ? "中午好"
              : hours <= 19
              ? "下午好"
              : "晚上好"
          }`,
          duration: 1000,
        });
      } catch (error) {
        console.log("登录失败!", error);
        ElNotification({
          title: "Warning",
          message: error,
          type: "warning",
          duration: 1000,
        });
      }

      // console.log(store.getToken(ruleForm));
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/background.jpg") no-repeat;
  background-size: cover;
  .login_form {
    position: relative;
    width: 35%;
    left: 60vw;
    top: 40vh;
    background: url("@/assets/images/login_form.png") no-repeat;
    background-size: cover;
  }
  .demo-ruleForm {
    width: 80%;
    padding: 10px 0;
    .submitbtn {
      width: 100%;
    }
  }
}
</style>
