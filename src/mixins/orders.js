import { ElNotification } from "element-plus";
import axios from "axios";

export default {
  methods: {
    async getOrders(orderStatus) {
      let that = this;
      this.loading = true;
      await axios
        .get("orders", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
          params: {
            orderStatus: orderStatus,
          },
        })
        .then(function (response) {
          let _orders = response.data.orders;
          if (_orders) {
            that.orders = _orders;
            that.loading = false;
          }
        })
        .catch(function (error) {
          console.log("error", error);
          that.loading = false;
        });
    },
    rowExpanded(row) {
      let ownerId = row.owner_id;
      console.log("ownerId", ownerId);
      this.getOwnerDetails(ownerId, row);
    },
    async getOwnerDetails(ownerId, row) {
      let that = this;
      let _ownerDetails = {};
      await axios
        .get(`user/${ownerId}`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
          params: {
            id: ownerId,
          },
        })
        .then(function (response) {
          let _user = response.data.user;
          if (_user) {
            _ownerDetails = _user;
            console.log("row", row);
            const index = that.orders.findIndex((object) => {
              return object.order_id === row.order_id;
            });
            console.log("index", index);
            that.ownerDetails[index] = _ownerDetails;
          }
        });
    },
    async orderAction(action, orderId) {
      console.log("orderId", orderId);
      console.log("action", action);
      let that = this;
      this.loading = true;
      let userId = this.userId;
      let payload = {
        order_status: action,
        user_id: userId,
      };

      axios
        .put(
          `order/${orderId}`,
          {
            ...payload,
          },
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        )
        .then(function (response) {
          let _type = action == 2 ? "success" : "warning";
          ElNotification({
            title: "Update order",
            message: response.message,
            type: _type,
          });

          that.loading = false;
          that.getOrders(this.orderStatus);
        })
        .catch(function (error) {
          console.log("error", error);
          let message =
            "message" in error.response.data
              ? error.response.data.message
              : "An error occurred, could not process request";
          ElNotification({
            title: "Update order",
            message,
            type: "error",
          });

          that.loading = false;
        });
    },
  },
};
