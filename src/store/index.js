import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase"
import axios from "axios"
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        donations: [
            {
                id: '1000000',
                title: "Добряши помогают котикам",
                donationText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deserunt est id ipsa iste libero mollitia neque pariatur possimus? Animi, doloribus in incidunt pariatur perferendis quasi voluptas! Ea quam, quidem?',
                author: 'Михаил Павлович',
                goal: "Давайте поможем котятам",
                subTitle: "Помощь нужна каждый день",
                imgPath: "https://cdn.britannica.com/24/212324-050-076731DA/Persian-cat-sleeping.jpg",
                donationAll: 1000,
                donationReal: 875,
                progressTitle: 'В сентябре собрано: '
            },
            {
                id: '222000',
                title: "Добряши помогают котикам",
                donationText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deserunt est id ipsa iste libero mollitia neque pariatur possimus? Animi, doloribus in incidunt pariatur perferendis quasi voluptas! Ea quam, quidem?',
                author: 'Михаил Павлович',
                subTitle: "Помощь нужна каждый день",
                imgPath: "https://cdn.britannica.com/24/212324-050-076731DA/Persian-cat-sleeping.jpg",
                donationAll: 1000,
                donationReal: 875,
                progressTitle: 'В сентябре собрано: '
            }
        ]
    },
    mutations: {
        setDonations(state, donations) {
            donations.forEach((it) => {
                it.data.id = it._id
            })
            state.donations = donations.map(it => it.data)
        },
        addDonation(state, donation) {
            donation.id = state.donations.length
            state.donations.push(donation)
        }
    },
    actions: {
        uploadDonation: async ({ commit }, { image, donation }) => {
            const storage = firebase.storage()

            storage.ref(`web_images/${image.name}`).put(image).then(() => {
                storage.ref(`web_images/${image.name}`).getDownloadURL().then(async function (url) {
                    const donationData = {
                        userId: "1",
                        data: {
                            ...donation,
                            imgPath: url
                        }
                    }
                    console.log(donationData)

                    /*const response = await axios.post('new', donationData)

                    if (response.status === 200) {
                        console.log("Donation uploaded")
                        router.push({ name: "Feed" })
                    }*/
                    commit("addDonation", donationData.data)
                    router.push({ name: "Feed" })
                })
            }).catch(error => {
                console.log(error.message)
            })
        },
        fetchDonations: async ({ commit }) => {
            const response = await axios.get('')

            if (response.status === 200) {
                console.log("Donations fetched")

                const donations = response.data
                commit('setDonations', donations)
            }
        }
    },
    modules: {
    }
})
