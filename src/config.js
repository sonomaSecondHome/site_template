export const config = {
    /*
        header information
        display address and property image
    */
    address: import.meta.env.VITE_PROPERTY_ADDRESS,
    image: import.meta.env.VITE_PROPERTY_IMAGE,
    
    /*
        main content - google app link for each

        information - sheet
        maintenance requests - sheet
        calendar
        inspections - forms
    */
    info: import.meta.env.VITE_PROPERTY_INFORMATION,
    maintenance: import.meta.env.VITE_PROPERTY_MAINTENANCE,
    calendar: import.meta.env.VITE_PROPERTY_CALENDAR,
    inspections: import.meta.env.VITE_PROPERTY_INSPECTIONS, 
    
};
