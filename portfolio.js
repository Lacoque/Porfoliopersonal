Vue.config.devtools = true;

Vue.component('card', {
  template: `
    <div class="card-wrap"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="card">
      <div class="card"
        :style="cardStyle">
        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>`,
  mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },
props: ['dataImage','url'],
  data: () => ({
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: null
  }),
  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle() {
      const rX = this.mousePX * 30;
      const rY = this.mousePY * -30;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
      };
    },
    cardBgTransform() {
      const tX = this.mousePX * -40;
      const tY = this.mousePY * -40;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`
      }
    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage})`
      }
    }
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0;
        this.mouseY = 0;
      }, 1000);
    }
  }
});

const app = new Vue({
  el: '#app',
  data: {
    cards: [
      {
        title: "A.C.E.E.",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        image: "img/acee.png",
        url: "https://acee.com.ar/"
      },
      {
        title: "Doble A",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        image: "img/doblea.png",
        url: "https://estudiodoblea.com.ar/"
      },
      {
        title: "Contenidx",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        image: "img/contenidx.png",
        url: "https://contenidx.com.ar/"
      },
      {
        title: "Tata Pirirí",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        image: "img/tatapiriri.png",
        url: "https://tatapiriri.com.ar/"
      },
      {
        title: "Shams",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        image: "img/shams.png",
        url: "https://shams.ar/"
      },
      { 
        title: "ITA",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: "img/itaconsultora.png",
      url: "https://itaconsultora.com.ar/"
      },
      {
      title: "Secret Selves",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        image: "img/secretselves.png",
        url: "https://secretselves.store/"
      },
      {
        title: "Punto Sano",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        image: "img/puntosano..png",
        url: null
      },
     
    ]
  }
});
