<template>
<div class="main">
    <div class="container">
        <div class="carousel">
            <div class="cerved-up"></div>
            <div class="inner" ref="inner" :style="innerStyles">
                <div class="card" v-for="card in cards" :key="card" @click="getSrc(card)">
                    <img :src="card" alt="img" >
                </div>
            </div>
            <div class="cerved-down"></div>
            <button class="btn-prev" @click="prev">            </button>
            <button class="btn-next" @click="next">
            </button>
        </div>
    </div>
    <div :class="list">
        <ol>
            <li v-for="img in selectedImg" :key="img">
                {{img}}
            </li>
        </ol>
    </div>
</div>
</template>

<script>
export default {
name:"CarouseL",
data () {
    return {
    cards: [
        "https://picsum.photos/id/237/640/370",
        "https://picsum.photos/id/238/640/370",
        "https://picsum.photos/id/239/640/370",
        "https://picsum.photos/id/231/640/370",
        "https://picsum.photos/id/232/640/370",
        "https://picsum.photos/id/233/640/370",
        "https://picsum.photos/id/234/640/370",
        "https://picsum.photos/id/235/640/370",
        "https://picsum.photos/id/236/640/370",
    ],
    innerStyles: {},
    selectedImg: [],
    step: '',
    transitioning: false,
    list: '',
    }
},
mounted () {
    this.setStep()
    this.resetTranslate()
},
methods: {
    setStep () {
        const innerWidth = this.$refs.inner.scrollWidth
        const totalCards = this.cards.length
        this.step = `${innerWidth / totalCards}px`
    },
    next () {
        if (this.transitioning) return
        this.transitioning = true
        this.moveLeft()
        this.afterTransition(() => {
            const card = this.cards.shift()
            this.cards.push(card)
            this.resetTranslate()
            this.transitioning = false
        })
    },
    prev () {
        if (this.transitioning) return
        this.transitioning = true
        this.moveRight()
        this.afterTransition(() => {
            const card = this.cards.pop()
            this.cards.unshift(card)
            this.resetTranslate()
            this.transitioning = false
        })
    },
    moveLeft () {
        this.innerStyles = {
            transform: `translateX(-${this.step})
                        translateX(-${this.step})`
        }
    },
    moveRight () {
        this.innerStyles = {
            transform: `translateX(${this.step})
                        translateX(-${this.step})`
        }
    },
    afterTransition (callback) {
        const listener = () => {
            callback()
            this.$refs.inner.removeEventListener('transitionend', listener)
        }
        this.$refs.inner.addEventListener('transitionend', listener)
    },
    resetTranslate () {
        this.innerStyles = {
            transition: 'none',
            transform: `translateX(-${this.step})`
        }
    },
    getSrc(card){
        this.selectedImg.push(card)
        this.list = 'list'
    }
}
}
</script>

<style>
.main{
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    padding-bottom: 50px;
}
.container{
    position: relative;
}
.carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 150px;
    max-width: 1920px;
    height: 400px;
}
.inner {
    transition: transform 0.5s;
    white-space: nowrap;
}
.card {
    margin: 0 28px;
    display: inline-flex;
    color: white;
    align-items: center;
    justify-content: center;
}
img {
    width: 640px;
    height: 370px;
}
ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
.list{
    padding: 40px 60px;
    top: 555px;
    background-color: #2e2e2e;
    border-radius: 10px;
    transition: 0.5s;
    z-index: 16;
}
.btn-prev {
    position: absolute;
    width: 31%;
    height: 350px;
    top: 170px;
    left: 0;
    background-color: inherit;
    border: none;
    z-index: 5;
}
.btn-next {
    position: absolute;
    width: 31%;
    height: 350px;
    top: 170px;
    right: 0;
    background-color: inherit;
    border: none;
    z-index: 5;
}
@media (max-width: 900px) {
    .card{
        margin: 0 3px;
    }
    img{
        width: 320px;
        height: 160px;
    }
    .btn-prev{
        width: 42%;
        height: 160px;
        top: 270px;
    }
    .btn-next{
        width: 42%;
        height: 160px;
        top: 270px;
    }
}
@media (max-width: 420px) {
    .list{
        padding: 20px 30px;
    }
    .btn-prev{
        width: 42%;
    }
    .btn-next{
        width: 42%;
    }
}
@media (max-width: 390px) {
    .btn-prev{
        width: 44%;
    }
    .btn-next{
        width: 44%;
    }
}
.cerved-up{
  position: absolute;
  height: 100px;
  width: 2000px;
  margin: auto;
  top: 120px;
  background-color: #111;
  border-radius: 100%;
  z-index: 5;
}
.cerved-down{
  position: absolute;
  height: 100px;
  width: 2000px;
  margin: auto;
  bottom: -40px;
  background-color: #111;
  border-radius: 100%;
  z-index: 5;
}
</style>