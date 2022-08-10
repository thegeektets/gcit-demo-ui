import { format, parseISO } from "date-fns";
import moment from 'moment';

export default {
  methods: {
    formatDate(date) {
      return moment(date).format('MMM Do YYYY, h:mm A')
    },

    formatCurrency(amount) {
      let formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "KES",
      });

      return formatter.format(amount);
    },

    formatJSON(json) {
        return JSON.parse(json);
    }
  },
};
