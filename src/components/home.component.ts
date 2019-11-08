import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Template from './home.component.html'

declare const Twitch: any

@Template
@Component
export class Home extends Vue {
	// using v-show not v-if
	// v-if condtionally adds or removes the HTML
	// v-show conditionally shows or hides with CSS
	public showTwitch: boolean = false
	public player?: any

	public mounted() {
		const options: object = {
			width: 800,
			height: 450,
			channel: 'themeathon'
			// just change channel to someone to test ofc
		}
		this.player = new Twitch.Player('twitch-player', options)

		this.player.addEventListener(Twitch.Player.READY, () => {
			this.player.setVolume(0.4)
		})
		this.player.addEventListener(Twitch.Player.OFFLINE, () => {
			this.player.setMuted(true)
			this.showTwitch = false
		})
		this.player.addEventListener(Twitch.Player.ONLINE, () => {
			this.player.setMuted(false)
			this.showTwitch = true
		})
	}
}
