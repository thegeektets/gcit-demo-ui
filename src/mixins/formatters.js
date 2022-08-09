import { format, parseISO } from "date-fns";
export default {
  methods: {
    formatDate(date) {
      return format(parseISO(date), "MMM do yyyy, h:mm a");
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
