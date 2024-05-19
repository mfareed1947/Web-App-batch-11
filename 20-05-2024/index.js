const stdName = "umer";

const studentObj = {
  id: "345-23",
  stdName: "wasi",
  course: "web and App",
  location: "karachi",
  getName: function (param) {
    console.log(`Hi, I am ${param} ${this.stdName} ${this.course}`);
  },
};
console.log(studentObj.getName("muhammad"));

const plans = [
  {
    plan: "basic",
    monthly: 367,
    diskSpace: "100GB",
    dataTransfer: "500GB",
    sitePages: 10,
    discount: [45, 56, 47564],
    feature: true,
  },
  {
    plan: "professional",
    monthly: 234,
    diskSpace: "100GB",
    dataTransfer: "500GB",
    sitePages: 10,
    data: {
      age: 23,
      name: "Ahmed",
    },
  },
  {
    plan: "Ultimate",
    monthly: 429,
    diskSpace: "100GB",
    dataTransfer: "500GB",
    sitePages: 10,
  },
];

console.log(plans.filter((curr) => curr.monthly > 300));
console.log(plans[0].monthly);
console.log(plans[0].discount);
