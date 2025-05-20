import { defineStore } from "pinia";
import { config } from "../config";

export const initPropertyStore = defineStore("propertyStore", {
    state: () => {
        return {
            test: "test",

            address: config.address || "error",
            image: config.image || "error",
            
            info: config.info || "error",
            maintenance: config.maintenance || "error",
            calendar: config.calendar || "error",
            inspections: config.inspections || "error",
        }
    },

    getters: {
        getTest: (state) => (state.test),
        getAddress: (state) => (state.address),
        getImage: (state) => (state.image),
        getInfo: (state) => (state.info),
        getMaintenance: (state) => (state.maintenance),
        getCalendar: (state) => (state.calendar),
        getInspections: (state) => (state.inspections),
    },

    actions: {
        
    }
});
