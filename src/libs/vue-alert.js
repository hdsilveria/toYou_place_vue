import Vue from "vue"
import VueSimpleAlert from "vue-simple-alert"

const opt = {
  confirmButtonText: "Sim",
  cancelButtonText: "Não",
  title: "To You Place"
}

Vue.use(VueSimpleAlert, opt)