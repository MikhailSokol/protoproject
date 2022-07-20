export const data1Rating = {
  datasets: [
    {
      data: [80, 120],
      backgroundColor: ["#6ECFBC", "#ECF1F9"],
      hoverBackgroundColor: ["#6ECFBC", "#ECF1F9"],
      borderWidth: 0,
      borderRadius: 5,
    },
  ],
};
export const data2Rating = {
  datasets: [
    {
      data: [10, 40],
      backgroundColor: ["#6ECFBC", "#ECF1F9"],
      hoverBackgroundColor: ["#6ECFBC", "#ECF1F9"],
      borderWidth: 0,
      borderRadius: 2,
    },
  ],
};
export const options1Rating = {
  aspectRatio: 1,
  maintainAspectRatio: false,
  responsive: true,
  rotation: 65 * Math.PI,
  circumference: 100 * Math.PI,
  legend: {
    display: false,
  },
  tooltip: {
    enabled: false,
  },
  cutout: 35,
};
export const options2Rating = {
  layout: {
    padding: {
      bottom: 7,
    },
  },
  maintainAspectRatio: false,
  aspectRatio: 1,
  responsive: true,
  rotation: 65 * Math.PI,
  circumference: 100 * Math.PI,
  legend: {
    display: false,
  },
  tooltip: {
    enabled: false,
  },
  cutout: 14,
};
