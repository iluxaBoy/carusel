<template>
<div class="main">
    <div class="container">
        <div :class="center" class="carousel">
            <div class="inner" ref="inner" :style="innerStyles">
                <div class="card" v-for="card in cards" :key="card" @click="getSrc(card)">
                    <img :src="card" alt="img" >
                </div>
            </div>
            <button :class="btn" class="btn-prev" @click="prev"></button>
            <button :class="btn" class="btn-next" @click="next"></button>
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
    remove: 0,
    center: '',
    btn: '',
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
        // if (this.card.length === 3){
        //     return
        // }
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
        // this.remove = this.cards.indexOf(card);
        // this.cards.splice(this.remove,this.remove -= 1)
        // if (this.cards.length === 6) {
        //     this.center = "m-center"
        // }
        // else if (this.cards.length <= 3) {
        //     this.center = 'center'
        //     this.btn = 'none'
        // }

        // if (this.remove === 0) {
        //     this.cards.pop();
        // }
        // else if (this.remove === -1) {
        //     this.cards.shift()
        // }
        // console.log(this.remove);
        // console.log(this.cards.length);
        // console.log(this.center);
        this.list = 'list'
    }
}
}
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.container {
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
    width: 2100px;
    transition: transform 0.5s;
    white-space: nowrap;
}
.center{
    margin-left: 1400px;
}
.left{
    margin-left: 1050px;
}
.none{
    display: none;
}
.card {
    margin: 0 30px;
    display: inline-flex;
    color: white;
    align-items: center;
    justify-content: center;
}
img {
    width: 640px;
    height: 370px;
}
ol{
    padding: 0 0 0 10px;
}
.list{
    position: absolute;
    padding: 40px 60px;
    top: 550px;
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
    .carousel{
        margin-top: 35px;
        margin-left: 1200px;
    }
    .center{
        margin-left: 600px;
    }
    .m-center{
        margin-left: 300px;
    }
    .one-m-center{
        margin-left: 0;
    }
    .card{
        margin: 0 3px;
    }
    img{
        width: 294px;
        height: 160px;
    }
    .list{
        top: 350px;
    }
    .btn-prev{
        width: 42%;
        height: 160px;
        top: 152px;
    }
    .btn-next{
        width: 42%;
        height: 160px;
        top: 152px;
    }
}
@media (max-width: 750px) {
    .btn-prev{
        width: 45%;
    }
    .btn-next{
        width: 45%;
    }
}
@media (max-width: 420px) {
    .list{
        padding: 20px 30px;
    }
    .btn-prev{
        width: 47%;
    }
    .btn-next{
        width: 47%;
    }
}
@media (max-width: 300px) {
    .btn-prev{
        width: 48%;
    }
    .btn-next{
        width: 48%;
    }
}
</style>