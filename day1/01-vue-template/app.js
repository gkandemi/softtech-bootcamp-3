//! new Vue({}) Vue2 Syntax
//! Vue Instance
Vue.createApp({
  data() {
    return {
      title: "Bu benim Başlığım VUE",
      details: "Bu benim açıklamam VUE",
      comments: "Bu bir comment bloğu için haızrlanmşsdflkhdlkdfhsdkflhfls",
      link: {
        text: "Tıkla2",
        target: "_blank",
        url: "https://www.google.com",
      },
      imageURL:
        "https://kablosuzkedi.com/wp-content/uploads/2016/11/Ekran-Resmi-2016-11-12-01.39.36.png",
      htmlOutput: `
        <h3>Bu bir HTML İçeriği</h3>
        <p>Bu da açıklaması</p>
      `,
    };
  },
}).mount("#app");
