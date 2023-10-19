export const role = ["admin", "user"];
export const roleOptions = role.map((role: string) => {
  return {
    label: role,
    value: role,
  };
});
export const status = ["pending", "accepted", "rejected"];
export const statusOptions = status.map((role: string) => {
  return {
    label: role,
    value: role,
  };
});

export const location = [
  "Mirpur",
  "Uttara",
  "Gulshan",
  "Banani",
  "Dhanmondi",
  "Mohammadpur",
  "Motijheel",
  "Khilgaon",
  "Shyamoli",
  "Farmgate",
  "Mohakhali",
  "Tejgaon",
  "Rampura",
  "Badda",
  "Malibagh",
  "Jatrabari",
  "Demra",
  "Kadamtali",
  "Keraniganj",
];

export const locationOption = location.map((location: string) => {
  return {
    label: location,
    value: location,
  };
});

export const timeSlots = [
  {
    slot: "09:00 AM - 10:00 AM",
    startTime: "09:00",
    endTime: "10:00",
    status: "active",
  },
  {
    slot: "10:00 AM - 11:00 AM",
    startTime: "10:00",
    endTime: "11:00",
    status: "active",
  },
  {
    slot: "11:00 AM - 12:00 PM",
    startTime: "11:00",
    endTime: "12:00",
    status: "active",
  },
  {
    slot: "12:00 PM - 01:00 PM",
    startTime: "12:00",
    endTime: "13:00",
    status: "active",
  },
  {
    slot: "02:00 PM - 03:00 PM",
    startTime: "13:00",
    endTime: "14:00",
    status: "active",
  },
  {
    slot: "03:00 PM - 04:00 PM",
    startTime: "14:00",
    endTime: "15:00",
    status: "active",
  },
  {
    slot: "04:00 PM - 05:00 PM",
    startTime: "15:00",
    endTime: "16:00",
    status: "active",
  },
  {
    slot: "05:00 PM - 06:00 PM",
    startTime: "16:00",
    endTime: "17:00",
    status: "active",
  },
  {
    slot: "06:00 PM - 07:00 PM",
    startTime: "17:00",
    endTime: "18:00",
    status: "active",
  },
  {
    slot: "07:00 PM - 08:00 PM",
    startTime: "18:00",
    endTime: "19:00",
    status: "active",
  },
];
