declare module 'bootstrap-vue/es/components/*' {
	const content: any
	export default content
}

declare module '*.json' {
	const content: any
	export default content
}

declare module '*.component.html' {
	import Vue, { ComponentOptions } from 'vue'

	interface WithRender {
		<V extends Vue>(options: ComponentOptions<V>): ComponentOptions<V>
		<V extends typeof Vue>(component: V): V
	}

	const withRender: WithRender
	export default withRender
}

declare module '*.html' {
	const content: string
	export default content
}

declare module '*.png' {
	const fileName: string
	export default fileName
}
