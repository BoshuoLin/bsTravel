const vm = Vue.createApp({
    data() {
        return {
            location: '',
            people: '',
            money: '',
            Name: '王大明',
            progress: [83, 70, 63, 75, 67, 83],
            person: [0, 0, 0, 0, 0, 0],
            isPc: window.matchMedia('(min-width:992px)'),
            scheduleline: '',
            system: '請先登入',
            login: false
        }
    },
    methods: {
        bartime(index) {
            if (this.person[index] < this.progress[index]) {
                this.person[index]++
                const chart = document.getElementById('progress' + (index + 1))
                if (index < 3) {
                    chart.style.background = 'radial-gradient(closest-side, #f1f1f1 79%, transparent 80% 100%),conic-gradient(#1AA1A1 ' + this.person[index] + '%, #CCCCCC 0)'
                } else {
                    chart.style.background = 'radial-gradient(closest-side, #f1f1f1 79%, transparent 80% 100%),conic-gradient(#EE894E ' + this.person[index] + '%, #CCCCCC 0)'
                }
            } else {
                clearInterval(index);
            }
        },
        gsapAnime() {
            ScrollTrigger.create({
                trigger: '#Scrolling',
                start: 'center center ',
                end: '+=1200',
                // markers: true,
                pin: true,
                scrub: true, // 使用scrub參數使動畫更加滑
                animation: gsap.timeline()
                    .to('.location-bg', { top: '0rem', opacity: 1 })
                    .to('.location-land', { top: '0rem', opacity: 1 })
            });
        },
        onResize() {
            if (this.isPc.matches) {
                this.gsapAnime();
            } else {
                return
            }
        },
        scrolling() {
            const screenScroll = document.documentElement.scrollHeight - window.innerHeight
            const getScroll = document.documentElement.scrollTop
            var schedule = Math.floor(getScroll / screenScroll * 100)
            this.scheduleline = schedule
        },
        reserveSubmit() {
            const rinputs = document.getElementById('reserveFrom').getElementsByTagName('input')
            let inputsFilled = true
            for (let i = 0; i < rinputs.length - 1; i++) {
                if (rinputs[i].value == '') {
                    inputsFilled = false
                    break
                }
            }
            if (this.login) {
                if (inputsFilled) {
                    this.system = '感謝預約'
                } else {
                    this.system = '請完善填寫資料'
                }
            } else {
                this.system = '請先登入'
            }
        },
        //     if (this.login == true   ) {
        //         for (let i = 0; i < rinputs.length-1; i++) {
        //             if (rinputs[i].value !== '') {
        //                 this.system='感謝預約'
        //             } else{
        //                 this.system='請完善填寫資料'
        //             }
        //         }
        //     } else{
        //         this.system='請先登入'
        //     }
        // },
        isLogined() {
            const userLogin = document.getElementById("userLogin")
            userLogin.classList.add('logined')
            this.login = true
        }
    },
    mounted() {
        for (let i = 0; i < this.progress.length; i++) { setInterval(() => this.bartime(i), 20) };
        this.onResize()
        window.addEventListener('scroll', () => {
            this.scrolling()
        })
    }
})
vm.mount('#app')
