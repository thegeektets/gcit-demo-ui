import { ElNotification } from "element-plus";
import axios from "axios";

export default {
  methods: {
    async getUsers(userType) {
      let that = this;
      this.loading = true;
      await axios
        .get("users", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
          params: {
            userType: userType,
          },
        })
        .then(function (response) {
          let _users = response.data.users;
          if (_users) {
            if (userType == 1) {
              that.customers = _users;
            }
            if (userType == 2) {
              that.owners = _users;
            }

            if (userType == 3) {
              that.admins = _users;
            }
            that.loading = false;
          }
        })
        .catch(function (error) {
          console.log("error", error);
          that.loading = false;
        });
    },
  },
};
