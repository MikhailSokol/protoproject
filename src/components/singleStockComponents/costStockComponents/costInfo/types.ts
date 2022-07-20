export const dataCost1 = {
  datasets: [
    {
      data: [70, 70,70],
      backgroundColor: ["#6ECFBC", "#FFC466","#F8623F"],
      hoverBackgroundColor: ["#6ECFBC", "#FFC466","#F8623F"],
      borderWidth: 0,
      borderRadius: 3,
    },
  ],
};
export const dataCost2 = {
  datasets: [
    {
      data: [70, 15,115],
      backgroundColor: ["#ECF1F9", "#6ECFBC","#ECF1F9"],
      hoverBackgroundColor: ["#ECF1F9", "#6ECFBC","#ECF1F9"],
      borderRadius: 2,
      borderWidth: 0,
    },
  ],
};
export const optionsCost1 = {
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
  cutout: 30,

   offset:10
};
export const optionsCost2 = {
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
  cutout: 16,
};
