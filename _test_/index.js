const { EventBus, EventStore } = require("sute-store")

const eventStores = new EventStore({
  state: {
    name: "cxw",
    age: 25,
    habby: () => {
      console.log("123");
    },
  },
  actions: {
    setNameFn: (ctx) => {
      setTimeout(() => {
        ctx.name = "demo";
      }, 2000);
    },
  },
});

const foo = (value) => {
  console.log("value", value);
};

eventStores.onState("name", foo); // value cxw
eventStores.setState("name", 123); // value 123