import { ElNotification } from "element-plus";
import axios from "axios";

export default{
methods: {
    async getBookings(bookingStatus) {
      let that = this;
      this.loading = true;
      await axios
        .get("bookings", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
          params: {
            status: bookingStatus,
          },
        })
        .then(function (response) {
          let _bookings = response.data.bookings;
          if (_bookings) {
            that.bookings = _bookings;
            that.loading = false;
          }
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
            const index = that.bookings.findIndex((object) => {
              return object.booking_id === row.booking_id;
            });
            console.log("index", index);
            that.ownerDetails[index] = _ownerDetails;
          }
        });
    },
    async bookingAction(action, bookingId) {
      console.log("bookingId", bookingId);
      console.log("action", action);
      let that = this;
      this.loading = true;
      let userId = this.userId;
      let payload = {
        booking_status: action,
        user_id: userId,
      };

      axios
        .put(
          `booking/${bookingId}`,
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
            title: "Update booking",
            message: response.message,
            type: _type,
          });

          that.loading = false;
          that.getBookings(this.bookingStatus);
        })
        .catch(function (error) {
          console.log("error", error);
          let message =
            "message" in error.response.data
              ? error.response.data.message
              : "An error occurred, could not process request";
          ElNotification({
            title: "Update booking",
            message,
            type: "error",
          });

          that.loading = false;
        });
    },
  },
}